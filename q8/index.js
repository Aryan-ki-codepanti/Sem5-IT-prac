$(document).ready(() => {
    $(".prettify-btn-dummy").on("click", e => {
        $(".container-dummy").first().addClass("container");
        $(".ques-head-dummy").first().addClass("ques-head");
        $(".course-title-dummy").first().addClass("course-title");
        $(".info-dummy").first().addClass("info");
        $(".papers-dummy").first().addClass("papers");
        $(".future-aspect-dummy").first().addClass("future-aspect");
        $(".prettify-btn-dummy").first().addClass("prettify-btn");
    });
});
