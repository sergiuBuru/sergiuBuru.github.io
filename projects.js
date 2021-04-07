let cards = [];

let windowsProject = {
    name: "Windows XP Desktop",
    description: "This website is a live emulation of the old Windows XP Desktop",
    languages: "HTML5, CSS3, JS",
    repo: "https://github.com/sergiuBuru/Windows-XP-Desktop",
    website: "https://sergiuburu.github.io/Windows-XP-Desktop/",
    image: "",
    display: false
}

let chicagoProject = {
    name: "Chicago Land Finder",
    description: "This web app allows the user to search through the Chicago City-Owned Land Inventory data",
    languages: "HTML5, CSS3, JS, Boostrap5",
    repo: "https://github.com/sergiuBuru/IT202-Spring2021-project1/",
    website: "https://sergiuburu.github.io/IT202-Spring2021-project1/",
    image: "images/project1.png",
    display: true
}


let gameProject = {
    name: "Rocketship Video Game",
    description: "This web app is a 2D vide game where the user controls a rocketship in the space and collects stars while avoiding incoming meteors.",
    languages: "HTML5, CSS3, JS",
    repo: "https://github.com/sergiuBuru/IT202-Spring2021-project2",
    website: "https://sergiuburu.github.io/IT202-Spring2021-project2/",
    image: "images/project2.png",
    display: true
}

cards.push(windowsProject);
cards.push(chicagoProject);
cards.push(gameProject);

let count =  1;


cards.forEach(card => {
    if(card.display) {
        let cell = document.querySelector(".cell" + count);
        let title = cell.querySelector(".card-title");
        title.innerHTML = card.name;
        let description = cell.querySelector(".card-description");
        description.innerHTML = card.description;
        let media = cell.querySelector(".my-card__media");
        media.style = "background-image: url('" + card.image + "');";
        let repo = cell.querySelector(".repo");
        repo.href = card.repo;
        let website = cell.querySelector(".website");
        website.href = card.website;
        count += 1;
    }
})


