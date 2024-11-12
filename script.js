function calculateTotal() {
    
    const quantity = parseInt(document.getElementById('quantity').value);
    const productPrice = parseFloat(document.getElementById('product').value);

    if (!isNaN(quantity) && quantity > 0) {
        
        const totalCost = quantity * productPrice;

        
        document.getElementById('result').innerText = `Общая стоимость: ${totalCost.toFixed(2)} рублей`;
    } else {
        alert("Пожалуйста, выберите положительное количество товаров.");
    }
}