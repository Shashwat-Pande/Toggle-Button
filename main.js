const checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', ()=>{
    //To change the theme of the website.
    document.body.classList.toggle('dark');
});

