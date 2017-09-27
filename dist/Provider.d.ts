import Arguments from './util/Arguments';
import ProviderArguments from './util/ProviderArguments';
export default class RegistryProvider {
    static getArgs(provider: ProviderArguments, local: Arguments): Arguments;
    private arguments;
    constructor(params: object);
    get(params: string | object): object | undefined;
    render(params: string | object, props?: object): object | undefined;
}
