const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const result = document.getElementById("result");


const isPalindrome = (str) => {
    for (let start=0, end=str.length-1; start!==end; start++, end--) {
        if (str[start] !== str[end]) {
            return false;
        }
    }
    return true;
}


const handleInput = () => {
    // Clean result
    result.innerHTML = null;
    // Take user input
    const textInput = input.value;

    // If no text alert the user to input a value
    if (!textInput) {
        alert("Please input a value");
    }

    // Remove non alphanumerical characters before checking
    const regex = /\W|_/g;
    const formattedText = textInput.replace(regex, '').toLowerCase();

    // Inform the result in a new paragraph
    const para = document.createElement('p');
    para.innerHTML = `<strong>${textInput}</strong> is ${isPalindrome(formattedText) ? "" : "not"} a palindrome.`;
    result.appendChild(para);
}

btn.addEventListener("click", handleInput);