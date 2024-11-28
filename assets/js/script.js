
// ################### DATA display function ############



const occupiedPositions = {
    LW: false,
    ST: false,
    RW: false,
    LM: false,
    CM: false,
    LB: false,
    CB: false,
    RCB: false,
    RB: false,
    GK: false,
};

const positionsMap = {
    "LW": "player-card1",
    "ST": "player-card2",
    "RW": "player-card3",
    "LM": "player-card4",
    "CM": "player-card5",
    "RM": "player-card6",
    "LB": "player-card7",
    "CB": "player-card8",
    "RCB": "player-card9",
    "RB": "player-card10",
    "GK": "player-card11",
};

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

    console.log("before the first condition");

    

    if (occupiedPositions[position]) {
        console.log("inside the first condition");

        

        for (let i = 12; i <= 25; i++) {
            const benchCard = document.getElementById(`player-card${i}`);
            console.log("Position occupied, add to the bench");

            if (!benchCard.querySelector(".player-name p").textContent) {
                console.log("Found an empty bench card, adding player");

                

                benchCard.querySelector(".player-name p").textContent = name;
                benchCard.querySelector(".player-rating p").textContent = `${rating}`;
                benchCard.querySelector(".player-position p").textContent = `${position}`;
                benchCard.querySelector(".player-photo img").src = photo;
                benchCard.querySelector(".player-photo img").alt = name;

                const stats = [
                    { stat: "PAC", value: pace },
                    { stat: "SHO", value: shooting },
                    { stat: "PAS", value: passing },
                    { stat: "DRI", value: dribbling },
                    { stat: "DEF", value: defending },
                    { stat: "PHY", value: physical },
                ];

                const statsElements = benchCard.querySelectorAll(".p-stats p");
                const statsNumElements = benchCard.querySelectorAll(".stats-num p");

                stats.forEach((element, index) => {
                    statsElements[index].textContent = element.stat;
                    statsNumElements[index].textContent = element.value;
                });

                benchCard.querySelector("#logos .country-logo img").src = flag;
                benchCard.querySelector("#logos .country-logo img").alt = nationality;
                benchCard.querySelector("#logos .team-logo img").src = logo;
                benchCard.querySelector("#logos .team-logo img").alt = club;

                

                break;
            }
        }

        

        return;
    }

    console.log("passed the whole condition");

   

    occupiedPositions[position] = true;
    const playerCardId = positionsMap[position];
    const playerCard = document.getElementById(playerCardId);

    

    playerCard.querySelector(".player-name p").textContent = name;
    playerCard.querySelector(".player-rating p").textContent = `${rating}`;
    playerCard.querySelector(".player-position p").textContent = `${position}`;
    playerCard.querySelector(".player-photo img").src = photo;
    playerCard.querySelector(".player-photo img").alt = name;

    const stats = [
        { stat: "PAC", value: pace },
        { stat: "SHO", value: shooting },
        { stat: "PAS", value: passing },
        { stat: "DRI", value: dribbling },
        { stat: "DEF", value: defending },
        { stat: "PHY", value: physical },
    ];

    const statsElements = playerCard.querySelectorAll(".p-stats p");
    const statsNumElements = playerCard.querySelectorAll(".stats-num p");

    stats.forEach((element, index) => {
        statsElements[index].textContent = element.stat;
        statsNumElements[index].textContent = element.value;
    });

    playerCard.querySelector("#logos .country-logo img").src = flag;
    playerCard.querySelector("#logos .country-logo img").alt = nationality;
    playerCard.querySelector("#logos .team-logo img").src = logo;
    playerCard.querySelector("#logos .team-logo img").alt = club;

    

    document.getElementById("playerForm").reset();
}



document.getElementById("playerForm").addEventListener("submit", addPlayer);



// essaie du local storage la prochaine étape 

// let players = [
//     { id: 1, name: "Lionel Messi", position: "RW", rating: 93 },
//     { id: 2, name: "Cristiano Ronaldo", position: "ST", rating: 91 },
//     { id: 3, name: "Kevin De Bruyne", position: "CM", rating: 91 },
//     { id: 4, name: "Virgil Van Dijk", position: "CB", rating: 89 },
//     { id: 5, name: "Neymar Jr", position: "LW", rating: 90 },
//     { id: 6, name: "Manuel Neuer", position: "GK", rating: 89 },
//     { id: 7, name: "Mohamed Salah", position: "RW", rating: 89 },
//     { id: 8, name: "Joshua kimmich", position: "CM", rating: 89 },
//     { id: 9, name: "Jan Oblak", position: "GK", rating: 91 },
//     { id: 10, name: "Luka Modric", position: "CM", rating: 88 },
//     { id: 11, name: "Vinicius Junior", position: "LW", rating: 89 },
//     { id: 12, name: "Brahim Diaz", position: "LW", rating: 82 },
//     { id: 13, name: "Achraf Hakimi", position: "RB", rating: 84 },
//     { id: 14, name: "Karim Benzema", position: "ST", rating: 90 },
//     { id: 15, name: "Erling Haaland", position: "ST", rating: 91 },
//     { id: 16, name: "Alphonso Davies", position: "LB", rating: 84 },
//     { id: 17, name: "Yassine Bounou", position: "GK", rating: 84 },
//     { id: 18, name: "Bruno Fernandes", position: "CM", rating: 88 },
//     { id: 19, name: "Jadon Sancho", position: "LW", rating: 84 },
//     { id: 20, name: "Trent Alexander-Arnold", position: "RB", rating: 87 },


//     
//   ];

// //   const newPlayer = { id: 21, name: "Kylian Mbappéééé", position:"LW", rating: 91}
  
// //   players.push(newPlayer);

// players = players.filter( function(obj) {
//       return obj.id !== 2;
// });


//   localStorage.setItem('players', JSON.stringify(players));
  
  
//   //   localStorage.setItem(, JSON.stringify(players));
  
  
//   const storedPlayers = JSON.parse(localStorage.getItem('players'));
  

// if (storedPlayers) {
//   console.log(storedPlayers);  
// } else {
//   console.log("false");
// }

// function validateForm(event) {
//     event.preventDefault(); 

    
//     const name = document.getElementById("name").value;
//     const photo = document.getElementById("photo").value;
//     const nationality = document.getElementById("nationality").value;
//     const flag = document.getElementById("flag").value;
//     const club = document.getElementById("club").value;
//     const logo = document.getElementById("logo").value;
//     const rating = document.getElementById("rating").value;
//     const position = document.getElementById("position").value;
//     const pace = document.getElementById("pace").value;
//     const shooting = document.getElementById("shooting").value;
//     const passing = document.getElementById("passing").value;
//     const dribbling = document.getElementById("dribbling").value;
//     const defending = document.getElementById("defending").value;
//     const physical = document.getElementById("physical").value;

    
//     const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    
//     if (name.trim() === "") {
//         alert("Please enter a valid name.");
//         return false;
//     }

    
//     if (!urlPattern.test(photo)) {
//         alert("Please enter a valid photo URL.");
//         return false;
//     }

    
//     if (nationality.trim() === "") {
//         alert("Please enter a nationality.");
//         return false;
//     }

    
//     if (!urlPattern.test(flag)) {
//         alert("Please enter a valid flag URL.");
//         return false;
//     }

    
//     if (club.trim() === "") {
//         alert("Please enter a club name.");
//         return false;
//     }

    
//     if (!urlPattern.test(logo)) {
//         alert("Please enter a valid club logo URL.");
//         return false;
//     }

    
//     if (rating < 10 || rating > 99) {
//         alert("Rating must be between 10 and 99.");
//         return false;
//     }

    
//     if (position === "") {
//         alert("Please select a position.");
//         return false;
//     }

    
//     if (pace < 10 || pace > 99 || isNaN(pace)) {
//         alert("Pace must be a number between 10 and 99.");
//         return false;
//     }
//     if (shooting < 10 || shooting > 99 || isNaN(shooting)) {
//         alert("Shooting must be a number between 10 and 99.");
//         return false;
//     }
//     if (passing < 10 || passing > 99 || isNaN(passing)) {
//         alert("Passing must be a number between 10 and 99.");
//         return false;
//     }
//     if (dribbling < 10 || dribbling > 99 || isNaN(dribbling)) {
//         alert("Dribbling must be a number between 10 and 99.");
//         return false;
//     }
//     if (defending < 10 || defending > 99 || isNaN(defending)) {
//         alert("Defending must be a number between 10 and 99.");
//         return false;
//     }
//     if (physical < 10 || physical > 99 || isNaN(physical)) {
//         alert("Physical must be a number between 10 and 99.");
//         return false;
//     }

    
//     alert("Form submitted successfully!");
//     document.getElementById("playerForm").submit();
// }


// document.getElementById("playerForm").addEventListener("submit", validateForm);
