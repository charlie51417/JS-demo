list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

 
const arrZero = [];
const arrOther = list.filter(x => x !== 0);
list.map(x =>{
    if (x === 0){
        return arrZero.push(x);
    }
})
const arrAll = arrOther.concat(arrZero);
// const a = arrType
console.log(arrAll);


// list.filter(x => x !== 0)