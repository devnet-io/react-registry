import Registry from './Registry';

/**
 * Interface for creating component registries
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */
export default interface IComponentRegistry {

	getRegistry(target: string): Registry;

	register(component: object, key: string,  conditions?: object, target?: string): void;

	get(key: string, conditions?: object, target?: string): object | undefined;
}
