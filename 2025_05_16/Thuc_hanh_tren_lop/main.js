document.write('<h1>Lặp lại câu hỏi 10 lần qua 3 vòng lặp </h1>')
document.writeln("Dùng vòng for<br>")
for ( var i=0; i < 10; i++) {
    document.writeln(`Lần ${i+1}: Em ăn cơm chưa? <br>`);
}

document.writeln("Dùng vòng while<br>")
var i = 0;
while (i < 10) {
    document.writeln(`Lần ${i+1}: Em ăn cơm chưa? <br>`);
    i++;
}

document.writeln("Dùng vòng do-while<br>")
var i = 0;
while (i < 10) {
    document.writeln(`Lần ${i+1}: Em ăn cơm chưa? <br>`);
    i++;
}

document.write('<h1> Tính tổng 100 số đầu tiên qua 3 vòng lặp </h1>')
document.write("Dùng vòng for<br>")
var sum_1 = 0;
for (var i = 1; i<=100; i++) {
    sum_1 += i;
};
document.writeln(`Tổng 100 số đầu tiên là: ${sum_1}<br>`);

document.writeln("Dùng vòng while<br>")

var sum_2 = 0;
var i = 1;
while (i<=100) {
    sum_2 += i;
    i++;
}
document.writeln(`Tổng 100 số đầu tiên là: ${sum_2}<br>`);

document.writeln("Dùng vòng do-while<br>")

var sum_3 = 0;
var i = 1;
do {
    sum_3 += i;
    i++;
}
while (i<=100)
document.writeln(`Tổng 100 số đầu tiên là: ${sum_3}<br>`);