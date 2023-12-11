function twoSum(nums: number[], target: number): number[] {
  // let result:number[] = [];
  // for(let i=0; i< nums.length; i++){
  //     const next = i+1;
  //     console.log(i, next)
  //     console.log(nums[i],nums[next])
  //     if(target == nums[i]+nums[next]) {
  //         result.push(i);
  //         result.push(next);
  //     }
  // }

  // return result;

  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const next = i + 1;

      if (nums[j] == target - nums[i]) {
        result.push(i, j);
      }
    }
  }

  return result;
}

function twoSum1(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const diff = target - num;

    if (map.has(diff)) {
      return [map.get(diff), i];
    }

    map.set(num, i);
  }
}

const tsum = twoSum1([2, 7, 11, 15], 9);
// const tsum = twoSum([3, 2, 3], 6);
console.log("twosum", tsum);
