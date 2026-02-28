//HEALTH
let health = 100;
const healthEl = document.querySelector('#healthValue');
const attackBtn = document.querySelector('#attackButton');

function healthLevel() {
    healthEl.textContent = health;
    attackBtn.disabled = health <= 0;
}

attackBtn.addEventListener('click', () => {
    health = Math.max(0, health - 20);
    healthLevel();
});

healthLevel();


//LEVEL
let level = 5;
const levelEl = document.querySelector('#levelValue');
const levelUpBtn = document.querySelector('#levelUpButton');

function levelValue() {
    levelEl.textContent = level;
}

levelUpBtn.addEventListener('click', () => {
    level = level + 1;
    levelValue();
})

levelValue();
