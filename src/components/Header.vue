<template>
  <header class="header">
    <div class="container">
      <nav class="header__nav">
        <router-link to="/" class="header__logo">
          <img src="@/assets/logo.png" alt="TRUE" class="header__logo-img" />
        </router-link>

        <div class="header__menu">
          <router-link to="/about" class="header__menu-item"
            >О БРЕНДЕ</router-link
          >
          <router-link to="/products" class="header__menu-item"
            >ПРОДУКЦИИ</router-link
          >
          <router-link to="/" class="header__menu-item"
            >ПРЕИМУЩЕСТВА</router-link
          >
          <router-link to="/" class="header__menu-item"
            >ОТКРЫТЬ КЛУБ</router-link
          >
          <router-link to="/" class="header__menu-item">КОНТАКТЫ</router-link>
        </div>

        <div class="header__actions">
          <div class="header__lang">
            <!-- <img
              src="@/assets/ru-flag.svg"
              alt="RU"
              class="header__lang-flag"
            /> -->
          </div>
          <a href="tel:+998906066666" class="header__phone"
            >+998 (90)-606-66-66</a
          >
          <button class="header__cta">ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  padding: 20px 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  display: block;
}

.header__logo-img {
  height: 40px;
  width: auto;
}

.header__menu {
  display: flex;
  gap: 30px;
}

.header__menu-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  transition: color 0.3s;
}

.header__menu-item:hover {
  color: #00a0e3;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__lang {
  cursor: pointer;
}

.header__lang-flag {
  width: 24px;
  height: 16px;
}

.header__phone {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 500;
}

.header__cta {
  background: #00a0e3;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.header__cta:hover {
  background: #0089c3;
}
</style>
