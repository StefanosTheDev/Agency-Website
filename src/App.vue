<template>
  <div class="main-wrapper">
    <header class="header-container">
      <section class="brand-section">
        <img src="./assets/logo.svg" alt="Logo" class="logo" />
        <button class="btn-primary">Sign Up for the Newsletter</button>
      </section>
      <section class="main-content">
        <video
          src="./assets/hero_animation.mp4"
          autoplay
          loop
          muted
          class="background-image"
        ></video>
        <div class="content-overlay">
          <h2 class="tagline">
            The Future <span class="highlight">Awaits</span>
          </h2>
          <div class="actions">
            <button class="btn-primary">Our Services</button>
            <button class="btn-secondary">Let’s Talk</button>
          </div>
        </div>
      </section>
      <img src="./assets/icons/arrow.svg" class="corner-image" alt="Scroll" />
    </header>
    <main>
      <section class="services-wrapper">
        <h2>Our Services</h2>
        <div class="services-grid">
          <article class="service-card">
            <div class="service-icon">
              <img src="./assets/icons/consulting.svg"/>
            </div>
            <div  class="service-card-content">
              <h4>Consulting</h4>
              <p>
                This is an overview of what kinds of consulting we do and what
                that even means. Here is more description.
              </p>
            </div>

          </article>
          <article class="service-card">
            <div class="service-icon">
              <img src="./assets/icons/optimization.svg"/>
            </div>
            <div class="service-card-content">
              <h4>Automated Process Optimization</h4>
              <p>
                This is an overview of what kinds of consulting we do and what
                that even means. Here is more description.
              </p>
            </div>
          </article>
          <article class="service-card">
            <div class="service-icon">
              <img src="./assets/icons/chatbot.svg"/>
            </div>
            <div  class="service-card-content">
              <h4>ChatBot Development</h4>
              <p>
                This is an overview of what kinds of consulting we do and what
                that even means. Here is more description.
              </p>
            </div>

          </article>
        </div>
      </section>
      <section class="team-section">
        <h3>Meet The Team</h3>
        <div class="team-grid">
          <article class="team-member">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e484c42703f5e4c2e114fa79be4404eebee385b79d1462f44eedbcb5be86d1?apiKey=0b31aaea2fd84e958e6f2fd0d92347c4&"
              class="team-image"
              alt="Tiara Knightley"
            />
            <h4 style="color: white">Tiara Knightley</h4>
            <h5>Chief Executive Officer</h5>
          </article>
          <article class="team-member">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1914a08d2aaf5d1825ffd210497abc53e932c791b24a776e96c90ff425cad0b4?apiKey=0b31aaea2fd84e958e6f2fd0d92347c4&"
              class="team-image"
              alt="Jenna Ortega"
            />
            <h4 style="color: white">Jenna Ortega</h4>
            <h5>Chief Operations Officer</h5>
          </article>
        </div>
      </section>
      <section class="form-container">
        <aside class="form-info">
          <h2 class="form-info-title">
            The Future <span class="highlight">Awaits</span>
          </h2>
          <p class="form-info-description">
            This is an overview of what kinds of consulting we do and what that
            even means. Here is more description. Woohoo here is more about our
            team just keep on reading! Oh yeah, you are still going on and on.
          </p>
        </aside>
        <form class="contact-form">
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
      </section>
      <section class="newsletter-section">
        <h3>
          Join Our <span class="highlight">Newsletter</span>
        </h3>
        <p class="newsletter-description">
          Sign up for our newsletter to receive updates as we make moves that
          will change the industry forever!
        </p>
        <form class="newsletter-form">
          <input
            type="email"
            id="newsletterEmail"
            class="newsletter-input"
            placeholder="Email Address Here..."
            aria-label="Email Address Here..."
          />
          <button type="submit" class="sign-up-button">Sign Up</button>
        </form>
      </section>
    </main>
    <footer class="footer-container">
        <div class="company-info">
          <img src="./assets/secondary_logo.svg" alt="Logo" class="logo" />
          <div class="company-details">
            <h3>SimpleStack AI</h3>
            <p>Copyright ©2024 - All Rights Reserved</p>
          </div>
        </div>
        <a href="#" class="back-to-top">Back To Top</a>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "SimpleStack",
};
</script>

<style scoped>
@font-face {
  font-family: "Jura";
  src: url("./assets/fonts/Jura.ttf");
}

.input{
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 8px;
}

.full-width {
  width: 100%;
}

body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  font-family: 'Segoe UI', sans-serif;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: #000;
  padding: 60px;
}

main {
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 120px);
  position: relative;
}

.brand-section {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 0px;
}

.btn-primary {
  background-color: #0075ff;
  color: #fff;
  font: 400 16px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 8px 32px;
  border: none;
}

.btn-secondary {
  color: #fff;
  background-color: transparent;
  font: 400 20px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 8px 32px;
  border: 1px solid #fff;
}

h1{
  color: #fff;
  font-family: Jura, sans-serif;
  font-size: 64px;
  font-weight: 700;
}

h2{
  color: #fff;
  font-family: Jura, sans-serif;
  font-size: 40px;
  font-weight: 700;

}

h3{
  color: #fff;
  font-family: Jura, sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin: 0px;
}

h4{
  color: #0075ff;
  font-family: Jura, sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
}

h5{
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  font-weight: 200;
  margin: 0px;
}

P{
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  font-weight: normal;
  margin: 0px;
}

a{
  text-decoration: none;
}

.logo {
  height: 60px;
}

.brand-title {
  color: #fff;
  font-family: Jura, sans-serif;
  font-size: 40px;
  font-weight: 700;
}

.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
}

.background-image {
  position: absolute;
  right: -20%;
  width: 90%;
  object-fit: cover;
  z-index: 1;
  clip-path: inset(0 20%);
}

.content-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  position: relative;
}

.highlight {
  color: rgba(0, 117, 255, 1);
}

.actions {
  display: flex;
  gap: 20px;
  font-size: 20px;
  color: #fff;
  margin: 48px 0;
}

.corner-image {
  border: 1px solid #fff;
  width: 16px;
  padding: 8px;
  border-radius: 50%;
}

.services-wrapper {
  display: flex;
  flex-direction: column;
  font-family: Jura, sans-serif;
  color: #fff;
}

.services-grid {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0px;
}

.service-card {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card-content {
  padding: 32px 64px;
  background-color: #121212;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 280px;
}

.service-icon {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0075ff;
  border-radius: 4px;
  margin-bottom: -30px;
  z-index: 2;
}

.team-section {
  width: 100%;
}

.team-grid {
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0px;
}

.team-member {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px
}

.team-image {
  width: 100%;
}

.form-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.form-info {
  color: #fff;
  font-family: Jura, sans-serif;
  width: 45%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 45%;
}

.newsletter-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.newsletter-form {
  display: flex;
  align-items: center;
  width: 60%;
  gap: 0px;
}

.newsletter-input {
  padding: 16px;
  border-radius: 20px 0 0 20px;
  background-color: white;
  border: none;
  width: 80%;
}

.sign-up-button {
  padding: 16px;
  background: #0075ff;
  color: #fff;
  font: 400 16px Segoe UI, sans-serif;
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  margin-left: -5px;
  width: 20%;
}

.footer-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 0px;
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
}

.back-to-top{
  color: #fff;
  background-color: transparent;
  font: 400 20px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 8px;
  border: 1px solid #fff;
  width: 30%;
  text-align: center;
}

@media (max-width: 900px) {

  .services-grid {
    gap: 32px;
    justify-content: center;
  }

  .service-card {
    width: 40%;
  }

  .newsletter-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .newsletter-input {
    padding: 8px;
    border-radius: 66PX;
    background-color: white;
    border: none;
    width: 100%;
    box-sizing: border-box;
  }

  .sign-up-button {
    padding: 8px;
    background: #0075ff;
    color: #fff;
    font: 400 16px Segoe UI, sans-serif;
    border: none;
    border-radius: 66px;
    cursor: pointer;
    margin-left: 0px;
    width: 100%;
  }

  .brand-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }

  .back-to-top{
  color: #fff;
  background-color: transparent;
  font: 400 20px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 8px 32px;
  border: 1px solid #fff;
  width:100%;
}

.footer-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
}



@media (max-width: 780px) {

  p {
    font-size: 16px;
  }
  
  .service-card {
    width: 80%;
  }

  .form-container {
    flex-wrap: wrap;
    padding: 0;
  }

  .form-info {
    width: 100%;
    text-align: center;
  }

  .contact-form {
    width: 100%;
  }

  .footer-container {
    flex-wrap: wrap;
    padding: 40px 20px;
  }

  .background-image {
    position: absolute;
    right: -20%;
    width: 120%;
    object-fit: cover;
    z-index: 1;
    clip-path: inset(0 20%);
  }
  
  .header-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 60px);
    position: relative;
  }
}
</style>
