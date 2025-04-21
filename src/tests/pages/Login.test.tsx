import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '../../shared/context/ThemeContext';
import { I18nProvider, i18n } from '../../i18n';
import Login from '../../features/auth/pages/Login';
import { vi } from 'vitest';

// Mock do AuthContext
vi.mock('../../features/auth/context/AuthContext', async () => {
	const actual = await vi.importActual(
		'../../features/auth/context/AuthContext'
	);
	return {
		...actual,
		useAuth: () => ({
			login: vi.fn(),
		}),
	};
});

// Mock do loginUser
vi.mock('../../services/authService', () => ({
	loginUser: vi.fn(() => Promise.resolve({ token: 'mocked-token-123' })),
}));

beforeAll(() => {
	i18n.load('pt', {});
	i18n.activate('pt');
});

const renderLogin = () =>
	render(
		<MemoryRouter>
			<ThemeProvider>
				<I18nProvider i18n={i18n}>
					<Login />
				</I18nProvider>
			</ThemeProvider>
		</MemoryRouter>
	);

describe('Login', () => {
	it('realiza login com credenciais válidas', async () => {
		renderLogin();

		const user = userEvent.setup();

		const emailInput = screen.getByLabelText(/e-mail/i);
		const passwordInput = screen.getByLabelText(/senha/i);
		const submitButton = screen.getByRole('button', { name: /Entrar/i });

		await user.type(emailInput, 'admin@example.com');
		await user.type(passwordInput, '123456');
		await user.click(submitButton);

		await waitFor(() => {
			expect(submitButton).toBeEnabled();
		});

		expect(
			screen.queryByText(/Usuário ou senha incorretos/i)
		).not.toBeInTheDocument();
	});
});
