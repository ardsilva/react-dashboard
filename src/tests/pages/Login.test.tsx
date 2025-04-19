import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from '../../features/auth/pages/Login';
import Dashboard from '../../features/dashboard/pages/Dashboard';

import { AuthProvider } from '../../features/auth/context/AuthContext';
import { ThemeProvider } from '../../shared/context/ThemeContext';
import { I18nProvider, i18n } from '../../i18n';

beforeAll(() => {
	i18n.load('pt', { messages: {} });
	i18n.activate('pt');
});

describe('Login Page', () => {
	it('faz login e redireciona', async () => {
		render(
			<MemoryRouter initialEntries={['/login']}>
				<AuthProvider>
					<ThemeProvider>
						<I18nProvider i18n={i18n}>
							<Routes>
								<Route
									path="/login"
									element={<Login />}
								/>
								<Route
									path="/dashboard"
									element={<Dashboard />}
								/>
							</Routes>
						</I18nProvider>
					</ThemeProvider>
				</AuthProvider>
			</MemoryRouter>
		);

		const user = userEvent.setup();
		const btn = screen.getByRole('button', { name: /entrar/i });
		await user.click(btn);

		expect(await screen.findByText(/react-dashboard/i)).toBeInTheDocument();
	});
});
