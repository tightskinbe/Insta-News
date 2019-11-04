document.addEventListener('DOMContentLoaded', function () {

    $('select').on('change', function () {
        const selectedOption = $('select').val()

        $(".loading").show();
        $('.header').addClass('move-header');
        $('.footer').addClass('move-footer');

        console.log(selectedOption);
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + selectedOption + '.json?api-key=nYkZPIA5ulHyDytyZQa6phEckAhzQT3x'
        })
            .done(function (data) {
                console.log(data);

                // will clear html before appending
                $('.all-news').html('');
                const results = data.results;
                const filterResults = results.filter(function (newsItem) {
                    return newsItem.multimedia[4] !== undefined;
                })
                    // only will show 12 things of content
                    .slice(0, 12);


                $.each(filterResults, function (key, value) {
                    console.log(value);


                    $('.all-news').append(`<a href="${value.url}"><article class="news-art" style="background: url(${value.multimedia[4].url}); background-size: cover;"><p>${value.abstract}</p>
                    </article></a>`);


                    console.log(data);

                });
            })
            .fail(function () {
                $('.all-news').append(`<p>Error could not get data from Instanews. Check internet connection.</p>`);
            })
            //hides loading img after content loaded
            .always(function () {
                $('.loading').hide();
            });



    });





});