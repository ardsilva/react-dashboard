import { useAuth } from '../../features/auth/context/AuthContext';
import ThemeToggle from '../common/ThemeToggle';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { Trans } from '@lingui/react/macro';

const Header = () => {
	const { user, logout } = useAuth();

	return (
		<header className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow">
			<div className="text-lg font-semibold">
				<Trans>📦 react-painel</Trans>
			</div>

			<div className="flex items-center gap-5">
				<ThemeToggle />

				<LanguageSwitcher />

				<div className="font-medium hidden sm:block truncate max-w-[150px]">
					👤 {user}
				</div>

				<button
					onClick={logout}
					className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
				>
					<Trans>Sair</Trans>
				</button>
			</div>
		</header>
	);
};

export default Header;
