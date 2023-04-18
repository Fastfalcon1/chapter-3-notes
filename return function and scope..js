function replaceWithX (arr, x){
    for(let i=0; i< arr.length; i++) {
        arr[i]=x
    }
    console.log(arr)
}
replaceWithX([1,2,3,4,5],9);