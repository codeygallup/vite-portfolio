import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const useContactForm = () => {
  const form = useRef();
  // Starts the contact form blank
  const [contactFormState, setContactFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, subject, message } = contactFormState;

  function handleContact(e) {
    const { name, value } = e.target;
    let error = "";

    if (name === "email") {
      if (!value.length) error = "Email is required";
      else if (!validateEmail(value)) error = "Please enter a valid email!";
    } else if (!value.length) {
      error = `${name} is required`;
    }

    setErrorMessage(error);
    if (!error) setContactFormState((prev) => ({ ...prev, [name]: value }));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r9ozccg",
        "template_i728ryi",
        e.target,
        "cRjguA3pkusSgJPh5",
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return {
    form,
    errorMessage,
    handleContact,
    sendEmail,
    email,
    subject,
    message,
  };
};
