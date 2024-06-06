<template>
  <div class="main-wrapper">
    <header class="header-container">
      <navbar class="navbar">
        <img src="./assets/logo.svg" alt="ClearStack AI" class="logo" />
        <div class="nav-links">
          <a href="#">Services</a>
          <a href="#">Our Team</a>
          <a href="#">Contact</a>
        </div>
        <button class="btn-tertiary">Our Services</button>
      </navbar>
      <HeaderComponent />
    </header>
    
    <main>
      <ServicesComponent />
      <TeamComponent />
      <ContactComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from './components/Hero.vue';
import ServicesComponent from './components/Services.vue';
import TeamComponent from './components/Team.vue';
import ContactComponent from './components/Contact.vue';
import FooterComponent from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  },
});
</script>

<style>
@font-face {
  font-family: "Jura";
  src: url("./assets/fonts/Jura.ttf");
}

.navbar {
  display: flex;
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: #F5F9FF;
  padding: 0 60px;
}

.nav-links {
  display: flex;
  gap: 64px;
  padding: 24px;
  background-color: white;
  border-radius: 98px;
}

.nav-links a {
  color: #0075FF;
  font-weight: normal;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  text-decoration: none;
}

.logo {
  height: 60px;
}

.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.input {
  border: none;
  border-bottom: 1px solid #9C9C9C;
  background-color: transparent;
  color: #001329;
  padding: 8px;
}

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

.btn-primary {
  background-color: #0075ff;
  color: #fff;
  font: 500 16px Segoe UI, sans-serif;
  border-radius: 66px;
  padding: 12px 32px;
  border: none;
  z-index: 2;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0055cc;
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

P {
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
</style>