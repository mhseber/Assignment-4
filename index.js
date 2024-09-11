//problem 1

function calculateTax(income, expenses) {
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input"
    }
    let difference = income - expenses;
    let tax = difference * 0.20;
    return tax;
}
// console.log(calculateTax(10000, 3000));
// console.log(calculateTax(34000, 1753));
// console.log(calculateTax(5000, 1500));
// console.log(calculateTax(7000, 7000));
// console.log(calculateTax(-5000, 2000));
// console.log(calculateTax(6000, -1500));



//problem 2

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
// console.log(sendNotification("zihad@gmail.com"));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification("nadim.naem5@outlook.com"));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));

//problem 3

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    const playDigits = /\d/.test(name);
    return playDigits;
}
// console.log(checkDigitsInName("Raj123"))
// console.log(checkDigitsInName("n9ayeem"))
// console.log(checkDigitsInName("e1mu3"))
// console.log(checkDigitsInName("Suman"))
// console.log(checkDigitsInName("Name2024"))
// console.log(checkDigitsInName("!@#"))
// console.log(checkDigitsInName(["Raj"]))

//problem 4

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

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));
// console.log(calculateFinalScore("hello"));
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));

//problem 5

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

// console.log(waitingTime([3, 5, 7, 11, 6], 10));
// console.log(waitingTime([13, 2], 6));
// console.log(waitingTime([13, 2, 6, 7, 10], 6));
// console.log(waitingTime([6], 4));
// console.log(waitingTime(7, 10));
// console.log(waitingTime("[6,2]", 9));
// console.log(waitingTime([7, 8, 3, 4, 5], "9"));


