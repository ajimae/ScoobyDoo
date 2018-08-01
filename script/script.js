//Setting the display property of the display box
document.getElementById('display').style.visibility = "hidden";


/*Getting all necessary inputs from the html and
 *assigning to appropriate variable
 */
let helpText = document.getElementById('help-text');
let display = document.getElementById('display');


/*Get the information panel and display the 
 *box when the cursor hovers over the info button
 */
document.getElementById('info-btn').onmouseover = () => {
    const text = "<strong>Instruction</strong><hr>This is Scooby Doo,"
    +" a program that replaces all consonant letter at the start of a word"
    +" with the letter <strong>r</strong> up till the first occurrence of "
    +" a vowl letter.<br>Enter a valid word or sentence (no numbers or special"
    +" characters), then click on <strong>Scooby Doo</strong> to see how it works.";
    
    //Shows the static text and change the display property of the help-text box
    helpText.innerHTML = text;
    helpText.style.display = "block";
    
}

/*Changing the display property of the info-text box 
 *when the cursor leave the button and enters the container box
 */
document.getElementById('container').onmouseover = () => {
    helpText.style.display = "none";
}

//Parent function which is called on scoobyDooby Doo button click
function doo() {
    let completeWord = "";
    const sentence = document.getElementById('doo').value;
    const words = sentence.split(' ');

    
    /*This function collects the individual words of the sentence
     *replaces all numbers and special characters and check for 
     *vowl characters. 
     */
    function scoobyDoo(word) {
        //word = word.replace(/[^a-zA-Z]/g, ''); //Uncomment this line to stripe off special characters and numbers.
        word = word.toLowerCase();
        let chars = word.split('');
        let consonants = "";
        
        
        if(isContained(chars[0], ["a", "e", "i", "o", "u"]))
            return word+" ";
        else
            for(let i in chars)
                if(isContained(chars[i], ["a", "e", "i", "o", "u"]))
                    return "r"+word.substring(i, word.length)+" ";
                else
                    //consonants += chars[i];
		    consonants = "r";
           return consonants+" ";
    }

    //Checking if the current character of the collected character is vowel letter
    function isContained(char, array) {
        for(let i in array)
            if(char == array[i]) return true;
        return false;
    }
    
    
    /*loops through each word from the user input and sends
     *out the word(s) to the scoobyDoo() function which inturn appends
     *the return word to the completeWord variable
     */    
    words.forEach((seed) => {
        completeWord += scoobyDoo(seed);
    });
    
    //Clear out anytext in the input field
    document.getElementById('doo').value = "";
    
    /*Validation of input strings to ensure the right
     *output is obtained else display appropriate error message
     */
    if(sentence == '' || sentence == null) {
        display.style.visibility = "hidden";
        helpText.style.display = "block";
        helpText.innerHTML = "<strong>Error</strong><hr>Input field cannot be empty";
    }else if(completeWord.trim() === '') {
        display.style.visibility = "hidden";
        helpText.style.display = "block";
        helpText.innerHTML = "<strong>Error</strong><hr>Invalid input, try again";
    }else {
        display.style.visibility = "visible";
        display.innerHTML = completeWord;
    }    
}
