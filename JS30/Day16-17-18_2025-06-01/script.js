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
            <td>${this.price} VNĐ</td>
            <td>${this.quantity}</td>
            <td>${this.getTotalPrice()} VNĐ</td>
            <td class="action">
                <div class="btn-container">
                    <div class="change btn-action">Sửa</div>
                    <div class="delete btn-action">Xóa</div>
                </div>
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
        updateTotal();
        updateHighest();

        row.querySelector('.change').addEventListener('click', function () {
            const cells = row.getElementsByTagName('td');
            document.getElementById('id').value = cells[0].textContent;
            document.getElementById('name').value = cells[1].textContent;
            document.getElementById('price').value = cells[2].textContent;
            document.getElementById('quantity').value = cells[3].textContent;

            editingRow = row;
            updateTotal()
            updateHighest();
            document.getElementById('btn-add').textContent = "Lưu";
        });

        row.querySelector('.delete').addEventListener('click', function () {
            const idToDelete = row.getElementsByTagName('td')[0].textContent;
            products = products.filter(p => p.id !== idToDelete);
            row.remove();
            updateTotal()
            updateHighest();

            editingRow = null;
            document.getElementById('btn-add').textContent = "Thêm";
            resetForm();
        });
    }

    updateTotal()
    updateHighest();
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

function updateTotal() {
    document.getElementById('total').textContent = calculatePrice();
}


function highestPrice() {
    if (products.length === 0) return {'name': 'Không có gì', 'price': 0};
    let max = products.reduce((prev, curr) => curr.price > prev.price ? curr : prev);
    return max;
}

function updateHighest() {
    document.getElementById('highest_price').textContent = highestPrice().price;
    document.getElementById('item').textContent = highestPrice().name;
}

document.getElementById('search-btn').addEventListener('click', function () {
    const id = document.getElementById('search').value.trim();
    const tbody = document.getElementById('list').getElementsByTagName('tbody')[0];

    clearTable();

    if (id === "") {
        
        products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = product.toRowHTML();
            tbody.appendChild(row);
        });
    } else {
        const found = products.find(p => p.id === id);

        if (found) {
            const row = document.createElement('tr');
            row.innerHTML = found.toRowHTML();
            tbody.appendChild(row);
        } else {
            alert("Không tìm thấy sản phẩm có ID: " + id);
        }
    }

    updateTotal();
    updateHighest();

    function clearTable() {
        tbody.innerHTML = "";
    }
});
