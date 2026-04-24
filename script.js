const topbar = document.querySelector(".topbar");
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".menu a");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (menuToggle && topbar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      topbar.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      formNote.textContent = "Completá todos los campos para continuar.";
      return;
    }

    const mailSubject = encodeURIComponent(`Consulta web: ${subject}`);
    const mailBody = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    );

    formNote.textContent = "Se abrirá tu aplicación de correo para enviar la consulta.";
    window.location.href = `mailto:drjulioleiva@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  });
}
