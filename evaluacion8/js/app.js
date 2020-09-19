//quotes
let quotesData;

function getQuotes() {
    return $.ajax({
        accepts: "application/json",
        url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        success: function(jsonQuotes) {
            if (typeof jsonQuotes === "string") {
                quotesData = JSON.parse(jsonQuotes);
            }
        }
    });
}

function getRandomQuote() {
    let getRandom = () => Math.floor(Math.random() * quotesData.quotes.length);
    let randomNumber = getRandom();

    let lastQuote = document.getElementById("text").textContent;
    while (lastQuote == quotesData.quotes[randomNumber].quote)
        randomNumber = getRandom();

    let randomQuote = quotesData.quotes[randomNumber].quote;
    let randomAuthor = quotesData.quotes[randomNumber].author;
    return { quote: randomQuote, author: randomAuthor };
}

function setQuote() {
    let newQuote = getRandomQuote();

    $("#new-quote").prop("disabled", true);
    $("#author, #text").fadeToggle(500, function() {
        $("#author").html(newQuote.author);
        $("#text").html(newQuote.quote);

        $(this).fadeToggle(500);
        $("#new-quote").prop("disabled", false);
    });
}

function tweetQuote() {
    let currentQuote = $("#text").text();
    let currentAuthor = $("#author").text();

    $(this).attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + currentQuote + '" - ' + currentAuthor)
    );
}

$(document).ready(() => {
    getQuotes().then(() => {

        setQuote();

        $("#new-quote").on("click", setQuote);
        $("#tweet-quote").on("click", tweetQuote);
    });
});

var t = setInterval(
    function() {
        var documentHeight = $(document).height();
        var startPositionLeft = Math.random() * $(document).width() - 100;
        var startOpacity = 0.5 + Math.random();
        var sizeFlake = 10 + Math.random() * 20;
        var endPositionTop = documentHeight - 40;
        var endPositionLeft = startPositionLeft - 100 + Math.random() * 200;
        var durationFall = documentHeight * 10 + Math.random() * 5000;
        $('#flake')
            .clone()
            .appendTo('body')
            .css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake
            })
            .animate({
                    top: endPositionTop,
                    left: endPositionLeft,
                    opacity: 0.2
                },
                durationFall,
                'linear',
                function() {
                    $(this).remove()
                }
            );
    }, 500);


//Snow

var snow = {};
var snowflex = {};

snowflex.create = function() {
    var flex = document.createElement('div');
    flex.innerHTML = "&#10052;";
    flex.style.fontSize = 10 + Math.random() * 20 + 'px';
    flex.style.top = -50 + Math.random() * 20 + 'px';
    flex.style.left = Math.random() * 1500 + 'px';
    flex.style.position = "absolute";
    flex.style.color = "#F3F3F3";
    flex.style.opacity = Math.random();
    document.getElementsByTagName('body')[0].appendChild(flex);
    return flex;
};


snow.snowflex = function() {
    var flex = snowflex.create();
    var x = -1 + Math.random() * 2;
    var t = setInterval(
        function() {
            flex.style.top = parseInt(flex.style.top) + 5 + 'px';
            flex.style.left = parseInt(flex.style.left) + x + 'px';
            if (parseInt(flex.style.top) > 1500) {
                clearInterval(t);
                document.getElementsByTagName('body')[0].removeChild(flex);
            }
        }, 45 + Math.random() * 20);
};

snow.storm = function() {
    var t = setInterval(
        function() {
            snow.snowflex();
        }, 500);
};



var fog = {};

fog.draw = function(ctx, x, y) {

    ctx.fillStyle = "rgba( 255, 255, 255, " + Math.random() + " )";
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();

};


fog.start = function() {
    var ctx = document.getElementById('canvas').getContext("2d");
    var x = 0;
    var y = 0;
    var t = setInterval(
        function() {

            x = 300 + 300 * Math.sin(x);
            y = 300 + 300 * -Math.cos(x);

            x += 2;
            fog.draw(ctx, x, y);

        }, 100);

};