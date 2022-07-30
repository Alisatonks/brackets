module.exports = function check(str, bracketsConfig) {

  const openingBrackets = ['(', '{', '[', '|', '1', '3', '5', '7', '8'];
  const pairs = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8'
  };

  let stack = []
  

  function isBracketsCorrect(string) {

    for (let i = 0; i< string.length; i++) {
      let currentBracket = string[i]
      let lastBracket = stack[stack.length - 1]
    
         if (pairs[currentBracket] === lastBracket && stack.length > 0) {
        
          
          stack.pop()
          
         }
       else {

            if (openingBrackets.includes(currentBracket)) {
            stack.push(currentBracket)
         
            
            }
            else {if (stack.length === 0) {console.log(stack.length)
            return false}
            }
       }
    } 
    
   return stack.length === 0
 }
return isBracketsCorrect(str)
}
