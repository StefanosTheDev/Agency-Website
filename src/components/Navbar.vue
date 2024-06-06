<template>
  <nav class="navbar">
    <img src="../assets/logo.svg" alt="ClearStack AI" class="logo" />
    <div class="nav-links" :class="{ 'nav-links-mobile': isMobile, 'nav-links-open': isMobile && isOpen }">
      <a href="#">Services</a>
      <a href="#">Our Team</a>
      <a href="#">Contact</a>

      <!-- Only include the button in the mobile nav links -->
      <button v-if="isMobile" class="btn-tertiary mobile-btn">Schedule A Demo</button>
    </div>

    <!-- Exclude the button from desktop nav links -->
    <button v-if="!isMobile" class="btn-tertiary">Schedule A Demo</button>
    <div class="hamburger" @click="toggleMenu">
      <div class="line" :class="{ 'line1': isOpen }"></div>
      <div class="line" :class="{ 'line2': isOpen }"></div>
      <div class="line" :class="{ 'line3': isOpen }"></div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isOpen: false,
      isMobile: window.innerWidth <= 768
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile) {
        this.isOpen = false;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateIsMobile);
  }
};
</script>

<style scoped>
@font-face {
  font-family: "Jura";
  src: url("../assets/fonts/Jura.ttf");
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #F5F9FF;
  width: 100%;
  box-sizing: border-box;
  height: 120px;
}

.nav-links {
  display: flex;
  gap: 64px;
  padding: 24px;
  background-color: white;
  border-radius: 98px;
}

.nav-links a {
  color: #0075FF;
  font-weight: normal;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  text-decoration: none;
}

.nav-links-mobile {
  display: none;
  box-sizing: border-box;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 10;
  border-radius: 0px;
  border-top: 1px solid #0075FF;
  background-color: #F5F9FF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}

.nav-links-mobile > a {
  padding: 12px;
  border-bottom: 1px solid #0075FF;
}

.nav-links-mobile > .mobile-btn {
  align-self: center;
}

.nav-links-open {
  display: flex !important;
}

.mobile-btn {
  width: 100%;
}

.logo {
  height: 60px;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger .line {
  width: 28px;
  height: 3px;
  background-color: #0075FF;
  transition: 0.3s;
}

.hamburger .line1 {
  transform: rotate(45deg) translate(5.5px, 5.5px);
}

.hamburger .line2 {
  opacity: 0;
}

.hamburger .line3 {
  transform: rotate(-45deg) translate(5.5px, -5.5px);
}

@media (max-width: 768px) {

  .logo {
    height: 48px;
  }

  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>