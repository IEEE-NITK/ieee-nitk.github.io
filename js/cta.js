function getTodaysDate() {
    var date = new Date();
    return {
        date: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
    }
}

function convertDate(dateString) {
    var months = {
        Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
    }
    return {
        date: parseInt(dateString.slice(0, 2)),
        month: months[dateString.slice(3, 6)],
        year: parseInt(dateString.slice(7, 11))
    }
}

function incrementDate(date) {
    var month_30 = [4, 6, 9, 11];
    if (month_30.indexOf(date.month) != -1) {
        var totalDays = 30;
    } else if (date.month == 2) {
        var totalDays = 28;
    } else {
        var totalDays = 31;
    }
    if (date.date >= totalDays) {
        if (date.month >= 12) {
            date.year += 1;
            date.month = 1;
            date.date = 1;
        } else {
            date.month += 1;
            date.date = 1;
        }
    } else {
        date.date += 1;
    }
    return date;
}

// Is date1 within 7 days of date2
function within7Days(date1, date2) {
    for (var i = 0; i < 7; i++){
        date1 = incrementDate(date1);
    }
    if (date1.year > date2.year || date1.month > date2.month) {
        return true;
    } else if (date1.year == date2.year && date1.month == date2.month && date1.date >= date2.date) {
        return true;
    } 
    return false;
}

function processTags(tagStr) {
    var tags = [];
    while (tagStr.indexOf(",") != -1){
        var index = tagStr.indexOf(",");
        tags.push(tagStr.slice(0, index));
        tagStr = tagStr.slice(index + 1);
    }
    if (tags.length == 0) {
        tags.push(tagStr);
    } else if (tagStr.length != 0) {
        tags.push(tagStr.slice(4));
    }
    return tags;
}

function renderArticle(article, section, number) {
    article.tags = processTags(article.tags);
    var sectionSelector = "#article" + number;

    var articleHref = "./" + article.url.slice(article.url.indexOf("in") + 3);
    var articleStr = "<a href=\"" + articleHref + "\">" + article.title + "</a>";
    $(sectionSelector + " .cta_heading").html(articleStr);

    var sectionHref = "./" + section.toLowerCase();
    var sectionStr = "<a href=\"" + sectionHref + "\">" + section + "</a>";
    $(sectionSelector + " .cta_section").html(sectionStr);
    
    for (var i = 0; i < article.tags.length; i++) {
        var tagHref = "./" + section.toLowerCase() + "/tags/#" + article.tags[i].toLowerCase();
        var tagStr = $(sectionSelector + " .tags_container").html() + 
                        "<div class=\"cta_tag\"><a href=\"" + tagHref + 
                        "\">" + article.tags[i] + "</a></div>";
        $(sectionSelector + " .tags_container").html(tagStr);

    }
}

function loadArticles() {
    var articles = {
        first: null,
        second: null
    };
    var todaysDate = getTodaysDate();
    $.getJSON("./gyan/search.json", function(result) {
        var gyanArticles = result.slice(0, 2);
        if (within7Days(convertDate(gyanArticles[0].date), todaysDate)) {
            renderArticle(gyanArticles[0], "Gyan", 1);
            if (within7Days(convertDate(gyanArticles[1].date), todaysDate)) {
                renderArticle(gyanArticles[1], "Gyan", 2);
            } else {
                $("#article2").css("display", "none");
                $("#article1").css("width", "92%");
            }
        } else {
            $(".cta_container").css("display", "none");
        }
    })
}

$(document).ready(function(){
    loadArticles();
});