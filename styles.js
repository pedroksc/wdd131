let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    if (this.value) {
        window.location.href = this.value;
    }
})