import * as PropTypes from 'prop-types';
import * as React from 'react';

import Provider from './Provider';
import Registry from './Registry';
import Arguments from './util/Arguments';
import ProviderArguments from './util/ProviderArguments';

/**
 * React component for retrieving other components form the registry
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs/#/retrieving}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */

// Type of props any to allow passing of many props into the registered component
export default class Registered extends React.Component<any, any> {

	public static contextTypes = {
		registryProviderArgs: PropTypes.object
	};

	constructor(props: any) {
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

		return Registry.render(args, { ...this.props }) as JSX.Element;
	}
}
