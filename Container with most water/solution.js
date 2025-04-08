/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right){
        let width = right - left;
        let maxArea = Math.min(height[left], height[right]) * width;

        if(max < maxArea){
            max = maxArea;
        }

        if(height[right] > height[left]){
            left++;
        }else{
            right--;
        }
    }

    return max;
};