/*
    Released: #159615
    In development: #2352d2
    Planned: #5710d1
    Paused: #d5810b
    Abandoned: #a9160e
*/
let progress = {
    "Released": "#159615",
    "In development": "#2352d2",
    "Planned": "#5710d1",
    "Paused": "#d5810b",
    "Abandoned": "#a9160e"
}
let games = [
    {
        "info_icon": "imgs/iconBTOW.png",
        "info_title": "Binary thinking open world",

        "info_categ": "Puzzle",
        "info_price": "Free",
        "info_progress": "Released",

        "info_get": "https://jeroldev.itch.io/binary-thinking-open-world",

        "info_desc": "<span>Short description 📃</span><br>Hello, puzzle lovers 👋 <br>My game isn’t easy to beat — not because it’s long or hard, but because its mechanics are tricky to understand. (At least 8 out of 10 people couldn’t figure them out.) <br>So, if you want to challenge your brain — you’re welcome 🧠<br><br><span>Story 📋</span><br>There isn’t one. You just play the game — it’s my first project, after all 🙃<br><br><span>Main gameplay mechanics 🎮</span><br>On the left and right sides, you’ll see purple and blue windows. You can ignore the purple one for now — you’ll figure it out later.<br>But in the blue one, you enter commands made of 1s and 0s.<br>For example: (11), (010011), (0100), (1000), etc.",
        "info_screens": [
            "imgs/screenshotes/BTOW-1.png",
            "imgs/screenshotes/BTOW-2.png",
            "imgs/screenshotes/BTOW-3.png"   
        ]
    },
    {
        "info_icon": "imgs/iconReirik.png",
        "info_title": "Reirik",

        "info_categ": "Platform",
        "info_price": "Free",
        "info_progress": "Released",

        "info_get": "https://jeroldev.itch.io/reirik",

        "info_desc": "<span>Short description 📃</span><br>This game is a platformer! You’ll have to overcome obstacles, come up with clever Reirik combinations, and pull off mega jumps 🙃<br><br><span>Story 📋</span><br>For now, there isn’t one — but maybe there will be later.<br><br><span>Main gameplay mechanics 🎮</span><br>The game features 8 Reiriks. A Reirik is a small ball (character) you play as, and each one has its own special ability. Before starting a level, you can choose from 2 to 4 Reiriks to play with — and then use them to complete the level.",
        "info_screens": [
            "imgs/screenshotes/Reirik-1.png",
            "imgs/screenshotes/Reirik-2.png",
            "imgs/screenshotes/Reirik-3.png"   
        ]
    },
    {
        "info_icon": "imgs/iconShokill.png",
        "info_title": "Shokill",

        "info_categ": "Shooter",
        "info_price": "Free",
        "info_progress": "In development",

        "info_get": "https://jeroldev.itch.io/shokill/download/sveg2nGYjfDNILt9oHpFO1BVU49NJO1MyIQibh8v",

        "info_desc": "<span>Short description 📃</span><br>A standard shooter in which you can change the number of opponents and allies (up to 100 bots per team). Their difficulty and damage can also be customized.",
        "info_screens": [
            "imgs/screenshotes/Shokill-1.png",
            "imgs/screenshotes/Shokill-2.png",
            "imgs/screenshotes/Shokill-3.png"   
        ]
    }
]


let panel_games = document.getElementById("games");

let info_icon = document.getElementById("info-icon");
let info_title = document.getElementById("info-title");

let info_categ = document.getElementById("info-categ");
let info_price = document.getElementById("info-price");
let info_progress = document.getElementById("info-progress");

let info_get = document.getElementById("info-get");

let info_desc = document.getElementById("info-desc");
let info_allscreens = document.getElementById("info-screens");
let info_screens = document.getElementsByClassName("info-screen");

function AddGame(index)
{
    const gameDiv = document.createElement("div");
    gameDiv.classList.add("game");

    const img = document.createElement("img");
    img.classList.add("game-icon");
    img.src = games[index]["info_icon"];
    img.alt = `иконка ${games[index]["info_title"]}`

    const offset = document.createElement("div");
    offset.classList.add("game-offset");

    const h2 = document.createElement("h2");
    h2.classList.add("game-title");
    h2.innerText = games[index]["info_title"];

    const p = document.createElement("p");
    p.classList.add("game-price");
    p.innerText = games[index]["info_price"];

    const div = document.createElement("div");
    div.classList.add("game-progress");
    div.style.backgroundColor = progress[games[index]["info_progress"]];
    div.style.boxShadow = `0px 0px 3px ${progress[games[index]["info_progress"]]}`;

    offset.appendChild(h2);
    offset.appendChild(p);

    gameDiv.appendChild(img);
    gameDiv.appendChild(offset);
    gameDiv.appendChild(div);

    gameDiv.addEventListener('click', () => {
        info_icon.src = games[index]["info_icon"];
        info_title.textContent = games[index]["info_title"];

        info_categ.textContent = games[index]["info_categ"];
        info_price.textContent = games[index]["info_price"];
        info_progress.textContent = games[index]["info_progress"];

        info_get.href = games[index]["info_get"];
        
        info_desc.innerHTML = games[index]["info_desc"];
        if (info_allscreens.style.opacity == 0)
            info_allscreens.style.opacity = 1;
        for (let j = 0; j < games[index]["info_screens"].length; j++)
        {
            info_screens[j].src = games[index]["info_screens"][j];
        }
    })

    panel_games.appendChild(gameDiv);
}

for (let i = 0; i < games.length; i++)
{
    AddGame(i);
}



















document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.block');
    const targetTop = document.querySelectorAll('#top');

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            })
        }, {
            threshold: 0.05
        });

        const ioTop = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible-top');
                    observer.unobserve(entry.target);
                }
            })
        }, {
            threshold: 0.05
        });

        targets.forEach(t => io.observe(t));
        targetTop.forEach(t => ioTop.observe(t));
    }
    else {
        targets.forEach(t => t.classList.add('is-visible'));
        targetTop.forEach(t => t.classList.add('#top'));
    }
});
