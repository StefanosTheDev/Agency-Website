<template>
  <section class="form-container" ref="contactSection">
    <h2>The Future <span class="highlight">Awaits</span></h2>
    <p>
      This is an overview of what kinds of consulting we do and what that even
      means. Here is more description. Woohoo here is more about our team just
      keep on reading! Oh yeah, you are still going on and on.
    </p>
    <form class="contact-form">
      <div class="half-width">
        <input
          type="text"
          id="nameInput"
          class="input"
          placeholder="Name..."
          aria-label="Name..."
        />
        <input
          type="email"
          id="emailInput"
          class="input"
          placeholder="Email..."
          aria-label="Email..."
        />
      </div>

      <input
        type="text"
        id="budgetInput"
        class="input"
        placeholder="What is your Budget for this project?"
        aria-label="What is your Budget for this project?"
      />
      <input
        type="text"
        id="helpInput"
        class="input"
        placeholder="How can we help?"
        aria-label="How can we help?"
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
