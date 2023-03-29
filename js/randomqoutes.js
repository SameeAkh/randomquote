function generateQuote() {
    const quotes = [
        {
            quote: "This is my 1st quote.",
            author: "Me"
        },
        {
            quote: "This is my 2nd quote.",
            author: "Me"
        },
        {
            quote: "This is my 3rd quote.",
            author: "Me"
        },
        {
            quote: "This is my 4th quote.",
            author: "Me"
        },
        {
            quote: "This is my 5th quote.",
            author: "Me"
        }
        
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    //console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
    document.getElementById('author').innerHTML = "-" +  quotes[currentQuote].author;


}

generateQuote();

window.onload = function() {
    generateQuote();
    document.getElementById('generate').addEventListener('click', generateQuote)
}


