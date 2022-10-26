function submitBTNFloating(event){
    event.preventDefault();
    let Fname=document.getElementById('floatingName').value;
    let inputNamef=document.getElementById('floatingInputLN').value;
    let inputEmailf=document.getElementById('floatingInputE').value;
    if (Fname == ""){
        alert("Name must be filled out")
    }
    else if (inputNamef.length < 2) {
        alert('Your last name is too short!')
    }
    else if (inputEmailf.indexOf("@") == -1 || inputEmailf.indexOf(".")==-1) {
        alert('The email address you entered is invalid')
    }else{
        document.getElementById('formId').submit();
    }  
}