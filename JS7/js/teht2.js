document.getElementById('kuva').addEventListener("mouseenter", mouseEnter);
document.getElementById('kuva').addEventListener("mouseleave", mouseLeave);

function mouseEnter(){
   document.getElementsByTagName("p")[0].style ="";
}

function mouseLeave(){
    document.getElementsByTagName("p")[0].style.display = "none";

}
