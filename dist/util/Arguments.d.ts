export default class Arguments {
    static isValid(args: any): boolean;
    static parseArgs(params: any, thow?: boolean): Arguments;
    static parseComponentArgs(component: any, params: string | object): Arguments;
    id: string;
    conditions: object | undefined;
    registry: string | undefined;
    constructor(id: string, conditions?: object, registry?: string);
    isValid(): boolean;
}
