import { useEffect, useState } from 'react';
import { User } from '../types/User';
import UserTable from '../components/UserTable';
import UserSkeleton from '../components/UserSkeleton';
import AppLayout from '../../../components/layout/AppLayout';
import UserForm from '../components/UserForm';
import toast from 'react-hot-toast';
import { getAccounts } from '../../../services/accountService';
import { t } from '@lingui/core/macro';
import { Trans } from '@lingui/react/macro';

const Dashboard = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [editingUser, setEditingUser] = useState<User | null>(null);
	const [sortField, setSortField] = useState<'id' | 'name'>('id');
	const [sortAsc, setSortAsc] = useState(true);

	const sortedUsers = [...users].sort((a, b) => {
		const aField = a[sortField];
		const bField = b[sortField];

		if (aField < bField) return sortAsc ? -1 : 1;
		if (aField > bField) return sortAsc ? 1 : -1;
		return 0;
	});

	const handleSort = (field: 'id' | 'name') => {
		if (sortField === field) {
			setSortAsc((prev) => !prev);
		} else {
			setSortField(field);
			setSortAsc(true);
		}
	};

	useEffect(() => {
		getAccounts()
			.then(setUsers)
			.catch((err) => {
				console.error('Erro ao carregar contas:', err);
			})
			.finally(() => setLoading(false));
	}, []);

	const handleAddUser = (data: Omit<User, 'id'>) => {
		const newUser: User = {
			id: users.length + 1,
			...data,
		};
		setUsers((prev) => [...prev, newUser]);
		toast.success(t`Usuário adicionado!`);
	};

	const handleDeleteUser = (id: number) => {
		setUsers((prev) => prev.filter((user) => user.id !== id));
		toast.success(t`Usuário removido com sucesso!`);
	};

	const handleUpdateUser = (data: Omit<User, 'id'>) => {
		if (!editingUser) return;
		setUsers((prev) =>
			prev.map((user) =>
				user.id === editingUser.id ? { ...user, ...data } : user
			)
		);
		setEditingUser(null);
		toast.success(t`Usuário atualizado!`);
	};

	const handleEdit = (user: User) => {
		setEditingUser(user);
	};

	return (
		<AppLayout>
			<div className="max-w-4xl mx-auto space-y-6">
				<h1 className="text-2xl font-bold">
					<Trans>Usuários cadastrados</Trans>
				</h1>

				<UserForm
					onAdd={handleAddUser}
					onUpdate={handleUpdateUser}
					defaultValues={editingUser}
				/>

				{loading ? (
					<UserSkeleton />
				) : (
					<UserTable
						users={sortedUsers}
						onDelete={handleDeleteUser}
						onEdit={handleEdit}
						sortField={sortField}
						sortAsc={sortAsc}
						onSort={handleSort}
					/>
				)}
			</div>
		</AppLayout>
	);
};

export default Dashboard;
