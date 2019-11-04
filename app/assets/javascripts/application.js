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
//= require bootstrap



$(function () {

    $.ajaxSettings.accepts.html = $.ajaxSettings.accepts.script;

    var answer = document.getElementById('answer')
    answer.value = '';
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

    $(valueA).keyup(function () {
        if (valueA.val() === '' || valueB.val() === '') {
            inputs.prop('disabled', true);
        } else {
            disabled(valueA.val(), valueB.val())
        }
    });

    $(valueB).keyup(function () {
        if (valueA.val() === '' || valueB.val() === '') {
            inputs.prop('disabled', true);
        } else {
            disabled(valueA.val(), valueB.val())
        }
    });

    $('input[type="submit"]').click(function () {

        event.preventDefault();
        var action = $("form").attr('action');
        var method = $("form").attr('method');
        var symbol = $(this).attr('value');

        $.ajaxSetup({
            headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }
        });

        $.ajax({
            method: method,
            url: action,
            data: JSON.stringify({
                calculator: {
                    'a': valueA.val(),
                    'b': valueB.val()
                },
                commit: symbol
            }),
            contentType: 'application/json',
            success: function (data) {
                var pretty = JSON.stringify(data['calculator'], undefined, 2);
                answer.value = pretty;
            }
        });

        valueA.val('');
        valueB.val('');
        inputs.prop('disabled', true);

    });

})
