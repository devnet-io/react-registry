import * as React from 'react';

import ComponentRegistry from './lib/ComponentRegistry';
import { Arguments, IArguments } from './util/Arguments';
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
     * For usage: {@link https://www.devnet.io/libs/react-registry/doc/#/registering}
     * 
     * @param component the object or function to be registered
     * @param params options, parsed to {@link Arguments}
     */
	public static register(component: any, params?: string | IArguments): void {
		if ((typeof component === 'object' || typeof component === 'function') && (typeof params === 'undefined' ||  typeof params !== 'object' || typeof params !== 'string')) {
			const args: IArguments = Arguments.parseComponentArgs(component, params); 
			
			ComponentRegistry.getInstance().register(component, args.id, args.conditions, args.registry);
		} else {
			Logger.error("arguments.register");	
		}
	}

	/**
     * Retrieves an object or function from the registry using supplied {@link Arguments}
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
     * 
     * @param params options, parsed to {@link Arguments}
     */
	public static get(params: string | IArguments): object | undefined {
		const args: IArguments = Arguments.parseArgs(params);

		return ComponentRegistry.getInstance().get(args.id, args.conditions, args.registry);
	}

	/**
     * Retrieves an object or function from the registry using supplied {@link Arguments} 
     * and creates a React element with it. The item retrieved must be a function.
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
     * 
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
	public static render(params: string | IArguments, props?: object): React.ReactElement<any> | undefined {
		const args: IArguments = Arguments.parseArgs(params);
		const component = ComponentRegistry.getInstance().get(args.id, args.conditions, args.registry);

		if (typeof component === 'function') { // class or function
			return React.createElement(component as React.ComponentClass, props);
		}

		Logger.warn("component.invalid");
	}

	/**
	 * Alias for render()
	 * 
     * Retrieves an object or function from the registry using supplied {@link Arguments} 
     * and creates a React element with it. The item retrieved must be a function.
     * 
     * For usage: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
     * 
     * @param params options, parsed to {@link Arguments}
     * @param props properties for the React component
     */
	public static createElement(params: string | IArguments, props?: object): React.ReactElement<any> | undefined {
		return Registry.render(params, props);
	}
}
