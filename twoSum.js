const twoSum = (nums, target) => {
  let compliments = {};
  for (let i = 0; i < nums.length; i++) {
    if (compliments[target - nums[i]] !== undefined) {
      return [compliments[target - nums[i]], i];
    } else {
      compliments[nums[i]] = i;
    }
  }
  return [];
};
