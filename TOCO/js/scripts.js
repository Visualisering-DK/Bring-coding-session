(function(){
  
  // Toggle main menu visibility
  
  let menuButton = document.querySelector('.site-menu__button');

  menuButton.addEventListener('click', function(){

     let menu = document.querySelector('.site-menu__content');

     if(menu.classList.contains('menu--open')){     
        menu.classList.replace('menu--open', 'menu--close');
     } else {
        menu.classList.replace('menu--close', 'menu--open');
        }
  });
  
})();