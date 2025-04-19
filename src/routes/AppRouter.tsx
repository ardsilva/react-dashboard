import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../features/auth/pages/Login';
import Dashboard from '../features/dashboard/pages/Dashboard';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Navigate
						to="/login"
						replace
					/>
				}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
};
