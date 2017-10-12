export default class Registry {
    static register(component: any, params: string | object): void;
    static get(params: string | object): object | undefined;
    static render(params: string | object, props?: object): object | undefined;
}
