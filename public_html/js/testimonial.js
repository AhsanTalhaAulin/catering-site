let slide_col = document.getElementById('slide');
let slide_btn = document.getElementsByClassName('slide-btn');

// slide_col.forEach(element => {
//     console.log(slide_col[element]);
// });

slide_btn[0].onclick = function() {
    slide_col.style.transform = "translateX(0vh)";
}
slide_btn[1].onclick = function() {
    slide_col.style.transform = "translateX(-100vh)";
}
slide_btn[2].onclick = function() {
    slide_col.style.transform = "translateX(-200vh)";
}
slide_btn[3].onclick = function() {
    slide_col.style.transform = "translateX(-300vh)";
}