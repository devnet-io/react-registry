import ObjectMap from '../util/ObjectMap';
import IComponentRegistry from './IComponentRegistry';
import Registry from './Registry';

/**
 * Core functionality of the react-registry library. Use through {@link Registry} instead of directly.
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */
export default class ComponentRegistry implements IComponentRegistry {
	public static DEFAULT_TARGET: string = "default";

	public static getInstance() {
		if (!ComponentRegistry.instance) {
			ComponentRegistry.instance = new ComponentRegistry();
		}
		return ComponentRegistry.instance;
	}

	private static instance: ComponentRegistry;
	private registries: ObjectMap;

	private constructor() {
		// Initialize the registries container and default target
		const defaultRegistry: Registry = new Registry();

		this.registries = new ObjectMap();
		this.registries.put(ComponentRegistry.DEFAULT_TARGET, defaultRegistry);
	}

	public getRegistry(target?: string): Registry {
		target = (target) ? target : ComponentRegistry.DEFAULT_TARGET;

		if (this.registries.has(target)) {
			return this.registries.get(target) as Registry;
		}

		const newRegistry: Registry = new Registry();
		this.registries.put(target, newRegistry);

		return newRegistry;
	}

	public register(component: object, key: string, conditions?: object, target?: string): void {
		const registry: Registry = this.getRegistry(target);
		
		registry.register(component, key, conditions);
	}

	public get(key: string, conditions?: object, target?: string): object | undefined {
		const registry = this.getRegistry(target);

		if (registry) {
			return registry.get(key, conditions);
		}

		return undefined;
	}
}
