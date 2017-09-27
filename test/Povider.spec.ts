import Provider from '../src/Provider';
import Registry from '../src/Registry';

describe("RegistryProvider", () => {
	it("no arguments throws error", () => {
		const spy = jest.spyOn(global.console, 'error');
		
		const provider = new Provider({});
		
		expect(spy).toHaveBeenCalledTimes(1);
	});

	it("invalid arguments throws error", () => {
		const spy = jest.spyOn(global.console, 'error');

		const provider = new Provider({});
		
		expect(spy).toHaveBeenCalledTimes(2);
	});

	it("registered (by id) with condition and fetched (by id) with condition identical using multiple registries", () => {
		
		const testComponent1: object = { foo: "bar" };
		const testComponent2: object = { alpha: "omega" };
		const testComponent3: object = { beta: "gama" };

		Registry.register(testComponent1, "test7id"); // default registry
		Registry.register(testComponent2, {id: "test7id", conditions: {arg1: "value1"}}); // default registry with condition {arg1: "value1"}
		Registry.register(testComponent2, {id: "test7id", registry: "test"}); // registry named "test"
		Registry.register(testComponent1, {id: "test7id", conditions: {arg2: "value2"}, registry: "test"}); // registry named "test" with condition {arg1: "value1"}
		Registry.register(testComponent1, {id: "test8id", conditions: {arg2: "value2"}, registry: "test"});

		let provider = new Provider({registry: "test"}); //provider with registry

		expect(provider.get("test7id")).toBe(testComponent2);
		expect(provider.get("test7id")).not.toBe(testComponent1);

		provider = new Provider({registry: "test", conditions: {arg2: "value2"}}); //provider with named registry and conditions
		
		expect(provider.get("test7id")).toBe(testComponent1);
		expect(provider.get("test7id")).not.toBe(testComponent2);
	});
});
