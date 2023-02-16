const creditA = document.getElementById("credit-a")
const creditB = document.getElementById("credit-b")
const creditC = document.getElementById("credit-c")
const creditD = document.getElementById("credit-d")
var totalCredits = 0
var gradePoints = 0
var gpa = 0

function calculateCGPA() {
    const creditsA = parseInt(creditA.value);
    const creditsB = parseInt(creditB.value);
    const creditsC = parseInt(creditC.value);
    const creditsD = parseInt(creditD.value);
    totalCredits = creditsA + creditsB + creditsC + creditsD;

    if (totalCredits === 0) {
        document.getElementById("gpa-result").innerHTML = "Nhập đầy đủ số lượng tín chỉ";
        return;
    }

    gradePoints = creditsA * 4 + creditsB * 3 + creditsC * 2 + creditsD;
    gpa = gradePoints / totalCredits;

    document.getElementById("gpa-result").innerHTML = "GPA của bạn là : " + gpa.toFixed(2);
}

function calculateRemainingCredits() {
    calculateCGPA()
    const gpaRemain = parseFloat(document.getElementById('grade-goal').value)
    const numberCredit = parseInt(document.getElementById('credit-x').value)
    console.log(gpaRemain, totalCredits, numberCredit, gradePoints)
    var neededPoints = gpaRemain * (totalCredits + numberCredit) - gradePoints
    console.log(neededPoints);
    const x = Math.ceil(neededPoints - 3 * numberCredit)
    const y = numberCredit - x
    document.getElementById("gpa-remain-result").innerHTML = "Bạn cần " + x + " tín chỉ A và " + y + " tín chỉ B để đạt GPA là " + gpaRemain;
}