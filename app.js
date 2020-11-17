
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelector ('#qwerty');
const phrase = document.querySelector ('#phrase');
const tries = document.querySelectorAll('.tries img');
const questionArray = ['How do you make a Skeleton Laugh?', 'What do skeletons hate the most about wind?', 'Why are graveyards so noisy?','Why was the skeleton so upset when the dog took his bone?','Why are skeletons so sad?'];
const phrasesArray = ['tickle funny bone', 'it goes through them', 'all the coffin','no leg to stand on', 'they have no body'];

var randomIndex = Math.floor(Math.random() * questionArray.length);
var missed = 0;

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

//Create a getRandomPhraseAsArray function.
function getRandomPhrasesArray (arrP) {

    var randomPhrase = arrP[randomIndex];
    var phraseParse = Object.values(randomPhrase);
    return phraseParse;
}
//Function to retrieve corresponding question
function getRandomQuestionsArray (arrQ) {
    var randomQuestion = arrQ[randomIndex];
    return randomQuestion;
}

//Add question as h3 element
function addQuestionToDisplay(arr) {
    let appendQuestion = document.createElement('h3');
    appendQuestion.textContent = arr;
    document.querySelector('#banner').appendChild(appendQuestion);
    appendQuestion.className = "questions";
}

//Create an addPhraseToDisplay function that loops through an array of characters.
function addPhraseToDisplay(arr) {
    for (i = 0; i <= arr.length; i++) {
        let letterItem = document.createElement('li');
        letterItem.textContent = arr[i];

        if (letterItem.textContent === " ") {
            letterItem.className = "space";
        } else if (letterItem.textContent === ""){
            letterItem.className = "space";
        } else {
            letterItem.className = "letter";
        }
        phrase.appendChild(letterItem);
    }
   
}

//Save array values as variables and pass to functions to add to display
const question = getRandomQuestionsArray(questionArray);
const phrasesParse = getRandomPhrasesArray(phrasesArray);
addPhraseToDisplay(phrasesParse);
addQuestionToDisplay(question);

//Create Check letter function Elements with a class of “letter”
//The function should loop over the letters and check if they match the letter in the button the player has chosen.
function checkLetter (button) {

    let letterSelector =  document.querySelectorAll('.letter');

    let match = null;

    for (i = 0 ; i < letterSelector.length ; i++){

        if (letterSelector[i].textContent.toLocaleLowerCase() === button.textContent) {

        letterSelector[i].className = 'show letter';

        match = true;
    
        }
    }

    return match;
};

//Add event Listener to listen to buttons in keyboards. Pass class "Chosen"
//Upon missed click, increment missed counter and remove heart
qwerty.addEventListener ('click', (e) => {

    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        
        e.target.disabled = 'true';

        checkLetter(e.target);
        let letterFound = checkLetter(e.target);
        
        if (letterFound === null) {
            missed += 1;
            tries[missed - 1].src = "images/lostHeart.png";
        } 
    }
    checkWin();
});

//Each time the player guesses a letter, this function will check whether the game has been won or lost
//If # of misses reaches >5 or phrase is guessed in full, display win/loss screen and run reset function
function checkWin() {

    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');

    if ( letter.length === show.length ) {
        
        overlay.className = 'win';
        overlay.style.display = 'flex';

        document.querySelector('h2').textContent = 'You are a Bone-afide winner!';

        randomIndex = Math.floor(Math.random() * questionArray.length);

        reset();
    } else if (missed >= 5) { 

        overlay.className = 'lose';
        overlay.style.display = 'flex';

        document.querySelector('h2').textContent = 'Try again, its a skele-ton of fun!';

        randomIndex = Math.floor(Math.random() * questionArray.length);

        reset();
    }

    
};

//reset function upon start button click. Resets the missed count, removes current question h3 and empties phrase content
//refills heart containers and deselects .chosen classes, adds new question and phrase
function reset() {
    startButton.addEventListener('click', () => {
        
        missed = 0;

        const banner = document.querySelector('#banner');
        const currentQuestion = document.querySelector('.questions');
        banner.removeChild(currentQuestion);
        phrase.textContent = '';
        phrase.style.display = '';

        const heartReload = document.querySelectorAll('.tries img');
        
        for(let i =0; i< heartReload.length; i++) {
           
            heartReload[i].src = 'images/liveHeart.png';
        };

        let chosenDeselect = document.querySelectorAll('.chosen');

        for(let i =0; i < chosenDeselect.length; i++) {
            chosenDeselect[i].classList.remove('chosen');
            chosenDeselect[i].disabled = false;
        };
        
        const question = getRandomQuestionsArray (questionArray);
        const phrasesParse = getRandomPhrasesArray(phrasesArray);
        addPhraseToDisplay(phrasesParse);
        addQuestionToDisplay(question);
        
    });
}


