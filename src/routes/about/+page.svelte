<main>
    <canvas id="binaryCanvas"></canvas>

    <!-- ✅ Filmstrip Image Carousel -->
    <div class="carousel">
        <div class="carousel-track">
            {#each images as image, i}
                <!-- svelte-ignore a11y_missing_attribute -->
                <img src={image.src}>
            {/each}
            <!-- ✅ Duplicate images for seamless looping -->
            {#each images as image, i}
                <!-- svelte-ignore a11y_missing_attribute -->
                <img src={image.src}>
            {/each}
        </div>

    </div>

    <p><span style="border-bottom: 1px dashed lightblue;color: salmon;">Hello everyone!</span> My name is Jean-Paul Metoyer, a current student at the <span style="color:#CC5500;">University of Texas at Austin</span>. I am studying informatics, on the <span style="color: lightblue;">human-centered data science track</span>. Alongside that, pursuing a minor in <span style="color: blue;">statistics & data science </span> and <span style="color: brown;">risk management</span>. At <span style="color:#CC5500;">UT</span>, I am involed with several organizations, those being: <span style="color: pink;">designatut</span>, <span style="color: #81bff1;">ischool undergraduate student council</span>, <span style="color: yellow;">national society of black engineers</span>, and the <spa style="color: white;">information systems security society</spa>. Post graduation, I plan on pursuing a masters in information studies, with a focus in <span style="color: red;">information security</span>. Career wise, I want to pursue a  career in <span style="color:blueviolet;">cybersecurity</span> and/or <span style="color: brown;">governance, risk, & compliance.</span> <span style="border-bottom: 1px dashed lightblue">(PS: I am currently studying for my Sec+ now!)</span></p>

    <br>

    <p>Outside of my studies, I love going to the <span style="color:#CC5500">UT Football</span> games, unfortunately the <span style="color: red;">last one didn't go our way</span>... Anyways I also recently picked up <span style="color: pink">crocheting</span>, which has been a pretty fun thing to learn and test out. Besides that, I have been playing <span style="color: lightgreen;">pickleball</span> for the past few months, an experience that has been great since you don't need much to get a game going. Lastly, I have been enjoying running late around campus at <span style="color: white;">night</span>, its pretty peaceful and the view of downtown is really <span>beautiful</span>. </p>


</main>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
main {
    width: 100%;

    p {
        color: grey;
        font-family: 'Inter', sans-serif;
        backdrop-filter: blur(4px);
        width: 65%;
        margin: 0 auto;
        line-height: 1.4rem;
        
    }
    
    #binaryCanvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }

    .carousel {
        position: relative;
        width: 65%; 
        overflow: hidden;
        margin: auto;
        margin-top: 20vh;
        padding: 20px 0;
        backdrop-filter: blur(5px);
    }

    .carousel-track {

        display: flex;
        gap: 20px;
        width: fit-content;
        animation: scroll 30s linear infinite;
    }

    .carousel-track img {
        width: 250px; /* Adjust as needed */
        height: auto;
        object-fit: contain;
    }

    @keyframes scroll {
        from {
            transform: translateX(-50%);
        }
        to {
            transform: translateX(0%);
        }
    }
}
</style>

<script lang="ts">
import { onMount } from "svelte";

let images = [
    { src: "/images/pic1.png" },
    { src: "/images/pic2.jpg" },
    { src: "/images/pic3.jpg" },
    { src: "/images/pic4.jpg" },
    { src: "/images/pic5.jpg" },
    { src: "/images/pic6.jpg" },
    { src: "/images/pic7.jpg" },  


];

// ✅ Duplicate images for seamless looping
images = [...images, ...images];

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
            speed: Math.random() * 1.5 + 0.5,
        });
    }
}

function drawBinaryMatrix() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
    ctx.font = "18px monospace";

    for (let char of binaryMatrix) {
        ctx.fillText(char.char, char.x, char.y);
        char.y += char.speed;

        if (char.y > window.innerHeight) {
            char.y = 0;
            char.x = Math.random() * window.innerWidth;
            char.char = Math.random() > 0.5 ? "1" : "0";
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