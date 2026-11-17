// Exercise #3: Find a Minimum Score

let studentScores = [100, 20, 3, 1000];
let minScore = studentScores[0];

for (let scores of studentScores){
    if (minScore > scores) {
        minScore = scores;
    }
}
console.log(minScore);
