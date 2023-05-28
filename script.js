
const projects = [
    {
        name:"Random Jokes",
        code:"https://github.com/ankitjha2023/random-jokes",
        demo:"https://ankitjha2023.github.io/random-jokes/",
        src:"images/Screenshot (64).png"
        
    },
    {
        name:"Snake Water Gun",
        code:"https://github.com/ankitjha2023/snake-water-gun",
        demo:"https://ankitjha2023.github.io/snake-water-gun/",
        src:"images/Screenshot (65).png"
    },
    {
        name:"Guess the number",
        code:"https://github.com/ankitjha2023/guess-number",
        demo:"https://ankitjha2023.github.io/guess-number/",
        src:"images/Screenshot (66).png"
      
    },
    {
        name:"Weather App",
        code:"https://github.com/ankitjha2023/weather-app",
        demo:"https://ankitjha2023.github.io/weather-app/",
        src:"images/Screenshot (67).png"
    },
    {
        name:"Food Order",
        code:"https://github.com/ankitjha2023/food-order",
        demo:"https://ankitjha2023.github.io/food-order/",
        src:"images/Screenshot (68).png"
        
    },
    {

        name:"Quiz App",
        code:"https://github.com/ankitjha2023/quiz-app",
        demo:"https://ankitjha2023.github.io/quiz-app/",
        src:"images/Screenshot (69).png"
    } ,
    {
        name:"Movie App",
        code:"https://github.com/ankitjha2023/movie-app",
        demo:"https://ankitjha2023.github.io/movie-app/",
        src:"images/Screenshot (70).png"
    },

]


const projectContainer = document.getElementById('project-container')

const icon = document.getElementById('icon')
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        document.getElementById('navbarSupportedContent').classList.remove('show')
        icon.classList.replace('fa-xmark','fa-bars')
    })
})
function toggleMenu(){
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars','fa-xmark')
    }else{
        icon.classList.replace('fa-xmark','fa-bars')
    }
}




function loadProject(){
    projects.forEach((project)=>{
        let div = document.createElement('div')
        div.classList.add('col-md-6','col-lg-3')
        div.innerHTML = `
        
     
            <div class="card">
              <img src="${project.src}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title text-center">${project.name}</h5>
                <div class="d-flex gap-2 justify-content-center mt-2">
                <a href="${project.code}" target="_blank" class="btn border btn-sm">Source Code</a>
                <a href="${project.demo}" target="_blank" class="btn border btn-sm">Live Demo</a>
            </div>
              </div>
            </div>
          
        
        `
        projectContainer.appendChild(div)

    })
}

loadProject()
