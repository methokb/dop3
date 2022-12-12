
function  average(arr)
{
    if(arr.length === 0)
        return 0;
 
    let sum = 0;
 
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return sum / arr.length;
}
 
let k = [1, 2, 3];
let g = [1,2,3,4];

console.log(average(k));
console.log(average(g));