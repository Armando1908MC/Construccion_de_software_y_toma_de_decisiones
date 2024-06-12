function calculateTotal() {
    const price1 = 10.00;
    const price2 = 20.00;
    const price3 = 30.00;
    const ivaRate = 0.16;

    let quantity1 = document.getElementById('quantity1').value;
    let quantity2 = document.getElementById('quantity2').value;
    let quantity3 = document.getElementById('quantity3').value;

    // Validar cantidades
    if (quantity1 < 1 || quantity1 > 100) {
        alert('La cantidad del Producto 1 debe estar entre 1 y 100');
        return;
    }
    if (quantity2 < 1 || quantity2 > 100) {
        alert('La cantidad del Producto 2 debe estar entre 1 y 100');
        return;
    }
    if (quantity3 < 1 || quantity3 > 100) {
        alert('La cantidad del Producto 3 debe estar entre 1 y 100');
        return;
    }

    let total = (price1 * quantity1) + (price2 * quantity2) + (price3 * quantity3);
    let iva = total * ivaRate;
    let totalWithIva = total + iva;

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('iva').textContent = iva.toFixed(2);
    document.getElementById('totalWithIva').textContent = totalWithIva.toFixed(2);
}

document.getElementById('totals').addEventListener('mouseover', function() {
    this.classList.toggle('changed-style');
});
