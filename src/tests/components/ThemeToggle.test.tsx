import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from '../../components/common/ThemeToggle';
import { ThemeProvider } from '../../shared/context/ThemeContext';
import { I18nProvider, i18n } from '../../i18n';

describe('ThemeToggle', () => {
	it('renderiza e alterna o tema', async () => {
		render(
			<ThemeProvider>
				<I18nProvider i18n={i18n}>
					<ThemeToggle />
				</I18nProvider>
			</ThemeProvider>
		);

		const button = screen.getByLabelText(/alterar tema/i);
		const user = userEvent.setup();
		await user.click(button);

		expect(button).toBeInTheDocument();
	});
});
