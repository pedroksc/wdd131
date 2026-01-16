let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
const text = document.querySelectorAll('#content-text, h1');
const h2 = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "grey";
        h2.style.color = "rgb(106, 185, 255)"
        text.forEach(el => el.style.color = "white");
        logo.src = "images/byui-logo-white.png";

    } else if (current == 'light') {
        document.body.style.backgroundColor = "white";
        h2.style.color = "rgb(49, 109, 222)"
        text.forEach(el => el.style.color = "black");
        logo.src = "images/byui-logo-blue.jpg";
    }
}