
var adBar = document.getElementById("adBar");

function add(){
    var vala = adBar.value;
    //creating li node
    var nNode = document.createElement("li");
    var tNode = document.createTextNode(vala);
    nNode.appendChild(tNode);
    // getting list
   var list = document.getElementById("list");
   //creating delete button
   var dbtn= document.createElement("button");
   var dbtnText = document.createTextNode("delete");
   dbtn.appendChild(dbtnText);
   //appending dbtn to li
   nNode.appendChild(dbtn);
   //appending to ul
   list.appendChild(nNode);
    console.log(vala);
    //setiing attributes of delete button
    dbtn.setAttribute("onclick","deleteMe(this);")
    //empty adBar
    adBar.value= " ";
    //making an edit button
    var ebtn = document.createElement("button");
    var eText = document.createTextNode("Edit");
    ebtn.appendChild(eText);
    nNode.appendChild(ebtn);
    //giving functionality to edit
    ebtn.setAttribute("onclick","editMe(this);");
    //cherker
   // console.log(nNode);
    
    

}
function deleteMe(e){
    e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = null;
}
//edit function
function editMe(e){
    // console.log(e.parentNode.firstChild.nodeValue);
    var edited = prompt("Enter the update value",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = edited;
}

//MadeBy42--