function renderArticles(articles) {
    var artcilesDiv = $(".related-articles");
    articles.forEach(article => {
        var str = "<div class=\"article sans\"><a href=\"" + article.url + "\">" + article.title + 
                  "</a><p>- " + article.author + "</p></div>";
        artcilesDiv.append($(str));
    });
}

function shuffle(array){
    var count = array.length, randomnumber, temp;
    while(count) {
        randomnumber = Math.random() * count-- | 0;
        temp = array[count];
        array[count] = array[randomnumber];
        array[randomnumber] = temp
    }
}

function loadArticles() {
    var articles = [];
    var type = $("#tags").html().toLowerCase();
    var category = $("#category").html().toLowerCase();
    var title = $("#title").html();
    if (type.indexOf("industry") != -1) {
        type = "industry";
    } else if (type.indexOf("research") != -1) {
        type = "research";
    } else {
        type = "internship";
    }
    $.getJSON("../search.json", function(result) {
        shuffle(result);

        // filter the articles by category
        result.some(article => {
            article.tags = article.tags.toLowerCase();
            article.category = article.category.toLowerCase();
            if (article.tags.indexOf(type) != -1 && article.category === category && article.title !== title) {
                articles.push(article);
            }
            if (articles.length >= 7) {
                return true;
            }
        });
        if (articles.length < 7) {
            result.some(article => {
                if (articles.indexOf(article) == -1) {
                    articles.push(article);
                }
                if (articles.length >= 7) {
                    return true;
                }
            });
        }
        renderArticles(articles);
    })
}
