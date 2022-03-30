
function countOccur(arr,num){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            count++
        }
    }
    return count
}

function hasMajority(arr){
    let count
    let size= arr.length
    for(let i=0;i<size;i++){
        count = countOccur(arr,arr[i])
        if(count > size/2){
            return true;
        }
    }
    return false
}
let arr = [3,1,3,4,4]
console.log(hasMajority(arr,3))