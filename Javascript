// Change main image when clicking thumbnails
function changeImage(imageSrc) {
    document.getElementById("main-image").src = imageSrc;
}

// Update price based on size selection
function updatePrice() {
    let size = document.getElementById("size");
    let price = size.value;
    document.querySelector(".price").innerText = `$${price}`;
}

// Add to Cart Functionality
function addToCart() {
    document.getElementById("cart-message").innerText = "✔️ Item added to cart!";
}
