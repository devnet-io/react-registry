export default class ProviderArguments {
    static isValid(args: any): boolean;
    static parseArgs(arg1: any): ProviderArguments;
    conditions: object | undefined;
    registry: string | undefined;
    constructor(conditions?: object, name?: string);
    isValid(): boolean;
}
