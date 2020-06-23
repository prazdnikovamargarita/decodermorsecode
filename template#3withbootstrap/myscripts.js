$('#exampleModal').modal({
  keyboard: false,
  backdrop: "static"
})
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
