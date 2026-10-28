import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FIELD =
  "w-full rounded-md border border-line bg-page p-3 text-content placeholder:text-muted focus:border-accent";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const toastOptions = () => ({
    position: "top-right" as const,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
  });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    try {
      // Loaded on demand: the EmailJS SDK is not needed until someone submits the form
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      form.current.reset(); // Reset form fields after sending
      toast.success("Message sent successfully! ✅", toastOptions());
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.", toastOptions());
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="flex flex-col items-center justify-center px-5 py-24 sm:px-[7vw] lg:px-[12vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 id="contact-title" className="text-4xl font-bold text-content">
          CONTACT
        </h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-muted">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md rounded-lg border border-line bg-surface p-6 shadow-lg">
        <h3 className="text-center text-xl font-semibold text-content">
          Connect With Me{" "}
          <span aria-hidden="true" className="ml-1">
            🚀
          </span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          aria-busy={isSending}
          className="mt-4 flex flex-col space-y-4"
        >
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Your email
            </label>
            <input
              id="contact-email"
              type="email"
              name="user_email"
              placeholder="Your Email"
              autoComplete="email"
              required
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              autoComplete="name"
              required
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="contact-subject" className="sr-only">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className={FIELD}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Message"
              rows={4}
              required
              className={FIELD}
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className="min-h-11 w-full rounded-md bg-linear-to-r from-purple-700 to-pink-600 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
          >
            {isSending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
