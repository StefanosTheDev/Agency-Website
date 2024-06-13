<template>
  <section class="header-content">
    <h1 class="title fadeInUp">
      Innovation Simplified With<br />
    </h1>
    <h1 class="title fadeInUp">ClearStack <span style="color: black;">AI</span></h1>
    <p class="intro-text fadeInUp">Clarity In Innovation. Excellence In Execution. Impact In Results. </p>
    <div class="actions fadeInScale">
      <a class="btn-primary"  @click.prevent="navigateToSection('servicesSection')">
        Our Services
      </a>
      <a class="btn-secondary"  @click.prevent="navigateToSection('contactSection')">
        Let’s Talk
      </a>
    </div>
    <img
      src="../assets/top-right-corner.svg"
      alt="Top Right Corner"
      class="top-right-corner-image fadeIn"
    />
    <img
      src="../assets/bottom-left-corner.svg"
      alt="Bottom Left Corner"
      class="bottom-left-corner-image fadeIn"
    />
  </section>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    navigateToSection(sectionId) {
      this.$emit('navigateToSection', sectionId);
      if (this.isMobile) {
        this.isOpen = false;
      }
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation: fadeInUp 1.5s ease-out;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fadeInScale {
  animation: fadeInScale 1.5s ease-in-out;
}

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
