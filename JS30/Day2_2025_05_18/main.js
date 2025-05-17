function fibonacci() {
    var n = parseInt(prompt("Nhập vào số nguyên"))
    fib = new Array;
    fib[0] = 1
    fib[1] = 1
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    document.getElementById('output').innerHTML = fib[n-1];
}

function daoNguocChuoi() {
    var str = prompt("Nhập vào chuỗi");
    var ans = new String
    for (var i = str.length-1; i >= 0; i--) {
        ans += str[i]
    }
    document.getElementById('output').innerHTML = ans;
}

function laNamNhuan() {
    var year = parseInt(prompt("Nhập vào năm để kiểm tra"))
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        document.getElementById('output').innerHTML = (`${year} là năm nhuận`);
    }
    document.getElementById('output').innerHTML = (`${year} không phải là năm nhuận`);
}

function kiemTraMatKhau() {
    var password = prompt("Nhập vào mật khẩu để kiểm tra")
    let pattern1 = /[A-Z]/g;
    let pattern2 = /[a-z]/g;
    let pattern3 = /[0-9]/g;


    const ans1 = password.match(pattern1);
    const ans2 = password.match(pattern2);
    const ans3 = password.match(pattern3);

    
    if (ans1 == null || ans2 == null || ans3 == null) {
        document.getElementById('output').innerHTML = ("Đây không phải là một mật khẩu mạnh");
        return
    }

    if (password.length >= 8 && ans1.length >= 1 &&  ans2.length >= 1 &&  ans3.length >= 1) {
            document.getElementById('output').innerHTML = ("Đây là một mật khẩu mạnh");
    } else {
        document.getElementById('output').innerHTML = ("Đây không phải là một mật khẩu mạnh");
    }

}