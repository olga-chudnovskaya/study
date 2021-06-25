$(function() {
    function checkLength(o, min, max) {
      if (o.val().length > max || o.val().length < min) {
        o.addClass("ui-state-error");
        return false;
      } else {
        return true;
      }
    }
  
    function addEvent(d) {
      var valid = true;
      $("#newEvent input").removeClass("ui-state-error");
      valid = valid && checkLength($("#newEventTitle"), 3, 80);
      if (valid) {
        $.ajax({
          url: "newEvent.php",
          type: "POST",
          data: {
            eventName: $("#newEventTitle").val(),
            eventDate: d,
            eventTime: $("#newEventTime").val(),
            eventDesc: $("#newEventDesc").val(),
            eventColor: $("#newEventTeam").val()
          },
          success: function(resp) {
            // Response may contain an Event ID that could be added to the calendar
            $(".selected-day").removeClass("selected-day");
          }
        });
      }
      return valid;
    }
  
    var $popup = $("#newEvent").dialog({
      autoOpen: false,
      modal: true,
      buttons: {
        "Create Event": function() {
          addEvent($(".selected-day").html());
        },
        Cancel: function() {
          $(this).dialog("close");
        }
      },
      close: function() {
        $("#newEvent form")[0].reset();
        $("#newEvent form input").removeClass("ui-state-error");
        $(this).dialog("option", "title", "New Event");
      }
    });
  
    $("#newEvent form").submit(function(e) {
      e.preventDefault();
      addUser($(".selected-day").html());
    });
  
    $("#cal-frame td").click(function(e) {
      var day = parseInt($(this).html());
      $(this).addClass("selected-day");
      var month = $("#cal .month-year").html();
      var title = $popup.dialog("option", "title") + " for " + day + month;
      $popup.dialog("option", "title", title);
      $popup.dialog("open");
    });
  });
  