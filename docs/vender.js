// Función para actualizar la vista previa del producto
function updatePreview() {
    var productName = document.getElementById('productName').value;
    var productCategory = document.getElementById('productCategory').value;
    var productDescription = document.getElementById('productDescription').value;

    document.getElementById('previewProductName').textContent = `Nombre: ${productName}`;
    document.getElementById('previewProductCategory').textContent = `Categoría: ${productCategory}`;
    document.getElementById('previewProductDescription').textContent = `Descripción: ${productDescription}`;
}
function updateImagePreview() {
    var carouselImages = document.getElementById('carouselImages');
    carouselImages.innerHTML = ''; 

    var input = document.getElementById('productImages');
    if (input.files && input.files.length > 0) {
        for (let i = 0; i < input.files.length; i++) {
            var reader = new FileReader();
            reader.onload = (function(file) {
                return function(e) {
                    var imageSrc = e.target.result;

                    var item = document.createElement('div');
                    item.classList.add('carousel-item');
                    if (i === 0) {
                        item.classList.add('active'); 
                    }

                    var img = document.createElement('img');
                    img.src = imageSrc;
                    img.classList.add('d-block', 'w-100');
                    img.style.maxHeight = '200px';

                    item.appendChild(img);
                    carouselImages.appendChild(item);
                };
            })(input.files[i]);
            reader.readAsDataURL(input.files[i]);
        }
    }
}


function uploadProduct() {
    if (document.getElementById('securityPolicy').checked) {
        alert('Producto subido con éxito.');
    } else {
        alert('Debe aceptar las políticas de seguridad.');
    }
}
