//=======================1==========================
const userName = ['Jon', 'Oleg', 'Alex']
function checkUserName(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `Hello, ${item}!`
        }
    }
}
console.log(checkUserName(userName, 'Jon'))

//=====================2========================

const numbers = [1, -10, 5, 45, 10, 1.2];
function checkNumber(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 10) {
            console.log(a[i])
        }
    }
}
checkNumber(numbers)

//========3===========Лучше придумать не смогу, я пару дней пытался понять, как мне это сделать из показанного материала...======================

const total1 = calculate(10, 2, 'plus');
const total2 = calculate(10, 2, 'minus');
const total3 = calculate(10, 2, 'multiply');
const total4 = calculate(10, 2, 'divide');
function calculate(num1, num2, operation) {
    if (operation === 'plus') {
        return num1 + num2;
    } else if (operation === 'minus') {
        return num1 - num2;
    } else if (operation === 'multiply') {
        return num1 * num2;
    } else if (operation === 'divide') {
        return num1 / num2;
    }
}
console.log(total1);
console.log(total2);
console.log(total3);
console.log(total4);



