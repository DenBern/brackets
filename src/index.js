module.exports = function check(str, bracketsConfig) {
  let newStr = "";
  if (str.length == 0) return brack
  for (let i = 0; i < bracketsConfig.length; i++) {
   let bracket = bracketsConfig[i].reduce((a, b) => a + b )
   let n = str.indexOf(bracket);
   brack = str.includes(bracket);
   newStr = brack ? str.slice(0, n) + str.slice( n + 2) : "";
   if (brack) break;
 }
 return check (newStr, bracketsConfig, brack);
}
