import '@testing-library/jest-dom';
import { i18n } from '../i18n';

// Corrigir types do vitest
beforeAll(() => {
	i18n.load('pt', {}); // Usa objeto vazio simples aqui
	i18n.activate('pt');
});
