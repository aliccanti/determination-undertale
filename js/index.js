const mensages = ["Everyone is fighting a battle you know nothing about. Be kind. Always.",
"Patience is the best weapon to support what does not depend on you.",
"Great deeds are achieved not by force, but by perseverance.",
"Courage is not an absence of fear; it is persistence despite fear.",
"Justice does not consist in discovering the right and sustaining it against the wrong.",
"Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.",
]

const colors = ["#007f02", "#00fefc", "#a1499d", "#ff8027", "#fdf003", "#0100fb"]


function DeterminationGen() {

    const numberRam = Math.floor(Math.random() * colors.length);

    document.querySelector(".main-container").style.background = colors[numberRam];
    document.querySelector(".mensage").innerText = mensages[numberRam];

    document.querySelector(".button-function").style.color = colors[numberRam];
    document.querySelector(".button-function").style.borderColor = colors[numberRam];

}

document.querySelector(".button-function").addEventListener("click", DeterminationGen);