import React from 'react';

import SelectLanguage from '../components/SelectLanguage';
import { useTranslation } from '../hooks/useTranslation';

const Home = () => {
	const t = useTranslation();
	return (
		<>
			<span>{t('test')}</span>
			<SelectLanguage />
		</>
	);
};

export default Home;
