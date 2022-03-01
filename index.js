/**
 * 罗马数字转换成数字
 * @param s
 * @returns {number}
 */
function transNumber(s){
    let obj = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let num = 0;
    for(let i=0;i<s.length;i++){
        num = obj[s[i]] < obj[s[i+1]] ? num - obj[s[i]] : num + obj[s[i]]
    }
    return num
}

/**
 * 正则验证是否是罗马数字
 * @param s
 * @returns {boolean}
 */
function checkRoman(s){
    return /^(-| +|^)M{0,9}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})( +|$)/.test(s);
}
export {
    transNumber,
    checkRoman
}
