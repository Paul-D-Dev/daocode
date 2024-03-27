import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export const sendEmail = (form: HTMLFormElement): Promise<EmailJSResponseStatus> =>
  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form,
    { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
  );

