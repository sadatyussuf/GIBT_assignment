// JavaScript
const numbersDiv = document.querySelector('.numbers');

const numberItems = numbersDiv.querySelectorAll('li');

const submitNumber = document.querySelector('.submit-btn');

const dynamicNumber = document.querySelector('.dynamic-number');

const backCard = document.querySelector('.back-container');
const frontCard = document.querySelector('.front-container');


function handleSubmit() {
    submitNumber.addEventListener('click', () => {
        backCard.classList.remove('invisible');
        frontCard.style.display = "none"
    })
}


let prevItem = null;
// Loop through each li element and add a click event listener
numberItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (prevItem) {
            prevItem.style.backgroundColor = '';
            prevItem.style.color = '';
        }

        item.style.backgroundColor = "hsl(217, 12%, 63%)"
        item.style.color = "hsl(0, 0%, 100%)"

        prevItem = item;

        dynamicNumber.textContent = item.textContent

        handleSubmit()

    });
});
