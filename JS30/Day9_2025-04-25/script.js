var background = document.getElementById('background')

document.getElementById('btn').addEventListener('click', function() {
    const selectedValue = document.getElementById("bg-pics").value;
    if (selectedValue == 'A') {
        background.style.backgroundImage = "url('/images/img_1.jpg')"
    } else if (selectedValue == 'B') {
        background.style.backgroundImage = "url('/images/img_2.jpg')"
    } else if (selectedValue == 'C') {
        background.style.backgroundImage = "url('/images/img_3.jpg')"
    } else {
        background.style.backgroundImage = "url('/images/img_4.jpg')"
    }
})