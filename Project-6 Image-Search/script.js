const API_KEY = "1BHOeuxoOLQTF8C_OMNW2X3lavYFO00AIkIB97UgQTU";
const API_URL = "https://api.unsplash.com/search/photos";

let currentPage = 1;
let currentQuery = "";
let isLoading = false;

const searchBtn = document.getElementById("search-btn");
const loadMoreBtn = document.getElementById("load-more");

searchBtn.addEventListener("click", searchImages);

document.getElementById("search-input").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        searchImages();
    }
});

loadMoreBtn.addEventListener("click", loadMore);

function fetchImages(query){
    isLoading = true;

    document.getElementById("loading").style.display = "block";
    document.getElementById("error").style.display = "none";

    fetch(`${API_URL}?query=${query}&page=${currentPage}&per_page=12&client_id=${API_KEY}`)
        .then(response => response.json())
        .then(data => {

            displayImages(data.results);

            document.getElementById("loading").style.display = "none";

            if(data.results.length > 0){
                loadMoreBtn.style.display = "block";
            }

            isLoading = false;
        })
        .catch(error => {

            document.getElementById("error").textContent =
                "Something went wrong!";

            document.getElementById("error").style.display = "block";

            document.getElementById("loading").style.display = "none";

            isLoading = false;
        });
}

function displayImages(images){

    if(images.length === 0){
        document.getElementById("error").textContent =
            "No images found!";
        document.getElementById("error").style.display = "block";
        return;
    }

    const gallery = document.getElementById("gallery");

    images.forEach(image => {

        const card = document.createElement("div");
        card.className = "image-card";

        const img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = image.alt_description || "Image";

        card.appendChild(img);
        gallery.appendChild(card);
    });
}

function searchImages(){

    const input = document.getElementById("search-input").value.trim();

    if(input === ""){
        alert("Please enter a search term!");
        return;
    }

    currentQuery = input;
    currentPage = 1;

    document.getElementById("gallery").innerHTML = "";

    fetchImages(currentQuery);
}

function loadMore(){

    if(isLoading) return;

    currentPage++;

    fetchImages(currentQuery);
}