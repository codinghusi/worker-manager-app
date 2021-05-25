

export function objectHasItemsAs(obj1, obj2) {
    for (const key in obj1) {
        const item1 = obj1[key];
        const item2 = obj2[key];

        if (item1 === item2) {
            continue;
        }

        if (typeof(item1) !== typeof(item2)) {
            return false;
        }

        if (typeof(item1) === 'object') {
            if (!objectHasItemsAs(item1, item2)) {
                return false;
            }
            continue;
        }

        return false;
    }

    return true;
}