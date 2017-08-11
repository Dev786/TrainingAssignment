function getData() {
    var item = document.getElementById('id').value;
    if (item != '') {
        var xml = new XMLHttpRequest();
        xml.open("GET", "data.txt");
        xml.onreadystatechange = function () {
            if (xml.readyState == 4) {
                var data = JSON.parse(xml.responseText);
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == item) {
                        document.getElementById('fname').value = data[i].fname;
                        document.getElementById('lname').value = data[i].lname;
                    }

                }
            }
        };
        xml.send();
    } else {
        alert("Enter ID");
    }
}