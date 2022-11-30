function change(){
var popout = document.getElementById("infopop")
var arrow = document.getElementById("arrow")
var toggle = true
if (popout.className == "none")
{
    toggle = false
}
if(!toggle)
{
    popout.className= "infoclass"
    arrow.className = "arrow left"
}
else
{
    popout.className= "none"
    arrow.className= "arrow right"
}
}


function spanSwitch(e, id) {
    let txt = e.innerText;
    let element = document.getElementById(id);
  
    element.innerHTML = `<input class='trans' onblur='spanReset(this)' value='${txt}' />`;
    document.getElementsByTagName('input')[0].focus();
  }
  
  function spanReset(e, id) {
    let txt = e.value;
    let element = document.getElementById(id);
  
    element.innerHTML = `<span onclick='spanSwitch(this)'> ${txt} </span>`;
  }


  function adddiv(){
    var buttons = [1, 2, 3, 4,5,5,5,5,5,5,5,5,5,5,5,3,3,3,3,4,24,4,4,42,24,23,43,42,4,4,24,2,5,25,5];
    var next_note = document.getElementById("note").cloneNode(true)
    var element = document.getElementById("made_notes")
    
    element.append(next_note)
  }