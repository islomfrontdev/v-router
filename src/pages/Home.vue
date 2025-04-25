<template>
  <main class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__video-container">
        <div class="hero__overlay"></div>
        <video class="hero__video" autoplay loop muted playsinline>
          <!-- <source src="@/assets/videos/hero-background.mp4" type="video/mp4" /> -->
        </video>
      </div>

      <div class="hero__content">
        <div class="container">
          <h1 class="hero__title">
            TRUE FITNESS - ПРЕМИУМ<br />
            ТРЕНАЖЕРЫ ИЗ США
          </h1>

          <div class="hero__play-button" @click="showModal = true">
            <div class="hero__play-icon">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="39"
                  stroke="#00A0E3"
                  stroke-width="2"
                />
                <path
                  d="M55 40L32.5 52.9904L32.5 27.0096L55 40Z"
                  fill="#00A0E3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="hero__bottom">
        <div class="container">
          <h2 class="hero__subtitle">
            TRUE - ВЕДУЩИЙ МИРОВОЙ<br />
            ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС<br />
            ОБОРУДОВАНИЯ
          </h2>
        </div>
      </div>
    </section>

    <!-- Contact Form Modal -->
    <div class="modal">
      <div class="modal__content">
        <button class="modal__close" @click="showModal = false">&times;</button>

        <h3 class="modal__title">
          ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ<br />ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ<br />TRUE FITNESS
        </h3>
        <p class="modal__subtitle">
          Мы будем рады проконсультировать вас и помочь с подбором оборудования
        </p>

        <form @submit.prevent="handleSubmit" class="modal__form">
          <input
            v-model="form.name"
            type="text"
            placeholder="ИМЯ"
            class="modal__input"
            required
          />

          <input
            v-model="form.email"
            type="text"
            placeholder="EMAIL"
            class="modal__input"
            required
          />

          <div class="modal__phone-input">
            <div class="modal__phone-prefix">+998</div>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="(99)-999-99-99"
              class="modal__input modal__input--phone"
              required
            />
          </div>

          <button type="submit" class="modal__submit">ОТПРАВИТЬ</button>

          <p class="modal__privacy">
            Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const form = ref({
  name: "",
  email: "",
  phone: "",
});

const showModal = ref(false);

const botToken = "7748457976:AAFi064xDSrH67_IYmXwP4OfM3odnoYOH04";
const chatId = "886325457";
const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

const handleSubmit = () => {
  const message = `
    Имя: ${form.value.name}
    Email: ${form.value.email}
    Телефон: ${form.value.phone}
  `;

  axios
    .post(apiUrl, {
      text: message,
      chat_id: chatId,
    })
    .then((response) => {
      form.value = {
        name: "",
        email: "",
        phone: "",
      };
      alert("Спасибо за заявку!");
    })
    .catch((error) => {
      console.log(error);
      alert("Ошибка при отправке заявки!");
    });
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  color: white;
  overflow: hidden;
}

.hero__video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero__video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
}

.hero__content {
  position: relative;
  z-index: 2;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
}

.hero__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.hero__play-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 40px);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hero__play-button:hover {
  transform: translate(-50%, 40px) scale(1.1);
}

.hero__bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(180deg, #00a0e3 0%, #0089c3 100%);
  padding: 40px 0;
  z-index: 2;
}

.hero__subtitle {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

/* Modal Styles */
.modal {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 40px;
}

.modal__content {
  background: white;
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  position: relative;
}

.modal__close {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 28px;
  border: none;
  background: none;
  cursor: pointer;
  color: #333;
}

.modal__title {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 20px;
  line-height: 1.3;
  text-transform: uppercase;
}

.modal__subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.modal__form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.modal__input {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  background: #f5f5f5;
}

.modal__phone-input {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal__phone-prefix {
  padding: 12px 15px;
  color: #666;
  border-right: 1px solid #ddd;
}

.modal__input--phone {
  border: none;
  flex-grow: 1;
}

.modal__submit {
  background: #00a0e3;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  text-transform: uppercase;
}

.modal__submit:hover {
  background: #0089c3;
}

.modal__privacy {
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 36px;
  }

  .hero__subtitle {
    font-size: 24px;
  }

  .modal__content {
    padding: 30px 20px;
  }

  .modal__title {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .hero__title {
    font-size: 28px;
  }

  .hero__subtitle {
    font-size: 20px;
  }

  .hero__play-button {
    transform: translate(-50%, 40px) scale(0.8);
  }

  .hero__play-button:hover {
    transform: translate(-50%, 40px) scale(0.9);
  }
}
</style>
