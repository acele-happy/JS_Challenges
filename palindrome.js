function isPalindrome(str){
    let rev = str.split("").reverse().join("")

    if(str == rev){
        return true;
    }else{
        return false;
    }
}

let str = "madam1"
console.log(isPalindrome(str))