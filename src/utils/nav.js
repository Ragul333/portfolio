const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileMenu = document.querySelector('.mobile__menu');
    const mobileLinks = document.querySelectorAll('.mobile__menu-list');
       
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;

        if(isMobileNavOpen){
            mobileMenu.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            mobileMenu.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    })

    mobileLinks.forEach(link=>{
        link.addEventListener('click',()=>{
            isMobileNavOpen = false; 
            mobileMenu.style.display = 'none';
            document.body.style.overflowY = 'auto';

        })
    })
} 

export default mobileNav;