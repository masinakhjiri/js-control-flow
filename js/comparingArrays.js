// const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
// const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
// const arr4 = [0, 2, 4, 6];

let nestedarray = [[1, 'a', 3, 'e', 5, 7, 9, 'i'],
[1, 'a', 3, 'e', 5, 7, 9, 'i'],
[1, 'a', 3, 5, 'e', 7, 10, 'i'],
[0, 2, 4, 6]
]


for(let i=0; i < nestedarray.length; i++){
    for(let j=0; j < nestedarray.length ; j++){
        if(nestedarray[i] === nestedarray[j]){
            console.log(`${nestedarray[i]} is equal to ${nestedarray[j]}`)
        }
        else{
            console.log("Not equal")
        }
    }


}