import ComponentRegistry from '../src/lib/ComponentRegistry';

describe("ComponentRegistry", () => {
	it("getInstance() returns same object", () => {
		expect(ComponentRegistry.getInstance()).toBe(ComponentRegistry.getInstance());
	});

	it("registered (by id) and fetched (by id) components identical", () => {
		const registry = ComponentRegistry.getInstance();

		const testComponent: object = { foo: "bar" };

		registry.register(testComponent, "test1id");

		expect(registry.get("test1id")).toBe(testComponent);
	});

	it("registered (by id) with conditions and fetched (by id) with equal conditions components identical", () => {
		const registry = ComponentRegistry.getInstance();

		const testComponent: object = { foo: "bar"};
		const overrideComponent: object = { foo: "bar", alpha: "omega"};

		registry.register(testComponent, "test3id");
		registry.register(overrideComponent, "test3id", {arg1: "test"});

		expect(registry.get("test3id", {arg1: "test"})).toBe(overrideComponent);
		expect(registry.get("test3id")).not.toBe(overrideComponent);

		expect(registry.get("test3id", {arg1: "test"})).not.toBe(testComponent);
		expect(registry.get("test3id")).toBe(testComponent);
	});

	it("registered (by id) with conditions and fetched (by id) with superset of conditions components identical", () => {
		const registry = ComponentRegistry.getInstance();

		const testComponent: object = { foo: "bar"};
		const overrideComponent: object = { foo: "bar", alpha: "omega"};

		registry.register(testComponent, "test11id");
		registry.register(overrideComponent, "test11id", {arg1: "test"});

		expect(registry.get("test11id", {arg1: "test", arg2: "omega"})).toBe(overrideComponent);
		expect(registry.get("test11id")).not.toBe(overrideComponent);

		expect(registry.get("test11id", {arg1: "test", arg2: "omega"})).not.toBe(testComponent);
		expect(registry.get("test11id")).toBe(testComponent);
	});

	it("calling getRegistry() with not existent registry names creates registry", () => {
		const registry = ComponentRegistry.getInstance();
		
		expect(registry.getRegistry("newRegistry")).not.toBeUndefined();
	});

	it("registering component (by id) to non existent registry creates registry", () => {
		const registry = ComponentRegistry.getInstance();

		const testComponent: object = { foo: "bar" };

		registry.register(testComponent, "test4Id", undefined, "newRegistry");

		expect(registry.getRegistry("newRegistry")).not.toBeUndefined();
		expect(registry.get("test4Id", undefined, "newRegistry")).toBe(testComponent);
	});

	it("retrieving component (by id) from non existent registry creates registry", () => {
		const registry = ComponentRegistry.getInstance();
		
		expect(registry.get("test5Id", undefined, "newRegistry")).toBeUndefined();

		expect(registry.getRegistry("newRegistry")).not.toBeUndefined();
	});

	it("registered (by id) and fetched (by id) components identical using multiple registries", () => {
		const registry = ComponentRegistry.getInstance();

		const testComponent1: object = { foo: "bar" };
		const testComponent2: object = { alpha: "omega" };

		registry.register(testComponent1, "test6Id"); // default registry
		registry.register(testComponent2, "test6Id", undefined, "test"); // registry named "test"

		expect(registry.get("test6Id")).toBe(testComponent1);
		expect(registry.get("test6Id")).not.toBe(testComponent2);

		expect(registry.get("test6Id", undefined, "test")).not.toBe(testComponent1);
		expect(registry.get("test6Id", undefined, "test")).toBe(testComponent2);
	});

	it("registered (by id) with condition and fetched (by id) with condition identical using multiple registries", () => {
		const registry = ComponentRegistry.getInstance();

		const testComponent1: object = { foo: "bar" };
		const testComponent2: object = { alpha: "omega" };

		registry.register(testComponent1, "test7id"); // default registry
		registry.register(testComponent2, "test7id", {arg1: "value1"}); // default registry with condition {arg1: "value1"}
		registry.register(testComponent2, "test7id", undefined, "test"); // registry named "test"
		registry.register(testComponent1, "test7id", {arg2: "value2"}, "test"); // registry named "test" with condition {arg1: "value1"}

		
		expect(registry.get("test7id")).toBe(testComponent1);
		expect(registry.get("test7id")).not.toBe(testComponent2);

		expect(registry.get("test7id", undefined, "test")).not.toBe(testComponent1);
		expect(registry.get("test7id", undefined, "test")).toBe(testComponent2);

		expect(registry.get("test7id", {arg1: "value1"})).toBe(testComponent2);
		expect(registry.get("test7id", {arg1: "value1"})).not.toBe(testComponent1);

		expect(registry.get("test7id", {arg2: "value2"}, "test")).not.toBe(testComponent2);
		expect(registry.get("test7id", {arg2: "value2"}, "test")).toBe(testComponent1);
	});

	
	it("registering multiple components (by id) and fetched (by id) are correspondingly identical", () => {
		const registry = ComponentRegistry.getInstance();

		const testComponent1: object = { a: "a" };
		const testComponent2: object = { b: "b" };
		const testComponent3: object = { c: "c" };

		registry.register(testComponent1, "test8id1");
		registry.register(testComponent2, "test8id2");
		registry.register(testComponent3, "test8id3");

		expect(registry.get("test8id1")).toBe(testComponent1);
		expect(registry.get("test8id2")).toBe(testComponent2);
		expect(registry.get("test8id3")).toBe(testComponent3);
	});

	it("fetched unregistered components does not produce error", () => {
		const registry = ComponentRegistry.getInstance();

		expect(registry.get("test9id1")).toBe(undefined);
		expect(registry.get("test9id2", {arg1: "alpha"})).toBe(undefined);
		expect(registry.get("test9id3", undefined, "test")).toBe(undefined);
		expect(registry.get("test9id3", {arg1:"alpha"}, "test")).toBe(undefined);
	});

	it("failing to register default component does not produce error", () => {
		const registry = ComponentRegistry.getInstance();

		const overrideComponent: object = { foo: "bar", alpha: "omega"};
		registry.register(overrideComponent, "test10id1", {arg1: "test"});

		expect(registry.get("test10id1")).toBe(undefined);
		expect(registry.get("test10id1", {arg1: "test"})).toBe(overrideComponent);
	});
});
