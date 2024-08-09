const btn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPolindrome = () => {
    const inputText = document.getElementById("text-input").value;
    const clearStr = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = clearStr.split("").reverse().join("");
    if (clearStr === reversedStr) {
        return true;
    } else return false;
}

const polindromOutput = (polindrome) => {
    const inputText = document.getElementById("text-input").value;
    if (inputText === "") {
        alert("Please input a value");
    } else if (inputText && polindrome) {
        result.innerHTML = `<strong>${inputText}</strong> is a palindrome.`
    } else if (!polindrome) {
        result.innerHTML = `<strong>${inputText}</strong> is not a palindrome.`
    }
}

btn.addEventListener('click', () => {
    polindromOutput(isPolindrome())
});