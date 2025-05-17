function kiemTraChanLe() {
    var n = parseInt(prompt("Nhập vào số nguyên:"));
    if (n % 2 == 0) {
        document.getElementById('output').innerHTML = ("Số chẵn");
    } else {
        document.getElementById('output').innerHTML = ("Số lẻ");
    }
}

function tinhGiaiThua() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    var ans = 1;
    for (var i = 1; i <= n; i++) {
        ans *= i;
    }
    document.getElementById('output').innerHTML = (`Giai thừa của ${n} là ${ans}`);
}

function demSoChiaHet() {
    var count = 0;
    var i = 3 * 5
    while (i <= 100) {
        count += 1;
        i += 3 * 5;
    }
    document.getElementById('output').innerHTML = (`Có ${count} số chia hết cho 3 và 5 trong khoảng 1-100`)
}

function tongSoLe() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    document.getElementById('output').innerHTML = (`Tổng các số lẻ bé hơn ${n} là ${sum}`)
}

function bangCuuChuong() {
    document.getElementById('output').innerHTML = ''
    do {
        var n = parseInt(prompt("Nhập vào số nguyên từ 2-9: "));
    } while (n < 2 || n > 9)
    
    for (var i = 1; i <= 10; i++) {
        document.getElementById('output').innerHTML += (`${n} x ${i} = ${n * i}<br>`)
    }    
}

function laSoNguyenTo() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    var check = true
    if (n <= 1) {
        document.getElementById('output').innerHTML = (`${n} không phải số nguyên tố`)
    } else {
        for (var i = 2; i <= n**0.5+1; i++) {
            if (n % i == 0) {
                check = false
                break
            }
        }
    }
    if (check) {
        document.getElementById('output').innerHTML = (`${n} là số nguyên tố`);
    } else {
        document.getElementById('output').innerHTML = (`${n} không phải số nguyên tố`);
    }
}   

function veTamGiac() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            if (j == i) {
                document.getElementById('output').innerHTML += ('*<br>')
            } else {
                document.getElementById('output').innerHTML += ('*')
            }
        }
    }
}

function xepLoai() {
    do {
        var n = parseFloat(prompt("Nhập vào số từ 0-10"))
    } while (n > 10 || n < 0)

    if (n >= 9) {
        document.getElementById('output').innerHTML = ("Xuất sắc")
    } else if (n >= 8) {
        document.getElementById('output').innerHTML = ("Giỏi")
    } else if (n >= 6.5) {
        document.getElementById('output').innerHTML = ("Khá")
    } else if (n >= 5) {
        document.getElementById('output').innerHTML = ("Trung bình")
    } else {
        document.getElementById('output').innerHTML = ("Yếu")
    }
}

function tongChuSo() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    const a = n;
    var tong = 0;
    while (n != 0) {
        tong += n % 10;
        n = (n - n % 10) / 10
    }
    document.getElementById('output').innerHTML = (`Tổng các chữ số của số ${a} là ${tong}`)
}


