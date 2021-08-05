let numbers = [1,2,3,5,8,9,10];
let newArray = numbers.map((i) => ({digit: i, odd:''}))

for(let key in newArray){
    let numberInfo = newArray[key]['digit'] % 2;
    if (numberInfo == 1) {
        newArray[key]['odd'] = 'true';
    }else{
        newArray[key]['odd'] = 'false';
    }
}
console.log(newArray);





































// for (let key in numbers) {
// }
// if (numbersInfo == 1) {
    
    //         console.log(numbersinfo);
    //     }
    
    // numbersInfo.push({'digit': numbers[key]})
    // numbers.map((i,info) => ({digit: info},{odd:i}) )
    // for(let i = 0; i < numbers.length; i++){
        
        // }

// let newArray = numbers.map((item, i) => {
//     console.log(item)
// })