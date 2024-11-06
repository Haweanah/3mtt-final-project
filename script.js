<script>
  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".fa-bars");
    const navMenu = document.querySelector(".nav__menu");

    menuIcon.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  });
</script>
