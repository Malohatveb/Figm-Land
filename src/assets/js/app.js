var btn = document.querySelector('.top__btn__menu')
btn.addEventListener('click',function(){
    this.classList.toggle('active')
    document.querySelector('headMenu.burgerMenu').classList.toggle('show')
})

// document.querySelector('.top__btn__menu').addEventListener('click',function(){
//     document.querySelector('.top__btn__menu').classList.toggle('active')
// })