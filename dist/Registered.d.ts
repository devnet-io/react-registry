/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
export default class Registered extends React.Component<any, any> {
    static contextTypes: {
        registryProviderArgs: PropTypes.Requireable<any>;
    };
    constructor(props: any);
    render(): JSX.Element;
}
