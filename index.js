'use strict'

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//  func(" hello world", ['l', 'd']) поверне нам "heo wor". 

// Вихідний рядок та символи для видалення задає користувач.


function getStrDataFromUser(dataString) {
    let data;
    do {
        data = prompt('Enter your '+ dataString);
    }
    while (!data?.trim());
    return data.trim();
}
 const str = getStrDataFromUser('string');
 const symb = getStrDataFromUser('symbol');

 function getNewString(arg1, arg2) {
        const arr = arg1.split("")
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arg2.length; j++) {
                if (arr[i] === arg2[j]) {
                    arr.splice(i, 1);
                    i--
                }
            }
        }
        return arr.join("");    
    }

const func = getNewString(str, symb.split(""));
console.log(func);  
