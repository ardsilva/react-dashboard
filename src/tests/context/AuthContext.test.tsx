import { render, screen } from '@testing-library/react';
import { useAuth, AuthProvider } from '../../features/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

function DummyConsumer() {
	const { user, login } = useAuth();
	return (
		<>
			<p>Usuário: {user}</p>
			<button onClick={() => login('fake-token')}>Fazer login</button>
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

		expect(screen.getByText(/usuário/i)).toHaveTextContent('Usuário:');

		const user = userEvent.setup();
		await user.click(screen.getByRole('button'));

		expect(screen.getByText(/usuário/i)).toHaveTextContent('Usuário mock');
	});
});
