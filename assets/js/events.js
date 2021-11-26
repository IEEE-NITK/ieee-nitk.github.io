function changeImg(id, n) {
    var image = $(`#${id}`).children("div").filter(".active");
    var nextImage;
    if (n == 1) {
        nextImage = image.next("div");
        if (nextImage.length == 0)
            nextImage = $(`#${id}`).children("div").first();
    }
    else if (n == -1) {
        nextImage = image.prev("div");
        if (nextImage.length == 0)
            nextImage = $(`#${id}`).children("div").last();
    }

    image.hide();
    nextImage.show();

    image.removeClass("active");
    nextImage.addClass("active");
}

$(document).ready(() => {
    $(".card-image-slideshow > div:first-child").show();
    $(".card-image-slideshow > div:first-child").addClass("active");

    setInterval(() => {
        $(".next").click();
    }, 3000);
})
