<template>
    <footer class="footer-container">
      <div class="company-info">
        <img src="../assets/secondary_logo.svg" alt="Logo" class="logo" />
        <div class="company-details">
          <h4>SimpleStack AI</h4>
          <p>Copyright ©2024 - All Rights Reserved</p>
        </div>
      </div>
      <a href="#" class="btn-tertiary" @click="">Back To Top</a>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
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
</style>