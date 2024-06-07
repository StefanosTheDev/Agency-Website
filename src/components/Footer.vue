<template>
    <footer class="footer-container" ref="footerSection">
      <div class="company-info">
        <img src="../assets/secondary_logo.svg" alt="Logo" class="logo" />
        <div class="company-details">
          <h4>ClearStack AI</h4>
          <p>Copyright ©2024 - All Rights Reserved</p>
        </div>
      </div>
      <a href="#" class="btn-tertiary" @click.prevent="navigateToSection('navbarSection')">Back To Top</a>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
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
.footer-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 0px;
  padding: 32px 60px;
  box-sizing: border-box;
}

.footer-container a {
    width: fit-content;
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.company-info {
  display: flex;
  align-items: center;
  gap: 32px;
}

.company-details {
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: flex-start;
}

.company-details h4, p {
  margin: 0px;
}

@media (max-width: 600px) {
  .footer-container a {
    width: 100%;
    margin-top: 32px;
  }
}
</style>