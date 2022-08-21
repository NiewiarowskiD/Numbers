const evenNumbersListContainer = document.querySelector('#even_numbers');
const oddNumbersListContainer = document.querySelector('#odd_numbers');
const sumListContainer = document.querySelector('#sum');
const sortedListContainer = document.querySelector('#sorted_numbers');

const allNumbers = [];
const evenNumbers= [];
const oddNumbers= [];
const sumerizedNumbers = [];
const sortedNumbers= [];

const runGame = () => {
    clearGame();
    drawNumbers();
    assignNumbers();
    sumUpNumbers();
    sortingNumbers();
    renderView();
};


const drawNumbers = () => {
    for(let i=0; i<20; i++){
        allNumbers.push(Math.ceil(Math.random() * 100));
        sortedNumbers.push(allNumbers[i]);
    }

    function sortingNum(a,b){
        return a - b;
    }
    sortedNumbers.sort(sortingNum);

}

const assignNumbers = () => {
    allNumbers.forEach(num => assignNumber(num))
}

const assignNumber = (num) => {
    if (isEven(num)) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
}

const sumUpNumbers = () => {
    const lengthierArray = evenNumbers.length >= oddNumbers.length ? evenNumbers : oddNumbers;
    lengthierArray.forEach((num, index) => {
        sumerizedNumbers.push(getSumOfTwoColumns(index));
    });
}


const sortingNumbers = () =>{




}

const renderView = () => {
    evenNumbers.forEach(evenNumber => appendListItems(evenNumber, evenNumbersListContainer));
    oddNumbers.forEach(oddNumber => appendListItems(oddNumber, oddNumbersListContainer));
    sumerizedNumbers.forEach(sumerizedNumber => appendListItems(sumerizedNumber, sumListContainer));
    sortedNumbers.forEach(sortedNumber => appendListItems(sortedNumber, sortedListContainer));

}


const appendListItems = (text, container) => {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    container.appendChild(liElement);
    liElement.classList.add('clean');
}

const getSumOfTwoColumns = index => {
    return (evenNumbers[index] ?? 0) + (oddNumbers[index] ?? 0);
}


const clearElement = (ulElement,title) => {
    ulElement.replaceChildren(title);
}

const clearGame = () => {
    clearElement(evenNumbersListContainer, 'PARZYSTE');
    clearElement(oddNumbersListContainer, 'NIEPARZYSTE');
    clearElement(sumListContainer, 'SUMA');
    clearElement(sortedListContainer, 'POSORTOWANE');
    allNumbers.length = 0;
    evenNumbers.length = 0;
    oddNumbers.length = 0;
    sumerizedNumbers.length = 0;
    sortedNumbers.length = 0;
}


const isEven = (num) => num % 2 === 0;



document.querySelector('#start_numbers').addEventListener('click', runGame);
