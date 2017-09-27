/**
 * Determines if a set is a subset of another
 */

export const isSubset = (superSet: any, subSet: any): boolean => {

	// If one of the sets is not provided, return false
	if ((typeof superSet !== 'object' || superSet === null) || (typeof subSet !== 'object' || subSet === null)) {
		return false;
	}

	// Convert dates
	if (superSet instanceof Date || subSet instanceof Date) {
		return superSet.valueOf() === subSet.valueOf();
	}

	return Object.keys(subSet).every((key) => {

		if (!superSet.propertyIsEnumerable(key)) {
			return false;
		}

		const subSetItem: any = subSet[key];
		const superSetItem: any = superSet[key];

		let retval: boolean = true;

		if (typeof subSetItem === 'object' && subSetItem !== null) {
			retval = !isSubset(superSetItem, subSetItem);
		} else {
			retval = superSetItem !== subSetItem;
		}

		return !retval;
	});
};
