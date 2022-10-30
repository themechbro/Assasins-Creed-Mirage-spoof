alert(`This is a clone of AC Mirage's orginal Page. The orginal Page is 'https://www.ubisoft.com/en-us/game/assassins-creed/mirage' `);


//function buttonClick(){
 //   alert("You are redirected to Youtube!");
//}

function preOrder(){
    alert("You are redirected to the Orginal Buy page (Ubisoft)");
}



const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}