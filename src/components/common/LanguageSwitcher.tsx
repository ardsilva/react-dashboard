import { useEffect, useState } from 'react';
import { i18n } from '../../i18n';
import { t } from '@lingui/core/macro';

const LanguageSwitcher = () => {
	const [lang, setLang] = useState<'pt' | 'en'>('pt');

	useEffect(() => {
		const stored = localStorage.getItem('lang') as 'pt' | 'en' | null;
		setLang(stored || (i18n.locale === 'en' ? 'en' : 'pt'));
	}, []);

	const toggleLanguage = () => {
		const newLang = lang === 'pt' ? 'en' : 'pt';
		localStorage.setItem('lang', newLang);
		setLang(newLang);
		location.reload();
	};

	return (
		<div className="relative group">
			<button
				onClick={toggleLanguage}
				aria-label="Alternar idioma"
				className="w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors"
			>
				<span className="absolute left-1 text-sm">🇧🇷</span>
				<span className="absolute right-1 text-sm">🇺🇸</span>
				<span
					className={`w-6 h-6 rounded-full shadow-md flex items-center justify-center transition-transform bg-white ${
						lang === 'en' ? 'translate-x-8' : 'translate-x-0'
					}`}
				>
					<div className="w-[16px] rounded-sm">
						{lang === 'en' ? (
							<span className="absolute right-1 top-[0.1rem] text-sm">🇺🇸</span>
						) : (
							<span className="absolute left-1 top-[0.1rem] text-sm">🇧🇷</span>
						)}
					</div>
				</span>
			</button>

			<div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow">
				{t`Seletor de idioma`}
			</div>
		</div>
	);
};

export default LanguageSwitcher;
