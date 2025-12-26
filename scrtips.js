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
