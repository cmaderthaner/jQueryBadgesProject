$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/cmaderthaner.json',
    dataType: 'jsonp',
    success: function(response) {
      for(var i = 0; i < response.courses.completed.length; i++) {
        var course = response.courses.completed[i];
        var container = $('<div></div>').addClass('course');
        var header = $('<h3></h3>').text(course.title);
        container.append(header);
        var img = $('<img />').attr('src', course.badge);
        container.append(img);
        var link = $('<a></a>').attr('href', course.url)
          .attr('target', '_blank').addClass('btn btn-primary')
          .text('See Course');
        container.append(link);
        $('#badges').append(container);
      }
    }
  })

});
