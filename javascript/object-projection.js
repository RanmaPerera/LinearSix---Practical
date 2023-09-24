// object-projection.js

function objectProjection(sourceObject, prototypeObject) {
    const projectedObject = {};
    for (const key in prototypeObject) {
        if (sourceObject.hasOwnProperty(key)) {
            projectedObject[key] = sourceObject[key];
        }
    }
    return projectedObject;
}

const source = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const prototype = {
    name: '',
    age: 0
};

const projected = objectProjection(source, prototype);
console.log(projected);
