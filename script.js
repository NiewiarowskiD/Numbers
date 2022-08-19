
document.querySelector('#start_numbers').addEventListener('click', new_number);

let number_1,number_2;
let sorted_numbers=[];
let even_numbers=[];
let odd_numbers=[];
let sum = 0;


function new_number() {




    for(let i=0;i<10;i++){

        number_1 = (Math.floor(Math.random() * 100 + 1));
        number_2 = (Math.floor(Math.random() * 100 + 1));


        if (number_1 % 2 === 0) {
            even_numbers.push(number_1)
        } else {
            odd_numbers.push(number_1)
        }

        if (number_2 % 2 === 0) {
            even_numbers.push(number_2)
        } else {
            odd_numbers.push(number_2)
        }

        if(even_numbers[i] === undefined) {
            even_numbers.push(0);
        } else if (odd_numbers[i] === undefined){
            odd_numbers.push(0);
        }

        sum = even_numbers[i] + odd_numbers[i];

        sorted_numbers.push(number_1);
        sorted_numbers.push(number_2);

        const li_add_even = document.createElement('li');
        const li_add_odd = document.createElement('li');
        const li_add_sum = document.createElement('li');

        li_add_even.innerText = even_numbers[i];
        document.querySelector('#even_numbers').appendChild(li_add_even);
        li_add_odd.innerText = odd_numbers[i];
        document.querySelector('#odd_numbers').appendChild(li_add_odd);
        li_add_sum.innerText = sum;
        document.querySelector('#sum').appendChild(li_add_sum);


    }


    function sortingNum(a,b){
        return a - b;
    }

    sorted_numbers.sort(sortingNum);
    for(let i=0;i<20;i++) {
        const li_add_sorted = document.createElement('li');
        li_add_sorted.innerText = sorted_numbers[i];
        document.querySelector('#sorted_numbers').appendChild(li_add_sorted);

    }

}



//new_number();






