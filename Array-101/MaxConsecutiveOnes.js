/**
 * @param {number[]} nums
 * @return {number}
 */
  var findMaxConsecutiveOnes = function(nums) {
    let mcOnes = 0
    let cCount = 0; 
    
    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i] == 1) {
            cCount = cCount + 1
            
            if (cCount > mcOnes) {
                mcOnes = cCount
            }
            
        } else {
            cCount = 0
        }
       
    }  
    return mcOnes;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
