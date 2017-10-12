"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubset = function (superSet, subSet) {
    if ((typeof superSet !== 'object' || superSet === null) || (typeof subSet !== 'object' || subSet === null)) {
        return false;
    }
    if (superSet instanceof Date || subSet instanceof Date) {
        return superSet.valueOf() === subSet.valueOf();
    }
    return Object.keys(subSet).every(function (key) {
        if (!superSet.propertyIsEnumerable(key)) {
            return false;
        }
        var subSetItem = subSet[key];
        var superSetItem = superSet[key];
        var retval = true;
        if (typeof subSetItem === 'object' && subSetItem !== null) {
            retval = !exports.isSubset(superSetItem, subSetItem);
        }
        else {
            retval = superSetItem !== subSetItem;
        }
        return !retval;
    });
};
//# sourceMappingURL=set.js.map