window.onscroll=function()
{
    var pos=window.pageYOffset;
    if(pos > 50)
    {
        document.getElementById('menu').style.top='-200px';
    }
    else
    {
        document.getElementById('menu').style.top='0';
    }   
}
function list(){
let menu=document.getElementById('menu-icon');
let navlist=document.getElementById('navbar-div');

  if(navlist.style.display==="block"){
    navlist.style.display="none";

  }else{
    navlist.style.display="block";
  }
}
