import { useRef, useState } from "react";
import { FocusEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const validateEmail = (email: string): boolean => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const useContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const errorTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  // Starts the contact form blank
  const [contactFormState, setContactFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, subject, message } = contactFormState;

  function handleContact(
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    let error = "";

    if (name === "email") {
      if (!value.length) error = "Email is required";
      else if (!validateEmail(value)) error = "Please enter a valid email!";
    } else if (!value.length) {
      const fieldName = name.charAt(0).toUpperCase() + name.slice(1);
      error = `${fieldName} is required`;
    }

    setErrorMessage(error);
    if (error) {
      if (errorTimer.current) clearTimeout(errorTimer.current);
      errorTimer.current = setTimeout(() => setErrorMessage(""), 3000);
    }

    if (!error) setContactFormState((prev) => ({ ...prev, [name]: value }));
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, subject, message } = contactFormState;
    if (!email || !subject || !message) {
      setErrorMessage("Please fill out all fields before sending.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_r9ozccg",
        "template_i728ryi",
        e.target as HTMLFormElement,
        "cRjguA3pkusSgJPh5",
      )
      .then(
        () => setSent(true),
        (error) => console.log(error.text),
      )
      .finally(() => setLoading(false));
  };

  return {
    form,
    errorMessage,
    handleContact,
    sendEmail,
    email,
    subject,
    message,
    sent,
    loading,
  };
};
