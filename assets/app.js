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

  var name = "";
  var role = "";
  var start = "";
  var rate = "";


  $(".btn").on("click", function(event) {
    event.preventDefault();
    name = $("#employee-name").val();
    role = $("#role").val();
    start = $("#start-date").val();
    rate = $("#monthly-rate").val();

    database.ref().push({
      name: name,
      role: role,
      start: start,
      rate: rate
    })
  });
  


//  function makeRow() {
//      return `
//     <tbody>
//     <tr>
//       <td>${employeeName}</td>
//       <td>${role}</td>
//       <td>${startDate}</td>
//       <td>${monthsWorked}</td>
//       <td>${rate}</td>
//       <td>${totalBilled}</td>
//     </tr>
//   </tbody>
//     `
//  }

