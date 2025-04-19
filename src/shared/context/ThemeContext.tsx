import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as Theme | null;
		const root = window.document.documentElement;

		if (storedTheme === 'dark') {
			root.classList.add('dark');
			setTheme('dark');
		} else {
			root.classList.remove('dark');
			setTheme('light');
		}
	}, []);

	const toggleTheme = () => {
		const root = window.document.documentElement;
		const newTheme = theme === 'light' ? 'dark' : 'light';

		if (newTheme === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}

		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme precisa ser usado dentro do ThemeProvider');
	}
	return context;
};
