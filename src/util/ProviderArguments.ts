import Logger from './Logger';

/**
 * Parses and validates the common arguments object passed to {@link Provider} and {@link ProviderComponent}
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs#provider}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */
export default class ProviderArguments {

	public static isValid(args: any): boolean {
		return typeof args === 'object' && (
			(typeof args.conditions === 'object' && typeof args.registry === 'undefined') ||
			(typeof args.conditions === 'undefined' && typeof args.registry === 'string') ||
			(typeof args.conditions === 'object' && typeof args.registry === 'string')
		);
	}

	public static parseArgs(arg1: any): ProviderArguments {
		if(ProviderArguments.isValid(arg1)) {
			return new ProviderArguments(arg1.conditions, arg1.registry);
		}

		Logger.error("arguments.provider"); // Non essential, log error instead of throwing
	}

	public conditions: object | undefined;
	public registry: string | undefined;

	constructor(conditions?: object, name?: string) {
		this.conditions = conditions;
		this.registry = name;
	}

	public isValid(): boolean {
		return ProviderArguments.isValid(this);
	}
}
