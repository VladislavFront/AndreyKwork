const contactForm = document.getElementById('contactForm')

const sendEmail = (event) => {
  event.preventDefault()

  emailjs.sendForm('service_26i75ls', 'template_dyb30wo', '#contactForm', '1xQx1IAwgwD7NzEo4')
    .then(() => {
      contactForm.reset()
    })
}

contactForm.addEventListener('submit', sendEmail)
