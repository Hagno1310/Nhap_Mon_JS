function kiemTraChanLe() {
    var n = parseInt(prompt("Nhập vào số nguyên:"));
    if (n % 2 == 0) {
        document.write("Số chắn");
    } else {
        document.write("Số lẻ");
    }
}

function tinhGiaiThua() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    var ans = 1;
    for (var i = 1; i <= n; i++) {
        ans *= i;
    }
    document.write(`Giai thừa của ${n} là ${ans}`);
}

function demSoChiaHet() {
    var count = 0;
    var i = 3 * 5
    while (i <= 100) {
        count += 1;
        i += 3 * 5;
    }
    document.write(`Có ${count} số chia hết cho 3 và 5 trong khoảng 1-100`)
}

function tongSoLe() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    document.write(`Tổng các số lẻ bé hơn ${n} là ${sum}`)
}

function bangCuuChuong() {
    do {
        var n = parseInt(prompt("Nhập vào số nguyên từ 2-9: "));
    } while (n < 2 || n > 9)
    
    for (var i = 1; i <= 10; i++) {
        document.write(`${n} x ${i} = ${n * i}<br>`)
    }    
}

function laSoNguyenTo() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    var check = true
    if (n <= 1) {
        document.write(`${n} không phải số nguyên tố`)
    } else {
        for (var i = 2; i <= n**0.5+1; i++) {
            if (n % i == 0) {
                check = false
                break
            }
        }
    }
    if (check) {
        document.write(`${n} là số nguyên tố`);
    } else {
        document.write(`${n} không phải số nguyên tố`);
    }
}   

function veTamGiac() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            if (j == i) {
                document.write('*<br>')
            } else {
                document.write('*')
            }
        }
    }
}

function xepLoai() {
    do {
        var n = parseFloat(prompt("Nhập vào số từ 0-10"))
    } while (n > 10 || n < 0)

    if (n >= 9) {
        document.write("Xuất sắc")
    } else if (n >= 8) {
        document.write("Giỏi")
    } else if (n >= 6.5) {
        document.write("Khá")
    } else if (n >= 5) {
        document.write("Trung bình")
    } else {
        document.write("Yếu")
    }
}

function tongChuSo() {
    var n = parseInt(prompt("Nhập vào số nguyên: "));
    var tong = 0;
    while (n != 0) {
        tong += n % 10;
        n = (n - n % 10) / 10
    }
    document.write(tong)
}


