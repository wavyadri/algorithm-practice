// 205. Isomorphic Strings
// string

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let objS = {};
  let objT = {};
  for (let i = 0; i < s.length; i++) {
    if (objS[s[i]]) {
      if (objS[s[i]] !== t[i]) {
        return false;
      }
    }

    if (objT[t[i]]) {
      if (objT[t[i]] !== s[i]) {
        return false;
      }
    }

    objS[s[i]] = t[i];
    objT[t[i]] = s[i];
  }
  return true;
}
