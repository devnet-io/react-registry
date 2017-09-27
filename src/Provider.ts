import * as React from 'react';

import Registry from './Registry';
import Arguments from './util/Arguments';
import ProviderArguments from './util/ProviderArguments';

/**
 * Main interface of the react-registry package.
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs#provider}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */
export default class RegistryProvider {

	/**
	 * Combines arguments held by the provider and those passes into to {@link get()} and {@link render()}
	 * methods to determine which arguments to send to the {@link Registry}.
	 * 
	 * @param provider provider's options {@link ProviderArguments}
	 * @param local options {@link Arguments}
	 */
	public static getArgs(provider: ProviderArguments, local: Arguments): Arguments {

		// If a provider with conditions is present and there are no local conditions, use the provider's conditions
		if (!local.conditions && provider.conditions) {
			local.conditions = provider.conditions;
		}

		// If a provider with a registry name is present and there is no local registry name, use the provider's registry name
		if (!local.registry && provider.registry) {
			local.registry = provider.registry;
		}

		return local;
	}

	private arguments: ProviderArguments;

	constructor(params: object) {
		this.arguments = ProviderArguments.parseArgs(params);
	}


	/**
     * Retrieves an object or function from the registry using supplied {@link Arguments} 
     * and {@link ProviderArguments} from the provider instance.
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#provider}
     * 
     * @param params options, parsed to {@link Arguments}
     */
	public get(params: string | object): object | undefined {
		const local: Arguments = Arguments.parseArgs(params);
		return Registry.get(RegistryProvider.getArgs(this.arguments, local));
	}

	/**
	 * Retrieves an object or function from the registry using supplied {@link Arguments} 
     * and {@link ProviderArguments} from the provider instance, then creates a 
     * React element with it. The item retrieved must be a function.
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#render}
     * 
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
	public render(params: string | object, props?: object): object | undefined {
		const local: Arguments = Arguments.parseArgs(params);
		return Registry.render(RegistryProvider.getArgs(this.arguments, local), props);
	}
}
