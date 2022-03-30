function toObject(arr){
    let res ={}
    for(let i=0;i<arr.length;i++){
        res[arr[i].split(',')[0].split(' ')[0]]={
            second_name: arr[i].split(",")[0].split(" ")[1],
            age: parseInt(arr[i].split(',')[1])
        }
    }
    return res
}

let arr = ['Patrick wayne, 30', 'lil wayne, 32','Eric mimi, 21','Dodos deck, 21',
'Alien Dwine, 22','Patrick wayne, 33','Patrick wayne, 100','Patrick wayne, 40']

console.log(toObject(arr))
