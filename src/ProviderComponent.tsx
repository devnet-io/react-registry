import * as lodash from 'lodash';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import { ProviderArguments } from './util/ProviderArguments';

/**
 * React component for passing arguments of a {@link Provider} with context to {@link Registered} components
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs#provider}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */
export interface IProviderProps {
	conditions?: object;
	registry?: string;
}

export default class ProviderComponent extends React.Component<IProviderProps, any> {
	public static propTypes = {
		conditions: PropTypes.object,
		registry: PropTypes.string
	};

	public static contextTypes = {
		registryProviderArgs: PropTypes.object
	};

	public static childContextTypes = {
		registryProviderArgs: PropTypes.object
	};

	constructor(props: IProviderProps) {
		super(props);
	}

	public getChildContext() {
		const args = ProviderArguments.parseArgs({ conditions: this.props.conditions, registry: this.props.registry });

		// Check for inherited arguments
		if (this.context.registryProviderArgs) {
			const ancestorArguments: ProviderArguments = ProviderArguments.parseArgs(this.context.registryProviderArgs);

			// Merge inherited conditions with those provided
			if(typeof args.conditions !== "undefined") {
				ancestorArguments.conditions = lodash.assign(ancestorArguments.conditions, args.conditions);
			}

			// Override inherited registry with provided registry
			if(typeof args.registry !== "undefined") {
				ancestorArguments.registry = args.registry;
			}

			return { registryProviderArgs:  ancestorArguments};

		} else {
			return { registryProviderArgs:  args};
		}
	}

	// Only one child supported, to update when React 16 is move available
	public render() {
		return React.Children.only(this.props.children);
	}
}
