var counter=0
function SubmitReview() {
    let radios = document.querySelectorAll('input[type=radio]');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == 'a') {
                counter ++;
            }
            else{
                document.getElementById(`Answer${i+1}_id`).style.backgroundColor= 'rgb(227, 93, 93)';
                console.log(i);
            }

        }
    }
    for (let index = 1; index < 31; index++) {
        document.getElementById(`Answer${index}_id`).style.color='black';
        document.getElementById(`flexRadioDefault${index}`).disabled=true;
        document.getElementById(`btn_check`).disabled=true;
        let right=document.getElementById(`flexRadioDefault${index}`).value;
        if (right=='a') {
            document.getElementById(`Answer${index}_id`).style.backgroundColor='#8CBF3F';
        }
     
    }
  
    document.getElementById('counter_id').innerHTML=`<h1 class="scoreStyle p-2 m-2 headlines">Your score is:${counter}</h1>`; 
    
}

function PlayAgain() {
    for (let index = 1; index < 31; index++) {
        document.getElementById(`flexRadioDefault${index}`).disabled=false;
        document.getElementById(`btn_check`).disabled=false;
        document.getElementById(`Answer${index}_id`).style.backgroundColor='white';
        document.getElementById('counter_id').innerHTML=``;
        counter=0;
    }
}




