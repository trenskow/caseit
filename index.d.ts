//
// index.js
// @trenskow/caseit
//
// Created by Kristian Trenskow on 2026/06/25
// For license see LICENSE.
//

export type Supported = 'camel' | 'pascal' | 'snake' | 'domain' | 'kebab' | 'title' | 'http';

export interface ICaseIt {
	(
		input: string,
		type?: Supported
	): string;
	words: (
		input: string
	) => string[];
	detect: (
		input: string
	) => Supported | undefined;
}

declare const caseit: ICaseIt;

export default caseit;
export const supported: Supported[];
