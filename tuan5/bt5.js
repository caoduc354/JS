function isPalindrome(str){

    let temp = str.match(/[a-z0-9]+/ig).join('').toLowerCase();

    let s = temp.split('').reverse().join('');

    return temp === s;

}

// console.log(isPalindrome('asa'))
// console.log(isPalindrome('eye'))
// console.log(isPalindrome('_eye'))
// console.log(isPalindrome('race car'))
// console.log(isPalindrome('not a palindrome'))


function  uniqeUnion(...args){

    arr = [].concat(...args);
    
    return [...new Set([...arr])]
}
// console.log(uniqeUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]))

function seekAndDestroy(arr, ...args){
    let newArr = []
    arr.forEach(element => {
        const index = args.indexOf(element)
        if(index == -1){
            newArr.push(element)
        } 
    });

    return newArr
}

// console.log(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3))

function toSpinalCase(str){

    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    
    const rg = /\s+|_+/g;

    return str.replace(rg, '-').toLowerCase();
}


// console.log(toSpinalCase('MyNameIsQuan'))


function drop(arr,func){
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])==false){
            arr.splice(i, 1);
            i--;
        }else{
            break;     
        }
    }

    return arr;
}

// console.log(drop([1, 2, 3, 4], function(n) {return n >= 3;}))