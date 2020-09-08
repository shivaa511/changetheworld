function leveloneval(){
     // Get the checkbox

  var maleC=document.getElementById('inlineRadio1');
  var femaleC=document.getElementById('inlineRadio2');
  var othersC = document.getElementById('inlineRadio3');    

 if(!(maleC.checked) || !(femaleC.checked) || !(othersC.checked)){
    text.style.display = "block";
 } else{
    document.getElementById("firstn").className = "btn btn-next";
    text.style.display = "none";
 }
 

}