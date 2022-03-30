
function findPrime(arr){
    let narr=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            continue;
        }else if(arr[i]==2){
            narr.push(arr[i])
        }
        else{
            for(let k=2;k<arr[i];k++){
                if(arr[i]%k==0){
                    break;
                }
            }
            continue;

        }
    }
    return narr;
}
let arr= [1,2,4,8,3,8,11]
console.log(findPrime(arr))