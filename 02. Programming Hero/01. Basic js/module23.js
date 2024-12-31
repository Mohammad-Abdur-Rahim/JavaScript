
function calculateTax(income, expense) {
    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    const Remaining = income - expense;
    const taxCalculate = Remaining * 0.20;
    return taxCalculate;
}

function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    const parts = email.split('@');
    const username = parts[0];
    const domainName = parts[1];
    return username + " sent you an email from " + domainName;
}

function checkDigitsInName(input) {
    if (typeof input !== 'string') {
        return "Invalid Input";
    }
    for (const num of input) {

        if (!isNaN(num)) {
            return true;
        }
    }
    return false;
}

function calculateFinalScore(input) {
    if (typeof input !== 'object') {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFamily } = input;
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFamily !== 'boolean') {
        return "Invalid Input";
    }
    if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
        return "Invalid Input";
    }
    let finalScore = testScore + schoolGrade;
    if (isFamily) {
        finalScore += 20;
    }
    return finalScore >= 80;
}

function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    if (interviewTimes.some(time => typeof time !== 'number' || time <= 0)) {
        return "Invalid Input";
    }

    let totalInterviewTime = 0;
    for (const interview of interviewTimes) {
        totalInterviewTime += interview;
    }
    const averageTime = Math.round(totalInterviewTime / interviewTimes.length);
    if (serialNumber <= interviewTimes.length) {
        return 0;
    }
    const peopleAhead = serialNumber - 1 - interviewTimes.length;

    const waitingTime = peopleAhead * averageTime;
    return waitingTime;
}

