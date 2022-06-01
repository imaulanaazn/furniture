const asideBtn = document.querySelector('aside button');
const mainTitle = document.querySelector('h1.title');
const mainBtn = document.querySelector('main button');
let isSignUp = true;

asideBtn.addEventListener('click',()=>{
    if(isSignUp){
        const tl = gsap.timeline()
        tl.to('aside.ml-0',{
            marginLeft: 'auto',
            width: [{}],
            duration: '1.2',
            ease: "power2.out"
        })
        gsap.to('main.ml-auto',{
            marginLeft: 0,
            duration: '1.2',
            ease: "power2.out"
        })
        gsap.to('.container .welcome-back',{
            x: '-2.5rem',
            opacity: 0,
            duration: '0.5'
        })
        gsap.to('.container .welcome.opacity-0',{
            x: '0',
            opacity: 1,
            duration: '1.2'
        })
        gsap.to('main .username.hidden',{
            display: 'initial',
            delay: 0.2
        })
        tl.to('main .forgot-pass',{
            display: 'none'
        },"-=1.5")

        setTimeout(()=>{
            mainTitle.textContent = "Create Account";
            mainBtn.textContent = "SIGN UP"
        },260)
        asideBtn.textContent = "SIGN IN"
        isSignUp = false;
    }else{
        const tl = gsap.timeline()
        tl.to('aside.ml-0',{
            marginLeft: 0,
            duration: '1.2',
            ease: "power2.out"
        })
        gsap.to('main.ml-auto',{
            marginLeft: "auto",
            duration: '1.2',
            ease: "power2.out"
        })
        gsap.to('.container .welcome-back',{
            x: '0',
            opacity: 1,
            duration: '1.2'
        })
        gsap.to('.container .welcome.opacity-0',{
            x: '2.5rem',
            opacity: 0,
            duration: '0.5'
        })
        tl.to('main .username.hidden',{
            display: 'none',
        },"-=1.5")
        tl.to('main .forgot-pass',{
            display: 'initial'
        },"-=1")

        setTimeout(()=>{
            mainTitle.textContent = "Sign in to Altar";
            mainBtn.textContent = "SIGN IN"
        },260)
        asideBtn.textContent = "SIGN UP";
        isSignUp = true;
    }
    
})

