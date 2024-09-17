function printNumbersOneToTwenty() {
    const output1 = document.getElementById("output1");
    for (let i = 1; i <= 20; i++) {
        let number = document.createTextNode(i + " ");
        output1.appendChild(number);
    }
}

function printNumbersTwentyToOne() {
    const output2 = document.getElementById("output2");
    for (let i = 20; i >= 1; i--) {
        let number = document.createTextNode(i + " ");
        output2.appendChild(number);
    }
}

function printEvenNumbersZeroToThirty() {
    let i = 0;
    const output3 = document.getElementById("output3");
    while (i <= 30) {
        if (i % 2 === 0) {
            let number = document.createTextNode(i + " ");
            output3.appendChild(number);
        }
        i++;
    }
}

window.onload = function () {
    printNumbersOneToTwenty();
    printNumbersTwentyToOne();
    printEvenNumbersZeroToThirty();
}