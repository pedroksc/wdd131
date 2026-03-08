const characterCard = {
    name: 'Snortleblat',
    image: 'images/image.png',
    class: 'Swamp Beast Diplomat',
    health: 100, 
    level: 5,    

    
    takeDamage: function() {
        this.health = Math.max(0, this.health - 20);
        this.updateUI();
        if (this.health <= 0) {
            setTimeout(() => alert('Your character has been defeated!'), 10);
        }
    },

    
    levelUp: function() {
        this.level += 1;
        this.updateUI();
    },

    
    updateUI: function() {
        document.querySelector('#healthValue').textContent = this.health;
        document.querySelector('#levelValue').textContent = this.level;
        document.querySelector('#attackButton').disabled = this.health <= 0;
    }
};


const attackBtn = document.querySelector('#attackButton');
const levelUpBtn = document.querySelector('#levelUpButton');


attackBtn.addEventListener('click', () => {
    characterCard.takeDamage();
});

levelUpBtn.addEventListener('click', () => {
    characterCard.levelUp();
});


document.querySelector('#characterName').textContent = characterCard.name;
document.querySelector('img').src = characterCard.image;
document.querySelector('img').alt = characterCard.name;
document.querySelector('#characterClass').textContent = `Class: ${characterCard.class}`;
characterCard.updateUI();