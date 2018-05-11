import Logger from './Logger';

/**
 * Parses and validates the common arguments object passed to {@link Provider} and {@link ProviderComponent}
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs/#/providers}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */

export interface IProviderArguments {
 	conditions?: object;
	registry?: string;
}

export class ProviderArguments implements IProviderArguments {

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

		return new ProviderArguments();
	}

	public conditions?: object;
	public registry?: string;

	constructor(conditions?: object, name?: string) {
		this.conditions = conditions;
		this.registry = name;
	}

	public isValid(): boolean {
		return ProviderArguments.isValid(this);
	}
}
