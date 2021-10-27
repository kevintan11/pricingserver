var rIndex;

var table = document.getElementById("pricetable");



// check the empty input
function checkEmptyInput()
{
 var isEmpty = false,
    VMName = document.getElementById("VMName").value,
    VCPU = document.getElementById("VCPU").value,
    RAM = document.getElementById("RAM").value;
    DateStart = document.getElementById("DateStart").value;
    DateEnd = document.getElementById("DateEnd").value;
    OS = document.getElementById("OS").value;
    Loca = document.getElementById("location2").value;

 if(VMName === ""){
    alert("Virtual Machine Name field cannot be empty");
    isEmpty = true;
 }else if(VCPU === ""){
    alert("VCPU field cannot be empty");
    isEmpty = true;
 }else if(RAM === ""){
    alert("RAM field  cannot be empty");
    isEmpty = true;
 }else if(DateStart === ""){
    alert("Date start field  cannot be empty");
    isEmpty = true;
 }else if(DateEnd === ""){
    alert("Date end field  cannot be empty");
    isEmpty = true;
 }else if(OS === ""){
   alert("Operating system field  cannot be empty");
   isEmpty = true;
 }else if(Loca === ""){
    alert("Location field cannot be empty");
    isEmpty = true;
 }
 return isEmpty;
}

//hàm tính toán cho giá trị nhập từ form
function calc(){

   //khai báo biến tính cho các thành phần của máy ảo 
   var VCPU = (document.getElementById("VCPU").value);
   var RAM = (document.getElementById("RAM").value);
   var SSD = (document.getElementById("SSD").value);
   var HDD = (document.getElementById("HDD").value);
   var op = document.getElementById("st").value;
   var corep = document.getElementById("corep").value;
   var ramp = document.getElementById("ramp").value;
   var ssdp = document.getElementById("ssdp").value;
   var hddp = document.getElementById("hddp").value;
   
   //khai báo biến tính cho duration
   var ONE_DAY = 1000 * 60 * 60 * 24;
   var d1 = new Date(document.getElementById("DateStart").value).getTime();
   var d2 = new Date(document.getElementById("DateEnd").value).getTime();
   var diff = Math.abs((d2 - d1))
   var dur = Math.round((diff/ONE_DAY)+1);
   document.getElementById("Duration").value= dur;

   if(op == "SSD")
   {
       document.getElementById('Cost').value = Math.round((((VCPU*corep + RAM*ramp + SSD*ssdp)*dur)+Number.EPSILON)*100)/100;
       document.getElementById('CostPerHour').value =  Math.round(((((VCPU*corep + RAM*ramp + SSD*ssdp)*dur)/(dur*24))+Number.EPSILON)*100)/100;
       document.getElementById('CostPerDay').value =  Math.round((((((VCPU*corep + RAM*ramp + SSD*ssdp)*dur)/dur))+Number.EPSILON)*100)/100;
   }
   if (op == "HDD")
   {
      document.getElementById('Cost').value = Math.round((((VCPU*corep + RAM*ramp + HDD*hddp)*dur)+Number.EPSILON)*100)/100;
      document.getElementById('CostPerHour').value =  Math.round(((((VCPU*corep + RAM*ramp + HDD*hddp)*dur)/(dur*24))+Number.EPSILON)*100)/100; 
      document.getElementById('CostPerDay').value =  Math.round(((((VCPU*corep + RAM*ramp + HDD*hddp)*dur)/dur)+Number.EPSILON)*100)/100;
   }
   if (op == "SSD+HDD")
   {
      document.getElementById('Cost').value = Math.round((((VCPU*corep + RAM*ramp + HDD*hddp + SSD*ssdp)*dur)+Number.EPSILON)*100)/100;
      document.getElementById('CostPerHour').value = Math.round(((((VCPU*corep + RAM*ramp + HDD*hddp + SSD*ssdp)*dur)/(dur*24))+Number.EPSILON)*100)/100;
      document.getElementById('CostPerDay').value =  Math.round(((((VCPU*corep + RAM*ramp + HDD*hddp + SSD*ssdp)*dur)/dur)+Number.EPSILON)*100)/100;
   }
}



function showhidetextvalue(){
   if(document.getElementById('st').value == 'SSD'){
     document.getElementById('SSD').style.display = '';
     document.getElementById('HDD').style.display ='none';

   }else if(document.getElementById('st').value == 'HDD'){
     document.getElementById('SSD').style.display = 'none';
     document.getElementById('HDD').style.display ='';

   }else if(document.getElementById('st').value == 'SSD+HDD'){
     document.getElementById('SSD').style.display ='';
     document.getElementById('HDD').style.display ='';
   }else {
     document.getElementById('SSD').style.display ='none';
     document.getElementById('HDD').style.display ='none';
   }
}

function LocationSelect(){
   var location = document.getElementById("location");
   var displaytext = location.options[location.selectedIndex].text;
   document.getElementById("location2").value=displaytext;
}

function aftersubmit(){
 
  document.getElementById("VMName").value ="";
  document.getElementById("VCPU").value = "";
  document.getElementById("RAM").value = "";
  document.getElementById("SSD").value ="";
  document.getElementById("HDD").value = "";
  document.getElementById("DateStart").value = "";
  document.getElementById("DateEnd").value = "";
  document.getElementById("Duration").value = "";
  document.getElementById("Cost").value = "";
  document.getElementById("CostPerHour").value = "";
  document.getElementById("CostPerDay").value = "";
  document.getElementById("OS").value ="";
  document.getElementById("location2").value="";
 
}

// call the function to set the event to the new row
// display selected row data into input text
function selectedRowToInput()
{
   
   for(var i = 1; i < table.rows.length-1; i++)
   {
      table.rows[i].onclick = function()
      {
            // get the selected row index
            rIndex = this.rowIndex;
            document.getElementById('VMName').value = this.cells[0].innerHTML;
            document.getElementById('VCPU').value = this.cells[1].innerHTML;
            document.getElementById('RAM').value = this.cells[2].innerHTML;
            document.getElementById('SSD').value = this.cells[3].innerHTML;
            document.getElementById('HDD').value = this.cells[4].innerHTML;
            document.getElementById('DateStart').value = this.cells[5].innerHTML;
            document.getElementById('DateEnd').value = this.cells[6].innerHTML;
            document.getElementById('Duration').value = this.cells[7].innerHTML;
            document.getElementById('Cost').value = this.cells[8].innerHTML;
            document.getElementById('CostPerDay').value = this.cells[9].innerHTML;
            document.getElementById('CostPerHour').value = this.cells[10].innerHTML;
            document.getElementById('OS').value = this.cells[11].innerHTML;
            document.getElementById('location2').value = this.cells[12].innerHTML;

           if(typeof index !== "undefined"){
               table.rows[index].classList.toggle("selected");
            }
            console.log(typeof index);
            // get the selected row index
            index = this.rowIndex;
            // add class selected to the row
            this.classList.toggle("selected");
            //console.log(typeof index);
           
      };
   }
   
}

// add Row
function addHtmlTableRow()
{ 
 // create a new row and cells
 // get value from input text
 // set the values into row cell's
 if(!checkEmptyInput()){
  var num_rows = table.rows.length;
  if (num_rows > 11) return;
  var newRow = table.insertRow(table.rows.length-1),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    cell6 = newRow.insertCell(5),
    cell7 = newRow.insertCell(6),
    cell8 = newRow.insertCell(7),
    cell9 = newRow.insertCell(8),
    cell10 = newRow.insertCell(9),
    cell11= newRow.insertCell(10),
    cell12 = newRow.insertCell(11),
    cell13 = newRow.insertCell(12)
   

    VMName = document.getElementById("VMName").value,
    VCPU = document.getElementById("VCPU").value,
    RAM = document.getElementById("RAM").value;
    SSD = document.getElementById("SSD").value;
    HDD = document.getElementById("HDD").value;
    OS = document.getElementById("OS").value;
    DateStart = document.getElementById("DateStart").value;
    DateEnd = document.getElementById("DateEnd").value;
    Duration = document.getElementById("Duration").value;
    Cost = document.getElementById("Cost").value;
    CostPerDay = document.getElementById("CostPerDay").value;
    CostPerHour = document.getElementById("CostPerHour").value;
    Loca = document.getElementById("location2").value
   

  cell1.innerHTML = VMName;
  cell2.innerHTML = VCPU;
  cell3.innerHTML = RAM;
  cell4.innerHTML = SSD;
  cell5.innerHTML = HDD;
  cell6.innerHTML = DateStart;
  cell7.innerHTML = DateEnd;
  cell8.innerHTML = Duration;
  cell9.innerHTML = Cost;
  cell10.innerHTML = CostPerDay;
  cell11.innerHTML = CostPerHour;
  cell12.innerHTML = OS;
  cell13.innerHTML = Loca

  selectedRowToInput();
 
 }  
}


//hàm edit của web
function editHtmlTbleSelectedRow()
{
  var VMName = document.getElementById("VMName").value,
      VCPU = document.getElementById("VCPU").value,
      RAM = document.getElementById("RAM").value;
      SSD = document.getElementById("SSD").value;
      HDD = document.getElementById("HDD").value;
      DateStart = document.getElementById("DateStart").value;
      DateEnd = document.getElementById("DateEnd").value;
      Duration = document.getElementById("Duration").value;
      Cost = document.getElementById("Cost").value;
      CostPerDay = document.getElementById("CostPerDay").value;
      CostPerHour = document.getElementById("CostPerHour").value;
      OS = document.getElementById("OS").value;
      Loca = document.getElementById("location2").value;

  if(!checkEmptyInput()){
      table.rows[rIndex].cells[0].innerHTML = VMName;
      table.rows[rIndex].cells[1].innerHTML = VCPU;
      table.rows[rIndex].cells[2].innerHTML = RAM;
      table.rows[rIndex].cells[3].innerHTML = SSD;
      table.rows[rIndex].cells[4].innerHTML = HDD;
      table.rows[rIndex].cells[5].innerHTML = DateStart;
      table.rows[rIndex].cells[6].innerHTML = DateEnd;
      table.rows[rIndex].cells[7].innerHTML = Duration;
      table.rows[rIndex].cells[8].innerHTML = Cost;
      table.rows[rIndex].cells[9].innerHTML = CostPerDay;
      table.rows[rIndex].cells[10].innerHTML = CostPerHour;
      table.rows[rIndex].cells[11].innerHTML = OS;
      table.rows[rIndex].cells[12].innerHTML = Loca;
 
  }
}

//hàm xét điều kiện để delete
function onDelete() {
   if (!checkEmptyInput()) {
       var x = confirm('Are you sure to delete this information')
       if(x){
         document.getElementById("pricetable").deleteRow(rIndex); 
         removeSelectedRow();
       }else{
          return false;
       }
        
   }
}

//hàm này là hàm xóa dòng đã được chọn trong bảng
function removeSelectedRow(){

 // clear input text
 document.getElementById("VMName").value ="";
 document.getElementById("VCPU").value = "";
 document.getElementById("RAM").value = "";
 document.getElementById("SSD").value ="";
 document.getElementById("HDD").value = "";
 document.getElementById("DateStart").value = "";
 document.getElementById("DateEnd").value = "";
 document.getElementById("Duration").value = "";
 document.getElementById("Cost").value = "";
 document.getElementById("CostPerHour").value = "";
 document.getElementById("CostPerDay").value = "";
 document.getElementById("OS").value ="";
 document.getElementById("location2").value="";
 
}



// Hàm này dùng để tính hàng loạt từ excel
function tablecalulation(){
   var table = document.getElementById("pricetable");
   var ONE_DAY = 1000 * 60 * 60 * 24;
   var corep2 = document.getElementById("corep2").value 
   var ramp2 = document.getElementById("ramp2").value 
   var ssdp2 = document.getElementById("ssdp2").value
   var hddp2 = document.getElementById("hddp2").value 
   for(var i = 1; i < table.rows.length-1; i++) {
     var ds = new Date(table.rows[i].cells[5].innerHTML).getTime();
     var de = new Date(table.rows[i].cells[6].innerHTML).getTime();
     var vcpu =  table.rows[i].cells[1].innerHTML;
     var ram = table.rows[i].cells[2].innerHTML;
     var ssd = table.rows[i].cells[3].innerHTML;
     var hdd = table.rows[i].cells[4].innerHTML;
     var diff = Math.abs((de-ds))
     var dur = parseFloat((diff/ONE_DAY)+1);
     var cost = parseFloat((((vcpu*corep2 + ram*ramp2 + ssd*ssdp2 + hdd*hddp2)*dur)+Number.EPSILON)*100)/100;
     var costperday = parseFloat(((cost/dur)+Number.EPSILON)*100)/100;
     var costperhour = Math.round(((cost/(dur*24))+Number.EPSILON)*100)/100;
     
     table.rows[i].cells[7].innerHTML = dur;
     table.rows[i].cells[8].innerHTML = cost;
     table.rows[i].cells[9].innerHTML = costperday;
     table.rows[i].cells[10].innerHTML = costperhour;
     
   }
  
}

//hàm tính tổng giá trị cột cost
function tablecostsum(){
   var table = document.getElementById("pricetable"), tablecostsum = 0;
   for(var i = 1; i < table.rows.length-1; i++)
   {
       tablecostsum = Math.round((tablecostsum + parseInt(table.rows[i].cells[8].innerHTML)+Number.EPSILON)*100)/100;
      
   }
   document.getElementById("totalcost").innerHTML = "Total Cost: " + tablecostsum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " (VND)";
}

function convertnumber(){
   var table = document.getElementById("pricetable");
   for(var i = 1; i < table.rows.length-1;i++){
     var cost =  table.rows[i].cells[8].innerHTML;
     //var costperday = table.rows[i].cells[9].innerHTML;
   
     table.rows[i].cells[8].innerHTML = cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
     //table.rows[i].cells[9].innerHTML = costperday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
   }
}

function setDataToLocalStorage() {
   const saveData = [];
   for (var i = 1; i < table.rows.length - 1; i++) {
     const data = {
       VMName: table.rows[i].cells[0].innerHTML,
       VCPU: table.rows[i].cells[1].innerHTML,
       RAM: table.rows[i].cells[2].innerHTML,
       SSD: table.rows[i].cells[3].innerHTML,
       HDD: table.rows[i].cells[4].innerHTML,
       DateStart: table.rows[i].cells[5].innerHTML,
       DateEnd: table.rows[i].cells[6].innerHTML,
       Duration: table.rows[i].cells[7].innerHTML,
       Cost: table.rows[i].cells[8].innerHTML,
       CostPerDay: table.rows[i].cells[9].innerHTML,
       CostPerHour: table.rows[i].cells[10].innerHTML,
       OS: table.rows[i].cells[11].innerHTML,
       Loca: table.rows[i].cells[12].innerHTML,
     };
     saveData.push(data);
   }
   console.log(JSON.stringify(saveData));
   window.localStorage.setItem("saveData", JSON.stringify(saveData));
 }


function autocomplete(searchEle, arr) {
      var currentFocus;
      searchEle.addEventListener("input", function(e) {
         var divCreate,
         b,
         i,
         fieldVal = this.value;
         closeAllLists();
         if (!fieldVal) {
            return false;
         }
         currentFocus = -1;
         divCreate = document.createElement("DIV");
         divCreate.setAttribute("id", this.id + "autocomplete-list");
         divCreate.setAttribute("class", "autocomplete-items");
         this.parentNode.appendChild(divCreate);
         for (i = 0; i <arr.length; i++) {
            if ( arr[i].substr(0, fieldVal.length).toUpperCase() == fieldVal.toUpperCase() ) {
               b = document.createElement("DIV");
               b.innerHTML = "<strong>" + arr[i].substr(0, fieldVal.length) + "</strong>";
               b.innerHTML += arr[i].substr(fieldVal.length);
               b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
               b.addEventListener("click", function(e) {
                  searchEle.value = this.getElementsByTagName("input")[0].value;
                  closeAllLists();
               });
               divCreate.appendChild(b);
            }
         }
      });
      searchEle.addEventListener("keydown", function(e) {
         var autocompleteList = document.getElementById(
            this.id + "autocomplete-list"
         );
         if (autocompleteList)
            autocompleteList = autocompleteList.getElementsByTagName("div");
         if (e.keyCode == 40) {
            currentFocus++;
            addActive(autocompleteList);
         }
         else if (e.keyCode == 38) {
            //up
            currentFocus--;
            addActive(autocompleteList);
         }
         else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
               if (autocompleteList) autocompleteList[currentFocus].click();
            }
         }
      });
      function addActive(autocompleteList) {
         if (!autocompleteList) return false;
            removeActive(autocompleteList);
         if (currentFocus >= autocompleteList.length) currentFocus = 0;
         if (currentFocus < 0) currentFocus = autocompleteList.length - 1;
         autocompleteList[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(autocompleteList) {
         for (var i = 0; i < autocompleteList.length; i++) {
            autocompleteList[i].classList.remove("autocomplete-active");
         }
      }
      function closeAllLists(elmnt) {
         var autocompleteList = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < autocompleteList.length; i++) {
            if (elmnt != autocompleteList[i] && elmnt != searchEle) {
               autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
            }
         }
      }
      document.addEventListener("click", function(e) {
         closeAllLists(e.target);
      });
   }
   var OS = ["Android","Windows","Ubuntu", "Apple macOs","Linux",];
   autocomplete(document.getElementById("OS"), OS);


 



 



