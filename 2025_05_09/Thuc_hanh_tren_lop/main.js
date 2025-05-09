var a = parseInt(prompt("Nhập vào số a"));
var b = parseInt(prompt("Nhập vào số b"));

console.log(a+b);

if (a > b) {
    console.log(`${a} lớn hơn ${b}`)
}
else if (a == b) {
    console.log(`${a} bằng ${b}`)
}
else {
    console.log(`${b} lớn hơn ${a}`)
}

var date = parseInt(prompt('Nhập số ngẫu nhiên từ 1-7: '));

while (date > 7 || date < 1) {
    date = parseInt(prompt('Nhập lại số ngẫu nhiên từ 1-7: '));
}

switch (date) {
    case 1:
        console.log("Đây là số thứ tự của Chủ Nhật");s
        break
    case 2:
        console.log("Đây là số thứ tự của thứ Hai");
        break
    case 3:
        console.log("Đây là số thứ tự của thứ Ba");
        break
    case 4:
        console.log("Đây là số thứ tự của thứ Bốn");
        break
    case 5:
        console.log("Đây là số thứ tự của thứ Năm");
        break
    case 6:
        console.log("Đây là số thứ tự của thứ Sáu");
        break
    case 7:
        console.log("Đây là số thứ tự của thứ Bảy");
        break
}