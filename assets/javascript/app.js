function SubmitAnswers() {
    var total = 10;
    var score = 0;

    var q1 = document.forms["triviaform"]["q1"].value;
    var q2 = document.forms["triviaform"]["q2"].value;
    var q3 = document.forms["triviaform"]["q3"].value;
    var q4 = document.forms["triviaform"]["q4"].value;
    var q5 = document.forms["triviaform"]["q5"].value;
    var q6 = document.forms["triviaform"]["q6"].value;
    var q7 = document.forms["triviaform"]["q7"].value;
    var q8 = document.forms["triviaform"]["q8"].value;
    var q9 = document.forms["triviaform"]["q9"].value;
    var q10= document.forms["triviaform"]["q10"].value;

    for(i = 1; i <= total;i++) {
        if(eval('q'+i) == null || q1 == '') {
        alert('You missed question' + i);
        return false;

    

    }
}

var answers = ["c","a","d","b","c","a","c","b","d","b"];

for(i = 1; i <= total;i++) {
if(eval('q'+i) == answers[i - 1]) {
    score++;
    }

}

var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
alert('Your score is '+score+' out of ' +total);



}