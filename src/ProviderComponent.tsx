import * as PropTypes from 'prop-types';
import * as React from 'react';

import ProviderArguments from './util/ProviderArguments';

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

	public static childContextTypes = {
		registryProviderArgs: PropTypes.object
	};

	constructor(props: IProviderProps) {
		super(props);
	}

	public getChildContext() {
		return { registryProviderArgs: ProviderArguments.parseArgs({ conditions: this.props.conditions, registry: this.props.registry }) };
	}

	public render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
