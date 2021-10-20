

let div3 = "Fizz";
let div5 = "Buzz";
let div3_5 = "FizzBuzz";
let div7 = "Fish";
let div8 = "Bus";
let div3_5_7_8 = "FizzBuzzFishBus";

for (let i = 1; i < 1010; i++ ) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 8 === 0) {
        print = div3_5_7_8;
    } else if (i % 3 === 0 && i % 5 === 0) {
        print = div3_5;
    } else if (i % 3 === 0) {
        print = div3;
    } else if (i % 5 === 0) {
        print = div5;
    } else if (i % 7 === 0) {
        print = div7;
    } else if (i % 8 === 0) {
        print = div8;
    } else {
        print = i;
    }
    console.log(print);
}
