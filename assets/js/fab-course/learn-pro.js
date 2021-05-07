$(document).ready(function() {
    $.getJSON("/offering/fab-course/join-course/learn-pro/learn-pro.json",
        function(data) {
            var content = '';
            $.each(data, function(key, value) {
                content += '<div class="row">'
                content += '<div class="col-lg-6">'
                content += '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + value.url + '"></iframe>'
                content += '</div>'
                content += '<div class="col-lg-6">'
                content += '<h4>' + value.title + '</h4>'
                content += '<hr class="divider ml-0">'
                content += '<p class="text-muted">' + value.desc + '</h6>'
                content += '</div>'
                content += '</div>'
                content += '<hr>'



            });
            $('#course-container').append(content);
        });
});