import Registry from './Registry';
export default interface IComponentRegistry {
    getRegistry(target: string): Registry;
    register(component: object, key: string, conditions?: object, target?: string): void;
    get(key: string, conditions?: object, target?: string): object | undefined;
}
