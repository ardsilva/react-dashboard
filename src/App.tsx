import { useEffect, useState } from 'react';
import { I18nProvider, i18n, loadCatalog } from './i18n';
import { AppRouter } from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import { ThemeProvider } from './shared/context/ThemeContext';

function App() {
	const [localeReady, setLocaleReady] = useState(false);

	useEffect(() => {
		const locale = localStorage.getItem('lang') || 'pt';
		loadCatalog(locale).then(() => {
			setLocaleReady(true);
		});
	}, []);

	if (!localeReady) return null; // ou um loader

	return (
		<BrowserRouter>
			<AuthProvider>
				<ThemeProvider>
					<I18nProvider i18n={i18n}>
						<AppRouter />
					</I18nProvider>
				</ThemeProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
