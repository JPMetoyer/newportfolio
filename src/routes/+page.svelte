<script lang="ts">
  import { onMount } from "svelte";
import { binaryMatrix, showTerminal, fadeOut, isTyping, command } from "../lib/stores/binaryStores";
import Hero from "$lib/sections/hero.svelte";

let cursor = "_";
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;

const terminalText = [
    "user@localhost:~$ cd jean-paul-metoyer",
    "user@localhost:~/jean-paul-metoyer$ cd portfolio",
    "Booting up portfolio...",
];

async function startTyping() {
    let typedCommand = "";
    for (let i = 0; i < terminalText.length; i++) {
        for (let char of terminalText[i]) {
            await new Promise(resolve => setTimeout(resolve, 50));
            typedCommand += char;
            command.set(typedCommand); // ✅ Update store value
        }
        typedCommand += "\n";
        command.set(typedCommand);
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    isTyping.set(false);

    setTimeout(() => {
        fadeOut.set(true);
        setTimeout(() => {
            showTerminal.set(false);
        }, 1000);
    }, 750);
}

function createBinaryMatrix() {
    const numCharacters = 100;
    let matrix = [];
    for (let i = 0; i < numCharacters; i++) {
        matrix.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            char: Math.random() > 0.5 ? "1" : "0",
            speed: Math.random() * 1.5 + 0.5,
        });
    }
    binaryMatrix.set(matrix); // ✅ Store binary animation state persistently
}

function drawBinaryMatrix() {
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
    ctx.font = "18px monospace";

    binaryMatrix.update((matrix: any) => {
        for (let char of matrix) {
            if (ctx) {
                ctx.fillText(char.char, char.x, char.y);
            }
            char.y += char.speed;

            if (char.y > window.innerHeight) {
                char.y = 0;
                char.x = Math.random() * window.innerWidth;
                char.char = Math.random() > 0.5 ? "1" : "0";
            }
        }
        return matrix;
    });

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

    // Only start typing effect if it's the first visit
    showTerminal.subscribe((value) => {
        if (value) startTyping();
    });

    setInterval(() => {
        cursor = cursor === "_" ? " " : "_";
    }, 500);
});
  </script>
  
  <main>
    <!-- Floating Binary Matrix Background -->
    <canvas id="binaryCanvas"></canvas>
    
      <Hero />
    
   
   
    
  
   
    <!-- Terminal UI -->
{#if $showTerminal}
<div id="terminal" class:fade-out={$fadeOut}>
  <p>{$command}{isTyping ? cursor : ""}</p>
</div>
{/if}
  </main>
  
  <style lang="scss">
    main {
      width: 100%;
      height: 100vh;
      background-color: black;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    
  
    #binaryCanvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 0;
    }
  
    #terminal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      color: limegreen;
      font-family: monospace;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: pre-line;
      transition: opacity 1s ease-in-out;
      z-index: 2;
  
      p {
        text-align: center;
        font-size: 1.2rem;

        
      }
    }
  
    .fade-out {
      opacity: 0;
    }
  </style> 