function loadData(element){
    document.getElementById(element.name).innerHTML = element.value;
}

function loadCheck(){
    var check = document.getElementsByClassName("qual");
    var data = "<ul>";
    for(var i=0;i<check.length;i++){
        if(check[i].checked){
            data+="<li>"+check[i].name+"</li>";
        }
    }
    data+="</ul>";
    document.getElementById('qual').innerHTML = data;
}