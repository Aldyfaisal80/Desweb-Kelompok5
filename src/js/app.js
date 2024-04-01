// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.navbar a');

// for (const link of navLinks) {
//   if (link.href.includes(activePage)) {
//     link.classList.add('active');
//   }
// }


const navButtons = document.querySelectorAll('.navbar a');

for (const button of navButtons) {
  button.addEventListener('click', () => {
    // Menghapus penanda dari semua tombol
    for (const otherButton of navButtons) {
      otherButton.classList.remove('active');
    }

    // Menambahkan penanda pada tombol yang diklik
    button.classList.add('active');
  });
}