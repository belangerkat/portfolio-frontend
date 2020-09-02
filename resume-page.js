document.addEventListener('DOMContentLoaded', () => {
    const contactNavigation = document.querySelector(".contact-nav")
    const contactList = document.querySelector('#contact-list')

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
    function contactScroll(event) {
        event.preventDefault()
        contactList.scrollIntoView({
            behavior: 'smooth'
        })
    }
})