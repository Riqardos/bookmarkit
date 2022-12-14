import React from 'react';

import { useTranslation } from '../hooks/useTranslation';

const NotFound = () => {
	const t = useTranslation();
	return <span>{t('notFound')}</span>;
};

export default NotFound;
