import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from '../../features/dashboard/components/UserForm';
import { vi } from 'vitest';
import { I18nProvider, i18n } from '../../i18n';

beforeAll(() => {
	i18n.load('pt', {});
	i18n.activate('pt');
});

describe('UserForm', () => {
	it('envia dados válidos para onAdd', async () => {
		const onAddMock = vi.fn();
		const user = userEvent.setup();

		render(
			<I18nProvider i18n={i18n}>
				<UserForm
					onAdd={onAddMock}
					onUpdate={vi.fn()}
				/>
			</I18nProvider>
		);

		const nameInput = screen.getByLabelText(/nome/i);
		const emailInput = screen.getByLabelText(/e-mail/i);
		const submit = screen.getByRole('button', { name: /adicionar/i });

		await user.type(nameInput, 'Carlos Teste');
		await user.type(emailInput, 'carlos@teste.com');
		await user.click(submit);

		expect(onAddMock).toHaveBeenCalledWith({
			name: 'Carlos Teste',
			email: 'carlos@teste.com',
		});
	});
});
