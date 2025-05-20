function appendToScreen(value) {
    const screen = document.getElementById('screen')
    screen.value += value;
}

function clearScreen() {
    const screen = document.getElementById('screen')
    screen.value = '';
}

function caculate() {
    const screen = document.getElementById('screen')
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Lỗi phép tính';
    }
}