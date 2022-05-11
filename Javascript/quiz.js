window.onload = function () {
    document.getElementById("htmlquestions").style.display = 'block';
    document.getElementById("cssquestions").style.display = 'none';
    document.getElementById("javascriptquestions").style.display = 'none';
}
function onQuizSelected() {
    let Quiz = document.getElementById("Quizes").value;
    if (Quiz == "HTML" ) {
        document.getElementById("htmlquestions").style.display = 'block';
        document.getElementById("javascriptquestions").style.display = 'none';
        document.getElementById("cssquestions").style.display = 'none';
    }
    else if (Quiz == "Css") {
        document.getElementById("cssquestions").style.display = 'block';
        document.getElementById("htmlquestions").style.display = ' none';
        document.getElementById("javascriptquestions").style.display = 'none';
    }
    else {
        document.getElementById("javascriptquestions").style.display = 'block';
        document.getElementById("htmlquestions").style.display = 'none';
        document.getElementById("cssquestions").style.display = 'none';
    }


}

function onSubmit() {
    let score = 0;
    let numOfQuestions = 10;
    let ansArr = ['A', 'C', 'C', 'B', 'D', [A,D], [A,B], [B,C], [B,D]];

    let answer1 = document.forms['quiz']['answer1'].value;
    let answer2 = document.forms['quiz']['answer2'].value;
    let answer3 = document.forms['quiz']['answer3'].value;
    let answer4 = document.forms['quiz']['answer4'].value;
    let answer5 = document.forms['quiz']['answer5'].value;
    let answer6 = document.forms['quiz']['answer6'].value;
    let answer7 = document.forms['quiz']['answer7'].value;
    let answer8 = document.forms['quiz']['answer8'].value;
    let answer9 = document.forms['quiz']['answer9'].value;
    let answer10 = document.forms['quiz']['answer10'].value;

    for (let i = 1; i <= numOfQuestions; i++){
        if (eval('answer' + i) == ansArr[i - 1]) {
            score++;
        }
    }
    let results = document.getElementById('results');
    results.innerHTML = "<h2>You scored " + score + " points out of " + numOfQuestions + "</h2>"
    alert('You scored' + score + ' out of ' + numOfQuestions);
    return false;
}
