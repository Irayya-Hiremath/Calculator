let output=document.getElementById('display')
let input=document.getElementById('btn')

btns = document.getElementsByClassName("number");
for (var i = 0; i < btns.length; i++) 
btns[i].addEventListener("click", function cal(e) {

  // input.value=output.innerHTML
  output.value +=e.target.innerHTML;

// alert("helloword")

});

function clearScreen(){
  // alert('kkk')
  output.value="";
}

function addsub(){
  output.value *= '-1';
}

function result(){
  output.value=eval(output.value)
}