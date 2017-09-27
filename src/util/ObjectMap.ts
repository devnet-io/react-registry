/**
 * Wrapper to decouple data structure used in registry
 * For full documentation: {@link https://www.devnet.io/libs/react-registry/docs}
 * 
 * @author Joe Esposito <joe@devnet.io>
 */
export default class ObjectMap {
	private map: any = {};

	public has(key: string): boolean {
		return key in this.map;
	}

	public get(key: string): any {
		return this.map[key];
	}

	public put(key: string, object: any): void {
		this.map[key] = object;
	}
}
