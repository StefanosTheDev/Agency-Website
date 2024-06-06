<template>
  <section class="header-content">
      <h1 style="text-align: center;">
        Redefining Your Cool<br />Automation Excellence
      </h1>
      <p>A small introductory paragraph about what we do.</p>
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
  gap: 0px;
  position: relative;
  width: 100%;
  height: calc(100vh - 140px);
}

.actions {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 48px;
}

.top-right-corner-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
}

.bottom-left-corner-image {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
}
</style>
