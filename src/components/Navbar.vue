<template>
  <nav class="navbar">
    <img src="../assets/logo.svg" alt="ClearStack AI" class="logo" />
    <div class="nav-links" :class="{ 'nav-links-mobile': isMobile, 'nav-links-open': isMobile && isOpen }">
      <a href="#">Services</a>
      <a href="#">Our Team</a>
      <a href="#">Contact</a>
    </div>
    <button class="btn-tertiary">Schedule A Demo</button>
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
  flex-direction: column;
  gap: 20px;
  background-color: white;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.nav-links-open {
  display: flex !important;
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
  width: 25px;
  height: 3px;
  background-color: #0075FF;
  transition: 0.3s;
}

.hamburger .line1 {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger .line2 {
  opacity: 0;
}

.hamburger .line3 {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
