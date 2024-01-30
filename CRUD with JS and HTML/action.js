let srow=null;
let idchecker=[];
function formSubmit(){
 let data = readData();
 if(srow === null){
 insertRecord(data);
 localStoragePush(data);
 }
 else{
 updateRecord(data);
 localStoragePush(data);
 }
}

function readData(){
    var formData ={};
    let value = parseInt(document.getElementById("empid").value);
    if(idchecker.indexOf(value) != -1){
        window.alert("Data already entered");
        return;
    }
    else{
        idchecker[idchecker.length]=value;
    formData["empid"] = document.getElementById("empid").value;
    formData["name"] = document.getElementById("name").value;
    formData["desig"] = document.getElementById("desig").value;
    formData["sal"] = document.getElementById("sal").value;
    return formData;
    }
}

function insertRecord(data){
 let table = document.getElementById("tableid").getElementsByTagName("tbody")[0];
 let newRow = table.insertRow(table.length);
 
 let cell1 = newRow.insertCell(0);
 cell1.innerHTML = data.empid;
 let cell2 = newRow.insertCell(1);
 cell2.innerHTML = data.name;
 let cell3 = newRow.insertCell(2);
 cell3.innerHTML = data.desig;
 let cell4 = newRow.insertCell(3);
 cell4.innerHTML = data.sal;
 let cell5 = newRow.insertCell(4);
 cell5.innerHTML = `<a href="#" onclick=editData(this)>Edit</a> <a href="#" onclick=deleteRecord(this,empid) >Delete</a>`;
}

function localStoragePush(data){
    let key = document.getElementById("empid").value;
    let str=`{"empid" : "${document.getElementById("empid").value}",
    "name" : "${document.getElementById("name").value}",
    "desig" : "${document.getElementById("desig").value}",
    "sal" : "${document.getElementById("sal").value}"}`;
    localStorage.setItem(key,str);
}
function editData(td){
 srow = td.parentElement.parentElement;
  idchecker.splice(idchecker.indexOf(srow.cells[0].innerHTML) , 1);
  document.getElementById("empid").value = srow.cells[0].innerHTML;
  document.getElementById("name").value = srow.cells[1].innerHTML; 
  document.getElementById("desig").value = srow.cells[2].innerHTML;
  document.getElementById("sal").value = srow.cells[3].innerHTML;
}

function updateRecord(data){
    srow.cells[0].innerHTML = data.empid;
    srow.cells[1].innerHTML = data.name;
    srow.cells[2].innerHTML = data.desig;
    srow.cells[3].innerHTML = data.sal;
}

function deleteRecord(td,empid){
    if(confirm("Are you sure to delete this record?")){
    let row=td.parentElement.parentElement;
    localStorage.removeItem(empid.value);
    idchecker.splice(idchecker.indexOf(row.rowIndex),1);
    document.getElementById("tableid").deleteRow(row.rowIndex);
    }
}

function printAll(){
    let table = document.getElementById("tableid").getElementsByTagName("tbody")[0];
    for(let i=0; i<localStorage.length; i++){
        let refkey = localStorage.key(i);

        let str = JSON.parse(localStorage.getItem(refkey));
        let newRow = table.insertRow(i);
        let cell1 = newRow.insertCell(0);
        cell1.innerHTML = str.empid;
        let cell2 = newRow.insertCell(1);
        cell2.innerHTML = str.name;
        let cell3 = newRow.insertCell(2);
        cell3.innerHTML = str.desig;
        let cell4 = newRow.insertCell(3);
        cell4.innerHTML = str.sal;
        let cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onclick=editData(this)>Edit</a> <a href="#" onclick=deleteRecord(this,empid) >Delete</a>`;
    }
}