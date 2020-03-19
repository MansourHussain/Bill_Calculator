



let sub = document.querySelector('.submit');

sub.addEventListener('click', function() {

    let lastOne = document.querySelector('.last-one').value;
    let currentOne = document.querySelector('.current-one').value;
    let lastTwo = document.querySelector('.last-two').value;
    let currentTwo = document.querySelector('.current-two').value;
    
    let flatOne = currentOne - lastOne;
    let flatTwo = currentTwo - lastTwo;
    
    let amount1 = (flatOne)  * 0.18;
    let amount2 = (flatTwo) * 0.18;
    
    let price1 = (amount1) * 0.05;
    let price2 = (amount2 ) * 0.05;
    let sum1 = (amount1 + price1).toFixed(2);
    let sum2 = (amount2 + price2).toFixed(2);
    let final_price = (sum1 + sum2);
    let result = document.querySelector('.result');
    let price = document.querySelector('.price');
    let billAmount = document.querySelector('.final_price');
    result.innerHTML = `كمية استهلاك القاطع الأول:  ${flatOne}<br> كمية استهلاك القاطع الثاني: ${flatTwo}`;
    price.innerHTML = `قيمة استهلاك القاطع الأول: ${sum1} ريال <br> قيمة استهلاك القاطع الثاني: ${sum2} ريال <br>`;
    //billAmount.innerHTML = ` القيمة الإجمالية للفاتورة: ${final_price} ريال`;
    
})

