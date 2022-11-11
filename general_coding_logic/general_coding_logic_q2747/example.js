const foo = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        if (str1.charAt(str1.length - i - 1) == str2.charAt(i)) {
            continue;
        }
        else {
            return str1.charAt(str1.length - i - 1) < str2.charAt(i);
        }
    }
}

console.log(foo("818", "718"));