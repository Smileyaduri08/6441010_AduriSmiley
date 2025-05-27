<!-- index.html snippet -->
<button id="registerBtn">Register</button>
<div id="eventCard" style="display:none; border:1px solid #ccc; padding:10px;">
  Event Details Here
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
  // Handle button click with jQuery
  $('#registerBtn').click(function() {
    alert('Register button clicked!');
    
    // Toggle event card visibility with fadeIn/fadeOut
    if ($('#eventCard').is(':visible')) {
      $('#eventCard').fadeOut();
    } else {
      $('#eventCard').fadeIn();
    }
  });
</script>
