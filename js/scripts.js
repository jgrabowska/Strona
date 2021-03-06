
function all() 
{
	$.ajax({
        type: "GET", 
        url: 'all.php',
        success: function (response) {
            
        	response = JSON.parse(response);

            var html = "";

            if(response.length) {
            	html += "<table class='w3-table-all'><tr><th>ŚT</th><th>Nazwa</th><th>Nr seryjny</th><th>Osoba pożyczająca</th><th>Wydano</th><th>Do zwrotu</th><th>Notatki</th><th>Konserwacja</th></tr>";

	            $.each(response, function(key,value) {
					html += "<tr><td>" + value.ST + "</td>" + "<td>" + value.Nazwa + "</td>" + "<td>" + value.Nr_seryjny + "</td>" + "<td>" + value.Osoba_poz + "</td>" + "<td>" + value.Wydano + "</td>" + "<td>" + value.Do_zwrotu + "</td>" + "<td>" + value.Notatki + "</td>" + "<td>" + value.Konserwacja + "</td>"+"<td> <button class='w3-button w3-border' data-toggle='modal' data-target='#edit-st-modal' data-id='"+value.id+"'>Edytuj</button> <button class='w3-button w3-border btn-delete-st' data-id='"+value.id+"' typle='button'>Usuń</button></td></tr>" ;
	            });
				
	           html += "</table>";
			   
            } else {
            	html += '<div class="alert alert-warning">';
				html += 'Nic nie znaleziono';
				html += '</div>';
            }
			
			$("#wyniki").html(html);
        }
    });
}

function search() 
{
	$("#btnSearch").on("click", function() {
		var $this 		    = $(this); 
        var $caption        = $this.html();
        var form 			= "#form-search"; 
        var formData        = $(form).serializeArray();
        var route 			= $(form).attr('action');

    	$.ajax({
	        type: "POST",
	        url: route,
	        data: formData,
	        beforeSend: function () {
	            $this.attr('disabled', true).html("Szukanie...");
	        },
	        success: function (response) {
	            $this.attr('disabled', false).html($caption);

				response = JSON.parse(response);

				var html = "";

				if(response.length) {
					html += "<table class='w3-table-all'><tr><th>ŚT</th><th>Nazwa</th><th>Nr seryjny</th><th>Osoba pożyczająca</th><th>Wydano</th><th>Do zwrotu</th><th>Notatki</th><th>Konserwacja</th></tr>";

					$.each(response, function(key,value) {
						html += "<tr><td>" + value.ST + "</td>" + "<td>" + value.Nazwa + "</td>" + "<td>" + value.Nr_seryjny + "</td>" + "<td>" + value.Osoba_poz + "</td>" + "<td>" + value.Wydano + "</td>" + "<td>" + value.Do_zwrotu + "</td>" + "<td>" + value.Notatki + "</td>" + "<td>" + value.Konserwacja + "</td>"+"<td> <button class='w3-button w3-border' data-toggle='modal' data-target='#edit-st-modal' data-id='"+value.id+"'>Edytuj</button> <button class='w3-button w3-border btn-delete-st' data-id='"+value.id+"' typle='button'>Usuń</button></td></tr>" ;
					});
					
				   html += "</table>";
				   
				} else {
					html += '<div class="alert alert-warning">';
					html += 'Nic nie znaleziono';
					html += '</div>';
				}
				$("#wysz").html(html);
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {

	        }
	    });
	});
}

function save() 
{
	$("#btnSubmit").on("click", function() {
		
		var $this 		    = $(this); 
        var $caption        = $this.html();
        var form 			= "#form"; 
        var formData        = $(form).serializeArray();
        var route 			= $(form).attr('action');
        
    	$.ajax({
	        type: "POST",
	        url: route,
	        data: formData,
	        beforeSend: function () {
	            $this.attr('disabled', true).html("Dodawanie...");
	        },
	        success: function (response) {
	            $this.attr('disabled', false).html($caption);

	            all();

	            alert(response);

	            resetForm(form);
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {

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
	$(document).delegate("[data-target='#edit-st-modal']", "click", function() {

		var idst = $(this).attr('data-id');

		$.ajax({
	        type: "GET",
	        url: 'get.php', 
	        data: {id:idst}, 
	        beforeSend: function () {
	            
	        },
	        success: function (response) {
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
		var $this 		    = $(this);
        var $caption        = $this.html();
        var form 			= "#edit-form"; 
        var formData        = $(form).serializeArray();
        var route 			= $(form).attr('action'); 

    	$.ajax({
	        type: "POST", 
	        url: route, 
	        data: formData,
	        beforeSend: function () {
	            $this.attr('disabled', true).html("Aktualizowanie...");
	        },
	        success: function (response) {
	            $this.attr('disabled', false).html($caption);
				
				all();
				
	            alert(response);

	            resetForm(form);
				
				
	            $('#edit-st-modal').modal('toggle');
	        },
	        error: function (XMLHttpRequest, textStatus, errorThrown) {
	        }
	    });
	});
}


function del() 
{
	$(document).delegate(".btn-delete-st", "click", function() {

		if (confirm("Czy na pewno usunąć?")) {
		    var idst = $(this).attr('data-id');

			$.ajax({
		        type: "GET",
		        url: 'delete.php', 
		        data: {id:idst}, 
		        beforeSend: function () {
		            
		        },
		        success: function (response) {
	            	all();

		            alert(response)
		        }
		    });
		}

		
	});
}

function openPage(name) {
	var i;
	var x = document.getElementsByClassName("opage");
	for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
	document.getElementById(name).style.display = "block";  
}

$(document).ready(function() {

	all();

	save();

	get();
	 
	update();

	search();
	
	del();
	
	openPage("H")
		
});

