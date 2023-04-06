function bold(a){
    document.getElementById(a).classList.toggle('downText');
    let k = document.getElementById(a);
    k.querySelector('span').classList.toggle('up');
    if(k.querySelector('span').classList == 'up'){
        k.querySelector('span').innerHTML = '<i class="fa-solid fa-chevron-up">';
    }else{
        k.querySelector('span').innerHTML = '<i class="fa-solid fa-chevron-down">';
    }
}