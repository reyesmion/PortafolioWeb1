function checkPalindrome() {
    var phrase = document.getElementById("phraseInput").value;
    var resultParagraph = document.getElementById("result");
    resultParagraph.textContent = palindrome(phrase);
}

function palindrome(phrase) {
    var result = "La frase \"" + phrase + "\" \n";
    var originalString = phrase.toLowerCase().replace(/\s/g, "");
    var reversedString = originalString.split("").reverse().join("");
    
    if (originalString === reversedString) {
        result += " es un palíndromo";
    } else {
        result += " no es un palíndromo";
    }
    return result;
}
