document.addEventListener('DOMContentLoaded', function () {

    $('select').on('change', function () {
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=nYkZPIA5ulHyDytyZQa6phEckAhzQT3x'
        })
            .done(function (data) {
                console.log(data);
                $.each(data.results, function (key, value) {
                    console.log(value);
                    //random results
                    const random = Math.floor(value.multimedia.length * Math.random());
                    const randomImg = value.multimedia[random];
                    //random img
                    // const randomImg = Math.floor(value.multimedia[random].length * Math.random());
                    // console.log(randomImg);
                    console.log(random);
                    // $('.all-news').append(`<div><p>${data.copyright}</p><img src="${data.results[random].multimedia[randomImg].url}"> </div>`)

                    // commit this after

                    $('.all-news').append(`<p>${random}</p>`)
                    // this one
                    $('.all-news').append(`<img src= "${randomImg.url}">`)
                    console.log(data);

                });
            })


    });













});