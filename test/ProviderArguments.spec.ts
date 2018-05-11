import { ProviderArguments } from '../src/util/ProviderArguments';

describe("ProviderArguments", () => {
	it("parsing undefined and empty arguments throws error", () => {
		const spy = jest.spyOn(global.console, 'error');

		ProviderArguments.parseArgs(undefined);
		ProviderArguments.parseArgs({});

		expect(spy).toHaveBeenCalledTimes(2);
	});

	it("parsing invalid arguments throws error", () => {
		const spy = jest.spyOn(global.console, 'error');

		ProviderArguments.parseArgs(true);
		ProviderArguments.parseArgs(27);
		ProviderArguments.parseArgs("argument");
		ProviderArguments.parseArgs({ foo: "bar" });
		ProviderArguments.parseArgs({ foo: "bar", alpha: "omega" });
		ProviderArguments.parseArgs({ undefined });

		expect(spy).toHaveBeenCalledTimes(8);
	});

	it("valid arguments return correct object", () => {
		let args = ProviderArguments.parseArgs({conditions: {foo: "bar"}}); //only conditions argument

		expect(args.conditions).toEqual({foo: "bar"});
		expect(args.registry).toBeUndefined();

		args = ProviderArguments.parseArgs({registry: "test"}); //only registry name argument
		
		expect(args.conditions).toBeUndefined();
		expect(args.registry).toEqual("test");

		args = ProviderArguments.parseArgs({conditions: {foo: "bar"}, registry: "test"}); //conditions and registry name argument
		
		expect(args.conditions).toEqual({foo: "bar"});
		expect(args.registry).toEqual("test");
	});

	it("existing object validates successfully", () => {
		let args = ProviderArguments.parseArgs({conditions: {foo: "bar"}}); //only conditions argument

		expect(args.isValid()).toEqual(true);

		args = ProviderArguments.parseArgs({registry: "test"}); //only registry name argument
		
		expect(args.isValid()).toEqual(true);

		args = ProviderArguments.parseArgs({conditions: {foo: "bar"}, registry: "test"}); //conditions and registry name argument
		
		expect(args.isValid()).toEqual(true);
	});

});
