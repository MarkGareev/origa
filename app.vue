<template>
  <header class="header">
    <Logo class="header-logo" />
    <div class="header-right">
      <div class="header-right-info">
        <div class="header-right-info-title">Скидка</div>
        <div class="header-right-info-text">
          Скидка 25% на эту модель действует до 16 августа. Успейте оформить
          предзаказ.
        </div>
      </div>

      <AppBtn class="header-right-btn" text="Оформить предзаказ" link="#" />
    </div>
  </header>
  <main class="main">
    <section class="section hero">
      <img class="hero-img" src="@/assets/imgs/hero.png" alt="Origa bicycle" />
      <div class="hero-params">
        <div
          class="hero-params-item"
          v-for="(param, index) in params"
          :key="index"
        >
          <h6 v-if="param.title" class="hero-params-item-title">
            {{ param.title }}
          </h6>
          <img
            class="hero-params-item-img"
            v-else
            src="@/assets/imgs/color.svg"
            alt="Dark Gray"
          />
          <p class="hero-params-item-text">{{ param.text }}</p>
        </div>
      </div>
      <div class="hero-model">
        <div class="hero-model-title">Модель</div>
        <div class="hero-model-text">
          Origa — новая модель городского электрического велосипеда. Настоящая
          квинтэссенция передовых технологий и комфорта передвижения.
        </div>
      </div>
    </section>
    <Handlebar />
    <section class="section kicklock">
      <div class="kicklock-caption">Технологии</div>
      <div class="kicklock-content">
        <div class="kicklock-halo">
          <p class="kicklock-title">
            Диоидный интерфейс Origa загорается, когда ваш велосипед
            заблокирован или разблокирован.
          </p>
          <img
            class="kicklock-halo-video"
            src="@/assets/imgs/light.jpg"
            alt="Kicklock"
          />
          <!-- <video
            class="kicklock-halo-video"
            preload="auto"
            playsinline=""
            loop="loop"
            muted="muted"
            autoplay="autoplay"
          >
            <source src="@/assets/videos/kicklock.mp4" type="video/mp4" />
          </video> -->
        </div>
        <div class="kicklock-lock">
          <p class="kicklock-title">Забудьте о существовании замков.</p>
          <img
            class="kicklock-lock-img"
            src="@/assets/imgs/kicklock.jpg"
            alt="Kick Lock"
          />
          <p class="kicklock-lock-text">
            С помощью нашего замка Origa Kick Lock вы можете закрепить свой
            велосипед одним касанием.
          </p>
        </div>
      </div>
    </section>
    <section class="full">
      <video
        class="full-video"
        preload="auto"
        playsinline=""
        loop="loop"
        muted="muted"
        autoplay="autoplay"
      >
        <source src="@/assets/videos/video.mp4" type="video/mp4" />
      </video>
    </section>
    <section class="section app">
      <div class="app-caption">Приложение Origa</div>
      <div class="app-hero">
        <p class="app-hero-text">
          Закрепите свой телефон на руле и пользуйтесь приложением Origa во
          время движения.
        </p>
        <img class="app-hero-img" src="@/assets/imgs/app.jpg" alt="App" />
      </div>
      <div class="app-track">
        <div class="app-track-title">Отслеживайте каждую поездку</div>
        <div class="app-track-text">
          Следите за своей текущей скоростью, продолжительностью поездки и
          расстоянием, а также просматривайте историю поездок, чтобы узнать,
          сколько километров вы преодолели за этот месяц. Здесь вы можете
          зарядить свой телефон.
        </div>
      </div>
      <div class="app-info">
        Сеть Apple Find My network также предоставляет простой и безопасный
        способ найти свой велосипед на карте с помощью приложения Find My на
        вашем iPhone.
      </div>

      <AppBtn class="app-btn" text="Загрузить приложение" link="#" />
    </section>

    <Paralax />
    <Geometry />
    <div class="section questions">
      <div class="questions-caption">Хакартеристики</div>
      <div class="questions-list">
        <div
          class="questions-list-item"
          :class="{ 'questions-list-item-active': questions[index].isActive }"
          v-for="(question, index) in questions"
          :key="index"
          @click="openQuestion(index)"
        >
          <div class="questions-list-item-title">
            <PlusMinus
              class="questions-list-item-title-img"
              :type="!question.isActive"
            />

            {{ question.title }}
          </div>

          <div class="questions-list-item-content">
            <div
              class="questions-list-item-content-param"
              v-for="(param, i) in question.params"
              :key="i"
            >
              <p class="questions-list-item-content-param-value">
                {{ param.value }}
              </p>
              <p class="questions-list-item-content-param-size">
                {{ param.size }}
              </p>
            </div>
            <div class="questions-list-item-content-text">
              {{ question.text }}
            </div>
          </div>
        </div>
      </div>
      <Slider class="questions-slider" :list="slider" />
    </div>
  </main>
  <footer class="footer">
    <div class="footer-caption">FAQ</div>
    <div class="footer-content">
      <div class="footer-faq">
        <div class="footer-faq-subtitle">
          Хотите узнать больше о модели Origa?<br />
          <a class="footer-faq-subtitle-link" href="#">Проверьте раздел FAQ</a>
        </div>
        <h5 class="footer-faq-title">
          Новый байк, <br />
          новые вызовы
        </h5>
        <div class="footer-faq-field">
          <input
            class="footer-faq-field-input"
            placeholder="Напишите ваш вопрос"
          />
          <button class="footer-faq-field-btn">Отправить</button>
        </div>
      </div>
      <div class="footer-basement">
        <Logo class="footer-basement-logo" />
        <div class="footer-basement-right">
          <div class="footer-basement-right-info">
            <div class="footer-basement-right-info-title">Скидка</div>
            <div class="footer-basement-right-info-text">
              Скидка 25% на эту модель действует до 16 августа. Успейте оформить
              предзаказ.
            </div>
          </div>

          <AppBtn
            class="footer-basement-right-btn"
            text="Оформить предзаказ"
            link="#"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AppBtn from "@/components/AppBtn";
import Paralax from "@/components/Paralax";
import Logo from "@/components/Logo";
import Handlebar from "@/components/Handlebar";
import Geometry from "@/components/Geometry";
import PlusMinus from "@/components/PlusMinus";
import Slider from "@/components/Slider";

import Lenis from "@studio-freight/lenis";
onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  if (window) {
    requestAnimationFrame(raf);
  }
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
});
const params = [
  { title: "L", text: "Размер: Large" },
  {
    text: "Цвет: Черный",
  },
  {
    title: "8.9",
    text: "Заряд: 8900 mAh",
  },
  {
    title: "29",
    text: "Диаметр колёс: 29",
  },
];
const questions = ref([
  {
    title: "Выступ руля",
    params: [
      { size: "Small", value: "380 мм" },
      { size: "Medium", value: "400 мм" },
      { size: "Large", value: "420 мм" },
    ],
    text: "Необходимо контролировать угол наклона сиденья, так как это напрямую влияет на здоровье владельца.",
    isActive: false,
  },
  {
    title: "Угол наклона седла",
    params: [
      { size: "Small", value: "70.5°" },
      { size: "Medium", value: "71°" },
      { size: "Large", value: "71°" },
    ],
    text: "Необходимо контролировать угол наклона сиденья, так как это напрямую влияет на здоровье владельца.",
    isActive: false,
  },
  {
    title: "Угол наклона рамы",
    params: [
      { size: "Small", value: "73°" },
      { size: "Medium", value: "73°" },
      { size: "Large", value: "73°" },
    ],
    text: "Необходимо контролировать угол наклона сиденья, так как это напрямую влияет на здоровье владельца.",
    isActive: false,
  },
  {
    title: "Высота верхней рамы",
    params: [
      { size: "Small", value: "710 мм" },
      { size: "Medium", value: "710 мм" },
      { size: "Large", value: "710 мм" },
    ],
    text: "Необходимо контролировать угол наклона сиденья, так как это напрямую влияет на здоровье владельца.",
    isActive: true,
  },
]);
function openQuestion(index) {
  questions.value.forEach((element) => {
    element.isActive = false;
  });
  questions.value[index].isActive = true;
}
import slide1 from "@/assets/imgs/slider/1.svg";
import slide2 from "@/assets/imgs/slider/2.svg";
import slide3 from "@/assets/imgs/slider/3.svg";
import slide4 from "@/assets/imgs/slider/4.svg";

const slider = [slide1, slide2, slide3, slide4];
</script>
