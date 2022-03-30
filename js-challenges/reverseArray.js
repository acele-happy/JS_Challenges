
function reverseArray(arr){
let narr=[]
for(let i=arr.length-1;i>=0;i--){
    narr.push(arr[i])
}
return narr
}
let karr= [3,5,2,8]
console.log(reverseArray(karr))