import { Trans } from '@lingui/react/macro';
import { User } from '../types/User';
import UserRow from './UserRow';

interface Props {
	users: User[];
	onDelete: (id: number) => void;
	onEdit: (user: User) => void;
	sortField: 'id' | 'name';
	sortAsc: boolean;
	onSort: (field: 'id' | 'name') => void;
}

const UserTable = ({
	users,
	onDelete,
	onEdit,
	sortAsc,
	onSort,
	sortField,
}: Props) => {
	return (
		<table className="w-full text-left bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
			<thead>
				<tr className="bg-gray-100 dark:bg-gray-700">
					<th
						onClick={() => onSort('id')}
						className="px-4 py-2 cursor-pointer select-none"
					>
						ID {sortField === 'id' ? (sortAsc ? '▲' : '▼') : ''}
					</th>
					<th
						onClick={() => onSort('name')}
						className="px-4 py-2 cursor-pointer select-none"
					>
						<Trans>Nome</Trans>{' '}
						{sortField === 'name' ? (sortAsc ? '▲' : '▼') : ''}
					</th>
					<th className="px-4 py-2">
						<Trans>E-mail</Trans>
					</th>
					<th className="px-4 py-2 text-right">
						<Trans>Ações</Trans>
					</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<UserRow
						key={user.id}
						user={user}
						onDelete={onDelete}
						onEdit={onEdit}
					/>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
