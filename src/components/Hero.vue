<template>
  <section class="header-content">
    <h1 class="title">
      Innovation Simplified With<br />
    </h1>
    <h1>ClearStack <span style="color: black;">AI</span></h1>
    <p class="intro-text">Clarity In Innovation, Excellence In Execution, Impact In Results</p>
    <div class="actions">
      <button class="btn-primary" @click="scrollToSection('servicesSection')">
        Our Services
      </button>
      <button
        class="btn-secondary"
        @click="scrollToSection('contactSection')"
      >
        Let’s Talk
      </button>
    </div>
    <img
      src="../assets/top-right-corner.svg"
      alt="Top Right Corner"
      class="top-right-corner-image"
    />
    <img
      src="../assets/bottom-left-corner.svg"
      alt="Bottom Left Corner"
      class="bottom-left-corner-image"
    />
 
  </section>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    scrollToSection(sectionId) {
      const section = this.$refs[sectionId];
      if (section) {
        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - (window.innerHeight / 2) + (section.clientHeight / 2);
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  width: 100%;
  height: calc(100vh - 140px);
  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin: 0;
}

.intro-text {
  font-size: 1rem;
  margin: 10px 0;
}

.actions {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.top-right-corner-image,
.bottom-left-corner-image {
  position: absolute;
  width: 20%;
  max-width: 500px;
  min-width: 200px;
}

.top-right-corner-image {
  top: 0;
  right: 0;
}

.bottom-left-corner-image {
  bottom: 0;
  left: 0;
}

.btn-primary {
  background-color: #0075ff;
  color: #fff;
  font: 500 16px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 12px 32px;
  border: none;
  z-index: 2;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0055cc;
}

.btn-secondary {
  color: #0075ff;
  background-color: #F5F9FF;
  font: 500 16px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 12px 32px;
  border: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #B2D6FF;
}

.partner-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background-color: #F5F9FF;
  color: #0075ff;
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  box-sizing: border-box;
}

.partner-bar span {
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 600px) {
  .title {
    font-size: 3rem;
  }

  .intro-text {
    font-size: 1.25rem;
  }

  .actions {
    flex-direction: column;
    gap: 40px;
    margin-top: 48px;
  }

  .actions button {
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 4rem;
  }

  .intro-text {
    font-size: 1.5rem;
  }

  .top-right-corner-image,
  .bottom-left-corner-image {
    width: 30%;
  }
}
</style>
