const barElement = document.querySelector('.burger-bar')
const blockBurgerBarElement =  document.querySelector('.block-burger-bar')

barElement.addEventListener('click', function () {
    blockBurgerBarElement.style.display = 'flex';
})

blockBurgerBarElement.addEventListener('click', function () {
    blockBurgerBarElement.style.display = 'none';
})
