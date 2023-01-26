var typed = new Typed(".auto-type",{
    strings:[
        "Problem Solver.","Full Stack Developer.","Quick Learner.","Proactive."
    ],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

const menuButton = document.querySelector('.menubutton');
const sidebar = document.getElementById('mysidebar');

let isopen  = false;
menuButton.addEventListener('click',()=>{

    isopen = !isopen;
    if(isopen==true){
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
    sidebar.style.justifyContent="center";
    sidebar.style.alignItems="center";
    }
    else{
        sidebar.style.display = "none";
    }
   
    
})

closebutton.addEventListener('click',()=>{
    sidebar.style.height = "0";
    sidebar.style.display="none";
})