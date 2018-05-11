export interface IProviderArguments {
    conditions?: object;
    registry?: string;
}
export declare class ProviderArguments implements IProviderArguments {
    static isValid(args: any): boolean;
    static parseArgs(arg1: any): ProviderArguments;
    conditions?: object;
    registry?: string;
    constructor(conditions?: object, name?: string);
    isValid(): boolean;
}
