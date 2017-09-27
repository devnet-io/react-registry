/**
 * Represents a component in the registry
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */

export default class ComponentEntry {
	public component: object;
	public conditions: object | undefined;

	constructor(component: object, conditions?: object) {
		this.component = component;
		this.conditions = conditions;
	}
}
