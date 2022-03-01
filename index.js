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
export {
    transNumber
}