import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
	user: string | null;
	token: string | null;
	login: (token: string) => void;
	logout: () => void;
}

interface TokenPayload {
	userName: string;
	email: string;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const [token, setToken] = useState<string | null>(null);
	const [user, setUser] = useState<string | null>(null);

	useEffect(() => {
		const savedToken = localStorage.getItem('token');
		if (savedToken) {
			setToken(savedToken);
			const decoded = jwtDecode<TokenPayload>(savedToken);
			setUser(decoded.userName || 'Usuário');
		}
	}, []);

	const login = (token: string) => {
		localStorage.setItem('token', token);
		setToken(token);

		const decoded = jwtDecode<TokenPayload>(token);
		setUser(decoded.userName || 'Usuário');
		navigate('/dashboard');
	};

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		setUser(null);
		navigate('/login');
	};

	return (
		<AuthContext.Provider value={{ token, user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
