<template>
<section class="team-section" ref="teamSection">
    <div class="team-words">
        <h2>Meet The <span class="highlight">Team</span></h2>
        <p>Small introduction paragraph here about the company’s services and what we provide people with. Small introduction paragraph here about the company’s services.</p>
    </div>
    <div class="team-grid">
      <article class="team-member">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e484c42703f5e4c2e114fa79be4404eebee385b79d1462f44eedbcb5be86d1?apiKey=0b31aaea2fd84e958e6f2fd0d92347c4&"
          class="team-image"
          alt="Tiara Knightley"
        />
        <div class="member-content">
            <h2>Tiara Knightley</h2>
            <h5>Chief Executive Officer</h5>
            <div class="divider"></div>
            <p>This is an overview of what kinds of consulting we do and what that even means. Here is more description. </p>
        </div>
      </article>
      <article class="team-member">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e484c42703f5e4c2e114fa79be4404eebee385b79d1462f44eedbcb5be86d1?apiKey=0b31aaea2fd84e958e6f2fd0d92347c4&"
          class="team-image"
          alt="Tiara Knightley"
        />
        <div class="member-content">
            <h2>Tiara Knightley</h2>
            <h5>Chief Executive Officer</h5>
            <div class="divider"></div>
            <p>This is an overview of what kinds of consulting we do and what that even means. Here is more description. </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamComponent',
};
</script>

<style scoped>

.team-section {
  background-color: white;
  width: 100%;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

.team-grid{
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 60%;
}

.team-words{
    display: flex;
    flex-direction: column;
    width: 30%;
}

.team-member{
    display: flex;
    gap: 32px;
    height: 200px;
    align-items: center;
}   

.team-image{
    width: 200px;
    height: 200px;
    border-radius: 8px;
}

.member-content{
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.member-content h2, .member-content h5, .member-content p{
    margin: 0px;
}

.divider{
    width: 100%;
    height: 1px;
    background-color: #0075FF;
}
</style>