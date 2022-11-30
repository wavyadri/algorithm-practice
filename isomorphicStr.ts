// 205. Isomorphic Strings
// string

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  let obj = { [s[0]]: t[0] };
  for (let i = 1; i < s.length; i++) {
    if (obj[s[i]]) {
      if (obj[s[i]] !== t[i]) {
        return false;
      }
    } else {
      obj[s[i]] = t[i];
    }
  }
  return true;
}
