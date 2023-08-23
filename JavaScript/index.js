//Side Bar
const menuItem = document.querySelectorAll('.menu-item');

const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove('active');
  });
};

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
  });
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    if (item.id != 'notifications') {
      document.querySelector(".notification-popup").style.display = "none";
      }
    else {
        document.querySelector('.notification-popup').style.display = 'block';
        document.querySelector('.notification-count').style.display = 'none';
      }
  });
});

// Messagees

const messaageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

messaageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messaageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})