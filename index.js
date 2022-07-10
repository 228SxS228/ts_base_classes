var Tax = /** @class */ (function () {
    function Tax() {
    }
    Tax.prototype.taxSum = function (hp, stavka, count) {
        this.itogo = hp * this.isStavka(stavka) * (count / 12);
        console.log(this.itogo);
        return this.itogo;
    };
    Tax.prototype.isStavka = function (hp) {
        if (hp == 100) {
            hp = 8;
        }
        if (hp > 100 && hp <= 150) {
            hp = 34;
        }
        if (hp > 150 && hp <= 200) {
            hp = 35;
        }
        return hp;
    };
    return Tax;
}());
var tax = new Tax().taxSum(144, 144, 12);
var OneQuestion = /** @class */ (function () {
    function OneQuestion() {
    }
    OneQuestion.prototype.triangleCheck = function (int1, int2, int3) {
        if (int1 + int2 > int3) {
            if (int1 + int3 > int1) {
                if (int2 + int3 > int1) {
                    console.log("Треугольник существует");
                }
                else {
                    console.log("Треугольник не существует");
                }
            }
            else {
                console.log("Треугольник не существует");
            }
        }
        else {
            console.log("Треугольник не существует");
        }
    };
    return OneQuestion;
}());
var oneQuestion = new OneQuestion().triangleCheck(4, 5, 6);
var TwoQuestion = /** @class */ (function () {
    function TwoQuestion() {
    }
    TwoQuestion.prototype.minCheck = function (a, b, c, d) {
        this.z = Math.min(a, b, c, d);
        console.log(this.z);
        return this.z;
    };
    return TwoQuestion;
}());
var twoQuestion = new TwoQuestion().minCheck(5, 6, 5, 7);
var FourQuestion = /** @class */ (function () {
    function FourQuestion() {
    }
    FourQuestion.prototype.angleCheck = function (a, b, c) {
        if (a + b + c) {
            console.log("параметры совпадают");
        }
        else if (a == b && b == c) {
            console.log("Равносторонний");
        }
        else if (a == b || b == c || a == c) {
            console.log("Равнобедренный");
        }
        else if (a == 90 && b == 90 && c == 90) {
            console.log("Прямоугольный");
        }
        else if (a < 90 || b < 90 || c < 90) {
            console.log("Остроугольный");
        }
        else if (a > 90 && b > 90 && c > 90) {
            console.log("Тупоугольный");
        }
        else {
            console.log("Это не углы");
        }
    };
    return FourQuestion;
}());
var fourQuestion = new FourQuestion().angleCheck(90, 90, 90);
var FiveQuestion = /** @class */ (function () {
    function FiveQuestion() {
    }
    FiveQuestion.prototype.ageCheck = function (age) {
        if (age < 18) {
            console.log("Вы бот");
        }
        else {
            console.log("Проходи старичок");
        }
    };
    return FiveQuestion;
}());
var fiveQuestion = new FiveQuestion().ageCheck(17);
