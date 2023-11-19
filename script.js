// 1)
// function sumUp(...numbers) {
//     let IN_NUMB = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         IN_NUMB += numbers[i];
//     }

//     return IN_NUMB;
// }

// console.log(sumUp(10, 50, 6, 7, 8, 11, 6, 3, 9));

// 2)
// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }
  
// function nameLastname() {
//     if (user.isloggedin) {
//         const aftermath = user.firstname + ' ' + user.lastname;
//         return aftermath;
//     }

//     return false;
// }

// console.log(nameLastname());

// 3)
// function theMax(arr) {
//     if (arr.length === 0) {
//         return undefined;
//     }

//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             return max = arr[i];
//         }
//     }

//     return max;
// }


// let numbers = [2, 8, 5, 1, 7];
// let maxNumber = theMax(numbers);

// console.log("Maximum number:", maxNumber);

// 4)
// function oddEven(numb) {
//     if (numb % 2 === 0) {
//         return 'The number is even';
//     }

//     return 'The number is odd';
// }

// const theOutput = oddEven(120);
// console.log(theOutput);

// 5)
// let array = [1, 2, 3, 4, 5];
// let reversedArray = [];

// for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
// }

// console.log(reversedArray);

// 6)
// let user = (arg) => arg >= 18 ? 'adult' : 'underaged';
// console.log(user(18));


