function verify() {
    let email = document.querySelector('input').value;
    let valid = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if (valid.test(email)){
        alert('Thanks for your subscription!')
    }else{
        show()
    }
}

function show(){
    document.getElementById('error-box').classList.toggle('error-box-show');
}
