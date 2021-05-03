// 2-mashq.
// function withoutReverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(withoutReverse("Iskandarov"));

// 3-mashq.
// function filter(arg) {
//     let newArray = [];
//     for (let i = 0; i < arg.length; i++) {
//       if (arg[i]) {
//         newArray.push(arg[i]);
//       }
//     }
//     return newArray;
//   }
//   console.log(filter([undefined,7, null,11, 0, false,10, NaN,  ""]));

//6-mashq.
// function unrepeatable(arg){
//     let arr = [];
//     for(let x = 0; x < arg.length; x++){
//       if(arr.indexOf(arg[x]) == -1)arr.push(arg[x]);
//     }
//     return arr;
//   }
// console.log(unrepeatable([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5]));

// 8-mashq.
// let massive = [9,8,7,[6,5,4,[3,2,1]]];

// function flatten (arg){
//     let newArray = [];
//     for (let item of arg){
//         if(Array.isArray(item)){
//             newArray.push(...flatten(item));
//         }else{
//             newArray.push(item);
//         }
//     }

//     return newArray;
// }

// console.log(flatten(massive));

// 

// 9-mashq.
// function Chunk(arr, size) {
//     let array = [];
//     while (arr.length > 0) {
//         let chunk = arr.splice(0, size);
//         array.push(chunk);
//     }
//     return array;
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Chunk(arr, 2));


