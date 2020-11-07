
const startButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelector ('#qwerty');
const phrase = document.querySelector ('#phrase');
const questionArray = ['When does a Skeleton Laugh?', 'What do skeletons hate the most about wind?', 'Why are graveyards so noisy?','Why was the skeleton so upset when the dog took his bone?','Why are skeletons so sad?'];
const phrasesArray = ['when someone tickles his funny bone', 'Nothing it goes right through them', 'Because of all the coffin','he did not have a leg to stand on', 'they have no body'];


var missed = 0

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

function getRandomPhrasesArray (arrP) {

var randomIndex = Math.floor(Math.random() * arrP.length);
var randomPhrase = arrP[randomIndex];
console.log(randomPhrase);
return;

}

getRandomPhrasesArray(phrasesArray, questionArray);


