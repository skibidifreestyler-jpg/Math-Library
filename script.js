function re2(n, displayElement) {
    let a = n;

    if (a === 0) {
        displayElement.textContent = "N0";
        return;
    }

    do {
        a = a / 2;
    } while (a % 2 === 0 && a > 1);

    if (a === 1) {
        displayElement.textContent = "Yes!";
    } else {
        displayElement.textContent = "No!";
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('numberInput');
    const button = document.getElementById('checkButton');
    const result = document.getElementById('result');

    button.addEventListener('click', () => {
        const value = Number(input.value);
        re2(value, result);
    });
});
