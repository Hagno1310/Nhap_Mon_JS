function showScreen(value) {
    var screen = document.getElementById('screen');
    if (screen.value != 'Lỗi tính toán') {
        screen.value += value;
    } else {
        screen.value = '';
        screen.value += value;
    }
}

function clearScreen() {
    var screen = document.getElementById('screen');
    screen.value = ""
}

function calculate() {
    var screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value)
    } catch(error) {
        screen.value = 'Lỗi tính toán'
    };
}