function reverseArray2(arr){
    let k;
    let size = arr.length;
    let temp;
    k=size-1
    i=0;

    while(i<k){
        temp=arr[i]
        arr[i]=arr[k]
        arr[k]=temp
        i++
        k--
    }


    return arr
}

let arr=[3,2,5,8]
console.log(reverseArray2(arr))
