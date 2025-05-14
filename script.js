// Función para filtrar productos por el buscador
function searchProducts() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(function(product) {
        let productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(input)) {
            product.style.display = "block"; // Mostrar el producto si coincide
        } else {
            product.style.display = "none"; // Ocultar el producto si no coincide
        }
    });
}
