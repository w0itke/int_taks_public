const eventsField = document.querySelector(".events");
document.addEventListener(
  "click",
  () => {
    eventsField.innerText = "";
  },
  true
);

const output = (id) => {
  eventsField.insertAdjacentHTML("beforeend", `<li>from '${id}' handler </li>`);
};

// write your solution below
