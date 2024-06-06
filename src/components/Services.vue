<template>
  <div class="services-container">
    <section class="services-wrapper" ref="servicesSection">
      <div class="services-words">
        <h2>Our <span class="highlight">Services</span></h2>
        <h3>We Provide Many Awesome Services</h3>
        <p>Small introduction paragraph here about the company’s services and what we provide people with. Small introduction paragraph here about the company’s services and what we provide people with. Small introduction paragraph here about the company’s services and what we provide people with. Small introduction paragraph here about the company’s services and what we provide people with.</p>
        <div class="spacing"></div>
        <button class="btn-primary">Schedule a Call</button>        
      </div>
      <div class="services-grid">
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/consulting.svg" />
          </div>
          <h4>Consulting</h4>
          <p>This is an overview of what kinds of consulting we do and what that even means. Here is more description.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/optimization.svg" />
          </div>
          <h4>Automated Process Optimization</h4>
          <p>This is an overview of what kinds of processes we optimize and what that even means. Here is more description.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/chatbot.svg" />
          </div>
          <h4>ChatBot Development</h4>
          <p>This is an overview of what kinds of chatbot dev we do and what that even means. Here is more description.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/chatbot.svg" />
          </div>
          <h4>ChatBot Development</h4>
          <p>This is an overview of what kinds of chatbot dev we do and what that even means. Here is more description.</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent',
};
</script>

<style scoped>

.spacing {
  height: 32px;
}

.services-container {
  background-color: #F5F9FF;
  width: 100%;
  padding: 60px;
  box-sizing: border-box;
}

.services-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 64px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.services-words {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.services-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  background-color: #F5F9FF;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #0075ff;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .services-wrapper {
    flex-direction: row;
    justify-content: space-between;
  }

  .services-words {
    width: 30%;
  }

  .services-grid {
    width: 60%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .service-card {
    width: 48%;
  }
}

@media (min-width: 1024px) {
  .service-card {
    width: 32%;
  }
}

@media (max-width: 600px) {
  .services-container {
    padding: 20px;
  }

  .services-wrapper {
    padding: 20px;
  }
}
</style>
