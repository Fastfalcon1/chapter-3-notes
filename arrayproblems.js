//ex #1
// // function count(n){
// //     for(let i=1; i<=n;i++){
// //         console.log(i)
// //     }
// // }
// //
// // count(99)
// //ex #2
// // function count(n){
// //     if(n <=0){
// //         console.log('invalid')
// //     } else{
// //         for(let i=1; i<=n;i++){
// //             console.log(i)
// //         }
// //     }
// // }
// //
// count(-1)

//ex#3

// function replaceWithX (arr, x){
//     for(let i=0; i< arr.length; i++) {
//         arr[i]=x
//     }
//     console.log(arr)
// }
// replaceWithX([1,2,3,4,5],9);

function Array (arr, x){
    let newArray =[];
        for(let i=0; i< arr.length; i++) {
        arr[i]=x
    }
    console.log(arr)
}
}