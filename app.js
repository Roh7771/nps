const firstVote = 7;
const secondVote = 7;
const thirdVote = 7;

let promoutersCount = 0;
let detractorsCount = 0;

if (firstVote >= 9) {
    promoutersCount = promoutersCount + 1;
}
if (firstVote <= 6) {
    detractorsCount = detractorsCount + 1;
}

if (secondVote >= 9) {
    promoutersCount = promoutersCount + 1;
}
if (secondVote <= 6) {
    detractorsCount = detractorsCount + 1;
}

if (thirdVote >= 9) {
    promoutersCount = promoutersCount + 1;
}
if (thirdVote <= 6) {
    detractorsCount = detractorsCount + 1;
}

const nps = (promoutersCount / 3 - detractorsCount / 3) * 100;

console.log(nps);

console.log(promoutersCount);
console.log(detractorsCount);