
//hàm này dùng để lưu giá trị input dùng cho tính toán hàng loạt từ bảng
// và lưu giá trị này vào trong local storage
function savelocalstoragedata(){
   
   //create object
   var core = {vcpu:document.getElementById('corep2').value};
   var ram = {ram:document.getElementById('ramp2').value};
   var ssd = {ssd:document.getElementById('ssdp2').value};
   var hdd = {hdd:document.getElementById('hddp2').value};
  
   
    //saving to localStorage
    localStorage.setItem('vcpu', JSON.stringify(core));
    localStorage.setItem('ram', JSON.stringify(ram));
    localStorage.setItem('ssd', JSON.stringify(ssd));
    localStorage.setItem('hdd', JSON.stringify(hdd));
   

    alert('Input values saved ');
}

//hàm này dùng để lấy giá trị từ local storage ra input
function showinputvalue(){
   var corep2 = document.getElementById("corep2").value = JSON.parse(localStorage.getItem('vcpu')).vcpu
   var ramp2 = document.getElementById("ramp2").value = JSON.parse(localStorage.getItem('ram')).ram
   var ssdp2 = document.getElementById("ssdp2").value = JSON.parse(localStorage.getItem('ssd')).ssd
   var hddp2 = document.getElementById("hddp2").value = JSON.parse(localStorage.getItem('hdd')).hdd
}




