import { Arguments } from '../src/util/Arguments';

describe("Arguments", () => {
	it("parsing undefined and empty arguments logs error", () => {
		expect(() => {
			const args = Arguments.parseArgs(undefined);
		}).toThrow();
		
		expect(() => {
			const args = Arguments.parseArgs({});
		}).toThrow();
	});

	it("parsing invalid arguments throws error", () => {
		expect(() => { Arguments.parseArgs(true) }).toThrow();
        expect(() => { Arguments.parseArgs(27) }).toThrow();
        expect(() => { Arguments.parseArgs({ undefined }) }).toThrow();
		expect(() => { Arguments.parseArgs({ foo: "bar" }) }).toThrow();
		expect(() => { Arguments.parseArgs({ foo: "bar", alpha: "omega" }) }).toThrow();
		expect(() => { Arguments.parseArgs({ conditions: {foo: "bar"}, registry: "omega" }) }).toThrow(); //no id
	});

	it("valid arguments return correct object", () => {
        let args = Arguments.parseArgs("myId"); //only id string argument
        
        expect(args.id).toEqual("myId");
        expect(args.conditions).toBeUndefined();
        expect(args.registry).toBeUndefined();

        args = Arguments.parseArgs({id: "myId"}); //id in object argument
        
        expect(args.id).toEqual("myId");
        expect(args.conditions).toBeUndefined();
        expect(args.registry).toBeUndefined();
        
		args = Arguments.parseArgs({id: "myId", conditions: {foo: "bar"}}); //id and conditions object argument

        expect(args.id).toEqual("myId");
		expect(args.conditions).toEqual({foo: "bar"});
		expect(args.registry).toBeUndefined();

		args = Arguments.parseArgs({id: "myId", registry: "test"}); //id and registry object argument
        
        expect(args.id).toEqual("myId");
		expect(args.conditions).toBeUndefined();
		expect(args.registry).toEqual("test");

		args = Arguments.parseArgs({id: "myId", conditions: {foo: "bar"}, registry: "test"}); //id and conditions and registry name object argument
        
        expect(args.id).toEqual("myId");
		expect(args.conditions).toEqual({foo: "bar"});
		expect(args.registry).toEqual("test");
	});

	it("existing object validates successfully", () => {
		let args = Arguments.parseArgs({id: "myId", conditions: {foo: "bar"}}); //only conditions argument

		expect(args.isValid()).toEqual(true);

		args = Arguments.parseArgs({id: "myId", registry: "test"}); //only registry name argument
		
		expect(args.isValid()).toEqual(true);

		args = Arguments.parseArgs({id: "myId", conditions: {foo: "bar"}, registry: "test"}); //conditions and registry name argument
		
		expect(args.isValid()).toEqual(true);
	});

});
