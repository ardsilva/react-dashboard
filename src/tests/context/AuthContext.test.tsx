import { render, screen } from '@testing-library/react';
import { useAuth, AuthProvider } from '../../features/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Token JWT com payload: { userName: "Usuário mock" }
const MOCK_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlVzdWFyaW8gbW9jayJ9.HLoWdb8qqsQPt3KQg6c3zFs_sHzpdPLhCrAdHKTCO3k';

function DummyConsumer() {
	const { user, login } = useAuth();
	return (
		<>
			<p>Usuário: {user}</p>
			<button onClick={() => login(MOCK_TOKEN)}>Fazer login</button>
		</>
	);
}

describe('AuthContext', () => {
	it('atualiza o usuário após login', async () => {
		render(
			<MemoryRouter>
				<AuthProvider>
					<DummyConsumer />
				</AuthProvider>
			</MemoryRouter>
		);

		expect(screen.getByText(/usuário:/i)).toHaveTextContent('Usuário:');

		const user = userEvent.setup();
		await user.click(screen.getByRole('button'));

		expect(screen.getByText(/usuário:/i)).toHaveTextContent(
			'Usuário: Usuario mock'
		);
	});
});
