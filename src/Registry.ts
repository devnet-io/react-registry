import * as React from 'react';

import ComponentRegistry from './lib/ComponentRegistry';
import Arguments from './util/Arguments';
import Logger from './util/Logger';

/**
 * Main class for interacting with the react-registry package.
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */

export default class Registry {

	/**
     * Validates and registers an object or function using supplied {@link Arguments}
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#register}
     * 
     * @param component the object or function to be registered
     * @param params options, parsed to {@link Arguments}
     */
	public static register(component: object, params: string | object): void {
		if ((typeof component !== 'object' && typeof component !== 'function') || (typeof params !== 'object' && typeof params !== 'string')) {
			Logger.error("arguments.register");
		} else {
			const args: Arguments = Arguments.parseArgs(params);

			ComponentRegistry.getInstance().register(component, args.id, args.conditions, args.registry);
		}
	}

	/**
     * Retrieves an object or function from the registry using supplied {@link Arguments}
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#retrieve}
     * 
     * @param params options, parsed to {@link Arguments}
     */
	public static get(params: string | object): object | undefined {
		const args: Arguments = Arguments.parseArgs(params);

		return ComponentRegistry.getInstance().get(args.id, args.conditions, args.registry);
	}

	/**
     * Retrieves an object or function from the registry using supplied {@link Arguments} 
     * and creates a React element with it. The item retrieved must be a function.
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs#render}
     * 
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
	public static render(params: string | object, props?: object): object | undefined {
		const args: Arguments = Arguments.parseArgs(params);
		const component = ComponentRegistry.getInstance().get(args.id, args.conditions, args.registry);

		if (typeof component === 'function') { // class or function
			return React.createElement(component as React.ComponentClass, props);
		}

		Logger.warn("component.invalid");
	}
}
