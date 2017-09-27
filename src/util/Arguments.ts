import Logger from './Logger';

/**
 * Parses and validates the common arguments object passed to many react-registry classes
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */
export default class Arguments {

	public static isValid(args: any): boolean {
		return typeof args === 'string' || (typeof args === 'object' && (
			(typeof args.id === 'string' && typeof args.conditions === 'undefined' && typeof args.registry === 'undefined') ||
			(typeof args.id === 'string' && typeof args.conditions === 'object' && typeof args.registry === 'undefined') ||
			(typeof args.id === 'string' && typeof args.conditions === 'undefined' && typeof args.registry === 'string') ||
			(typeof args.id === 'string' && typeof args.conditions === 'object' && typeof args.registry === 'string')
		));
	}

	public static parseArgs(params: any): Arguments {
		if (!Arguments.isValid(params)) {
			Logger.throw("arguments.common"); // id is essential, throw error instead of logging it
		}

		if (typeof params === 'string') { // id from string
			return new Arguments(params);
		}

		return new Arguments(params.id, params.conditions, params.registry);
	}

	public id: string;
	public conditions: object | undefined;
	public registry: string | undefined;

	constructor(id: string, conditions?: object, registry?: string) {
		this.id = id;
		this.conditions = conditions;
		this.registry = registry;
	}

	public isValid(): boolean {
		return Arguments.isValid(this);
	}
}
