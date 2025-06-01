class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = parseFloat(price);
        this.quantity = parseInt(quantity);
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    toRowHTML() {
        return `
            <td>${this.id}</td>
            <td>${this.name}</td>
            <td>${this.price}</td>
            <td>${this.quantity}</td>
            <td>${this.getTotalPrice()}</td>
            <td class="action last">
                <div class="change btn-action">Sửa</div>
                <div class="delete btn-action">Xóa</div>
            </td>
        `;
    }
}

let products = [];
let editingRow = null;

document.getElementById("btn-add").addEventListener('click', function () {
    const id = document.getElementById('id').value.trim();
    const name = document.getElementById('name').value.trim();
    const price = document.getElementById('price').value.trim();
    const quantity = document.getElementById('quantity').value.trim();

    if (!editingRow && products.some(p => p.id === id)) {
        alert("ID đã tồn tại. Vui lòng nhập ID khác.");
        return;
    }

    const product = new Product(id, name, price, quantity);

    const tbody = document.getElementById('list').getElementsByTagName('tbody')[0];

    if (editingRow) {
        const cells = editingRow.getElementsByTagName('td');
        cells[0].textContent = product.id;
        cells[1].textContent = product.name;
        cells[2].textContent = product.price;
        cells[3].textContent = product.quantity;
        cells[4].textContent = product.getTotalPrice();

        const index = products.findIndex(p => p.id === product.id);
        if (index !== -1) products[index] = product;

        editingRow = null;
        document.getElementById('btn-add').textContent = "Thêm";
    } else {
        const row = document.createElement('tr');
        row.innerHTML = product.toRowHTML();
        tbody.appendChild(row);
        products.push(product);

        row.querySelector('.change').addEventListener('click', function () {
            const cells = row.getElementsByTagName('td');
            document.getElementById('id').value = cells[0].textContent;
            document.getElementById('name').value = cells[1].textContent;
            document.getElementById('price').value = cells[2].textContent;
            document.getElementById('quantity').value = cells[3].textContent;

            editingRow = row;
            document.getElementById('btn-add').textContent = "Lưu";
        });

        row.querySelector('.delete').addEventListener('click', function () {
            const idToDelete = row.getElementsByTagName('td')[0].textContent;
            products = products.filter(p => p.id !== idToDelete);
            row.remove();
            document.getElementById('btn-add').textContent = "Thêm";
            resetForm();
        });
    }

    resetForm();

    function resetForm() {
        document.getElementById('id').value = "";
        document.getElementById('name').value = "";
        document.getElementById('price').value = "";
        document.getElementById('quantity').value = "";
    }
});

function calculatePrice() {
    return products.reduce((sum, p) => sum + p.getTotalPrice(), 0);
}

document.getElementById('total').textContent = calculatePrice();

function highestPrice() {
    if (products.length === 0) return null;
    let max = products.reduce((prev, curr) => curr.price > prev.price ? curr : prev);
    console.log("Sản phẩm giá cao nhất:", max);
}

