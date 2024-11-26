
// ################### DATA display function ############

function handleFormSubmit(event) {
    event.preventDefault();



    const name = document.getElementById("name").value;
    const photo = document.getElementById("photo").value;
    const position = document.getElementById("position").value;
    const nationality = document.getElementById("nationality").value;
    const flag = document.getElementById("flag").value;
    const club = document.getElementById("club").value;
    const logo = document.getElementById("logo").value;
    const rating = document.getElementById("rating").value;
    const pace = document.getElementById("pace").value;
    const shooting = document.getElementById("shooting").value;
    const passing = document.getElementById("passing").value;
    const dribbling = document.getElementById("dribbling").value;
    const defending = document.getElementById("defending").value;
    const physical = document.getElementById("physical").value;


    const playerCard = document.getElementById("player-card1");


    document.getElementById("player-name").querySelector("p").textContent = name;


    document.getElementById("player-rating").querySelector("p").textContent = `${rating}`;


    document.getElementById("player-position").querySelector("p").textContent = `${position}`;


    document.getElementById("player-photo").querySelector("img").src = photo;
    document.getElementById("player-photo").querySelector("img").alt = name;

}
