const hiddenElements = document.querySelectorAll('.img');
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((e) =>{
        if(e.isIntersecting){
            document.getElementById('name').style.backgroundColor = e.target.id;
        }
    })
})

hiddenElements.forEach((e) => {
    observer.observe(e);
})