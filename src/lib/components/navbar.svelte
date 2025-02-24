<nav>

    <div id="links">
        <!-- svelte-ignore a11y_invalid_attribute -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a href="/" data-sveltekit-prefetch data-sveltekit-noscroll><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          </a>
        <a href="/work" data-sveltekit-prefetch data-sveltekit-noscroll>Work</a>
        <a href="/about" data-sveltekit-prefetch data-sveltekit-noscroll>About</a>
        <a href="/projects" data-sveltekit-prefetch data-sveltekit-noscroll>Projects</a>

    </div>


</nav>


<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');


nav {
    flex: none;
    height: 3.6rem;
    left: 50%;
    position: fixed;
    top: 40px;
    transform: translate(-50%);
    width: 20rem;
    z-index: 1;
    background-color: rgb(33, 31, 31);
    border-radius: 2.5rem;
    opacity: 1;
    box-shadow: 0 0 .3px .3px rgba(219, 220, 220, 0.7);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    div#links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem;

        a {
            text-decoration: none;
            color: lightgrey;
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            transition: all 240ms ease-in-out;
            transform: translateY(0px);
            border-bottom: 1px solid transparent;
            cursor: pointer;


            &:hover {
                border-bottom: 1px solid green;
                transform: translateY(-2px);
                cursor: pointer;
            }



            svg {
            width: 2rem;
            height: 2rem;
            transition: all 240ms ease-in-out;

            &:hover {
             color: green;

            }
        }
        }
        

        

    }
}


</style>