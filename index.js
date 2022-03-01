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

/**
 * 数字转换成罗马数字
 * @param n
 */
function transRoman(n){
    if(n > 3999 || n < 0){
        throw '超出计算范围'
    }
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let str = '';
    for (const i of Object.keys(roman)) {
        const q = Math.floor(n / roman[i]);
        n -= q * roman[i];
        str += i.repeat(q);
    }
    return str;
}
export {
    transNumber,
    checkRoman,
    transRoman
}

