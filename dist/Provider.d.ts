import { IArguments } from './util/Arguments';
import { IProviderArguments } from './util/ProviderArguments';
export default class Provider {
    static getArgs(provider: IProviderArguments, local: IArguments): IArguments;
    private arguments;
    constructor(params: IProviderArguments);
    get(params: string | IArguments): object | undefined;
    render(params: string | IArguments, props?: object): object | undefined;
    createElement(params: string | IArguments, props?: object): object | undefined;
}
