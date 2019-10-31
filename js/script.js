document.addEventListener('DOMContentLoaded', function () {

    $('select').on('change', function () {
        const selectedOption = $('select').val()

        $('.loading').append('<img src="./images/ajax-loader.gif" width="50px" height="50px"/>')

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

                    $('.loading').hide()

                    $('.all-news').append(`<article class="news-art" style="background: url(${value.multimedia[4].url}); background-size: cover;"><p>${value.abstract}</p></article>`);


                    console.log(data);

                });
            })




    });





});