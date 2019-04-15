/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [...s]
    let idx = 0
    for (let i = 0; i < s.length; i++) {
        const element = s[i]
        if (idx ===0) stack[idx++] = element
        else {
            switch (element) {
                case '{':
                    stack[idx++] = '{'
                    break;
                case '[':
                    stack[idx++] = '['
                    break;
                case '(':
                    stack[idx++] = '('
                    break;
            
                case '}':
                    if (stack[idx-1] !== '{') return false
                    else idx --
                    break;
                case ']':
                    if (stack[idx-1] !== '[') return false
                    else idx --
                    break;
                case ')':
                    if (stack[idx-1] !== '(') return false
                    else idx --
                    break;
            
                default:
                    break;
            }
        }
    }
    return idx === 0?true:false
};