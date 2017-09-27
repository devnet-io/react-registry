import IComponentRegistry from './IComponentRegistry';
import Registry from './Registry';
export default class ComponentRegistry implements IComponentRegistry {
    static DEFAULT_TARGET: string;
    static getInstance(): ComponentRegistry;
    private static instance;
    private registries;
    private constructor();
    getRegistry(target?: string): Registry;
    register(component: object, key: string, conditions?: object, target?: string): void;
    get(key: string, conditions?: object, target?: string): object | undefined;
}
