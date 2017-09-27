import * as lodash from 'lodash';

import dictionary from './dictionary';

/**
 * Handles output of feedback messages
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */

declare var process: any;

export default class Logger {

	public static getMessage(key: string): string {
		const fields: string[] = key.split(".");

		if(dictionary.hasOwnProperty(fields[0])) {
			if(fields.length > 1) {
				return dictionary[fields[0]][Logger.getMessage(fields.splice(0, 1).join("."))];
			} else {
				return dictionary[fields[0]];
			}
		}
	}

	public static throw(key: string): void {
		const message: string = lodash.get(dictionary, key, "Invalid error key");
		throw Error(message);
	}

	public static error(key: string): void {
		const message: string = lodash.get(dictionary, key, "Invalid error key");

		if(message && window.console) {
			console.error(message);
		}
	}

	public static warn(key: string): void {
		// Only show warnings when not in production mode
		if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
			const message: string = "Warning: " + lodash.get(dictionary, key, "Invalid error key");
			
			if(message && window.console) {
				console.warn(message);
			}
		}
	}
}
