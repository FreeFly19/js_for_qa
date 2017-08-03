



function multiply(a, b) {
    return a * b;
}

function next(a) {
    return a + 1;
}
console.log(next(5));
console.log(multiply(3,4));// 12 :)























function multiply(a, b) {
    return a * b;
}

function funcCaller(a) {
    console.log(a(3, 6));
}

//funcCaller(multiply()); // What is wrong?





















function next(param1) {
    return param1 + 1;
}

function funcCaller(a) {
    console.log(a(3, 6));
}

// funcCaller(next); // What is wrong?















function funcCaller(a) {
    console.log(a(3, 6));
}

// funcCaller(function (a, b) {
//     return a - b;
// });
//
// funcCaller((a, b) => a - b); // Lambda























function bindFirstParam(f, p1) {
    // p1 in closure

    function innerFunc(p2) {
        return f(p1, p2);
    }

    return innerFunc;
}


function sum(a, b) {
    return a + b;
}


let fivePlus = bindFirstParam(sum, 5);

// console.log(fivePlus(3)); // 8)






