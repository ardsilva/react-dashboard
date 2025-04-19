interface LoginInput {
	email: string;
	password: string;
}

export const loginUser = async (
	input: LoginInput
): Promise<{ token: string }> => {
	const response = await fetch('/api/login.json');
	const data = await response.json();

	if (input.email === data.email && input.password === data.password) {
		return { token: data.token };
	}

	const err: any = new Error('Usuário ou senha incorretos');
	err.status = 403;
	throw err;
};
