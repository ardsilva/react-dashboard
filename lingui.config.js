module.exports = {
	locales: ['pt', 'en'],
	sourceLocale: 'pt',
	catalogs: [
		{
			path: 'src/locales/{locale}',
			include: ['src'],
			format: 'minimal', // ← aqui usamos JSON ao invés de .po
		},
	],
	compileNamespace: 'cjs', // compatível com ESModules
};
