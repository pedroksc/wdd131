
const characterCard = {
    name: 'Snortleblat',
    image: 'images/image.png',
    class: 'Swamp Beast Diplomat',
    health: 100,
    level: 5,

    healthLevel: function() {
        healthEl.textContent = health;
        attackBtn.disabled = health <= 0;
    },

    levelValue: function () {
        levelEl.textContent = level;
    }
}



//HEALTH
let health = 100;
const healthEl = document.querySelector('#healthValue');
const attackBtn = document.querySelector('#attackButton');

attackBtn.addEventListener('click', () => {
    health = Math.max(0, health - 20);
    characterCard.healthLevel();
    if (health <= 0) {
        // The setTimeout just makes it so the alert doestn’t pop up until after the health has been updated to 0 and the button is disabled.
        setTimeout(() => alert('Your character has been defeated!'), 10);
    }
});

characterCard.healthLevel();


//LEVEL
let level = 5;
const levelEl = document.querySelector('#levelValue');
const levelUpBtn = document.querySelector('#levelUpButton');



levelUpBtn.addEventListener('click', () => {
    level = level + 1;
    characterCard.levelValue();
})

characterCard.levelValue();

//NAME
const characterNameEl = document.querySelector('#characterName');
characterNameEl.textContent = characterCard.name;

//IMAGE
const characterImageEl = document.querySelector('img');
characterImageEl.src = characterCard.image;
characterImageEl.alt = characterCard.name;

//CLASS
const characterClassEl = document.querySelector('#characterClass');
characterClassEl.textContent = `Class: ${characterCard.class}`;
