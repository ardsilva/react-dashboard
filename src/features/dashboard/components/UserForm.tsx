import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '../types/User';
import { useEffect } from 'react';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';

const schema = z.object({
	name: z.string().min(2, 'name_invalid'),
	email: z.string().email('email_invalid'),
});

type FormData = z.infer<typeof schema>;

interface Props {
	onAdd: (data: Omit<User, 'id'>) => void;
	onUpdate: (data: Omit<User, 'id'>) => void;
	defaultValues?: User | null;
}

const UserForm = ({ onAdd, onUpdate, defaultValues }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: '',
			email: '',
		},
	});

	useEffect(() => {
		if (defaultValues) {
			reset({
				name: defaultValues.name,
				email: defaultValues.email,
			});
		} else {
			reset({
				name: '',
				email: '',
			});
		}
	}, [defaultValues, reset]);

	const onSubmit = (data: FormData) => {
		if (defaultValues) {
			onUpdate(data);
		} else {
			onAdd(data);
		}
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4 mb-6"
		>
			<h2 className="text-lg font-semibold">
				{defaultValues ? (
					<Trans>✏️ Editar usuário</Trans>
				) : (
					<Trans>➕ Novo usuário</Trans>
				)}
			</h2>

			<div>
				<label className="block text-sm font-medium mb-1">
					<Trans>Nome</Trans>
				</label>
				<input
					type="text"
					{...register('name')}
					className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
				/>
				{errors.name?.message === 'name_invalid' && (
					<p className="text-red-500 text-sm">
						<Trans>Nome inválido</Trans>
					</p>
				)}
			</div>

			<div>
				<label className="block text-sm font-medium mb-1">
					<Trans>E-Mail</Trans>
				</label>
				<input
					type="email"
					{...register('email')}
					className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
				/>
				{errors.email?.message === 'email_invalid' && (
					<p className="text-red-500 text-sm">
						<Trans>E-mail inválido</Trans>
					</p>
				)}
			</div>

			<button
				type="submit"
				className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
			>
				{defaultValues ? (
					<Trans>Salvar alterações</Trans>
				) : (
					<Trans>Adicionar</Trans>
				)}
			</button>
		</form>
	);
};

export default UserForm;
