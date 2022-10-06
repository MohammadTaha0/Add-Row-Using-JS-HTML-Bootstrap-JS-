

document.getElementById("submit").onclick = create;

function create() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var SNo = document.getElementById("SNo").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    var allowancess = document.getElementById("allowancess").value;
    var deduction = document.getElementById("deduction").value;
    var tSalary = document.getElementById("tSalary");
    var TSalary = (parseFloat(salary) + parseFloat(allowancess)) - (parseFloat(deduction))
    var table = document.getElementById("tbl_exporttable_to_xls");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    
    cell1.innerHTML = SNo;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = email;
    cell5.innerHTML = phone;
    cell6.innerHTML = salary;
    cell7.innerHTML = allowancess;
    cell8.innerHTML = deduction;
    cell9.innerHTML = TSalary;
    cell1.setAttribute("class", "border border-dark align-middle")
    cell2.setAttribute("class", "border border-dark align-middle")
    cell3.setAttribute("class", "border border-dark align-middle")
    cell4.setAttribute("class", "border border-dark align-middle")
    cell5.setAttribute("class", "border border-dark align-middle")
    cell6.setAttribute("class", "border border-dark align-middle")
    cell7.setAttribute("class", "border border-dark align-middle")
    cell8.setAttribute("class", "border border-dark align-middle")
    cell9.setAttribute("class", "border border-dark align-middle")

    return row;

}

document.getElementById("delRow").onclick = deleteRow;

function deleteRow() {
    var rowNum = document.getElementById("rowNum").value;
    rowNum = parseInt(rowNum);
    document.getElementById("tbl_exporttable_to_xls").deleteRow(rowNum);
}

function ExportToExcel(fileextension, filename) {
    var elt = document.getElementById('tbl_exporttable_to_xls');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return XLSX.writeFile(wb, filename+"."+fileextension || ('MySheetName.' + (fileextension || 'xlsx')));
}

  
