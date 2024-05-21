/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    
    let eCount = 0; // keeps tracks of the current count of the even number.
    
    for (let i = 0; i < nums.length; i++) {
        let numStr = nums[i].toString();
            
        if (numStr.length % 2 === 0) { // checks the number if its even
            eCount++;
        }
    }
    
    return eCount;
 
};