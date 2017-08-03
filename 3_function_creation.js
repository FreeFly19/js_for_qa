// Hoisting
// f1();
// f2();

function f1() {
    console.log("f1");
}

let f2 = function () {
    console.log("f2");
};

f1();
f2();