export default class Registry {
    static register(component: object, params: string | object): void;
    static get(params: string | object): object | undefined;
    static render(params: string | object, props?: object): object | undefined;
}
