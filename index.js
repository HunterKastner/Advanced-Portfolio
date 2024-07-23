// Template ID for email: template_kqf3z7l
// Service ID for email: service_gk0924p
// User ID for email: CZXOe5qbWYx1qf1JC

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector("modal__overlay--loading");
  const success = document.querySelector("moadl__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_gk0924p",
      "template_kqf3z7l",
      event.target,
      "CZXOe5qbWYx1qf1JC"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at HwKastner@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}