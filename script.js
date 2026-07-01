// Сагсны анхны утга
let cartCount = 0;

// Хуудаснаас элементүүдийг сонгож авах
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Товчлуур бүрт дарах үйлдэл (Event Listener) нэмэх
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++; // Тоог 1-ээр нэмэгдүүлнэ
        cartCountElement.textContent = cartCount; // Дэлгэц дээр шинэчилж харуулна
        alert('Бүтээгдэхүүн сагсанд амжилттай нэмэгдлээ!');
    });
});