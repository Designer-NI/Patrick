
$(document).ready(function () {

  $(".close").click(function(){
      $("#styled-checkbox-1").prop("checked", false);
  });

  var modalBtns = [...document.querySelectorAll(".checked")];
  modalBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.getAttribute('data-modal');
      document.getElementById(modal).style.display = "block";
      $('.header , .main').addClass('active');
    }
  });
  var closeBtns = [...document.querySelectorAll(".close")];
  closeBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.closest('.modal');
      modal.style.display = "none";
      $('.header , .main').removeClass('active');
    }
  });

  var modalBtns = [...document.querySelectorAll(".search-button")];
  modalBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.getAttribute('data-modal');
      document.getElementById(modal).style.display = "block";
      $('.header , .main').addClass('active');
    }
  });
  var closeBtns = [...document.querySelectorAll(".close-btn .close")];
  closeBtns.forEach(function(btn){
    btn.onclick = function() {
      var modal = btn.closest('.modal');
      modal.style.display = "none";
      $('.header , .main').removeClass('active');
    }
  });

  $('.input-daterange').datepicker({
        autoclose: true
  });

  $(".chosen-select").chosen({
    no_results_text: "Oops, nothing found!"
  });

});

