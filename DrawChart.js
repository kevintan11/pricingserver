//biến khai báo màu cho việc vẽ biểu đồ
var palette =[
'rgb(223, 255, 0)',
'rgb(255, 191, 0)',
'rgb(255, 127, 80)',
'rgb(0, 204, 0)',
'rgb(0, 128, 255)',
'rgb(64, 224, 208)',
'rgb(111, 255, 144)',
'rgb(255, 26, 26)',
'rgb(255, 128, 0)',
'rgb(0, 255, 0)',
];

//hàm vẽ biểu đồ giá của các máy ảo
function BuildChart(labels1, values1) {
  var ctx = document.getElementById("CostChart").getContext('2d');
  var myChart1 = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: labels1, // Our labels
          datasets: [{
              data: values1, // Our values
              
              backgroundColor: function(context) {
                return palette[context.dataIndex % palette.length]},
              
              borderColor: function(context) {
                return palette[context.dataIndex % palette.length]},
                borderWidth: 2 // Specify bar border width
          }]
      },

      options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          title: {
            display: true,
            text: 'Cost',
            fontSize: "15",
            fontColor: "black",
          },

          legend: {
            position: 'right',
            labels: {
                fontColor: "#000000",
                boxWidth: 10,
                padding: 5
            }
         },

         plugins: {
          labels:{
            render: "percentage",
            fontColor: "#000000",
            precision: 2,
            //arc: true
            
          },
        
        }
          
      }
       
    });
  return myChart1
}

//hàm vẽ biểu đồ "cost per hour" của các máy ảo
function BuildChart2(labels2, values2) {
      var ctx2 = document.getElementById("CostPerHourChart").getContext('2d');
      var myChart2 = new Chart(ctx2, {
          type: 'doughnut',
          data: {
              labels: labels2, // Our labels
              datasets: [{
                  
                  data: values2, // Our values
                  
                  backgroundColor: function(context) {
                    return palette[context.dataIndex % palette.length]},
                  
                  borderColor: function(context) {
                    return palette[context.dataIndex % palette.length]},
                  borderWidth: 2 // Specify bar border width
              }]
          },

          options: {
              responsive: true, // Instruct chart js to respond nicely.
              maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
              
              title: {
                display: true,
                text: 'Cost per hour',
                fontSize: "15",
                fontColor: "black",
              },
              
              legend: {
                position: 'right',
                labels: {
                    fontColor: "black",
                    boxWidth: 10,
                    padding: 5
                }
             },

              plugins: {
               labels:{
                  fontColor: "black",
                  render: 'percentage',
                  precision: 2,
                  //arc: true
                  
                }, 
              },
            
            }
               
          });
    
    return myChart2
}

// hàm vẽ biểu đồ thể hiện các loại và số lượng hệ điều hành mà các máy ảo dùng
function BuildChart3(labels3, values3) {

  var ctx3 = document.getElementById("OSChart").getContext('2d');
  var myChart3 = new Chart(ctx3, {
      type: 'doughnut',
      data: {
          labels: labels3, // Our labels
          datasets: [{
              
              data: values3, // Our values
              
              backgroundColor: function(context) {
                return palette[context.dataIndex % palette.length]},
              
              borderColor: function(context) {
                return palette[context.dataIndex % palette.length]},
              borderWidth: 2 // Specify bar border width
          }]
      },
      options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          
          title: {
            display: true,
            text: 'Operating System',
            fontSize: "15",
            fontColor: "black",
          },
          
          legend: {
            position: 'right',
            labels: {
                fontColor: "black",
                boxWidth: 10,
                padding: 5
            }
          },

          plugins: {
            labels:{
             fontColor: '#000000',
             render: 'value',
             precision: '0',
            },
            
          }
        
        }
     
  })

return myChart3
}


function BuildChart4(labels4, values4) {

  var ctx4 = document.getElementById("LocationChart").getContext('2d');
  var myChart4 = new Chart(ctx4, {
      type: 'doughnut',
      data: {
          labels: labels4, // Our labels
          datasets: [{
              
              data: values4, // Our values
              
              backgroundColor: function(context) {
                return palette[context.dataIndex % palette.length]},
              
              borderColor: function(context) {
                return palette[context.dataIndex % palette.length]},
              borderWidth: 2 // Specify bar border width
          }]
      },
      options: {
          responsive: true, // Instruct chart js to respond nicely.
          maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
          
          title: {
            display: true,
            text: 'Location',
            fontSize: "15",
            fontColor: "black",
          },
          
          legend: {
            position: 'right',
            labels: {
                fontColor: "black",
                boxWidth: 10,
                padding: 5
            }
          },

          plugins: {
            labels:{
             fontColor: '#000000',
             render: 'value',
             precision: '0',
            },
            
          }
        
        }
     
  })

return myChart4
}







//hàm này chuyể dữ liệu từ trong bảng ra một object
function TransferDataToArray(){

  var table = document.getElementById("contenttable");
  var result = []

  // Iterate over rows
  for (var i=1, iLen=table.rows.length-1; i<iLen; i++) {

    var t = {
              virtualmachinename: table.rows[i].cells[0].innerHTML,
              vcpu: table.rows[i].cells[1].innerHTML,
              ram: table.rows[i].cells[2].innerHTML,
              ssd: table.rows[i].cells[3].innerHTML,
              hdd: table.rows[i].cells[4].innerHTML,
              datestart: table.rows[i].cells[5].innerHTML,
              dateend: table.rows[i].cells[6].innerHTML,
              duration: table.rows[i].cells[7].innerHTML,
              cost: table.rows[i].cells[8].innerHTML,
              costperday: table.rows[i].cells[9].innerHTML,
              costperhour: table.rows[i].cells[10].innerHTML,
              OS: table.rows[i].cells[11].innerHTML,
              Location:table.rows[i].cells[12].innerHTML,
            };
   
    result.push(t);
   
  }
 
  return result
  
}


//hàm này đọc dữ liệu từ object và thực hiệu chức năng vẽ biểu đồ
function readData(){
  
  var data = TransferDataToArray()
  
 //data input for cost chart
 //Map array of object values back to label array
  var labels1 = data.map(function (e) {
    return e.virtualmachinename;
  });
  
  // Map  array of object values back to values array
  var values1 = data.map(function (e) {
    return e.cost;
  });
  
 //
 //data input for cost per hour chart 
  // Map  array of object values back to label array
  var labels2 = data.map(function (e) {
    return e.virtualmachinename;
  });

  // Map  array of object values back to values array
  var values2 = data.map(function (e) {
    return e.costperhour;
  });

 
 
  //Data for OS chart
  // Map  array of object values back to values array
  var values3 = data.map(function (e) {
    return e.OS;
  });
  
  var count = {};
  values3.forEach(function(i) { count[i] = (count[i]||0) + 1;});
 
  
  // lấy tên và giá trị trong object count
  var OSname =  Object.keys(count);
  var OSamount = Object.values(count);
  
   //Data for OS chart
  // Map  array of object values back to values array
  var values4 = data.map(function (e) {
    return e.Location;
  });
  
  var count = {};
  values4.forEach(function(i) { count[i] = (count[i]||0) + 1;});
 
  
  // lấy tên và giá trị trong object count
  var Locationname =  Object.keys(count);
  var Locationamount = Object.values(count);



  var chart1 = BuildChart(labels1, values1);
  var chart2 = BuildChart2(labels2, values2);
  var chart3 = BuildChart3(OSname,  OSamount)
  var chart4 = BuildChart4(Locationname,Locationamount)
}








