/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ProviderArguments } from './util/ProviderArguments';
export interface IProviderProps {
    conditions?: object;
    registry?: string;
}
export default class ProviderComponent extends React.Component<IProviderProps, any> {
    static propTypes: {
        conditions: PropTypes.Requireable<any>;
        registry: PropTypes.Requireable<any>;
    };
    static contextTypes: {
        registryProviderArgs: PropTypes.Requireable<any>;
    };
    static childContextTypes: {
        registryProviderArgs: PropTypes.Requireable<any>;
    };
    constructor(props: IProviderProps);
    getChildContext(): {
        registryProviderArgs: ProviderArguments;
    };
    render(): React.ReactElement<any>;
}
