// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
// = require jquery
//= require jquery_ujs
// = require bootstrap-sprockets



$(function(){

    var inputs = $(":submit");
    var valueA = $("#calculator_a")
    var valueB = $("#calculator_b")

    function disabled(valA, valB) {
        if ((valA < 0 || valA > 100) || (valB < 0 || valB > 100)) {
            inputs.prop('disabled', true);
        } else {
            inputs.prop('disabled', false);
        }
    }



    $(valueA).keyup(function() {
        if (valueA.val() === '' || valueB.val() === '') {
            inputs.prop('disabled', true);
        } else {
            disabled(valueA.val(), valueB.val())
        }
    });
    
    $(valueB).keyup(function() {
        if (valueA.val() === '' || valueB.val() === '') {
            inputs.prop('disabled', true);
        } else {
            disabled(valueA.val(), valueB.val())
        }
    });

    $("form").submit(function(){
        event.preventDefault();

        // this debugger should be hit when you click the submit button!
        // debugger;
      });
    
})
