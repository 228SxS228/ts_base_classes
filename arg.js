function fun1(...theArgs) {
    console.log(theArgs.length);
}

fun1(5, 5, 5, 5, 5, 5, 5);

function myFun(...manyArgs) {
    console.log("manyArgs", manyArgs);
}

myFun("один", "два", "три", "четыре", "пять", "шесть");