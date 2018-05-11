import * as React from 'react';
import Registry from '../src/Registry';

describe("ReactRegistry", () => {
	it("registered (by id) and fetched (by id) components identical", () => {
		const testComponent: object = { foo: "bar" };

		Registry.register(testComponent, "test1id");

		expect(Registry.get("test1id")).toBe(testComponent);
	});

	it("registered (by id) with conditions and fetched (by id) with conditions components identical", () => {
		const testComponent: object = { foo: "bar"};
		const overrideComponent: object = { foo: "bar", alpha: "omega"};

		Registry.register(testComponent, "test3id");
		Registry.register(overrideComponent, {id: "test3id", conditions: {arg1: "test"}});

		expect(Registry.get({id: "test3id", conditions: {arg1: "test"}})).toBe(overrideComponent);
		expect(Registry.get("test3id")).not.toBe(overrideComponent);

		expect(Registry.get({id: "test3id", conditions: {arg1: "test"}})).not.toBe(testComponent);
		expect(Registry.get("test3id")).toBe(testComponent);
	});

	it("registered (by id) and fetched (by id) components identical using multiple registries", () => {
		const testComponent1: object = { foo: "bar" };
		const testComponent2: object = { alpha: "omega" };

		Registry.register(testComponent1, "test6Id"); // default registry
		Registry.register(testComponent2, {id: "test6Id", registry: "test"}); // registry named "test"

		expect(Registry.get("test6Id")).toBe(testComponent1);
		expect(Registry.get("test6Id")).not.toBe(testComponent2);

		expect(Registry.get({id: "test6Id", registry: "test"})).not.toBe(testComponent1);
		expect(Registry.get({id: "test6Id", registry: "test"})).toBe(testComponent2);
	});

	it("registered (by id) with condition and fetched (by id) with condition identical using multiple registries", () => {

		const testComponent1: object = { foo: "bar" };
		const testComponent2: object = { alpha: "omega" };

		Registry.register(testComponent1, "test7id"); // default registry
		Registry.register(testComponent2, {id: "test7id", conditions: {arg1: "value1"}}); // default registry with condition {arg1: "value1"}
		Registry.register(testComponent2, {id: "test7id", registry: "test"}); // registry named "test"
		Registry.register(testComponent1, {id: "test7id", conditions: {arg2: "value2"}, registry: "test"}); // registry named "test" with condition {arg1: "value1"}

		
		expect(Registry.get("test7id")).toBe(testComponent1);
		expect(Registry.get("test7id")).not.toBe(testComponent2);

		expect(Registry.get({id: "test7id", registry: "test"})).not.toBe(testComponent1);
		expect(Registry.get({id: "test7id", registry: "test"})).toBe(testComponent2);

		expect(Registry.get({id: "test7id", conditions: {arg1: "value1"}})).toBe(testComponent2);
		expect(Registry.get({id: "test7id", conditions: {arg1: "value1"}})).not.toBe(testComponent1);

		expect(Registry.get({id: "test7id", conditions: {arg2: "value2"}, registry: "test"})).not.toBe(testComponent2);
		expect(Registry.get({id: "test7id", conditions: {arg2: "value2"}, registry: "test"})).toBe(testComponent1);
	});
	
	it("registering multiple components (by id) and fetched (by id) are correspondingly identical", () => {
		const testComponent1: object = { a: "a" };
		const testComponent2: object = { b: "b" };
		const testComponent3: object = { c: "c" };

		Registry.register(testComponent1, "test8id1");
		Registry.register(testComponent2, "test8id2");
		Registry.register(testComponent3, "test8id3");

		expect(Registry.get("test8id1")).toBe(testComponent1);
		expect(Registry.get("test8id2")).toBe(testComponent2);
		expect(Registry.get("test8id3")).toBe(testComponent3);
	});

	
	it("Rendering an incorrect type of entry returns undefined", () => {
		const testComponent: object = { a: "a" };

		Registry.register(testComponent, "test9id");

		expect(Registry.render("test9id")).toBe(undefined);
	});

	it("registered (by id) and rendered (by id) components matching", () => {
		
		interface ITestProps {
			title: string;
		}

		const testComponent: React.SFC<ITestProps> = (props) => {
			return (<div>{this.props.title}</div>);
		};

		Registry.register(testComponent, "test10id");

		expect(Registry.render("test10id")).toEqual(React.createElement(testComponent));
	});

	it("Creating an incorrect type of entry returns undefined", () => {
		const testComponent: object = { a: "a" };

		Registry.register(testComponent, "test11id");

		expect(Registry.render("test11id")).toBe(undefined);
	});

	it("registered (by id) and rendered (by id) components matching", () => {
		
		interface ITestProps {
			title: string;
		}

		const testComponent: React.SFC<ITestProps> = (props) => {
			return (<div>{this.props.title}</div>);
		};

		Registry.register(testComponent, "test12id");

		expect(Registry.render("test12id")).toEqual(React.createElement(testComponent));
	});

	it("registering a component with the same id and no conditions produces warnings", () => {
		const spy = jest.spyOn(global.console, 'warn');
		
		const testComponent: object = { a: "a" };
		
		Registry.register(testComponent, "test13id");
		Registry.register(testComponent, "test13id");
		
		expect(spy).toHaveBeenCalledTimes(1);
	});
});
