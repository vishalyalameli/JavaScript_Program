function isLargestArray(arr){
    let largest = -Infinity;

    function findLargest(arr){
        for(let element of arr){
            if(Array.isArray(element)){
                findLargest(element);
            }else{
                if(element > largest){
                    largest = element;
                }
            }
        }
    }
    findLargest(arr);
    return largest;

}
const number = [1,[2,[3,[8,[45]]]]]
console.log(isLargestArray(number));