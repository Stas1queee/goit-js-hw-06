let inputEl = document.querySelector('input#font-size-control');
let spanEl = document.querySelector('span#text');

inputEl.addEventListener('input', changeFontSize);

function changeFontSize (event) {
    (spanEl.style.fontSize = event.currentTarget.value + 'px' )
}