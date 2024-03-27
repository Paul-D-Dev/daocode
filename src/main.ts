import './style.scss';
import './swiper.ts';
import { sendEmail } from "./email.service.ts";

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
