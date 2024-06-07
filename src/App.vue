<template>
  <div class="main-wrapper">
    <header class="header-container">
      <section ref="navbarSection">
        <NavbarComponent @navigateToSection="scrollToSection" />
      </section>
      <HeaderComponent @navigateToSection="scrollToSection" />
    </header>
    
    <main>
      <section ref="servicesSection">
        <ServicesComponent  @navigateToSection="scrollToSection" />
      </section>
      <section ref="teamSection">
        <TeamComponent />
      </section>
      <section ref="contactSection">
        <ContactComponent />
      </section>
    </main>
    <FooterComponent @navigateToSection="scrollToSection" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from './components/Hero.vue';
import ServicesComponent from './components/Services.vue';
import TeamComponent from './components/Team.vue';
import ContactComponent from './components/Contact.vue';
import FooterComponent from './components/Footer.vue';
import NavbarComponent from './components/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent
  },
  methods: {
    scrollToSection(sectionId) {
      const section = this.$refs[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
});
</script>


<style>
body,
html {
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  font-family: "Segoe UI", sans-serif;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
}

.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.btn-primary {
  color: white;
  background-color: #0075FF;
  font: 500 16px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 12px 32px;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #003B80;
}

.btn-secondary {
  color: #0075ff;
  background-color: #F5F9FF;
  font: 500 16px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 12px 32px;
  border: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #B2D6FF;
}

.btn-tertiary {
  color: #0075ff;
  background-color: #F5F9FF;
  font: 500 16px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 12px 32px;
  border: 1px solid #0075FF;
  cursor: pointer;
}

.btn-tertiary:hover {
  background-color: #B2D6FF;
}

h1 {
  color: #0075FF;
  font-size: 64px;
  font-weight: 700;
}

h2 {
  color: #001329;
  font-size: 32px;
  font-weight: 700;
}

h3 {
  color: #001329;
  font-size: 48px;
  font-weight: 300;
}

h4 {
  color: #001329;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
}

p {
  color: #001329;
  font-family: "Segoe UI", sans-serif;
  font-size: 20px;
  font-weight: normal;
}

a {
  text-decoration: none;
}

.highlight {
  color: #0075FF;
}

@media (max-width: 600px) {
  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
}
</style>
