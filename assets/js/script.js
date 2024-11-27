
// ################### DATA display function ############

function addPlayer(event) {
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


    // const playerCard = document.getElementById("player-card1");


    document.getElementById("player-name").querySelector("p").textContent = name;


    document.getElementById("player-rating").querySelector("p").textContent = `${rating}`;


    document.getElementById("player-position").querySelector("p").textContent = `${position}`;


    document.getElementById("player-photo").querySelector("img").src = photo;
   
    document.getElementById("player-photo").querySelector("img").alt = name;

    const stats = [

        {stat: "PAC", value: pace},
        {stat: "SHO", value: shooting},
        {stat: "PAS", value: passing},
        {stat: "DRI", value: dribbling},
        {stat: "DEF", value: defending},
        {stat: "PHY", value: physical},


    ]

    const statsElements = document.querySelectorAll("#player-stats .p-stats p")
    const statsNumElements = document.querySelectorAll("#player-stats .stats-num p")

    stats.forEach((element, index) => {

        statsElements[index].textContent = element.stat;
        statsNumElements[index].textContent = element.value;


      }
    );


    document.querySelector("#logos .country-logo img").src = flag;
    document.querySelector("#logos .country-logo img").alt = nationality;
    document.querySelector("#logos .team-logo img").src = logo;
    document.querySelector("#logos .team-logo img").alt = club;


    document.getElementById("playerForm").reset();

}

document.getElementById("playerForm").addEventListener("submit", addPlayer);
