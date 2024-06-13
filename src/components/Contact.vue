<template>
  <section class="form-container fadeIn" ref="contactSection">
    <h2>Let's Create The Future <span class="highlight">Together</span></h2>
    <p>
      Got an AI idea, a question, or just curious about what we do? Reach out to
      ClearStack AI! Our team is here to guide, support, and share in your AI
      journey. Let's turn your AI dreams into reality together!
    </p>
    <form class="contact-form" ref="contactForm" @submit.prevent="handleSubmit">
      <div class="half-width">
        <input
            v-model.trim="form.name"
            type="text"
            id="nameInput"
            class="input"
            placeholder="Name..."
            aria-label="Name..."
            required
        />
        <input
            v-model.trim="form.email"
            type="email"
            id="emailInput"
            class="input"
            placeholder="Email..."
            aria-label="Email..."
            required
        />
      </div>
      <input
          v-model.trim="form.budget"
          type="text"
          id="budgetInput"
          class="input"
          placeholder="What is your Budget for this project?"
          aria-label="What is your Budget for this project?"
          required
      />
      <input
          v-model.trim="form.help"
          type="text"
          id="helpInput"
          class="input"
          placeholder="How can we help?"
          aria-label="How can we help?"
          required
      />
      <button type="submit" class="btn-primary full-width" :disabled="loading || !isValidForm">
        <span v-if="loading" class="spinner"></span>
        <span v-else>Submit</span>
      </button>
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
import Swal from 'sweetalert2';

export default {
  name: "ContactComponent",
  data() {
    return {
      form: {
        name: '',
        email: '',
        budget: '',
        help: ''
      },
      loading: false
    };
  },
  computed: {
    isValidForm() {
      return this.form.name && this.form.email && this.form.budget && this.form.help;
    }
  },
  methods: {
    sanitizeInput(input) {
      const temp = document.createElement('div');
      temp.textContent = input;
      return temp.innerHTML;
    },
    async handleSubmit() {
      const sanitizedForm = {
        name: this.sanitizeInput(this.form.name),
        email: this.sanitizeInput(this.form.email),
        budget: this.sanitizeInput(this.form.budget),
        help: this.sanitizeInput(this.form.help),
      };

      console.log('Form submitted with:', sanitizedForm);

      // Determine the API URL based on the environment
      const apiUrl = window.location.hostname === 'localhost'
          ? 'http://localhost:5001/send-email'
          : '/send-email';

      // Send form data to the server
      this.loading = true;
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sanitizedForm)
        });

        const data = await response.json();
        console.log(data.message);

        // Clear the form fields
        this.form.name = '';
        this.form.email = '';
        this.form.budget = '';
        this.form.help = '';

        // Display a success dialog
        await Swal.fire({
          title: 'Success!',
          text: 'Your information has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });

      } catch (error) {
        console.error('Error sending email:', error);

        // Display an error dialog
        await Swal.fire({
          title: 'Error!',
          text: 'There was an error sending your information. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.$refs.contactSection.classList.add('fadeIn-visible');
          observer.unobserve(this.$refs.contactSection); // Stop observing once it's visible
        }
      });
    }, {
      threshold: 0.1 // Adjust as needed
    });

    observer.observe(this.$refs.contactSection);
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary:hover {
  background-color: #0055cc;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #fff;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
