var array = [7,6,9,7,4,1,2,3,5,2,6,9,8,5]
var array_2 = [5,6,3,4,7,9,2,1,2,5,7,6]
var array_3 = array.concat(array_2)
//Hàm đồ dài mảng length
document.write('Hàm length <br>')
document.write(array.length, '<br>')

//Hàm join
document.write('Hàm join <br>')
document.write(array.join('-'), '<br>')

//Hàm concat
document.write('Hàm concat <br>')
document.write(array.concat(array_2).join(' '), '<br>')

//Hàm slice
document.write('Hàm slice <br>')
document.write(array.slice(4, 12).join(' '), '<br>')

//Hàm reverse
document.write('Hàm reverse <br>')
document.write(array.reverse().join(' '), '<br>')

//Hàm sort
document.write('Hàm sort <br>')
document.write(array_3.sort().join(' '), '<br>')

//Hàm sort ngược
function sort_2(array) {
    return array.sort().reverse()
}

document.write('Sort ngược <br>')
document.write(sort_2(array_3).join(' '), '<br>')

