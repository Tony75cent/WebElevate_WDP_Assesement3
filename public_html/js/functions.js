/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $("#Btnsubmit").on("click", login);
    function login() {
                    alert("A_testing@15:44");

        /**  createLocalStorage();  **/
        /** localStorage.setItem("email", "anthony.quinn@webelevate.ie"); **/
        /**  localStorage.setItem("password", "anthonyquinn"); **/
        /** Retrieve the user input  email and password from the form input fields in the index.html file
         * and assign each one a reference,$email and  $password respectively **/
        var $inputEmail = $("#inputEmail").text();
        var $inputPassword = $("#inputPassword").text();
        var $storedusername = "anthonyquinn@webelevate.ie";
        var $storedpassword = "letmein";
        /** $storedemail = localStorage.getItem("email"); 
         $("#loginerror").text(localStorage.getItem("email"));
         $storedpassword = localStorage.getItem("password");
         
         **/
        if ($inputEmail == $storedusername) {
                                alert("B_testing@15:44");


            window.location = "/WebElevate_WDP_Assesement3/menu.html";

        } else {
                 /**   alert("C_testing@15:45"); **/

            window.location = "/WebElevate_WDP_Assesement3/menu.html";
            alert("D_testing@14:54");




        }






    }
    function createLocalStorage() {
        // Check browser support
        if (typeof (Storage) !== "undefined") {
            // Store
            localStorage.setItem("email", "anthony.quinn@webelevate.ie");
            localStorage.setItem("password", "anthonyquinn");
            // Retrieve
        } else {
            $('#loginerror').text("Sorry, your browser does not support Web Storage...");
        }

    }
    ;
    function login2() {
        var username = $("#inputEmail").text();
        var password = $("inputPassword").text();
        /**    var username = document.getElementById(this.id + "-username").value; **/
        /** var password = document.getElementById(this.id + "-password").value; **/
        this.http.open("get", this.action, false, username, password);
        this.http.send("");
        if (http.status == 200) {
            document.location = "menu.html";
        } else {
            alert("Incorrect username and/or password.");
        }
        return false;




    }



});
