<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@500&display=swap');
    
    section#hero {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        z-index: 2;
        
        h1 {
            color: lightgrey;
            font-size: 70px;
            font-family: 'Urbanist', sans-serif;
            margin: 0;
            padding: 0;
            font-weight: 200;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }
    
        p#me {
            color: lightgrey;
            font-family: 'Urbanist', sans-serif;
            text-align: center;
            width: 45%;
            line-height: 1.3rem;
            font-size: 17px;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);

            span {
                &:nth-child(1) {
                    color: #bf5700;
                }

                &:nth-child(2) {
                    color: #ADD8E6;
                }

                &:nth-child(3) {
                    color: brown;
                }

                &:nth-child(4) {
                    color: #F56600;
                }

                &:nth-child(5) {
                    color: lightsalmon;
                }
            }
        }
    
        /* ✅ Terminal Container */
        #terminal-container {
            backdrop-filter: blur(10px);
            color: limegreen;
            font-family: monospace;
            font-size: 20px;
            width: 800px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 0 1px rgba(0, 255, 0, 0.5);
            margin-top: 2rem;
            padding: 1.5rem;
        }
    
        /* ✅ Terminal Text */
        #terminal {
            white-space: pre-line;
            text-align: left;
            line-height: 1.5rem;
            min-height: 100px; 
            color: limegreen;
            font-size: 1.2rem;

        }
    
        /* ✅ Blinking Cursor */
        .cursor {
            animation: blink 1s infinite;
        }
    
        @keyframes blink {
            50% { opacity: 0; }
        }

    }
    </style>
    
    <section id="hero">
        <h1>Hi 👋, my name is Jean-Paul Metoyer!</h1>
    
        <p id="me">
            Current student at the <span>University of Texas at Austin</span>, majoring in Informatics, minoring in 
            <span>Statistics & Data Science</span> and <span>Security Studies</span>. 
            My interests lie in cybersecurity, IT, & human-centered computing. I currently work for 
            <span>Clemson University's</span> Human & Technology Lab as a <span>research assistant</span>.
        </p>
    
        <!-- ✅ Terminal Effect Container -->
        <div id="terminal-container">
            <p id="terminal"></p><span class="cursor">_</span>
        </div>
    </section>
    
    <script lang="ts">
        import { onMount } from "svelte";
    
        let skills = [
            "Python",
            "SQL",
            "UTM",
            "Virtual Box",
            "Metasploit",
            "Malware Analysis",
            "Kali Linux",
            "Risk Management",
            "NIST Cyber Foundations",
            "Threat Modeling",
            "Business Impact Analysis",
            "Threat Modeling",
            "Risk Assessment",
            "Security Audits.."
        ];
    
        let terminal: HTMLElement | null = null;
let typingSpeed = 50; // Speed of typing
let resetDelay = 1500; // Delay before restarting
let text = "> Skills: ";
let skillIndex = 0;
let charIndex = 0;

function typeSkills() {
    if (!terminal) return;

    if (skillIndex < skills.length) {
        if (charIndex < skills[skillIndex].length) {
            terminal.innerHTML = text + skills.slice(0, skillIndex).join(", ") + 
                                 (skillIndex > 0 ? ", " : "") + skills[skillIndex].slice(0, charIndex);
            charIndex++;
            setTimeout(typeSkills, typingSpeed);
        } else {
            charIndex = 0;
            skillIndex++;
            setTimeout(typeSkills, typingSpeed * 2);
        }
    } else {
        setTimeout(resetTerminal, resetDelay);
    }
}

function resetTerminal() {
    if (!terminal) return;
    skillIndex = 0;
    charIndex = 0;
    terminal.innerHTML = text;
    setTimeout(typeSkills, 500);
}

onMount(() => {
    terminal = document.getElementById("terminal");
    if (terminal) {
        terminal.innerHTML = text;
        setTimeout(() => {
            typeSkills();
        },9000); // ✅ 5-second delay before typing starts
    }
});
    </script>