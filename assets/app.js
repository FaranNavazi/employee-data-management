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
  });


});



database.ref().on("child_added", function(snapshot, prevChildKey) {
  var newTr = snapshot.val();
  console.log(snapshot.val());
  $("table").append(makeRow(newTr));
});

 function makeRow(data) {
     return `
    <tbody>
    <tr>
      <td>${data.name}</td>
      <td>${data.role}</td>
      <td>${data.startDate}</td>
      <td>${data.monthsWorked}</td>
      <td>${data.rate}</td>
      <td>${data.totalBilled}</td>
    </tr>
  </tbody>
    `
 }
