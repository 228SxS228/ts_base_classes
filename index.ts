class Tax {
    private itogo: number;
    public taxSum(hp: number, stavka: number, count: number): number {
        this.itogo = hp * this.isStavka(stavka) * (count / 12);
        console.log(this.itogo);
        return this.itogo;
    }

    private isStavka(hp: number): number {
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
    }
}
const tax = new Tax().taxSum(144, 144, 12);

class OneQuestion {
    public triangleCheck(int1: number, int2: number, int3: number) {
        if (int1 + int2 > int3) {
            if (int1 + int3 > int1) {
                if (int2 + int3 > int1) {
                    console.log("Треугольник существует");
                } else {
                    console.log("Треугольник не существует");
                }
            } else {
                console.log("Треугольник не существует");
            }
        } else {
            console.log("Треугольник не существует");
        }
    }
}
const oneQuestion = new OneQuestion().triangleCheck(4, 5, 6);

class TwoQuestion {
    private z: number;
    public minCheck(a: number, b: number, c: number, d: number) {
        this.z = Math.min(a, b, c, d);
        console.log(this.z);
        return this.z;
    }
}
const twoQuestion = new TwoQuestion().minCheck(5, 6, 5, 7);

class FourQuestion {
    public angleCheck(a: number, b: number, c: number) {
        if (a + b + c) {
            console.log("параметры совпадают");
        } else if (a == b && b == c) {
            console.log("Равносторонний");
        } else if (a == b || b == c || a == c) {
            console.log("Равнобедренный");
        } else if (a == 90 && b == 90 && c == 90) {
            console.log("Прямоугольный");
        } else if (a < 90 || b < 90 || c < 90) {
            console.log("Остроугольный");
        } else if (a > 90 && b > 90 && c > 90) {
            console.log("Тупоугольный");
        } else {
            console.log("Это не углы");
        }
    }
}
const fourQuestion = new FourQuestion().angleCheck(90, 90, 90);

class FiveQuestion {
    public ageCheck(age: number) {
        if (age < 18) {
            console.log("Вы бот");
        } else {
            console.log("Проходи старичок");
        }
    }
}
const fiveQuestion = new FiveQuestion().ageCheck(17);

class SixQuestion{
    public goCheck(age: number){
        if(age < 7){
            console.log("Тебе в сад");
        }else if(age > 7 && age < 18){
            console.log("Тебе в школу");
        }else if (age > 18 && age < 24){
            console.log("Тебе в универ");
        }else if (age > 24 && age < 60){
            console.log("Тебе на работу");
        }else if (age > 60){
            console.log("Тебе в больницу")
        }else {
            console.log("Не коректный возраст")
        }
    }
}
const sixQuestion = new SixQuestion().goCheck(17);

class SevenQuestion {

    private a: string = "Денис";
    private b: string = "Антон";
    private c: string = "Саша";

    public nameCheck(){
        if(this.c === this.b){
            console.log("Валите отсюда");
        }else if (this.c === this.a){
            console.log("Валите отсюда");
        } else {
            console.log("Добро пожаловать");
        }
    }
}
const sevenQuestion = new SevenQuestion().nameCheck();

// class EightQuestion{
//     public counter(callNumber: number){
//         return function(){
//             return ++callNumber
//         }
//     }
// }

class NineQuestion{
    public waterCheck(a: number){
        if( a === 0){
            console.log("Лед")
        }
    }
}