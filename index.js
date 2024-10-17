
function openOrderForm(productName, productPrice) {
    var orderForm = document.getElementById('orderForm');
    var productNameDisplay = document.getElementById('productNameDisplay');
    var productPriceDisplay = document.getElementById('productPriceDisplay');

    
    productNameDisplay.innerText = "Product: " + productName;
    productPriceDisplay.innerText = "Price: " + productPrice;

    
    orderForm.style.display = 'block';
}

function validateEmail(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitOrder() {
    var productName = document.getElementById('productNameDisplay').innerText;
    var productPrice = document.getElementById('productPriceDisplay').innerText;
    var customerName = document.getElementById('customerName').value;
    var customerPhone = document.getElementById('customerPhone').value;
    var customerEmail = document.getElementById('customerEmail').value;
    var customerLocation = document.getElementById('customerLocation').value;
    var emailErrorElement = document.getElementById('emailError');

    
    if (!validateEmail(customerEmail)) {
        emailErrorElement.innerText = "Please enter a valid email address.";
        return;
    } else {
        emailErrorElement.innerText = "";
    }

    
    if (!customerName || !customerEmail || !customerPhone || !customerLocation) {
        alert("Please fill in all required fields.");
        return; 
    }

    
    var orderDetails = productName +
        "\n" + productPrice +
        "\nName: " + customerName +
        "\nEmail: " + customerEmail +
        "\nLocation: " + customerLocation;

    alert("Order Details:\n" + orderDetails);

    
    closeOrderForm();
}
function closeOrderForm() {
    var orderForm = document.getElementById('orderForm');

    
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerLocation').value = '';

    
    orderForm.style.display = 'none';
}
// Add this to your existing JavaScript

