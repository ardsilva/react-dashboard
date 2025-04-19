export interface Account {
	id: number;
	name: string;
	email: string;
}

export const getAccounts = async (): Promise<Account[]> => {
	const response = await fetch('/api/accounts.json');
	if (!response.ok) {
		throw new Error('Erro ao buscar contas');
	}
	return response.json();
};
