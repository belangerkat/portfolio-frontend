document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.querySelector("#projects")
    const contactNavigation = document.querySelector(".contact-nav")
    const contactList = document.querySelector('#contact-list')

    contactNavigation.addEventListener('click', contactScroll)

    fetch('http://localhost:3000/projects')
    .then(response => response.json())
    .then(result => renderProjects(result))

    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(result => renderContacts(result))

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
    function renderContacts(contacts) {
        contacts.map(contact => {
            // const socialList = document.createElement('ul')
            const icon = document.createElement('img')
            icon.className = 'image-icon'
            icon.src = contact.image
            icon.href = contact.link
            icon.addEventListener('click', ()=> {
                document.location.href = contact.link
            })
            // const handle = document.createElement('li')
            // handle.innerText = contact.handle
            // socialList.append(icon, handle)
            contactList.append(icon)
        })
    }
    function contactScroll(event) {
        event.preventDefault()
        contactList.scrollIntoView({
            behavior: 'smooth'
        })
    }
})