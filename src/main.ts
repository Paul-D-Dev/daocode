import './style.scss';
import { sendEmail } from "./email.service.ts";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? entry.target.classList.add('reveal') : entry.target.classList.remove('reveal');

  });
});

const projectDescriptionEls = document.querySelectorAll('.project__description');
projectDescriptionEls.forEach(descriptionEl => observer.observe(descriptionEl));


const contactFormEl: HTMLElement | null = document.getElementById('contact-form');

contactFormEl!.addEventListener('submit', async (event: SubmitEvent) => {
  event.preventDefault();
  const formEl = event.target as HTMLFormElement;
  try {
    await sendEmail(formEl);
    console.log('success');
  } catch (e) {
    console.error(e);
  }

});
