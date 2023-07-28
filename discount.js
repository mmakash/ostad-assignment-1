// problem 1
function discountCounting(purchaseAmount){
    if(purchaseAmount >= 50 && purchase <= 100){
        const newAmount = purchaseAmount * 0.05;
        const discountPrice = purchaseAmount - newAmount;
        return discountPrice;
    }
    else if(purchaseAmount > 100 && purchaseAmount >= 200){
        const newAmount = purchaseAmount * 0.1;
        const discountPrice = purchaseAmount - newAmount;
        return discountPrice;
    }
    else if(purchase > 200){
        const newAmount = purchaseAmount * 0.15;
        const discountPrice = purchaseAmount - newAmount;
        return discountPrice;
    }
}
const purchase = 60;
const result = discountCounting(purchase);
console.log(`Actual Price : ${purchase}`);
console.log(`Discount Price : ${result}`);