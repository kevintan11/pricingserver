function UploadExcel() {
    //Reference the FileUpload element.
    var fileUpload = document.getElementById("fileUpload");

    //Validate whether File is valid Excel file.
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();

            //For Browsers other than IE.
            if (reader.readAsBinaryString) {
                reader.onload = function (e) {
                    ProcessExcel(e.target.result);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            } else {
                //For IE Browser.
                reader.onload = function (e) {
                    var data = "";
                    var bytes = new Uint8Array(e.target.result);
                    for (var i = 0; i < bytes.byteLength; i++) {
                        data += String.fromCharCode(bytes[i]);
                    }
                    ProcessExcel(data);
                };
                reader.readAsArrayBuffer(fileUpload.files[0]);
            }
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid Excel file.");
    }
};


function ProcessExcel(data) {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });

    //Fetch the name of First Sheet.
    var firstSheet = workbook.SheetNames[0];

    //Read all rows from First Sheet into an JSON array.
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheet]);

    //Create a HTML Table element.
    var table = document.getElementById("pricetable");
    //var rows = table.rows.length;
    
    for (var i = 0; i < excelRows.length; i++) {
        var excrows=table.rows.length;
        if (excrows > 11) return;
        //Add the data row.
      
        var rows =table.insertRow(table.rows.length-1);
       
        //Add the data cells.
        var cell1 = rows.insertCell(0);
        cell1.innerHTML = excelRows[i].Virtual_Machine_Name;
        rows.appendChild(cell1);
        
        cell2 = rows.insertCell(1);
        cell2.innerHTML = excelRows[i].VCPU_core;
        rows.appendChild(cell2);

        cell3 = rows.insertCell(2);
        cell3.innerHTML = excelRows[i].RAM_GB;
        rows.appendChild(cell3);

        cell4 = rows.insertCell(3);
        cell4.innerHTML = excelRows[i].SSD_GB;
        rows.appendChild(cell4);

        cell5 = rows.insertCell(4);
        cell5.innerHTML = excelRows[i].HDD_GB;
        rows.appendChild(cell5);

        cell6 = rows.insertCell(5);
        cell6.innerHTML = excelRows[i].Date_Start;
        rows.appendChild(cell6);

        cell7 = rows.insertCell(6);
        cell7.innerHTML = excelRows[i].Date_End;
        rows.appendChild(cell7);

        cell8 = rows.insertCell(7);
        cell8.innerHTML = excelRows[i].Duration;
        rows.appendChild(cell8);

        cell9 = rows.insertCell(8);
        cell9.innerHTML = excelRows[i].Cost;
        rows.appendChild(cell9);

        cell10 = rows.insertCell(9);
        cell10.innerHTML = excelRows[i].Cost_per_day;
        rows.appendChild(cell10);

        cell11 = rows.insertCell(10);
        cell11.innerHTML = excelRows[i].Cost_per_hour;
        rows.appendChild(cell11);

        cell12 = rows.insertCell(11);
        cell12.innerHTML = excelRows[i].OS;
        rows.appendChild(cell12);

        cell13 = rows.insertCell(12);
        cell13.innerHTML = excelRows[i].Location
        rows.appendChild(cell13);

        selectedRowToInput();
        
        if (i == excelRows.length-1){
            var upload = table.rows[excelRows.length].cells[0].innerHTML;
            var array= new Array();
            array = upload.split(':');
            if(array[0]=="Total Cost"){
                document.getElementById("pricetable").deleteRow(table.rows.length-2);
            }
        }
        
        
    }
    
     var dvExcel = document.getElementById('dvExcel')
     dvExcel.innerHTML = "";
     dvExcel.appendChild(table);
};

function refresh(){
    window.location.reload();
}




