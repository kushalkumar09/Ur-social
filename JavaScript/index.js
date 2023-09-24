var root = document.querySelector(":root");
//Side Bar
const menuItem = document.querySelectorAll(".menu-item");

const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

// menuItem.forEach((item) => {
//   item.addEventListener('click', () => {
//     changeActiveItem();
//     item.classList.add('active');
//   });
// });

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(".notification-count").style.display = "none";
      // setTimeout(() => {
      //   document.querySelector('.notification-popup').style.display = 'none';
      // }, 2000);
      // if (item.id == 'notifications') {
      //   item.addEventListener("click", (e)=>{
      //     document.querySelector(".notification-popup").style.display = "none";
      //     // console.log("hello");
      //   }
      //   )
      // }
    }
  });
});
// const closeNotification = (e) => {
//   if (e.target.classList.contains("notification-popup")) {
//     document.querySelector('.notification-popup').style.display = 'none';
//   };

// }
// document.querySelector('#notifications').addEventListener('click', closeNotification);

// Messagees

const messaageNotification = document.getElementById("messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

//Search
messageSearch.addEventListener("keyup", searchMessage);

messaageNotification.addEventListener("click", () => {
  // messages.style.display = 'none';
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messaageNotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// Theme
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".customize-theme");

const openThemeModel = () => {
  themeModel.style.display = "grid";
};

const closeThemeModel = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModel.style.display = "none";
    // console.log('hello');
  }
};

themeModel.addEventListener("click", closeThemeModel);
theme.addEventListener("click", openThemeModel);

const fontSizes = document.querySelectorAll(".choose-size span");

const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
    // console.log(1);
  })
}

fontSizes.forEach((size) => {
  
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----stickey-top-left", "5.4rem");
      root.style.setProperty("----stickey-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----stickey-top-left", "5.4rem");
      root.style.setProperty("----stickey-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----stickey-top-left", "-2rem");
      root.style.setProperty("----stickey-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----stickey-top-left", "-5rem");
      root.style.setProperty("----stickey-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----stickey-top-left", "-12rem");
      root.style.setProperty("----stickey-top-right", "-35rem");
    }

    document.querySelector("html").style.fontSize = fontSize;
  })
  
});

const colorPallet = document.querySelectorAll('.choose-color span');
const changeActiveColorClass = () => {
  colorPallet.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}
colorPallet.forEach(color => {
  color.addEventListener('click', () => {
    // let primary;x
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add('active');

    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})


let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
const Bg2 = document.querySelector('.bg-2');
const Bg1 = document.querySelector('.bg-1');
const Bg3 = document.querySelector('.bg-3');
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  Bg2.classList.add('active');
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})
Bg1.addEventListener("click", () => {
  

  Bg1.classList.add("active");
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
  window.location.reload();
});
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  Bg3.classList.add("active");
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});