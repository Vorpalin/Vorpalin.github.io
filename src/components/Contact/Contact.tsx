import { useRef } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const toastOptions = () => ({
    position: "top-right" as const,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
  });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    if (!form.current) return;

    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.current?.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", toastOptions());
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", toastOptions());
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-5 py-24 sm:px-[7vw] lg:px-[12vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-content">CONTACT</h2>
        <div className="mx-auto mt-4 h-1 w-32 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-muted">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md rounded-lg border border-line bg-surface p-6 shadow-lg">
        <h3 className="text-center text-xl font-semibold text-content">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full rounded-md border border-line bg-page p-3 text-content placeholder:text-muted focus:border-purple-500 focus:outline-none"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full rounded-md border border-line bg-page p-3 text-content placeholder:text-muted focus:border-purple-500 focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full rounded-md border border-line bg-page p-3 text-content placeholder:text-muted focus:border-purple-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full rounded-md border border-line bg-page p-3 text-content placeholder:text-muted focus:border-purple-500 focus:outline-none"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="focus-visible w-full rounded-md bg-linear-to-r from-purple-600 to-pink-500 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
