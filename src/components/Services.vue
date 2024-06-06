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
        justify-content: space-between;
        padding: 64px;
        background-color: white;
        border-radius: 32px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .services-words{
        width: 30%;
        display: flex;
        flex-direction: column;
    }

    .services-grid{
        width: 60%;
        display: flex;
        justify-content: space-between;
        row-gap: 32px;
        flex-wrap: wrap;
    }

    .service-card{
        height: 340px;
        display: flex;
        flex-direction: column;
        padding: 32px;
        justify-content: space-between;
        width: 35%;
        align-items: center;
        background-color: #F5F9FF;
        border-radius: 16px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .service-icon{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #0075ff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>