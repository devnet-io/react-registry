/// <reference types="react" />
import * as React from 'react';
import { IArguments } from './util/Arguments';
export default class Registry {
    static register(component: any, params?: string | IArguments): void;
    static get(params: string | IArguments): object | undefined;
    static render(params: string | IArguments, props?: object): React.ReactElement<any> | undefined;
    static createElement(params: string | IArguments, props?: object): React.ReactElement<any> | undefined;
}
