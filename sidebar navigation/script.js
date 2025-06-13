const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const text = document.querySelector('.text');

let isOpen = false;

toggleBtn.addEventListener('click', () => {
  if (isOpen) {
    sidebar.style.left = '-250px';
    text.style.marginLeft = '0';
  } else {
    sidebar.style.left = '0';
    text.style.marginLeft = '250px';
  }
  isOpen = !isOpen;
});