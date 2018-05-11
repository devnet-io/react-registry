/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IArguments } from './util/Arguments';
export default class Registered extends React.Component<IArguments, any> {
    static contextTypes: {
        registryProviderArgs: PropTypes.Requireable<any>;
    };
    constructor(props: any);
    render(): JSX.Element;
}
