<template>
  <base-card>
    <user-post-header
      name="Jose Luis"
      date="Sunday, June 20, 2021 at 1:00 PM"
      imgUrl="https://res.cloudinary.com/guerracode/image/upload/v1627782420/danAbramov_jdbpjo.jpg"
    />

    <figure>
      <img
        src="https://res.cloudinary.com/guerracode/image/upload/v1631826126/bugatti_apckpv.jpg"
        alt="post"
      />
    </figure>
    <div class="text-container">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        expedita fugiat, perferendis deleniti, modi, aperiam quidem dolorum
        debitis harum eos sapiente maxime sunt hic omnis molestias nobis
        blanditiis doloribus veniam.
      </p>
    </div>

    <base-button>Comment</base-button>
  </base-card>
</template>

<script>
import UserPostHeader from '../atoms/UserPostHeader.vue';

export default {
  components: {
    UserPostHeader,
  },
};
</script>

<style scoped>
figure {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  margin: 20px 0;
}

figure img {
  position: absolute;
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.text-container {
  margin: 20px 0;
}
.text-container p {
  font-size: 1.5rem;
}
</style>