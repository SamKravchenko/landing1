const iconWrapper = document.querySelector('.burger');
const icon = document.querySelector('.burger__icon');
const menu = document.querySelector('.menu__list');

function togglerClass() {
    icon.classList.toggle('burger__icon--active');
    menu.classList.toggle('menu--active');
}

function removeClass() {
    icon.classList.remove('burger__icon--active');
    menu.classList.remove('menu--active');
}

iconWrapper.addEventListener('click', togglerClass);
window.addEventListener('resize', removeClass);
window.addEventListener('scroll', removeClass);
document.body.addEventListener('click', function(evt) {
    if(evt.target === menu || evt.target === iconWrapper || evt.target === icon) {
        console.log(evt + 'menu');
        return;
    } else {
        removeClass();
        console.log(evt + 'doc');
    }
}, false);
