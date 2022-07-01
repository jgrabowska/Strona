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
					html += "<tr><td>" + value.ST + "</td>" + "<td>" + value.Nazwa + "</td>" + "<td>" + value.Nr_seryjny + "</td>" + "<td>" + value.Osoba_poz + "</td>" + "<td>" + value.Wydano + "</td>" + "<td>" + value.Do_zwrotu + "</td>" + "<td>" + value.Notatki + "</td>" + "<td>" + value.Konserwacja + "</td>"+"<td> <button class='w3-button w3-border' data-toggle='modal' data-target='#edit-employee-modal' data-id='"+value.id+"'>Edytuj</button> <button class='w3-button w3-border btn-delete-employee' data-id='"+value.id+"' typle='button'>Usuń</button></td></tr>" ;
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
	//$("#btnSearch").on("click", function() {
	$(document).on('click', '#btnSearch', function()	
		var $this 		    = $(this); 
        var $caption        = $this.html();
        var form 			= "#form-search"; 
        var formData        = $(form).serializeArray();
        var route 			= $(form).attr('action');
        //alert("dziala!");
    	$.ajax({
	        type: "POST",
	        url: route,
	        data: formData,
	        beforeSend: function () {
	            $this.attr('disabled', true).html("Szukanie...");
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