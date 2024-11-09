emailjs.sendForm('service_26i75ls', 'template_dyb30wo', '#contactForm', '1xQx1IAwgwD7NzEo4').then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

// template_dyb30wo
