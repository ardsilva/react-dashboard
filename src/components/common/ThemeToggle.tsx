import { t } from '@lingui/core/macro';
import { useTheme } from '../../shared/context/ThemeContext';

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === 'dark';

	return (
		<div className="relative group">
			<button
				onClick={toggleTheme}
				aria-label="Alterar tema"
				className="w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors"
			>
				<span className="absolute left-1 text-yellow-500 text-sm pointer-events-none select-none">
					☀️
				</span>

				<span className="absolute right-1 text-white text-sm pointer-events-none select-none">
					🌙
				</span>

				<span
					className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform flex items-center justify-center ${
						isDark ? 'translate-x-8' : 'translate-x-0'
					}`}
				>
					{isDark ? '🌙' : '☀️'}
				</span>
			</button>

			<div className="absolute -bottom-9 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition pointer-events-none z-20 whitespace-nowrap">
				{t`Seletor de tema`}
			</div>
		</div>
	);
};

export default ThemeToggle;
