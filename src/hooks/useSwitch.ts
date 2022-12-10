import { ChangeEvent, useState } from 'react';

type props = {
	id: string;
	value: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const useSwitch = (id: string): [boolean, props] => {
	const [enabled, setEnabled] = useState<boolean>(false);

	return [
		enabled,
		{
			id,
			value: enabled,
			onChange: () => setEnabled(p => !p)
		}
	];
};
