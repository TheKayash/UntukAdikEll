```javascript
/* =========================================================
   WEBSITE ULANG TAHUN
   Pink + Duck Edition 🐤🎀
========================================================= */


/* =========================================================
   GIFT BOX
========================================================= */

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

let giftOpened = false;

giftBox.addEventListener("click", () => {

    if (giftOpened) return;

    giftOpened = true;

    /* Buka tutup kado */

    const lid = giftBox.querySelector(".gift-lid");

    lid.style.transform =
        "translateY(-80px) rotate(-8deg)";

    /* Sembunyikan kado */

    setTimeout(() => {

        giftBox.style.opacity = "0";
        giftBox.style.transform =
            "scale(0.7)";

    }, 500);


    /* Tampilkan pesan */

    setTimeout(() => {

        giftMessage.classList.add("show");

    }, 700);


    /* Confetti */

    createConfetti(100);

    /* Hati beterbangan */

    createHearts(25);

});


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(amount = 50) {

    const colors = [
        "#ff8fba",
        "#ffb3ce",
        "#ffd6e6",
        "#ffffff",
        "#e95d91"
    ];

    for (let i = 0; i < amount; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.width =
            Math.random() * 8 + 5 + "px";

        confetti.style.height =
            Math.random() * 12 + 6 + "px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.borderRadius = "3px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const duration =
            Math.random() * 2500 + 2000;

        const rotation =
            Math.random() * 720 - 360;

        const xMovement =
            Math.random() * 300 - 150;


        confetti.animate(
            [
                {
                    transform:
                        "translate(0, 0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${xMovement}px, 110vh)
                         rotate(${rotation}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,

                easing: "cubic-bezier(.2,.7,.3,1)"
            }
        );


        setTimeout(() => {

            confetti.remove();

        }, duration);
    }
}


/* =========================================================
   FLOATING HEARTS
========================================================= */

function createHearts(amount = 10) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "💗";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            Math.random() * 100 + "vh";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9998";

        document.body.appendChild(heart);


        const x =
            Math.random() * 200 - 100;

        const y =
            -(Math.random() * 300 + 100);


        heart.animate(
            [
                {
                    transform:
                        "translate(0,0) scale(0.5)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(0,-50px) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px,${y}px)
                         scale(0.7)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    Math.random() * 2000 + 2000,

                easing: "ease-out"
            }
        );


        setTimeout(() => {

            heart.remove();

        }, 4000);

    }

}


/* =========================================================
   LETTER / ENVELOPE
========================================================= */

const envelope =
    document.getElementById("envelope");

const letterContent =
    document.getElementById("letterContent");

let letterOpened = false;

envelope.addEventListener("click", () => {

    if (letterOpened) return;

    letterOpened = true;


    /* Hilangkan amplop */

    envelope.style.transform =
        "translateY(-30px) scale(0.8)";

    envelope.style.opacity = "0";


    /* Tampilkan surat */

    setTimeout(() => {

        envelope.style.display = "none";

        letterContent.classList.add("show");

    }, 500);


    /* Efek hati */

    createHearts(20);

});


/* =========================================================
   RANDOM DUCK MESSAGE
========================================================= */

const duckButton =
    document.getElementById("duckButton");

const duckMessage =
    document.getElementById("duckMessage");


const duckMessages = [

    "Aku bebek. 🐤",

    "Selamat ulang tahun! 🎀",

    "Jangan lupa makan yaa! 🍰",

    "Semoga hari ini menyenangkan! 💗",

    "Kamu keren. ✨",

    "Semoga semua keinginanmu tercapai! 🌸",

    "Aku tidak punya hadiah... jadi aku kasih diriku sendiri. 🐤",

    "QUACK QUACK! 🐤",

    "Jangan sedih hari ini! 💗",

    "Hari ini kamu harus senyum! 😆",

    "Bebek menyetujui ulang tahunmu. 🐤",

    "999 keberuntungan untukmu! ✨"

];


duckButton.addEventListener("click", () => {

    const randomIndex =
        Math.floor(
            Math.random() *
            duckMessages.length
        );

    duckMessage.textContent =
        duckMessages[randomIndex];


    duckMessage.classList.remove("show");


    /* Restart animation */

    void duckMessage.offsetWidth;


    duckMessage.classList.add("show");


    /* Bebek celebration */

    const duck =
        document.querySelector(".final-duck");

    duck.animate(
        [
            {
                transform:
                    "translateY(0) rotate(0)"
            },

            {
                transform:
                    "translateY(-20px) rotate(-10deg)"
            },

            {
                transform:
                    "translateY(0) rotate(10deg)"
            },

            {
                transform:
                    "translateY(0) rotate(0)"
            }
        ],
        {
            duration: 700
        }
    );


    createHearts(10);

});


/* =========================================================
   MOUSE DUCK EFFECT
========================================================= */

const heroDuck =
    document.querySelector(".duck");


document.addEventListener("mousemove", (event) => {

    if (!heroDuck) return;


    const x =
        (event.clientX /
            window.innerWidth -
            0.5) * 10;

    const y =
        (event.clientY /
            window.innerHeight -
            0.5) * 10;


    heroDuck.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================================================
   CLICK HEART EFFECT
========================================================= */

document.addEventListener("click", (event) => {

    /* Jangan munculkan efek
       pada tombol kado dan surat */

    if (
        event.target.closest(".gift-box") ||
        event.target.closest(".envelope") ||
        event.target.closest(".music-button")
    ) {
        return;
    }


    const heart =
        document.createElement("div");

    heart.textContent =
        Math.random() > 0.5
            ? "💗"
            : "💕";


    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.fontSize = "20px";

    heart.style.pointerEvents =
        "none";

    heart.style.zIndex = "9999";


    document.body.appendChild(heart);


    heart.animate(
        [
            {
                transform:
                    "translate(-50%, -50%) scale(0.5)",
                opacity: 0
            },

            {
                transform:
                    "translate(-50%, -100px) scale(1)",
                opacity: 1
            },

            {
                transform:
                    "translate(-50%, -160px) scale(0.7)",
                opacity: 0
            }
        ],
        {
            duration: 1200,

            easing: "ease-out"
        }
    );


    setTimeout(() => {

        heart.remove();

    }, 1200);

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .fun-card, .gift-area, .letter-area, .music-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    revealObserver.observe(element);

});


/* =========================================================
   MUSIC
========================================================= */

/*
    Untuk musik lokal:

    1. Buat folder:

       music/

    2. Masukkan file:

       birthday.mp3

    3. Pastikan strukturnya:

       website-ultah/
       ├── index.html
       ├── style.css
       ├── script.js
       └── music/
           └── birthday.mp3

    Musik tidak otomatis dimainkan karena
    browser biasanya memblokir autoplay.
*/


const musicButton =
    document.getElementById("musicButton");


let birthdayMusic = null;

let musicPlaying = false;


/* Buat audio */

try {

    birthdayMusic =
        new Audio("music/birthday.mp3");

    birthdayMusic.loop = true;

    birthdayMusic.volume = 0.5;

} catch (error) {

    console.log(
        "Audio tidak tersedia."
    );

}


musicButton.addEventListener("click", () => {

    if (!birthdayMusic) return;


    if (!musicPlaying) {

        birthdayMusic.play()
            .then(() => {

                musicPlaying = true;

                musicButton.textContent =
                    "⏸";

            })
            .catch(() => {

                alert(
                    "Musiknya belum ditemukan. " +
                    "Pastikan file birthday.mp3 " +
                    "ada di folder music."
                );

            });

    } else {

        birthdayMusic.pause();

        musicPlaying = false;

        musicButton.textContent =
            "▶";

    }

});


/* =========================================================
   MUSIC END
========================================================= */

if (birthdayMusic) {

    birthdayMusic.addEventListener(
        "ended",
        () => {

            musicPlaying = false;

            musicButton.textContent =
                "▶";

        }
    );

}


/* =========================================================
   WELCOME EFFECT
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "page-loaded"
    );


    /* Sparkle awal */

    setTimeout(() => {

        createHearts(12);

    }, 500);

});


/* =========================================================
   PERIODIC BACKGROUND HEARTS
========================================================= */

setInterval(() => {

    /* Hanya jalankan sesekali */

    if (Math.random() > 0.45) {

        createHearts(1);

    }

}, 4000);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c🎀 Happy Birthday! 🐤💗",
    "font-size:20px; color:#e95d91; font-weight:bold;"
);

console.log(
    "Website ini dibuat dengan HTML + CSS + JavaScript ✨"
);
```
