import { t } from '@lingui/core/macro';
import { User } from '../types/User';
import { FiTrash } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';
import { Trans } from '@lingui/react/macro';

interface Props {
	user: User;
	onDelete: (id: number) => void;
	onEdit: (user: User) => void;
}

const UserRow = ({ user, onDelete, onEdit }: Props) => {
	return (
		<tr className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
			<td className="px-4 py-2">{user.id}</td>
			<td className="px-4 py-2">{user.name}</td>
			<td className="px-4 py-2">{user.email}</td>
			<td className="px-4 py-2 text-right space-x-2">
				<button
					onClick={() => onEdit(user)}
					title={t`Editar usuário`}
					className="group relative text-blue-500 hover:text-blue-700"
				>
					<MdEdit size={20} />
					<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition z-10">
						<Trans>Editar</Trans>
					</span>
				</button>

				<button
					onClick={() => onDelete(user.id)}
					title={t`Excluir usuário`}
					className="group relative text-red-500 hover:text-red-700"
				>
					<FiTrash size={18} />
					<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition z-10">
						<Trans>Excluir</Trans>
					</span>
				</button>
			</td>
		</tr>
	);
};

export default UserRow;
