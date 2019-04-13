
var config = {
    apiKey: "AIzaSyD1v5SLU62aJ4JAI_PbNL--IDuwimsFw_k",
    authDomain: "employee-data-management-21fec.firebaseapp.com",
    databaseURL: "https://employee-data-management-21fec.firebaseio.com",
    projectId: "employee-data-management-21fec",
    storageBucket: "employee-data-management-21fec.appspot.com",
    messagingSenderId: "376900891882"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var employee = ["Alec", "Jameson", "Jason", "Faran"];
  var role = ["CEO", "CEO", "CEO", "CEO"];
  var start = [];
  var rate = [100, 100, 100, 100];


  document.on("click", button, function() {
    event.preventDefault();
    var formEmployee = $("#employee-name").val().trim();
    var formRole = $("#role").val().trim();
    var formStart = $("#start-date").val().trim();
    var formRate = $("#monthly-rate").val().trim();
    employee.push(formEmployee);
    role.push(formRole);
    start.push(formStart);
    rate.push(formRate);
  });
  
  })


 function makeRow() {
     return `
    <tbody>
    <tr>
      <td>${employeeName}</td>
      <td>${role}</td>
      <td>${startDate}</td>
      <td>${monthsWorked}</td>
      <td>${rate}</td>
      <td>${totalBilled}</td>
    </tr>
  </tbody>
    `
 }


 $(`button`).click(function () {
    
 })

