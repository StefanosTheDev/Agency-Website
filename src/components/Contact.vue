<template>
  <section class="form-container" ref="contactSection">
    <h2>Let's Create The Future <span class="highlight">Together</span></h2>
    <p>
      Got an AI idea, a question, or just curious about what we do? Reach out to
      ClearStack AI! Our team is here to guide, support, and share in your AI
      journey. Let's turn your AI dreams into reality together!
    </p>
    <form class="contact-form">
      <div class="half-width">
        <input
          type="text"
          id="nameInput"
          class="input"
          placeholder="Name..."
          aria-label="Name..."
          required
        />
        <input
          type="email"
          id="emailInput"
          class="input"
          placeholder="Email..."
          aria-label="Email..."
          required
        />
      </div>
      <input
        type="text"
        id="budgetInput"
        class="input"
        placeholder="What is your Budget for this project?"
        aria-label="What is your Budget for this project?"
        required
      />
      <input
        type="text"
        id="helpInput"
        class="input"
        placeholder="How can we help?"
        aria-label="How can we help?"
        required
      />
      <button type="submit" class="btn-primary full-width">Submit</button>
    </form>
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
  name: "ContactComponent",
};
</script>

<style scoped>
.form-container {
  background-color: #f5f9ff;
  width: 100%;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 32px;
  text-align: center;
}

.form-container h2,
.form-container p {
  z-index: 2;
  width: 60%;
}

.half-width {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  gap: 0px;
}

.half-width input {
  width: 45%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 60%;
  background-color: white;
  padding: 32px;
  border-radius: 32px;
  z-index: 2;
}

.input {
  padding: 12px 0;
  border: none;
  border-bottom: 2px solid rgba(136, 136, 136, 0.2);
  font: 16px Segoe UI, sans-serif;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-bottom-color: #0055cc;
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
  width: 100%;
}

.btn-primary:hover {
  background-color: #0055cc;
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

.full-width {
  width: 100%;
}

@media (max-width: 600px) {
  .form-container h2,
  .form-container p {
    width: 80%;
  }

  .half-width {
    flex-direction: column;
    gap: 32px;
  }

  .half-width input {
    width: 100%;
  }

  .form-container {
    padding: 20px;
  }

  .contact-form {
    width: 80%;
  }
}

@media (min-width: 1024px) {
  .form-container h2,
  .form-container p {
    width: 60%;
  }
}
</style>
