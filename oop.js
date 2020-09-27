
function bill() {
    let lastOne = document.querySelector('.last-one').value;
    let currentOne = document.querySelector('.current-one').value;
    let lastTwo = document.querySelector('.last-two').value;
    let currentTwo = document.querySelector('.current-two').value;
    

    if (lastOne >= currentOne || lastTwo>= currentTwo) {
        alert('يجب أن تكون قراءة القاطع الحالية أعلى من السابقة!')
    }
    
    else {
        let flatOne = currentOne - lastOne;
        let flatTwo = currentTwo - lastTwo;
        
        let amount1 = (flatOne)  * 0.18;
        let amount2 = (flatTwo) * 0.18;
        
        let price1 = (amount1) * 0.15;
        let price2 = (amount2 ) * 0.15;
        let sum1 = (amount1 + price1).toFixed(2);
        let sum2 = (amount2 + price2).toFixed(2);
        let final_price = (sum1 + sum2);
        let result = document.querySelector('.result');
        let price = document.querySelector('.price');
        let billAmount = document.querySelector('.final_price');
        result.innerHTML = `كمية استهلاك القاطع الأول:  ${flatOne} واط <br> كمية استهلاك القاطع الثاني: ${flatTwo} واط `;
        price.innerHTML = `قيمة استهلاك القاطع الأول: ${sum1} ريال <br> قيمة استهلاك القاطع الثاني: ${sum2} ريال <br>`;
    }
}
