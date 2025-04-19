import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

export { i18n, I18nProvider };

export const loadCatalog = async (locale: string) => {
	const messages = await import(`./locales/${locale}.po`);
	i18n.load(locale, messages.messages);
	i18n.activate(locale);
};
