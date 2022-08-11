// string definition 
let sentence = "app.js";
console.log(isJavaScriptFile(sentence))
function isJavaScriptFile(fileName) {
    if (sentence.endsWith('.js')) {
        return true
    } else {
        return false
    }
}

