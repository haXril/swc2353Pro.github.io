document.getElementById('plus').addEventListener('click', plus1);

    function plus1(){
        let amount = document.getElementById('amount').value;

        let total = amount + 1;

        console.log(total);
    }