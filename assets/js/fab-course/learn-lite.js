$(document).ready(function() {
    $.getJSON("/offering/fab-course/join-course/learn-lite/learn-lite.json",
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
                content += '<p class="text-muted">' + value.desc + '</p>'
                content += '<p class="text-muted">' + value.buy + '</p>'
                content += '<a href="' + value.buy_link + '">https://www.aspirefactory.com</a>'
                content += '<p class="text-muted">' + value.other_info1 + '</p>'
                content += '<p class="text-muted">' + value.other_info2 + '</p>'
                content += '<p class="text-muted">' + value.other_info3 + '</p>'
                content += '<p class="text-muted">' + value.other_info4 + '</p>'
                content += '<a class="mr-2" href="' + value.fb_url + '" target="_blank"><i class="fab fa-facebook-f fa-2x zoom"></i></a>'
                content += '<a class="mr-2" href="' + value.twitter_url + '" target="_blank"><i class="fab fa-twitter fa-2x zoom"></i></a>'
                content += '<a href="' + value.insta_url + '" target="_blank"><i class="fab fa-instagram fa-2x zoom"></i></a>'
                content += '<p style="color:#44d9e6;">' + value.hashtags + '</p>'
                content += '</div>'
                content += '</div>'
                content += '<hr>'
            });
            $('#course-container').append(content);
        });
});