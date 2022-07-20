var Tax = /** @class */ (function () {
    function Tax() {
    }
    Tax.prototype.taxSum = function (hp, stavka, count) {
        hp = parseFloat(document.getElementById("input1").value);
        stavka = parseFloat(document.getElementById("input2").value);
        count = parseFloat(document.getElementById("input3").value);
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
function test() {
    var elem2 = document.createElement("label");
    elem2.innerHTML = new Tax().taxSum();
    ;
    document.getElementsByTagName("body")[0].appendChild(elem2);
}
// class OneQuestion {
//     public triangleCheck(int1: number, int2: number, int3: number) {
//         if (int1 + int2 > int3) {
//             if (int1 + int3 > int1) {
//                 if (int2 + int3 > int1) {
//                     console.log("Треугольник существует");
//                 } else {
//                     console.log("Треугольник не существует");
//                 }
//             } else {
//                 console.log("Треугольник не существует");
//             }
//         } else {
//             console.log("Треугольник не существует");
//         }
//     }
// }
// const oneQuestion = new OneQuestion().triangleCheck(4, 5, 6);
// class TwoQuestion {
//     private z: number;
//     public minCheck(a: number, b: number, c: number, d: number) {
//         this.z = Math.min(a, b, c, d);
//         console.log(this.z);
//         return this.z;
//     }
// }
// const twoQuestion = new TwoQuestion().minCheck(5, 6, 5, 7);
// class FourQuestion {
//     public angleCheck(a: number, b: number, c: number) {
//         if (a + b + c) {
//             console.log("параметры совпадают");
//         } else if (a == b && b == c) {
//             console.log("Равносторонний");
//         } else if (a == b || b == c || a == c) {
//             console.log("Равнобедренный");
//         } else if (a == 90 && b == 90 && c == 90) {
//             console.log("Прямоугольный");
//         } else if (a < 90 || b < 90 || c < 90) {
//             console.log("Остроугольный");
//         } else if (a > 90 && b > 90 && c > 90) {
//             console.log("Тупоугольный");
//         } else {
//             console.log("Это не углы");
//         }
//     }
// }
// const fourQuestion = new FourQuestion().angleCheck(90, 90, 90);
// class FiveQuestion {
//     public ageCheck(age: number) {
//         if (age < 18) {
//             console.log("Вы бот");
//         } else {
//             console.log("Проходи старичок");
//         }
//     }
// }
// const fiveQuestion = new FiveQuestion().ageCheck(17);
// class SixQuestion {
//     public goCheck(age: number) {
//         if (age < 7) {
//             console.log("Тебе в сад");
//         } else if (age > 7 && age < 18) {
//             console.log("Тебе в школу");
//         } else if (age > 18 && age < 24) {
//             console.log("Тебе в универ");
//         } else if (age > 24 && age < 60) {
//             console.log("Тебе на работу");
//         } else if (age > 60) {
//             console.log("Тебе в больницу");
//         } else {
//             console.log("Не коректный возраст");
//         }
//     }
// }
// const sixQuestion = new SixQuestion().goCheck(17);
// class SevenQuestion {
//     private a: string = "Денис";
//     private b: string = "Антон";
//     private c: string = "Саша";
//     public nameCheck() {
//         if (this.c === this.b) {
//             console.log("Валите отсюда");
//         } else if (this.c === this.a) {
//             console.log("Валите отсюда");
//         } else {
//             console.log("Добро пожаловать");
//         }
//     }
// }
// const sevenQuestion = new SevenQuestion().nameCheck();
// // class EightQuestion{
// //     public counter(callNumber: number){
// //         return function(){
// //             return ++callNumber
// //         }
// //     }
// // }
// class NineQuestion {
//     public waterCheck(a: number) {
//         if (a === 0) {
//             console.log("Лед");
//         } else if (a === 1) {
//             console.log("Вода");
//         } else if (a === 2) {
//             console.log("Пар");
//         } else {
//             console.log("Не известное состояние");
//         }
//     }
// }
// const nineQuestion = new NineQuestion().waterCheck(2);
// class TenQuestion {
//     public genderCheck(a: string, b: string) {
//         if (a || b == "Гетеро") {
//             console.log("Любви и добра вам");
//         } else if (a || b == "Гомосексуальный") {
//             console.log("Валите в америку");
//         } else {
//             console.log("Не верное значение");
//         }
//     }
// }
// const tenQuerstion = new TenQuestion().genderCheck("Гетеро", "Гетеро");
// class ElevenQuestion {
//     public lineCheck(a: string, b: string) {
//         if (a.trim() && b.trim() === "") {
//             return console.log(false);
//         }
//         if (a || b !== "") {
//             if (/^\s*$/.test(a && b)) {
//                 return console.log(false);
//             }
//         }
//     }
// }
// const elevenQuestion = new ElevenQuestion().lineCheck("", "");
// class TwelvQuestion {
//     private a: string = "http://";
//     private b = new RegExp("^(https?:\\/\\/)?");
//     public urlCheck() {
//         if (!!this.b.test(this.a)) {
//             console.log("Это урл");
//         } else {
//             console.log("Это не урл");
//         }
//     }
// }
// const twelQuestion = new TwelvQuestion().urlCheck();
// class ThirteenQuestion {
//     private c: number;
//     public meanCheck(a: number[]) {
//         const b: number = a.reduce((a, b) => a + b, 0);
//         const c: number = b / a.length;
//         if ((c) => 5) {
//             console.log("Фу ты отличник");
//         } else if (c >= 4 && c < 5) {
//             console.log("Ты хорошист");
//         } else if (c >= 3 && c < 4) {
//             console.log("Ты троечник");
//         }
//     }
// }
// const trigteenQuestion = new ThirteenQuestion().meanCheck([3, 3, 3, 5, 4]);
// class FourteenQuestion {
//     public fioCheck(a: string, b: string) {
//         if (a === "Иван" && b === "Иванов") {
//             console.log("Комбо");
//         } else if (a === "Иван" || b === "Иванов") {
//             console.log("Это мимо");
//         } else {
//             console.log("Привет человек");
//         }
//     }
// }
// const fourteenQuestion = new FourteenQuestion().fioCheck("Иван", "Иванов");
// export function fifteenQuestion(a: number) {
//     if (a > 0) {
//         console.log("Больше нуля");
//         return 0;
//     } else {
//         console.log("Меньше нуля");
//         return 1;
//     }
// }
// fifteenQuestion(4);
// class SixteenQuestion {
//     public checkRect(a: number, b: number, c: number, d: number) {
//         if (a == b && 2 * a == b) {
//             console.log("Это квадрат");
//         } else if ((a = b) && (b = c) && (c = d)) {
//             console.log("Прямоугольник");
//         } else {
//             console.log("Четырехугольник");
//         }
//     }
// }
// const sixteentQuestion = new SixteenQuestion().checkRect(4, 4, 4, 4);
// class SeventeenQuestion{
//     public checkUser(user: boolean){
//         const yroki:number[] = [];
//         for(let i = 0; i < 100; ++i) yroki[i] = i + 1;
//         if( user === true){
//             console.log(yroki, "Вы премиум");
//         } else if (user === false){
//             console.log(yroki[0], "Вы не премиум");
//         }
//     }
// }
// const seventeenQuestion = new SeventeenQuestion().checkUser(true);
