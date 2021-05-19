$(document).ready(function() {
    $.getJSON("/offering/fab-course/join-course/learn-micro/learn-micro.json",
        function(data) {
            var content = '';
            var social_media = '';
            var hash_tags = '';

            social_media += '<div class="row">'
            social_media += '<div class="col-lg-12">'
            social_media += '<a class="mr-2" href="' + data[0].fb_url + '" target="_blank"><i class="fab fa-facebook-f fa-2x zoom"></i></a>'
            social_media += '<a class="mr-2" href="' + data[0].twitter_url + '" target="_blank"><i class="fab fa-twitter fa-2x zoom"></i></a>'
            social_media += '<a href="' + data[0].insta_url + '" target="_blank"><i class="fab fa-instagram fa-2x zoom"></i></a>'
            social_media += '</div>'
            social_media += '</div>'

            hash_tags += '<div class="row">'
            hash_tags += '<div class="col-lg-12">'
            hash_tags += '<h4 class="font-weight-bold" style="color:#44d9e6;">' + data[0].hashtags + '</h4>'
            hash_tags += '</div>'
            hash_tags += '</div>'

            $.each(data, function(key, value) {
                content += '<div class="row">'
                content += '<div class="col-lg-6">'
                content += '<iframe width="420" height="315" src="https://www.youtube.com/embed/' + value.url + '"></iframe>'
                content += '</div>'
                content += '<div class="col-lg-6">'
                content += '<h4>' + value.title + '</h4>'
                content += '<hr class="divider ml-0">'
                content += '<p class="text-muted">' + value.desc + '</p>'
                // content += '<p class="text-muted">' + value.desc2 + '</p>'
                content += '<p class="text-muted">' + value.buy + '</p>'
                content += '<a target="_blank" href="' + value.buy_link + '">https://www.aspirefactory.com</a>'
                content += '<p class="text-muted">' + value.other_info1 + '</p>'
                content += '<p class="text-muted">' + value.other_info2 + '</p>'
                content += '<p class="text-muted">' + value.other_info3 + '</p>'
                content += '<p class="text-muted">' + value.other_info4 + '</p>'
                content += '<hr>'
                content += '</div>'
                content += '</div>'

            });
            $('#course-container').append(content);
            // $('#social-media').append(social_media);
            $('#hash-tags').append(hash_tags);
        });
});