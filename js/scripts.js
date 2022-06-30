

function all() 
{
	// Ajax config
	$.ajax({
        type: "GET", //we are using GET method to get all record from the server
        url: 'all.php', // get the route value
        success: function (response) {//once the request successfully process to the server side it will return result here
            
            // Parse the json result
        	response = JSON.parse(response);

            var html = "";
            // Check if there is available records
            if(response.length) {
            	html += "<table class='w3-table-all'><tr><th>ŚT</th><th>Nazwa</th><th>Nr seryjny</th><th>Osoba pożyczająca</th><th>Wydano</th><th>Do zwrotu</th><th>Notatki</th><th>Konserwacja</th></tr>";
	            // Loop the parsed JSON
	            $.each(response, function(key,value) {
	            	// Our employee list template
					html += "<tr><td>" + value.ST + "</td>" + "<td>" + value.Nazwa + "</td>" + "<td>" + value.Nr_seryjny + "</td>" + "<td>" + value.Osoba_poz + "</td>" + "<td>" + value.Wydano + "</td>" + "<td>" + value.Do_zwrotu + "</td>" + "<td>" + value.Notatki + "</td>" + "<td>" + value.Konserwacja + "</td>"+"<td> <button class='w3-button w3-border' data-toggle='modal' data-target='#edit-employee-modal' data-id='"+value.id+"'>Edytuj</button> <button class='w3-button w3-border btn-delete-employee' data-id='"+value.id+"' typle='button'>Usuń</button></td></tr>" ;
	            });
	           html += "</table>";
            } else {
            	html += '<div class="alert alert-warning">';
				html += 'Nic nie znaleziono';
				html += '</div>';
            }

            // Insert the HTML Template and display all employee records
			$("#wyniki").html(html);
        }
    });
}

function showST(str) {
  if (str == "") {
    document.getElementById("wyszuk").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("wyszuk").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","getst.php?q="+str,true);
    xmlhttp.send();
  }
}

function save() 
{
	$("#btnSubmit").on("click", function() {
		
		var $this 		    = $(this); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action
        
		// Ajax config
    	$.ajax({
	        type: "POST", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Dodawanie...");
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);

	            // Reload lists of employees
	            all();

	            // We will display the result using alert
	            alert(response);

	            // Reset form
	            resetForm(form);
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}

function resetForm(selector) 
{
	$(selector)[0].reset();
}


function get() 
{
	$(document).delegate("[data-target='#edit-employee-modal']", "click", function() {

		var id = $(this).attr('data-id');

		// Ajax config
		$.ajax({
	        type: "GET", //we are using GET method to get data from server side
	        url: 'get.php', // get the route value
	        data: {idst:id}, //set data
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            response = JSON.parse(response);
	            $("#edit-form [name=\"id\"]").val(response.id);
	            $("#edit-form [name=\"ST\"]").val(response.ST);
	            $("#edit-form [name=\"Nazwa\"]").val(response.Nazwa);
	            $("#edit-form [name=\"Nr_seryjny\"]").val(response.Nr_seryjny);
	            $("#edit-form [name=\"Osoba_poz\"]").val(response.Osoba_poz);
				$("#edit-form [name=\"Wydano\"]").val(response.Wydano);
				$("#edit-form [name=\"Do_zwrotu\"]").val(response.Do_zwrotu);
				$("#edit-form [name=\"Notatki\"]").val(response.Notatki);
				$("#edit-form [name=\"Konserwacja\"]").val(response.Konserwacja);
	        }
	    });
	});
}

function update() 
{
	$("#btnUpdateSubmit").on("click", function() {
		var $this 		    = $(this); //submit button selector using ID
        var $caption        = $this.html();// We store the html content of the submit button
        var form 			= "#edit-form"; //defined the #form ID
        var formData        = $(form).serializeArray(); //serialize the form into array
        var route 			= $(form).attr('action'); //get the route using attribute action

        // Ajax config
    	$.ajax({
	        type: "POST", //we are using POST method to submit the data to the server side
	        url: route, // get the route value
	        data: formData, // our serialized array data for server side
	        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
	            $this.attr('disabled', true).html("Processing...");
	        },
	        success: function (response) {//once the request successfully process to the server side it will return result here
	            $this.attr('disabled', false).html($caption);

	            // We will display the result using alert
	            alert(response);

	            // Reset form
	            resetForm(form);

	            // Close modal
	            $('#edit-employee-modal').modal('toggle');
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        	// You can put something here if there is an error from submitted request
	        }
	    });
	});
}


function del() 
{
	$(document).delegate(".btn-delete-employee", "click", function() {

		

		if (confirm("Are you sure you want to delete this record?")) {
		    var id = $(this).attr('data-id');

		    // Ajax config
			$.ajax({
		        type: "GET", //we are using GET method to get data from server side
		        url: 'delete.php', // get the route value
		        data: {idst:id}, //set data
		        beforeSend: function () {//We add this before send to disable the button once we submit it so that we prevent the multiple click
		            
		        },
		        success: function (response) {//once the request successfully process to the server side it will return result here
		            // Reload lists of employees
	            	all();

		            alert(response)
		        }
		    });
		}

		
	});
}


$(document).ready(function() {

	// Get all employee records
	all();

	// Submit form using AJAX To Save Data
	save();

	// Get the data and view to modal
	get();
	 
	// Updating the data
	update();

	// Delete record via ajax
	del();
});

