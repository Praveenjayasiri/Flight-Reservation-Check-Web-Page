$(document).ready(function() {
    $('#flightForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        var formData = {
            departFrom: $('#departFrom').val(),
            arrivingAt: $('#arrivingAt').val(),
            departDate: $('#departDate').val(),
            returnDate: $('#returnDate').val()
        };

        // Make AJAX request to API
        $.ajax({
            url: 'https://run.mocky.io/v3/4c428c1f-8624-4371-b487-6a14a8696b10',
            type: 'GET',
            dataType: 'json',
            data: formData,
            success: function(response) {
                // Process API response
                alert('Flight availability: ' + JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                alert('Error fetching flight data: ' + error);
            }
        });
    });
});