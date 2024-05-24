import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const serviceId = "service_tf4fz5e";
  const templateId = "template_oyuteiv";
  const apiKey = "Ukt44gaahould7x-y";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, formData, apiKey).then(
      (response) => {
        console.log("Correo electrónico enviado con éxito", response);
      },
      (error) => {
        console.error("Error al enviar el correo electrónico", error);
        toast.error("Hubo un error al enviar el mensaje.");
      }
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    toast.success("¡Mensaje enviado exitosamente!");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="justify-center items-center">
        <div >
          <h1
            className="font-lato-400 text-[#47172d] text-center md:text-left text-3xl sm:text-3xl md:text-4xl lg:text-5xl"
            // style={{ color: "#081022" }}
          >
            Contáctanos
          </h1>
        </div>
        <div className="w-full py-4 font-roboto-300">
          <div className="">
            <div className="w-full mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-left font-bold text-[#47172d]"
              >
                ¿Cuál es tu nombre y apellido?
              </label>
              <input
                className="w-full bg-gray-200 rounded-sm"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu nombre y apellido"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-left font-bold text-[#47172d]"
              >
                Correo Electrónico:
              </label>
              <input
                className="w-full bg-gray-200 rounded-sm"
                style={{ padding: "16px" }}
                placeholder="Ingresá tu Correo Electrónico"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block mb-2 text-left font-bold text-[#47172d]"
            >
              Asunto
            </label>
            <input
              className="w-full bg-gray-200 rounded-sm"
              style={{ padding: "16px" }}
              placeholder="Ingresá el asunto del mensaje"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="block mb-2 text-left font-bold text-[#47172d]"
            >
              Mensaje
            </label>
            <textarea
              className="w-full bg-gray-200 rounded-sm"
              style={{ padding: "16px" }}
              placeholder="Ingresá tu mensaje"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end relative">
            <button
              className="text-white py-2 px-4 bg-[#47172d] font-sedan-500 text-lg w-full md:w-1/5 rounded-sm transform transition-transform hover:scale-110"
              type="submit"
              style={{padding: "12px" }}
            >
              Enviar
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactForm;
