document.addEventListener('DOMContentLoaded', () => {
    // const aboutMeNavigation = document.querySelector(".about-me-nav")
    const contactNavigation = document.querySelector(".contact-nav")
    const aboutMeSection = document.querySelector(".about-me")
    const contactList = document.querySelector('#contact-list')
    const learnMoreButton = document.querySelector('#learn-more')

    // aboutMeNavigation.addEventListener('click', aboutMeScroll)
    learnMoreButton.addEventListener('click', aboutMeScroll)
    contactNavigation.addEventListener('click', contactScroll)

    fetch('http://localhost:3000/contacts')
    .then(response => response.json())
    .then(result => renderContacts(result))

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

    function aboutMeScroll(event) {
        event.preventDefault()
        aboutMeSection.scrollIntoView({
            behavior: 'smooth'
        })
    }
    function contactScroll(event) {
        event.preventDefault()
        contactList.scrollIntoView({
            behavior: 'smooth'
        })
    }
})