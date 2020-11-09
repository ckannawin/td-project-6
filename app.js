
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelector ('#qwerty');
const phrase = document.querySelector ('#phrase');
const questionArray = ['When does a Skeleton Laugh?', 'What do skeletons hate the most about wind?', 'Why are graveyards so noisy?','Why was the skeleton so upset when the dog took his bone?','Why are skeletons so sad?'];
const phrasesArray = ['when someone tickles his funny bone', 'Nothing it goes right through them', 'Because of all the coffin','he did not have a leg to stand on', 'they have no body'];
var randomIndex = Math.floor(Math.random() * questionArray.length);

var missed = 0

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function getRandomPhrasesArray (arrP) {

    var randomPhrase = arrP[randomIndex];
    //console.log(randomPhrase);

    var phraseParse = Object.values(randomPhrase)
    //console.log(phraseParse);
    return phraseParse;
}

function getRandomQuestionsArray (arrQ) {
    var randomQuestion = arrQ[randomIndex];
    //console.log(randomQuestion);

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
        //console.log(letterItem);
        phrase.appendChild(letterItem);
    }
   
}

const question = getRandomQuestionsArray (questionArray);
const phrasesParse = getRandomPhrasesArray(phrasesArray);
// console.log(phrasesParse);
// console.log(question);
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
    }
    
});


