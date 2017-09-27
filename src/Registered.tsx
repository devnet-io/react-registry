import * as PropTypes from 'prop-types';
import * as React from 'react';

import Provider from './Provider';
import Registry from './Registry';
import Arguments from './util/Arguments';
import ProviderArguments from './util/ProviderArguments';

/**
 * React component for retrieving other components form the registry
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */

export interface IRegisteredProps {
	id: string;
	conditions?: object;
	registry?: string;
}

export default class Registered extends React.Component<IRegisteredProps, any> {
	public static propTypes = {
		id: PropTypes.string.isRequired,
		conditions: PropTypes.object,
		registry: PropTypes.string
	};

	public static contextTypes = {
		registryProviderArgs: PropTypes.object
	};

	constructor(props: IRegisteredProps) {
		super(props);
	}

	public render() {
		let args: Arguments = Arguments.parseArgs({ ...this.props });

		/** Determine if a {@link ProviderComponent} is present */
		if (this.context.registryProviderArgs) {

			// Supplement supplied arguments with those from the provider
			const providerArgs: ProviderArguments = ProviderArguments.parseArgs(this.context.registryProviderArgs);
			args = Provider.getArgs(providerArgs, args);
		}

		return (
			<div>
				{Registry.render(args, { ...this.props })}
			</div>
		);
	}
}
