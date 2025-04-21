import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../shared/context/ThemeContext';
import { I18nProvider, i18n } from '../../i18n';
import Dashboard from '../../features/dashboard/pages/Dashboard';
import { vi } from 'vitest';

// Simula dados mockados da API
const mockAccounts = [
	{
		id: 1,
		name: 'João Silva',
		email: 'joao@example.com',
	},
	{
		id: 2,
		name: 'Maria Oliveira',
		email: 'maria@example.com',
	},
];

// Mock do serviço
vi.mock('../../services/accountService', () => ({
	getAccounts: () => Promise.resolve(mockAccounts),
}));

beforeAll(() => {
	i18n.load('pt', {});
	i18n.activate('pt');
});

const renderDashboard = () =>
	render(
		<MemoryRouter>
			<ThemeProvider>
				<I18nProvider i18n={i18n}>
					<Dashboard />
				</I18nProvider>
			</ThemeProvider>
		</MemoryRouter>
	);

describe('Dashboard', () => {
	it('renderiza usuários da API mockada', async () => {
		renderDashboard();

		await waitFor(() => {
			expect(screen.getByText(/João Silva/)).toBeInTheDocument();
			expect(screen.getByText(/Maria Oliveira/)).toBeInTheDocument();
		});
	});
});
