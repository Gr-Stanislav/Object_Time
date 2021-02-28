let date = new Date();
console.log (date);


function changeMinutes() {
    if (x > 0) {
        date.setMinutes(date.getMinutes() + x);
    } else if (x < 0) {
        date.setMinutes(date.getMinutes() - x);
    }
}
let x = parseInt(prompt("Уменшить или увеличить число на ...?"))

console.log (changeMinutes());   // не пойму, почему вызов фунции дает undefined







// let mydate;
// mydate = date;

// mydate = {
//     hours: mydate.getHours(),
//     minutes: mydate.getMinutes(),
//     seconds: mydate.getSeconds(),
// }

// mydate.setMinutes(10);
// console.log (mydate);





















// let date = {
//     hours: 0,
//     minutes: 00,
//     seconds: 00,
// }

// date.hours = parseInt(prompt("Добавте количество часов:"));
// date.minutes = parseInt(prompt(`Добавте количество минут: ` + date.hours + ":" + date.minutes + ":" + date.seconds));
// date.seconds = parseInt(prompt(`Добавте количество секунд: ` + date.hours + ":" + date.minutes + ":" + date.seconds));

// if (date.hours > 60) {
//     alert ("Не существующее время!!!");
// }


// alert ("Время " + date.hours + ":" + date.minutes + ":" + date.seconds);
