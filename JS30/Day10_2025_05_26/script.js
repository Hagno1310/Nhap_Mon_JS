var index = 1;

document.getElementById('next').addEventListener('click', function() {
    if (index < 4 && index >= 1) {
        index++;
        console.log(index)
        if (index == 2) {
            document.getElementById('slide').style.backgroundImage = "url(/images/img_2.jpg)"
        } else if (index == 3) {
            document.getElementById('slide').style.backgroundImage = "url(/images/img_3.jpg)"
        } else {
            document.getElementById('slide').style.backgroundImage = "url(/images/img_4.jpg)"
        }
    }
})

document.getElementById('prev').addEventListener('click', function() {  
    if (index <= 4 && index > 1)
        index--;
        if (index == 3) {
            document.getElementById('slide').style.backgroundImage = "url(/images/img_3.jpg)"
        } else if (index == 2) {
            document.getElementById('slide').style.backgroundImage = "url(/images/img_2.jpg)"
        } else {
            document.getElementById('slide').style.backgroundImage = "url(/images/img_1.jpg)"
        }
    
})