let switch_btn = document.querySelector(".switch input");
let situation = document.querySelector(".situation");

switch_btn.onchange = () => {
  if (switch_btn.checked) {
    situation.textContent = "Dark Mode";
    document.body.classList.add("dark_mode");
  } else {
    situation.textContent = "light Mode";
    document.body.classList.remove("dark_mode");
  }
};
