$(document).ready(() => {

    var timeOut;
    var loadUrl;
    let i = 1;

    $("#page_1").click(() => {
        i = 1;
    })

    $("#page_2").click(() => {
        i = 2;
    })
    $("#page_3").click(() => {
        i = 3;
    })

    $(".btn-loading-content").click(() => {

        clearTimeout(timeOut);

        loadUrl = `page_${i}`;
        console.log(loadUrl)
        loadUrl = loadUrl + "_content.html";

        $.ajax({

            url: loadUrl,

            success: (data) => {
                //data
                $("#div-content").html(data);
            },

            beforeSend: () => {
                $("#loading").show();
            },

            complete: function () {
                timeOut = setTimeout(() => {
                    $("#loading").hide();
                }, 1000);
            }
        });


    });
});