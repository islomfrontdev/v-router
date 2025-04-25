<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <!-- Catalog Column -->
        <div class="footer__column">
          <h3 class="footer__title">КАТАЛОГ ТОВАРОВ</h3>
          <ul class="footer__list">
            <li>
              <router-link to="/cardio" class="footer__link"
                >КАРДИО ТРЕНАЖЕРЫ</router-link
              >
            </li>
            <li>
              <router-link to="/strength" class="footer__link"
                >COMPOSITE STRENGTH</router-link
              >
            </li>
            <li>
              <router-link to="/stretch" class="footer__link"
                >TRUE STRETCH</router-link
              >
            </li>
            <li>
              <router-link to="/cycling" class="footer__link"
                >САЙКЛИНГ</router-link
              >
            </li>
            <li>
              <router-link to="/group" class="footer__link"
                >ГРУППОВЫЕ ТРЕНИРОВКИ</router-link
              >
            </li>
            <li>
              <router-link to="/power" class="footer__link"
                >СИЛОВЫЕ ТРЕНАЖЕРЫ</router-link
              >
            </li>
            <li>
              <router-link to="/consoles" class="footer__link"
                >КОНСОЛИ</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Information Column -->
        <div class="footer__column">
          <h3 class="footer__title">ИНФОРМАЦИЯ</h3>
          <ul class="footer__list">
            <li>
              <router-link to="/about" class="footer__link"
                >О БРЕНДЕ</router-link
              >
            </li>
            <li>
              <router-link to="/advantages" class="footer__link"
                >ПРЕИМУЩЕСТВА</router-link
              >
            </li>
            <li>
              <router-link to="/club" class="footer__link"
                >ОТКРЫТЬ КЛУБ</router-link
              >
            </li>
            <li>
              <router-link to="/products" class="footer__link"
                >ПРОДУКЦИИ</router-link
              >
            </li>
            <li>
              <router-link to="/contacts" class="footer__link"
                >КОНТАКТЫ</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contacts Column -->
        <div class="footer__column">
          <h3 class="footer__title">КОНТАКТЫ</h3>
          <ul class="footer__list">
            <li>
              <router-link to="/privacy" class="footer__link"
                >ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</router-link
              >
            </li>
            <li>
              <router-link to="/contacts" class="footer__link"
                >КОНТАКТЫ</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Subscribe Column -->
        <div class="footer__column">
          <h3 class="footer__title">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h3>
          <!-- Add subscription form or content here if needed -->
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">© TRUE FITNESS</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #00a0e3;
  color: white;
  padding: 60px 0 30px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer__content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.footer__title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__list li {
  margin-bottom: 12px;
}

.footer__link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.3s;
}

.footer__link:hover {
  opacity: 0.8;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
}

.footer__copyright {
  font-size: 14px;
  color: white;
  margin: 0;
}

@media (max-width: 768px) {
  .footer__content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .footer__content {
    grid-template-columns: 1fr;
  }
}
</style>
