'use strict'

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//  func(" hello world", ['l', 'd']) поверне нам "heo wor". 

// Вихідний рядок та символи для видалення задає користувач.

const str = 'hello world';
const arr = ['l', 'd'];

function getNewString(arg1, arg2) {
    let arr = arg1.split("")
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arg2.length; j++) {
            if (arr[i] === arg2[j]) {
                arr.splice(i, 1);
                i = 0;
            }
        }
    }
    return arr.join("");
}

const func = getNewString(str, arr);
console.log(func);




