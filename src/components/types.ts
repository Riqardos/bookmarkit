export type CustomData = {
	url: string;
};

export type NodeModel<T = unknown> = {
	id: number;
	parent: number;
	droppable?: boolean;
	text: string;
	data?: T;
};
