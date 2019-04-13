 // Initialize Firebase
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

 var employeeName = $(`#employeeName`).val().trim();
 var role = $(`#role`).val().trim();
 var startDate = $(`#startDate`).val().trim();
 var monthsWorked = $(`#monthsWorked`).val().trim();
 var rate = $(`#rate`).val().trim();
 var totalBilled = $(`#totalBilled`).val().trim();

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