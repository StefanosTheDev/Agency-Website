<template>
  <div class="services-container fadeIn" ref="servicesSection">
    <section class="services-wrapper">
      <div class="services-words">
        <h2>Our <span class="highlight">Services</span></h2>
        <h3>Countless Possibilities</h3>
        <p>At ClearStack AI, the possibilities are endless; the transformative power of artificial intelligence drives innovation and efficiency across diverse industries. Our cutting-edge solutions and custom coding empowers businesses to unlock new levels of productivity and customer engagement. By leveraging the latest advancements in AI technology, ClearStack AI turns complex challenges into opportunities for growth, ensuring our clients stay ahead in an ever-evolving digital landscape.</p>
        <div class="spacing"></div>
        <button class="btn-primary" @click.prevent="navigateToSection('contactSection')">Schedule a Call</button>        
      </div>
      <div class="services-grid">
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/consulting.svg" />
          </div>
          <h4>Enterprise Consulting</h4>
          <p>Our expert consultants provide tailored AI strategies to drive innovation, enhance competitiveness, and foster sustainable growth for your enterprise.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/optimization.svg" />
          </div>
          <h4>Automated Process Optimization</h4>
          <p>Streamline operations with our advanced automation solutions, transforming tedious tasks into seamless, automated processes, saving time and resources.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/chatbot.svg" />
          </div>
          <h4>ChatBot Development</h4>
          <p>Our intelligent chatbots leverage knowledge bases and custom LLMs to automate processes and address complex business challenges.</p>
        </article>
        <article class="service-card">
          <div class="service-icon">
            <img src="../assets/icons/chatbot.svg" />
          </div>
          <h4>AI-Driven Software Integration</h4>
          <p>Seamlessly integrate AI capabilities into your systems with our services, ensuring enhanced functionality, interoperability, and optimized performance.</p>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent',
  methods: {
  navigateToSection(sectionId) {
      this.$emit('navigateToSection', sectionId);
      if (this.isMobile) {
        this.isOpen = false;
      }
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.$refs.servicesSection.classList.add('fadeIn-visible');
          observer.unobserve(this.$refs.servicesSection); // Stop observing once it's visible
        }
      });
    }, {
      threshold: 0.1 // Adjust as needed
    });

    observer.observe(this.$refs.servicesSection);
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
  opacity: 0; /* Initial hidden state */
  transition: opacity 1s ease-in-out;
}

.fadeIn.fadeIn-visible {
  opacity: 1; /* Visible state */
}

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
  flex-direction: row;
  box-sizing: border-box;
  gap: 32px;
  padding: 64px;
  background-color: white;
  border-radius: 32px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
}

.services-words {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 30%;
}

.services-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  width: 60%;
  justify-content: space-between;
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: 32px;
  align-items: center;
  background-color: #F5F9FF;
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 45%;
  box-sizing: border-box;
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

@media (max-width: 1400px) {
  .services-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .services-words {
    width: 80%;
    text-align: center;
  }

  .services-grid {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .service-card {
    width: 45%;
  }
}

@media (max-width: 768px) {
  .services-container {
    padding: 20px;
  }

  .services-wrapper {
    padding: 20px;
    flex-direction: column;
    gap: 20px;
  }

  .services-words,
  .service-card {
    width: 100%;
  }

  .services-grid {
    flex-direction: column;
    gap: 20px;
  }
}
</style>