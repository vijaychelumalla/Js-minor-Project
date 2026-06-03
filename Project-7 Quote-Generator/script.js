function getQuote() {
    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").textContent = data.quote;
            document.getElementById("author").textContent = "— " + data.author;
        })
        .catch(error => {
            console.error(error);
            document.getElementById("quote").textContent =
                "Failed to load quote.";
        });
}

function copyQuote() {
    let quote = document.getElementById("quote").textContent;

    navigator.clipboard.writeText(quote)
        .then(() => {
            alert("Quote copied to clipboard!");
        });
}

function saveQuote() {
    let quote = document.getElementById("quote").textContent;
    let author = document.getElementById("author").textContent;

    let favoritesList = document.getElementById("favorites-list");

    let listItem = document.createElement("li");
    listItem.textContent = `${quote} ${author}`;

    favoritesList.appendChild(listItem);
}

getQuote();