// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// sliding window
//    ex. You need to find the subrange in this array or string that should provide the longest, shortest, or target values.
// TC: O(n)

function lengthOfLongestSubstring(s: string): number {
  if (!s.length) {
    return 0;
  }

  let start: number = 0; // starting index of curr substring
  let max: number = 0; // max length of substriing
  let seen: Record<number, number> = {}; // letter: index

  for (let i: number = 0; i < s.length; i++) {
    // if char is a repeat, update substring start
    if (seen[s[i]] != undefined) {
      start = Math.max(seen[s[i]] + 1, start);
    }

    // keep track of latest char
    seen[s[i]] = i;

    // update max
    // +1 to get length
    max = Math.max(i - start + 1, max);
  }
  return max;
}
