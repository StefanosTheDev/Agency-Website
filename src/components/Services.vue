<template>
  <div class="services-container">
    <section class="services-wrapper" ref="servicesSection">
      <div class="services-words">
        <h3>Our Services! </h3>
        <div class="spacing"></div>
        <button class="btn-primary">Schedule a Call</button>        
      </div>
      <div class="services-grid">
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/consulting.svg" />
          </div>
          <h4>Enterprise Consulting</h4>
          <p>Our expert consultants guide your enterprise in harnessing the power of AI. We provide tailored strategies that drive innovation, enhance competitiveness, and foster sustainable growth.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/optimization.svg" />
          </div>
          <h4>Automated Process Optimization</h4>
          <p>Streamline operations and boost efficiency with our cutting-edge automation solutions. We combine advanced tools and custom code to transform tedious tasks into seamless, automated processes, saving time and resources..</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/chatbot.svg" />
          </div>
          <h4>ChatBot Development</h4>
          <p>Our advanced chatbot solutions go beyond simple support. We leverage knowledge bases and custom LLMs to create intelligent chatbots that address complex challenges, automate processes, and provide tailored solutions to meet your unique business needs.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/chatbot.svg" />
          </div>
          <h4>AI-Driven Software Integration</h4>
          <p>Integrate AI seamlessly into your existing software with our innovative solutions. We enhance your systems' capabilities, enabling more sophisticated, automated processes that drive efficiency and innovation.</p>
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
