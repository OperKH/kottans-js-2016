(function() {
    "use strict";

    if (typeof Object.deepAssign == "function") {
        return;
    }

    const isEnumerable = Object.propertyIsEnumerable;

    Object.defineProperty(Object, "deepAssign", {
        value: function deepAssign(target, ...sources) {

            if (target === null) {
                throw new TypeError();
            }

            const to = Object(target);

            sources.forEach(from => {
                if (from === Object(from)) {
                    Reflect.ownKeys(from).forEach(key => {
                        if (isEnumerable.call(from, key)) {
                            const fromValue = from[key];
                            if (fromValue === Object(fromValue)) {
                                const fromValueConstructorName = fromValue.constructor.name;
                                switch (fromValueConstructorName) {
                                    case 'Object':
                                        Object.deepAssign(Object(to[key]), fromValue);
                                        break;
                                    case 'function':
                                        to[key] = fromValueConstructorName();
                                        break;
                                    default:
                                        to[key] = new fromValue.constructor(fromValue)

                                }
                            } else {
                                to[key] = fromValue
                            }

                        }
                    });
                }
            });

            return to;
        },
        writable: true,
        configurable: true
    });
})();
