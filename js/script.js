const content = document.querySelectorAll('.image');
const buttons = document.querySelectorAll('.button');

buttons.forEach((item,idx) => {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        content[idx].classList.add('show');
    })
})

function hideAllItems() {
    buttons.forEach(item => item.classList.remove('active'));
}
function hideAllContents() {
    content.forEach(content => content.classList.remove('show'));
}