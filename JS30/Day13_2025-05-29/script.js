document.getElementById('btn').addEventListener('click', function() {
    const msv = document.getElementById('msv').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value


    var tbody = document.getElementById('list').getElementsByTagName('tbody')[0];
    const row = document.createElement('tr')
    row.innerHTML = `
        <td>${msv}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
    `;
    tbody.appendChild(row)
})
