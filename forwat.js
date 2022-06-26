//redirect sign up or login page when player click login as player
function clickFunction() {
    window.location.replace("player-signup.html");
}
//streamer login
    function logFunction() {
        window.location.replace("streamer_login.html");
    }
//display date
//document.write(Date());
/*function validate() {
    document.getElementById("sign-up").innerHTML = alert("Successfully Sign Up");
}*/
let inventoryData = [
    {
        'logo': 'https://image.flaticon.com/icons/png/512/1670/1670772.png',
        'title': 'Item one',
        'amount': 5,
    },
    {
        'logo': 'https://image.flaticon.com/icons/png/512/1670/1670772.png',
        'title': 'Item two',
        'amount': 15,
    },
    {
        'logo': 'https://image.flaticon.com/icons/png/512/1670/1670772.png',
        'title': 'Item three',
        'amount': 23,
    },
    {
        'logo': 'https://image.flaticon.com/icons/png/512/1670/1670772.png',
        'title': 'Item four',
        'amount': 75,
    }
];


function switchToInventory() {
    document.getElementById('loadOut').classList.add('hidden');
    document.getElementById('inventory').classList.remove('hidden');
    let parent = document.getElementById('inventoryListUl');
    parent.innerHTML = "";
    for (let i = 0; i < inventoryData.length; i++) {
        let ul = document.createElement('ul');
        let data = inventoryData[i];
        let innerElement = ` <li class="inventory-container list-none"> <div class="flex-row"> <div class=" text-center f-23" style="width: 160px"> ${i} </div> <div style="width: 150px"> <img src="${data.logo}" style="height: 26px; width: 26px"> </div> <div class="f-23" style="width: 260px">${data.title}</div> <div class="flex-child f-23">${data.amount}</div> </div> </li>`;
        ul.innerHTML = innerElement;
        parent.appendChild(ul);
    }
}

function switchToLoadOut(){
    document.getElementById('loadOut').classList.remove('hidden');
    document.getElementById('inventory').classList.add('hidden');
}
//if user enter password are not match
function  returnToPreviousPage() {
   window.history.back();
}
function validate(){
    if(document.getElementById('password1').value != document.getElementById('password2').value){
        alert("Password mismatch");
        returnToPreviousPage();
        return false;
    }
    alert("Successful");
    return true;
}
