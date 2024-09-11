

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input"
    }
    let difference = income - expenses;
    let tax = difference * 0.20;
    return tax;
}



function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    const elements = email.split('@');

    if (elements.length !== 2 || elements[0] === '' || elements[1] === '') {
        return "Invalid Email";
    }
    const userName = elements[0];
    const domainName = elements[1];

    return `${userName} sent you an email from ${domainName}`;
}




function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    const playDigits = /\d/.test(name);
    return playDigits;
}



function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return "Invalid Input";
    }
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFFamily !== 'boolean') {
        return "Invalid Input";
    }
    if (testScore > 50 || schoolGrade > 30 || testScore < 0 || schoolGrade < 0) {
        return "Invalid Input";
    }
    let totalScore = testScore + schoolGrade;
    if (isFFamily) {
        totalScore += 20;
    }
    return totalScore >= 80;
}



function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    const totalWaitingTimes = waitingTimes.length;
    const sumOfTimes = waitingTimes.reduce((sum, time) => sum + time, 0)
    const averageTime = Math.round(sumOfTimes / totalWaitingTimes);
    const avgPeople = serialNumber - totalWaitingTimes - 1;
    if (avgPeople <= 0) {
        return 0;
    }
    const waitingTime = avgPeople * averageTime;
    return waitingTime;
}