import { get } from 'lodash';

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
		const message: string = get(dictionary, key, "Invalid error key");
		return "react-registry - " + message;
	}

	public static throw(key: string): void {
		throw Error(Logger.getMessage(key));
	}

	public static error(key: string): void {
		const message: string = "Error: " + Logger.getMessage(key);

		if(message && window.console) {
			console.error(message);
		}
	}

	public static warn(key: string): void {
		// Only show warnings when not in production mode
		if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
			const message: string = "Warning: " + Logger.getMessage(key);
			
			if(message && window.console) {
				console.warn(message);
			}
		}
	}
}
