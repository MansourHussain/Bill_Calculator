



let sub = document.querySelector('.submit');

sub.addEventListener('click', function() {

    let lastOne = document.querySelector('.last-one').value;
    let currentOne = document.querySelector('.current-one').value;
    let lastTwo = document.querySelector('.last-two').value;
    let currentTwo = document.querySelector('.current-two').value;
    
    let flatOne = currentOne - lastOne;
    let flatTwo = currentTwo - lastTwo;
    
    let amount = (flatOne + flatTwo)  * 0.18;
    let vat = (amount) * 0.05;
    let sum = (amount + vat).toFixed(2);
    let result = document.querySelector('.result');
    let price = document.querySelector('.price');

    result.innerHTML = `flat one: ${flatOne}<br> flat two: ${flatTwo}`;
    price.innerHTML = `${sum} SAR`;
    
})

