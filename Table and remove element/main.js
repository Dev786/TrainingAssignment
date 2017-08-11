var table = document.createElement('table');
table.id = "my";
table.border = "1 solid black";
table.cellPadding = "10px";
table.style.marginTop = "15px";
table.align = "center";
var tmain = document.createElement('tr');
var thead = document.createElement('th');
thead.appendChild(document.createTextNode("FIRST NAME"));
tmain.appendChild(thead);

var thead = document.createElement('th');
thead.appendChild(document.createTextNode("LAST NAME"));
tmain.appendChild(thead);

var thead = document.createElement('th');
thead.appendChild(document.createTextNode("ACTION"));
tmain.appendChild(thead);

table.appendChild(tmain);





function addData() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    if (fname!='' && lname != '') {
        var tr = document.createElement('tr');
        var button = document.createElement("Button");
        button.innerHTML = "Remove";
        button.addEventListener('click', function (event) {
            event.target.parentElement.parentElement.style.display = 'none';
        });

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(fname));
        tr.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(document.createTextNode(lname));
        tr.appendChild(td);

        var td = document.createElement('td');
        td.appendChild(button);
        tr.appendChild(td);

        table.appendChild(tr);

        document.getElementById("tablePlace").appendChild(table);
    } else {
        alert("Enter All Values")
    }

}