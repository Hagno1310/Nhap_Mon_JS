var editingRow = null;

function saveData() {
    var data = document.getElementById('studentList')
    localStorage.setItem(JSON.stringify)
}

document.getElementById('btn').addEventListener('click', function() {
    const msv = document.getElementById('msv').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value

    if (editingRow) {
        editingRow.cells[0].textContent = msv;
        editingRow.cells[1].textContent = name;
        editingRow.cells[2].textContent = email;
        editingRow.cells[3].textContent = phone;

        editingRow = null;
        document.getElementById('btn').textContent = "Thêm";
        resetForm();
        return;
    } else {
        const tbody = document.getElementById('list').getElementsByTagName('tbody')[0];
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>${msv}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td class="action">
                <div id="change" class="change">Sửa</div>
            </td>
        `
        tbody.appendChild(row)

        row.querySelector('.change').addEventListener('click', function() {
            const cells = row.getElementsByTagName('td');
            document.getElementById('msv').value = cells[0].textContent;
            document.getElementById('name').value = cells[1].textContent;
            document.getElementById('email').value = cells[2].textContent;
            document.getElementById('phone').value = cells[3].textContent;

            editingRow = row
            document.getElementById('btn').textContent = "Lưu"
        })
        resetForm()
    }

    function resetForm() {
        document.getElementById('msv').value = "";
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('phone').value = "";
    }
})
