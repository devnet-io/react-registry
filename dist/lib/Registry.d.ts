import RegistryEntry from './RegistryEntry';
export default class Registry {
    private registry;
    constructor();
    register(component: object, key: string, conditions?: object): void;
    getEntry(key: string): RegistryEntry | undefined;
    get(key: string, conditions?: object): object | undefined;
}
