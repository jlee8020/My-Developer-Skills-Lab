
$('#skills tbody').on('click', 'button', function() {
  $(this).closest('tr').fadeOut(1000, function(){ $(this.remove());
});
});

$('#addSkill').click(function(evt) {
  let input = $('Input').val();
  let template = 
  `<tr>
  <td><button class="btn btn-med btn-danger">X</button></td>
  <td>${input}</td>
  </tr>`
  $('#skills tbody').append(template);
});

$( "#skills tbody" ).empty();
