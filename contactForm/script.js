$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("Clicked button");

    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid </div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid </div>");
    }

    if (subject.length >= 2) {
      statusElm.append("<div>Subject is valid </div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Subject is not valid </div>");
    }

    if (message.length >= 3) {
      statusElm.append("<div>Message is valid </div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Message is not valid </div>");
    }
  });
});
// END FORM
// START NAV
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    // adds the menu (hamburger) icon
    toggle.querySelector(".nav-link").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    // adds the close (x) icon
    toggle.querySelector(".nav-link").innerHTML =
      "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);
