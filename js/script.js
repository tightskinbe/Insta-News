document.addEventListener('DOMContentLoaded', function () {

    $('select').on('change', function () {
        //todo GET value of select list create a varible 
        const selectedOption = $('select').val()
        console.log(selectedOption);
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + selectedOption + '.json?api-key=nYkZPIA5ulHyDytyZQa6phEckAhzQT3x'
        })
            .done(function (data) {
                console.log(data);

                // will clear html before appending
                $('.all-news').html('');

                $.each(data.results, function (key, value) {
                    console.log(value);
                    //random results
                    //make it choose the 4th one

                    // const random = Math.floor(value.multimedia.length * Math.random());

                    const randomImg = value.multimedia[4];

                    const title = value.title;
                    //random img
                    // $('.no-content').hide()


                    // $('.all-news').append(`<p>${random}</p>`)

                    $('all-news').filter()

                    $('.all-news').append(`<div class="flex"><img src= "${randomImg.url}" width="100%"><div class="img-text"><p>${title}</p></div></div>`)
                    console.log(data);

                });
            })




    });


    // $('select').on('change', function () {
    //     $.ajax({
    //         method: 'GET',
    //         url: 'https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=nYkZPIA5ulHyDytyZQa6phEckAhzQT3x'
    //     })
    //         .done(function (data) {
    //             console.log(data);
    //         })




});