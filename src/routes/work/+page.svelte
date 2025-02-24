<main>
    <canvas id="binaryCanvas"></canvas>

    <div id="experiences">
        
        <div id="header">
            <h1>EXPERIENCES</h1>
            <div id="contacts">
                <a href="mailto:someone@example.com">metoyerjeanpaul@gmail.com</a>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a href="https://www.linkedin.com/in/jpmetoyer/" target="_blank">
                    
                  <img src="/icons/linkedin.png" alt="">
                        
                </a>

                <a href="https://github.com/" target="_blank">
                    
                    <img src="/icons/github.svg" alt="">
                </a>
            </div>
           
        </div>

        <div class="job">
            

            <div class="date">
                <p>Jan 2025 - Present</p>

            </div>

            <div class="description">
                <p>Clemson University Human & Technology Lab</p>
                <p>Undergraduate Research Assistant</p>
                <p>
                    I <span style="color: lightblue; border-bottom: 1px dashed lightblue;">design and evaluate</span> 
                    <span style="color: salmon;">data-minimization techniques</span> to protect 
                    <span style="color:#CC5500;">participant privacy</span> in 
                    <span style="color: lightblue;">AI research</span> and develop 
                    <span style="color: blueviolet;">cryptographic systems</span> for 
                    <span style="color: yellow;">authenticating and verifying</span> 
                    <span style="color: red;">digital news content</span>.
                </p>
            </div>


        </div>

        <div class="job">

            <div class="date">
                <p>Oct 2024 - Present</p>

            </div>

            <div class="description">
                <p>Strauss Center for International Security & Law</p>
                <p>Texas Cybersecurity Clinic Student</p>
                <p>
                    I develop <span style="color: lightblue; border-bottom: 1px dashed lightblue;">foundational cybersecurity skills</span> 
                    through training in <span style="color: salmon;">vulnerability assessment</span>, 
                    <span style="color:#CC5500;">network security</span>, and 
                    <span style="color: lightblue;">incident response</span>.  
                    I participate in <span style="color: yellow;">simulated exercises</span> to apply 
                    <span style="color: blueviolet;">cybersecurity concepts</span> in real-world scenarios,  
                    thereby preparing for <span style="color: red;">client engagement</span>.
                </p>
            </div>


        </div>

        <div class="job">

            <div class="date">
                <p>May 2024 - August 2024</p>

            </div>

            <div class="description">
                <p>Full Circle Therapy LLC</p>
                <p>Business Intern</p>
                <p>
                    I <span style="color: lightblue; border-bottom: 1px dashed lightblue;">designed and launched</span> the clinic’s 
                    <span style="color: salmon;">website and digital platforms</span> to enhance 
                    <span style="color:#CC5500;">client accessibility</span> and engagement, 
                    set up <span style="color: blue;">Google Workspace</span> for 
                    <span style="color: lightblue;">efficient scheduling</span> and internal communications, 
                    and conducted <span style="color: yellow;">market research</span> to identify 
                    <span style="color: brown;">client needs</span> and inform strategic 
                    <span style="color: red;">service improvements</span>.
                </p>
            </div>


        </div>


        <div class="job">
            

            <div class="date">
                <p>Jan 2024 - May 2024</p>

            </div>

            <div class="description">
                <p>Lone Star College</p>
                <p>Tech 1 intern</p>
                <p>
                    I <span style="color: lightblue; border-bottom: 1px dashed lightblue;">solved over 65</span> 
                    <span style="color: salmon;">classroom technology problems</span> in five months,  
                    gained experience with <span style="color:#CC5500;">device enrollment</span>, 
                    <span style="color: lightblue;">cloud management</span>, and other  
                    <span style="color: blueviolet;">software platforms</span>.  
                    I collaborated with <span style="color: yellow;">faculty and IT staff</span> to troubleshoot  
                    and improve <span style="color: red;">classroom technology efficiency</span>.
                </p>
            </div>


        </div>
        <div class="job">
            

            <div class="date">
                <p>May 2023 - Aug 2023</p>

            </div>

            <div class="description">
                <p>Spring Independent School District</p>
                <p>IT Intern Lead</p>
                <p>
                    I <span style="color: lightblue; border-bottom: 1px dashed lightblue;">trained interns</span>  
                    on <span style="color: salmon;">computer basics</span>,  
                    <span style="color:#CC5500;">BIOS systems</span>, and  
                    <span style="color: lightblue;">hardware repairs</span>.  
                    I configured <span style="color: blueviolet;">SpringISD cloud data</span> and updated their  
                    <span style="color: yellow;">asset management system</span>.  
                    I led teams across <span style="color: red;">multiple schools</span> to set up  
                    <span style="color: pink;">computer labs</span>,  
                    <span style="color: lightgreen;">teacher laptops</span>, and  
                    <span style="color: white;">student devices</span>.
                </p>
            </div>


        </div>

    </div>

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
       

        div#experiences {
            width: 60%; 
            height: auto;
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);        
               margin: 0 auto;
               margin-top: 20rem;
            display: flex;
            flex-direction: column;

            div#header {
                color: white;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
               
                h1 {
                    color: white;
                    font-family: 'Roboto', sans-serif;
                    font-size: 2.5rem;
                    margin: 0 0 0 0;
                }

                div#contacts {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
               
                    a {
                    
                    &:nth-child(1) {
                        color:lightgrey;
                        margin-left: 3rem;
                        font-family: 'Roboto', sans-serif;
                        text-decoration: none;
                        border: 1px solid lightgrey;
                        border-radius: 1.7rem;
                        padding: .5rem .9rem .5rem .9rem;
                        font-size: 14px;
                        transition: all 240ms ease-in-out;

                        &:hover {
                            border: 1px solid green;
                           color: green;
                        }
                    }

                    &:nth-child(2) {
                        img {
                            width: 2rem;
                            transition: all 240ms ease-in-out;
                            transform: translateX(0px);
                            border: 1px solid transparent;

                            &:hover {
                                transform: translateY(-10px);
                                border: 1px solid green;
                                border-radius: 100%;
                            }
                        }
                    }

                    &:nth-child(3) {
                        img {
                            width: 2rem;
                            transition: all 240ms ease-in-out;
                            transform: translateX(0px);
                            border: 1px solid transparent;
                            &:hover {
                                transform: translateY(-10px);
                                border: 1px solid green;
                                border-radius: 100%;
                            }
                        }
                    }

                    

                }
                }
            }

            div.job {
                display: flex;
                flex-direction: row;
                height: 9rem;
                padding-bottom: 1.5rem;
                padding-top: 1.5rem;
                border-bottom: 1px solid grey;
                -webkit-backdrop-filter: blur(4px);
                backdrop-filter: blur(4px);



                div.date {
                    width: 30%;

                    p {
                        color: grey;
                        padding: .5rem .5rem .5rem .5rem;
                        margin: 0 0 0 0;
                        font-size: 17px;
                        font-family: 'Inter', sans-serif;
                    }
                    
                }

                div.description {
                    width: 70%;
                    height: 10rem;
                    display: flex;
                    flex-direction: column;

                    p {
                        margin:  0 0 0 0;
                        font-family: 'Inter', sans-serif;

                        &:nth-child(1) {
                            color: white;
                            padding: .5rem 0rem .5rem .5rem;
                            font-size: 17px;
                        }

                        &:nth-child(2) {
                            color: grey;
                            padding: 0rem 0rem 0rem .5rem;
                            font-size: 14px;
            
                        }

                        &:nth-child(3) {
                            color: grey;
                            font-size: 16px;
                            padding: 1.3rem 0rem 0rem .5rem;
                        }
                        
                    }
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