import { SimpleChanges } from "@angular/core";

export interface IPrompt {
	promptText: string;
	options: IOptions;
}

export interface IOptions {
	text: string;
	correct?: boolean;
}

export type ComponentChanges<T> = {
	[P in keyof T]?: IComponentChange<T, P>;
} & SimpleChanges;

export interface IComponentChange<T, P extends keyof T> {
	previousValue: T[P];
	currentValue: T[P];
	firstChange: boolean;
	isFirstChange(): boolean;
}