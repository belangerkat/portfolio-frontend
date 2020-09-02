document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.querySelector("#projects")
    const aboutMeNavigation = document.querySelector(".about-me-nav")
    const aboutMeSection = document.querySelector(".about-me")

    aboutMeNavigation.addEventListener('click', aboutMeScroll)

    fetch('http://localhost:3000/projects')
    .then(response => response.json())
    .then(result => renderProjects(result))

    function renderProjects(projects) {
        console.log(projects)
        projects.forEach(project => {
            const projectName = document.createElement('li')
            const projectDescription = document.createElement('li')
            projectName.innerText = project.name
            projectDescription.innerText = project.description
            const projectGif = document.createElement('img')
            projectGif.src = project.image
            const technologiesList = document.createElement('ul')
            const technologiesArray = project.technologies
            console.log(technologiesArray)
            technologiesArray.forEach(technology => {
                const technologyIcon = document.createElement('img')
                technologyIcon.className = "technology-icon"
                technologyIcon.src = technology.image
                technologiesList.append(technologyIcon)
            })
            projectList.append(projectName, projectDescription, projectGif, technologiesList)
        })
    }

    function aboutMeScroll(event) {
        event.preventDefault()
        aboutMeSection.scrollIntoView({
            behavior: 'smooth'
        })
    }
})