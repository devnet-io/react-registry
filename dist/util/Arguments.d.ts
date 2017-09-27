export default class Arguments {
    static isValid(args: any): boolean;
    static parseArgs(params: any): Arguments;
    id: string;
    conditions: object | undefined;
    registry: string | undefined;
    constructor(id: string, conditions?: object, registry?: string);
    isValid(): boolean;
}
