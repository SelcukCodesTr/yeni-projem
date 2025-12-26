// Sayfa kaydırıldığında butonu göster/gizle
window.onscroll = function () {
  const upButton = document.querySelector(".content__up--link");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
};

// Yumuşak geçiş zaten HTML'de 'scroll-behavior: smooth' ile tanımlı,
// o yüzden ekstra bir JS animasyonuna gerek yok.
