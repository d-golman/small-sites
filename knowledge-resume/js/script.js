'strict mode';

document.addEventListener('DOMContentLoaded',()=>{
    const lis = document.querySelectorAll('li');
    lis.forEach(element => {
       if (element.offsetTop > window.innerHeight){
           element.style.opacity = 0;
       }
    });
    window.addEventListener('scroll',()=>{
        lis.forEach(element => {
            if (element.offsetTop < (window.pageYOffset + window.innerHeight)){
                element.style.opacity = 1;
            }
        });
    });
    
});