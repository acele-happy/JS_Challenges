function isPrime(num){
    let prime= true
    if(num==1){
        prime= false
    }else if(num==2){
        prime= true
    }else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                prime=false
            }
        }
    }
    return prime
}

function sortDescending(arr){
    let temp
    let filtered = arr.filter((val)=>{
        return !isPrime(val)
    })
    let size = filtered.length
    for(let i=0;i<size-1;i++){
        for(let k=1; k<size;k++){
            if(filtered[i]<filtered[k]){
                temp= filtered[i]
                filtered[i]=filtered[k]
                filtered[k]=temp
            }
        }
    }
    return filtered;
}

let arr= [4,3,7,9,20,0,11,2]
console.log(sortDescending(arr))