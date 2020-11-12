
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelector ('#qwerty');
const phrase = document.querySelector ('#phrase');
const tries = document.querySelectorAll('.tries');
const questionArray = ['How do you make a Skeleton Laugh?', 'What do skeletons hate the most about wind?', 'Why are graveyards so noisy?','Why was the skeleton so upset when the dog took his bone?','Why are skeletons so sad?'];
const phrasesArray = ['tickle their funny bone', 'it goes right through them', 'all the coffin','took his leg to stand on', 'they have no body'];
var randomIndex = Math.floor(Math.random() * questionArray.length);

var missed = 0

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function getRandomPhrasesArray (arrP) {

    var randomPhrase = arrP[randomIndex];
    var phraseParse = Object.values(randomPhrase)
    return phraseParse;
}

function getRandomQuestionsArray (arrQ) {
    var randomQuestion = arrQ[randomIndex];
    return randomQuestion;
    }
function addQuestionToDisplay(arr) {
    let appendQuestion = document.createElement('h3');
    appendQuestion.textContent = arr;
    document.querySelector('#banner').appendChild(appendQuestion);
    appendQuestion.className = "questions";
}

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

const question = getRandomQuestionsArray (questionArray);
const phrasesParse = getRandomPhrasesArray(phrasesArray);
addPhraseToDisplay(phrasesParse);
addQuestionToDisplay(question);


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

qwerty.addEventListener ('click', (e) => {

    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        
        e.target.disabled = 'true';

        checkLetter(e.target);
        let letterFound = checkLetter(e.target);
        
        if (letterFound === null) {
            missed += 1;
            const ol = document.querySelector('#scoreboard-list');
            ol.removeChild(tries[missed - 1]);
        } 
    }
    checkWin();
});

function checkWin() {

    let letter = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');

    if ( letter.length === show.length ) {
        
        overlay.className = 'win';
        overlay.style.display = 'flex';

        document.querySelector('h2').textContent = 'You are a Bone-afide winner!';
    } else if (missed >= 5) { 

        overlay.className = 'lose';
        overlay.style.display = 'flex';

        document.querySelector('h2').textContent = 'Try again, its a skele-ton of fun!';
    }
};


