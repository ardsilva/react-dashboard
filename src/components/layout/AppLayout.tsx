import { ReactNode } from 'react';
import Header from './Header';

interface Props {
	children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			<Header />

			<main className="p-6 text-gray-900 dark:text-white">{children}</main>
		</div>
	);
};

export default AppLayout;
