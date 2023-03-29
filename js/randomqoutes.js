function generateQuote() {
    const quotes = [
        {
            quote: "Autobots, transform and roll out",
            author: "Me"
        },
        {
            quote: "We can be heroes in our own lives. Every one of us. If we only have the courage to try",
            author: "Me"
        },
        {
            quote: "We have suffered losses, but we have not lost the war.",
            author: "Me"
        },
        {
            quote: "A necessary sacrifice to bring peace to this planet. We cannot let the humans pay for our mistakes.",
            author: "Me"
        },
        {
            quote: "Come on, Decepticon punk!.",
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


