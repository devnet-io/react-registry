import ComponentEntry from './ComponentEntry';
export default class RegistryEntry {
    private components;
    constructor();
    findDefault(): ComponentEntry | undefined;
    getDefault(): object | undefined;
    get(mustMatch: boolean, conditions?: object): object | undefined;
    add(component: object, conditions?: object): void;
}
