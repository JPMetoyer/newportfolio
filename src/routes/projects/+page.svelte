<main>
    <canvas id="binaryCanvas"></canvas>

    <section id="projects">

        <div id="header">
            <p></p>
        </div>

        <div id="grid">

            <div class="card">
                <img src="/projimg/utm.png" alt="">
                <p class="title">Malware Analysis Lab</p>
                <p class="description">Built a malware analysis lab using UTM with ARM64 Kali Linux, leveraging Ghidra, Wireshark, and FakeNet-NG for isolated malware Analysis and simulation.
                </p>

            </div>

            <div class="card">
                <img src="/projimg/iusc.jpeg" alt="">
                <p class="title">iSchool Undergraduate Student Council site</p>
                <p class="description">The organization website for the iSchool Undergraduate Student Council, using the Sveltekit framework, SCSS, Typescript, featuring a nice UI.</p>

            </div>


          

            <div class="card">
                <img src="/projimg/subtrends.jpeg" alt="">
                <p class="title">Subtrends</p>
                <p class="description"> A web dev project pulling data from the PRAW Reddit API using Flask, SQlalchemy, & Python for the backend, and SCSS & Sveltekit for the frontend, visualizing it with Graphs.js.</p>

            </div>

            <div class="card">
                <img src="/projimg/fct.jpeg" alt="">
                <p class="title">Full Circle Therapy</p>
                <p class="description"> Simple website for a Houston based therapy clinic, 'Full Circle Therapy lLC'. Offers a responsive and user friendly UI with insurance checking coverage.</p>

            </div>

            <div class="card">
                <img src="/projimg/learnx.jpeg" alt="">
                <p class="title">LearnX</p>
                <p class="description"> Learning Management System that allows users to create instiutions, admins, teachers, & student accounts and assign assignments, readings, quizzes, and grades. Uses Sveltekit, Firebase, Typescript, & SCSS.</p>

            </div>

            <div class="card">
                <img src="/projimg/coding.jpeg" alt="">
                <p class="title">The Coding Initiative</p>
                <p class="description"> Nonprofit organization website for "The Coding initiative," featuring a responsive and ui friendly design, using Sveltekit, SCSS, & Typescript.</p>

            </div>
            



        </div>

    </section>

  
     
         

</main>


<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');


    main {
        width: 100%;
        height:100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;

        #binaryCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 115vh;
            z-index: 0;
        }
       

        section#projects {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 50vh;

            div#grid {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;

                height: auto;

                row-gap: 3rem;
                column-gap: 2rem;
                
                
                div.card {
                    display: flex;
                    flex-direction: column;
                    width: 30rem;
                    height: auto;
                    -webkit-backdrop-filter: blur(4px);
                    backdrop-filter: blur(4px);       

                
                
                    }
                    .title {
                        margin:  1rem 0 0 30px;
                        font-family: 'inter', sans-serif;
                        color: white;
                        width: max-content;
                    }
    
                    .description {
                        margin:  10px 0 0 30px;
                        font-family: 'inter', sans-serif;
                        color: lightgrey;

                    }

                   
                }
            }

        }
 
    

</style>

<script lang="ts">
import { onMount } from "svelte";

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let binaryMatrix: { x: number; y: number; char: string; speed: number }[] = [];

function createBinaryMatrix() {
    const numCharacters = 100;
    binaryMatrix = [];
    for (let i = 0; i < numCharacters; i++) {
        binaryMatrix.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            char: Math.random() > 0.5 ? "1" : "0",
            speed: Math.random() * 1.5 + 0.5, // Slow downward effect
        });
    }
}

function drawBinaryMatrix() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 0, 0.8)"; // Matrix green glow
    ctx.font = "18px monospace";

    for (let char of binaryMatrix) {
        ctx.fillText(char.char, char.x, char.y);
        char.y += char.speed;

        // Reset character when it falls off screen
        if (char.y > window.innerHeight) {
            char.y = 0;
            char.x = Math.random() * window.innerWidth;
            char.char = Math.random() > 0.5 ? "1" : "0"; // Randomly switch between 1 or 0
        }
    }

    requestAnimationFrame(drawBinaryMatrix);
}

function resizeCanvas() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBinaryMatrix();
    }
}

onMount(() => {
    canvas = document.getElementById("binaryCanvas") as HTMLCanvasElement;
    if (canvas) {
        ctx = canvas.getContext("2d");
        resizeCanvas();
        drawBinaryMatrix();
        window.addEventListener("resize", resizeCanvas);
    }
});
</script>