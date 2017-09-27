/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
export interface IRegisteredProps {
    id: string;
    conditions?: object;
    registry?: string;
}
export default class Registered extends React.Component<IRegisteredProps, any> {
    static propTypes: {
        id: PropTypes.Validator<any>;
        conditions: PropTypes.Requireable<any>;
        registry: PropTypes.Requireable<any>;
    };
    static contextTypes: {
        registryProviderArgs: PropTypes.Requireable<any>;
    };
    constructor(props: IRegisteredProps);
    render(): JSX.Element;
}
