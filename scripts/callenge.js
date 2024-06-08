//write a js function that takes a list of numbers (array) as parameter and returns the sum of all the numbers.
let numbers=[1,2,3,4,5,6,7,8,9,10];
function sumAllNumber(){
    let sum = 0;
    for(i=0;i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(sumAllNumber());

//write a js function that takes a list of numbers (array) as parameter and returns the sum of all the even numbers.
function sumAllEvenNumber(){
    let sum = 0;
    for(i=0;i<numbers.length; i++){
        if(numbers[i] % 2 === 0){
            sum += numbers[i];
        }
    }
    return sum;
}
console.log(sumAllEvenNumber());

//Write a JavaScript function that takes an array of numbers as input and returns the maximum number in the array.
// function showMaxNumber(){
//     let sum = 0;
//     for(i=0;i<numbers.length; i++){
//         if(numbers[i] % 2 === 0){
//             sum += numbers[i];
//         }
//     }
//     return sum;
// }
// console.log(maxNumber()); //PROGRESS / NOT WORK.
