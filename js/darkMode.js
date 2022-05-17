let darkMode = localStorage.getItem('darkMode');
let navBar = document.querySelector('header');

const darkModeToggle = document.querySelector('#change-mode-btn');
const enableDarkMode = () => { 
    //document.body.classList.add('darkmode');
    //navBar.classList.add('darkmode');
    document.documentElement.style.setProperty('--background-color' ,'#fff');
    document.documentElement.style.setProperty('--sacond-color' ,'#f0f0f0');
    document.documentElement.style.setProperty('--white-color' ,'#222');
    localStorage.setItem('darkMode', 'enabled');
 };
 const disableDarkMode = () => { 
     //document.body.classList.remove('darkmode');
     //navBar.classList.remove('darkmode');
     document.documentElement.style.setProperty('--background-color' ,'#292929');
     document.documentElement.style.setProperty('--sacond-color' ,'#222');
     document.documentElement.style.setProperty('--white-color' ,'#fff');
    localStorage.setItem('darkMode', null);
 };

 if (darkMode == 'enabled') {
     enableDarkMode();
 };
darkModeToggle.addEventListener('click', () => { 
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
 });


 /*show && Hide dark mode btn*/
 const sittingBtn = document.querySelector('.stting-btn');
 const sittingArea = document.querySelector('.sittings');
function showStting() {
    sittingArea.classList.toggle('sittingActive');
}

sittingBtn.style.animationIterationCount = "infinite";