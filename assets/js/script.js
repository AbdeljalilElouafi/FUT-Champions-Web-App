
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

let modifyingPosition = null;

function modifyPlayer(position) {
    console.log('inside the modify function');
    
    const allPlayers = JSON.parse(localStorage.getItem("players")) || {};

    if (allPlayers[position] && allPlayers[position].length > 0) {
        const player = allPlayers[position][0]; 

        document.getElementById("name").value = player.name;
        document.getElementById("photo").value = player.photo;
        document.getElementById("position").value = player.position;
        document.getElementById("nationality").value = player.nationality;
        document.getElementById("flag").value = player.flag;
        document.getElementById("club").value = player.club;
        document.getElementById("logo").value = player.logo;
        document.getElementById("rating").value = player.rating;
        document.getElementById("pace").value = player.pace;
        document.getElementById("shooting").value = player.shooting;
        document.getElementById("passing").value = player.passing;
        document.getElementById("dribbling").value = player.dribbling;
        document.getElementById("defending").value = player.defending;
        document.getElementById("physical").value = player.physical;

        modifyingPosition = position;
    }
}

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

    if (modifyingPosition) {
        
        updatePlayer(modifyingPosition, {
            name, photo, position, nationality, flag, club, logo, rating, pace, shooting, passing, dribbling, defending, physical
        });
        modifyingPosition = null;  
    } else {
        if (occupiedPositions[position]) {
            for (let i = 12; i <= 25; i++) {
                const benchCard = document.getElementById(`player-card${i}`);

                if (!benchCard.querySelector(".player-name p").textContent) {
                    addToCard(benchCard, name, rating, position, photo, nationality, flag, club, pace, shooting, passing, dribbling, defending, physical, logo);
                    saveToLocalStorage(name, position, {
                        name, photo, position, nationality, flag, club, logo, rating, pace, shooting, passing, dribbling, defending, physical
                    });
                    break;
                }
            }
            return;
        }

        occupiedPositions[position] = true;
        const playerCardId = positionsMap[position];
        const playerCard = document.getElementById(playerCardId);
        
        addToCard(playerCard, name, rating, position, photo, nationality, flag, club, pace, shooting, passing, dribbling, defending, physical, logo);
        saveToLocalStorage(name, position, {
            name, photo, position, nationality, flag, club, logo, rating, pace, shooting, passing, dribbling, defending, physical
        });
    }

    document.getElementById("playerForm").reset();
}

function updatePlayer(position, playerData) {
    let allPlayers = JSON.parse(localStorage.getItem("players")) || {};
    if (!allPlayers[position]) {
        allPlayers[position] = [];
    }

    allPlayers[position][0] = playerData;
    localStorage.setItem("players", JSON.stringify(allPlayers));

    const playerCardId = positionsMap[position];
    const playerCard = document.getElementById(playerCardId);

    addToCard(playerCard, playerData.name, playerData.rating, playerData.position, playerData.photo, playerData.nationality, playerData.flag, playerData.club, playerData.pace, playerData.shooting, playerData.passing, playerData.dribbling, playerData.defending, playerData.physical, playerData.logo);
}

function addToCard(card, name, rating, position, photo, nationality, flag, club, pace, shooting, passing, dribbling, defending, physical, logo) {
    card.querySelector(".player-name p").textContent = name;
    card.querySelector(".player-rating p").textContent = `${rating}`;
    card.querySelector(".player-position p").textContent = `${position}`;
    card.querySelector(".player-photo img").src = photo;
    card.querySelector(".player-photo img").alt = name;

    const stats = [
        { stat: "PAC", value: pace },
        { stat: "SHO", value: shooting },
        { stat: "PAS", value: passing },
        { stat: "DRI", value: dribbling },
        { stat: "DEF", value: defending },
        { stat: "PHY", value: physical },
    ];

    const statsElements = card.querySelectorAll(".p-stats p");
    const statsNumElements = card.querySelectorAll(".stats-num p");

    stats.forEach((element, index) => {
        statsElements[index].textContent = element.stat;
        statsNumElements[index].textContent = element.value;
    });

    card.querySelector("#logos .country-logo img").src = flag;
    card.querySelector("#logos .country-logo img").alt = nationality;
    card.querySelector("#logos .team-logo img").src = logo;
    card.querySelector("#logos .team-logo img").alt = club;

    const deleteButton = card.querySelector(".delete-btn");
    if (deleteButton) {
        deleteButton.addEventListener("click", () => {
            deletePlayer(position);
        });
    }
}

function saveToLocalStorage(name, position, playerData) {
    let allPlayers = JSON.parse(localStorage.getItem("players")) || {}; 
    if (!allPlayers[position]) {
        allPlayers[position] = []; 
    }
    allPlayers[position].push(playerData); 
    localStorage.setItem("players", JSON.stringify(allPlayers)); 
}

function deletePlayer(position) {
    
    // alert("Are u sure you want to delete this player");
    occupiedPositions[position] = false;

    
    let allPlayers = JSON.parse(localStorage.getItem("players")) || {};
    if (allPlayers[position]) {
        delete allPlayers[position];
        localStorage.setItem("players", JSON.stringify(allPlayers));
    }
    
    const playerCardId = positionsMap[position];
    const playerCard = document.getElementById(playerCardId);

    if (playerCard) {
        playerCard.querySelector(".player-name p").textContent = '';
        playerCard.querySelector(".player-rating p").textContent = '';
        playerCard.querySelector(".player-position p").textContent = '';
        playerCard.querySelector(".player-photo img").src = '';
        playerCard.querySelector(".player-photo img").alt = '';

        
        const statsElements = playerCard.querySelectorAll(".p-stats p");
        const statsNumElements = playerCard.querySelectorAll(".stats-num p");
        statsElements.forEach(el => el.textContent = '');
        statsNumElements.forEach(el => el.textContent = '');

        
        playerCard.querySelector("#logos .country-logo img").src = '';
        playerCard.querySelector("#logos .country-logo img").alt = '';
        playerCard.querySelector("#logos .team-logo img").src = '';
        playerCard.querySelector("#logos .team-logo img").alt = '';
    }
    // location.reload();
}

function displayFromLocalStorage() {
    const allPlayers = JSON.parse(localStorage.getItem("players")) || {};

    for (let position in allPlayers) {
        const players = allPlayers[position];
        players.forEach(player => {
            if (occupiedPositions[position] === false) {
                const playerCardId = positionsMap[position];
                const playerCard = document.getElementById(playerCardId);
                addToCard(playerCard, player.name, player.rating, player.position, player.photo, player.nationality, player.flag, player.club, player.pace, player.shooting, player.passing, player.dribbling, player.defending, player.physical, player.logo);
                occupiedPositions[position] = true;
            } else {
                for (let i = 12; i <= 25; i++) {
                    const benchCard = document.getElementById(`player-card${i}`);
                    if (!benchCard.querySelector(".player-name p").textContent) {
                        addToCard(benchCard, player.name, player.rating, player.position, player.photo, player.nationality, player.flag, player.club, player.pace, player.shooting, player.passing, player.dribbling, player.defending, player.physical, player.logo);
                        break;
                    }
                }
            }
        });
    }
}

document.getElementById("playerForm").addEventListener("submit", addPlayer);

window.onload = function() {
    displayFromLocalStorage();
};

document.querySelectorAll('.modify-btn').forEach(button => {
    button.addEventListener('click', function() {
        const position = button.dataset.position;
        modifyPlayer(position);
    });
});



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
