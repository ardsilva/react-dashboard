import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../../../services/authService';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';

const schema = z.object({
	email: z.string().email('email_invalid'),
	password: z.string().min(6, 'password_too_short'),
});

type FormData = z.infer<typeof schema>;

const Login = () => {
	const { login } = useAuth();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = async (data: FormData) => {
		setError('');
		setLoading(true);

		try {
			const result = await loginUser(data);
			toast.success(t`Acesso autorizado ✅`);
			login(result.token);
		} catch (err) {
			toast.error(t`Usuário ou senha incorretos`);
			setError(t`Usuário ou senha incorretos`);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-700 text-white px-4">
			<div className="bg-white text-gray-900 rounded shadow-lg p-8 w-full max-w-sm">
				<h1 className="text-2xl font-bold mb-6 text-center">
					<Trans>Acesso ao Painel</Trans>
				</h1>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<div>
						<label className="block text-sm font-medium mb-1">
							<Trans>E-mail</Trans>
						</label>
						<input
							{...register('email')}
							type="email"
							placeholder="admin@example.com"
							className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
						/>
						{errors.email?.message === 'email_invalid' && (
							<p className="text-red-500 text-sm">
								<Trans>E-mail inválido</Trans>
							</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium mb-1">
							<Trans>Senha</Trans>
						</label>
						<input
							{...register('password')}
							type="password"
							placeholder="******"
							className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white"
						/>
						{errors.password?.message === 'password_too_short' && (
							<p className="text-red-500 text-sm">
								<Trans>A senha deve ter pelo menos 6 caracteres</Trans>
							</p>
						)}
					</div>

					{error && <p className="text-red-600 font-medium">{error}</p>}

					<button
						type="submit"
						disabled={loading}
						className={`w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${
							loading ? 'opacity-50 cursor-not-allowed' : ''
						}`}
					>
						{loading ? t`Entrando...` : t`Entrar`}
					</button>
				</form>
			</div>

			<p className="text-sm mt-6 opacity-60">
				<Trans>Use admin@example.com / 123456</Trans>
			</p>
		</div>
	);
};

export default Login;
