<template>
  <section class="team-section fadeIn" ref="teamSection">
    <div class="team-words">
      <h2>Meet The <span class="highlight">Team</span></h2>
      <p>Meet Stefanos and Stavro Sophocleous, the dynamic brothers behind ClearStack AI! With Stefanos driving passionate AI automation and Stavro ensuring top-notch operations and marketing, they bring a full solution of engineering and customer service to drive positive change in organizations.</p>
    </div>
    <div class="team-grid">
      <article class="team-member">
        <img src="../assets/Stefanos1.png"
          class="team-image"
          alt="Tiara Knightley"
        />
        <div class="member-content">
          <h2>Stefanos Sophocleous</h2>
          <div class="divider"></div>
          <h5 class="member-title">Co-Founder</h5>
        </div>
      </article>
      <article class="team-member">
        <img src="../assets/Stavro.png"
          class="team-image"
          alt="Tiara Knightley"
        />
        <div class="member-content">
          <h2>Stavro Sophocleous</h2>
          <div class="divider"></div>
          <h5 class="member-title">Co-Founder</h5>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamComponent',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.$refs.teamSection.classList.add('fadeIn-visible');
          observer.unobserve(this.$refs.teamSection); // Stop observing once it's visible
        }
      });
    }, {
      threshold: 0.1 // Adjust as needed
    });

    observer.observe(this.$refs.teamSection);
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

.team-section {
  background-color: white;
  width: 100%;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.team-words {
  display: flex;
  flex-direction: column;
  width: 30%;
}

.team-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 60%;
}

.team-member {
  display: flex;
  gap: 32px;
  height: 200px;
  align-items: center;
}

.member-title {
  color: #0075FF;
  font-size: 20px;
  font-weight: lighter;
}

.team-image {
  width: 160px;
  height: 200p;
  border-radius: 8px;
}

.member-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.member-content h2, .member-content h5, .member-content p {
  margin: 0;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #0075FF;
}

@media (max-width: 1024px) {
  .team-section {
    flex-direction: column;
    gap: 32px;
  }

  .team-words {
    width: 100%;
  }

  .team-grid {
    width: 100%;
  }

  .team-member {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 32px;
    background-color: #F5F9FF;
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .team-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .member-content {
    align-items: center;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .team-grid {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  .team-member {
    width: 48%;
    flex-direction: row;
  }

  .member-content {
    width: calc(100% - 100px);
  }
}

@media (max-width: 768px) {
  .team-section {
    flex-direction: column;
    gap: 32px;
  }

  .team-words {
    width: 100%;
  }

  .team-grid {
    width: 100%;
  }

  .team-member {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 32px;
    background-color: #F5F9FF;
    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .team-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .member-content {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .team-image {
    width: 140px; 
    height: 160px; 
    border-radius: 50%;
  }
}
</style>
