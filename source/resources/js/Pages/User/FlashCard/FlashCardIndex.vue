<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { ref, watch, h, reactive, toRaw, computed } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { Button, Space, Card, Carousel, Divider, CardGrid, message } from 'ant-design-vue';
import {CreditCardFilled, SnippetsFilled, PieChartFilled,
        BulbOutlined, SoundOutlined, CaretLeftFilled,
        CaretRightFilled, CloseCircleFilled, CheckCircleFilled,
        StarFilled, SoundFilled, SearchOutlined, FilterOutlined,
        SwapOutlined} from '@ant-design/icons-vue';

const { props } = usePage();
const tags = ref(props.tags);
console.log(tags.value);
const randomCards = ref(props.randomCards);
console.log((randomCards.value)[9]);
const isToggle = ref(false)
const cardsWithTitleX = ref([])
cardsWithTitleX.value = randomCards.value.filter(card => card.title === ((randomCards.value)[0]).title);
console.log(((cardsWithTitleX.value)[0]).title);

const initialTitle = computed(() => {
  return ((randomCards.value)[0]).title;
});

const selectTitle = title => {
    cardsWithTitleX.value = randomCards.value.filter(card => card.title === title);
    console.log(`selected ${title}`);
}

function flipCard() {
  isToggle.value = !isToggle.value
}

function swapCard(){
    for (let i = (cardsWithTitleX.value).length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [(cardsWithTitleX.value)[i], (cardsWithTitleX.value)[j]] = [(cardsWithTitleX.value)[j], (cardsWithTitleX.value)[i]];
  }
}

function speak (text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};

function star(cardId) {
    Inertia.post(route('card.update'), {cardId: cardId});
}

function updateLearning(cardId) {
    Inertia.post(route('card.updateLearning'), {cardId: cardId});
    message.success('Cập nhật trạng thái từ vựng sang đang học thành công');
}

function updateLearned(cardId) {
    Inertia.post(route('card.updateLearned'), {cardId: cardId});
    message.success('Cập nhật trạng thái từ vựng sang đã học thành công');
}

</script>

<template>
    <Head title="FlashCard" />

    <AuthenticatedLayout >

        <div>
            <Space wrap style="display: flex; width: 100%; justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <Button type="primary">
                  <CreditCardFilled />
                  <span>
                      Thẻ ghi nhớ
                  </span>
                </Button>
                <!-- <Button :href="route('flashcard.learn')">
                  <SnippetsFilled />
                  <span>
                      Học
                  </span>
                </Button> -->
                <Button :href="route('flashcard.test')">
                  <PieChartFilled />
                  <span>
                      Kiểm tra
                  </span>
                </Button>
              </div>
              <div style="display: flex; align-items: center;">
                <a-select
                  :placeholder="initialTitle"
                  ref="select"
                  v-model:value="tags.value"
                  style="width: 200px;"
                  @focus=""
                  @change="selectTitle">
                  <a-select-option v-for="tag in tags" v-model:value="tag.title" :key="tag.id">{{ tag.title }}</a-select-option>
                </a-select>
              </div>
            </Space>
        </div>
        <br /><br /><br /><br /><br /><br /><br />

            <div class="card-container">
                <Carousel arrows style="height: 100%;">
                  <template #prevArrow>
                    <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                      <CaretLeftFilled />
                    </div>
                  </template>
                  <template #nextArrow>
                    <div class="custom-slick-arrow" style="right: 10px">
                      <CaretRightFilled />
                    </div>
                  </template>

                  <div class="card-content" v-for="randomCard in cardsWithTitleX" :key="randomCard.id" >
                        <Card v-show="!isToggle" class="custom-shadow" @click="flipCard">
                            <div class="top-left">
                                <BulbOutlined style="font-size: 24px;"/>
                                <span>
                                    Hiển thị gợi ý
                                </span>
                            </div>
                            <div class="top-right">
                                <SoundOutlined style="font-size: 24px;"/>
                            </div>
                            <div class="center-container">
                                <p class="vocabulary-text">{{ randomCard.name }}</p>
                            </div>
                        </Card>
                        <Card v-show="isToggle" class="custom-shadow" @click="flipCard">
                            <div class="top-left">
                                <BulbOutlined style="font-size: 24px; color: yellow;"/>
                                <span>
                                    Hiển thị gợi ý
                                </span>
                            </div>
                            <div class="top-right">
                                <SoundOutlined style="font-size: 24px;"/>
                            </div>
                            <div class="center-container">
                                <div class="meaning-section">
                                    <p class="meaning-text">{{ randomCard.meaning }}</p>
                                </div>
                                <div class="example-section">
                                    <p class="example-text">VD: {{ randomCard.sentence }}</p>
                                </div>
                            </div>
                        </Card>
                        <div class="check-icon-center">
            <div class="check-icon">
                <div style="width: 60%; margin-bottom: 100px;">
                    <Space style="display: flex; justify-content: space-between; width: 100%;" direction="horizontal">
                        <a>
                            <a-tooltip placement="topLeft" title="Chưa học">
                                <CloseCircleFilled @click="updateLearning(randomCard.id)" style="font-size: 36px; color: red;" />
                            </a-tooltip>
                        </a>
                        <a style="padding-left: 20px; padding-right: 20px;">
                            <a-tooltip placement="topLeft" title="Trộn FlashCard">
                                <SwapOutlined @click="swapCard" style="font-size: 36px; color: black;"/>
                            </a-tooltip>
                        </a>
                        <a>
                            <a-tooltip placement="topLeft" title="Đã học">
                                <CheckCircleFilled @click="updateLearned(randomCard.id)" style="font-size: 36px; color: green;" />
                            </a-tooltip>
                        </a>
                    </Space>
                </div>
            </div>
        </div>
                    </div>
                </Carousel>
            </div>
        <br /><br />

        <Divider style="height: 1px; background-color: #665A5A" />
        <div class="center-container2" style="width: 100%;">
            <div style="width: 100%;">
                <Card title="Các từ vựng" style="font-size: 18px;">
                    <div class="right-align">
                      <Space>
                        <Button style="background-color: #d9d9d9; display: flex; align-items: center;" :icon="h(SearchOutlined)">Tìm kiếm từ</Button>
                        <Button style="background-color: #d9d9d9; align-items: center;" :icon="h(FilterOutlined)"></Button>
                      </Space>
                    </div>
                    <br/>
                    <div style="padding-bottom: 16px;">
                        <Card class="custom-shadow2" v-for="randomCard in cardsWithTitleX" :key="randomCard.id">
                            <CardGrid style="width: 10%; text-align: left" :hoverable="false">
                                {{ randomCard.name }}
                            </CardGrid>
                            <CardGrid style="width: 80%; text-align: left" :hoverable="false">
                                {{ randomCard.sentence }}
                            </CardGrid>
                            <CardGrid style="width: 10%; text-align: center" :hoverable="false">
                                <Space>
                                    <a>
                                        <StarFilled @click="star(randomCard.id)" :style="{color: randomCard.is_favorite === 1 ? 'yellow' : 'gray'}" style="font-size: 24px;"></StarFilled>
                                    </a>
                                    <a>
                                        <SoundFilled @click="speak(randomCard.name)" style="font-size: 24px; color: gray;"></SoundFilled>
                                    </a>
                                </Space>
                            </CardGrid>
                        </Card>
                        <br />
                    </div>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
  </template>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;  /* Sắp xếp các phần tử theo chiều dọc */
  justify-content: center; /* Căn giữa theo chiều dọc */
  align-items: center;    /* Căn giữa theo chiều ngang */
  text-align: center;      /* Căn giữa text */
  height: 100%;           /* Chiếm toàn bộ chiều cao của thẻ cha */
}

.center-container2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-align {
    display: flex;
    align-items: right;
}

.check-icon-center {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.custom-shadow {
  box-shadow: 0 5px 10px 5px rgba(255, 255, 255, 0.1);
  width: 100%;
  min-height: 400px;  /* Đặt chiều cao tối thiểu */
  padding: 20px;
  display: flex;        /* Kích hoạt Flexbox */
  flex-direction: column; /* Sắp xếp theo chiều dọc */
  justify-content: center; /* Căn giữa theo chiều dọc */
  align-items: center;    /* Căn giữa theo chiều ngang */
  position: relative;     /* Để sử dụng absolute positioning cho các phần tử con */
  border-radius: 30px;
  background-color: #dadada;
}

.custom-shadow2 {
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
}

.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
}

.top-right {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
}

.flashcard {
  border: 1px solid black;
  cursor: pointer;

}

.card-container {
  width: 60%;
  margin: 0 auto; /* Giữ khung flashcard ở giữa */
}

.card-content {
  display: flex;
  flex-direction: column; /* Stack content vertically */
  align-items: center;   /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  height: 100%;
}

.vocabulary-text {
  font-size: 40px;
  margin-bottom: 10px; /* Add space between vocabulary and example */
}

.meaning-section {
  margin-bottom: 20px; /* Add space between example and meaning */
}

.example-section {
  margin-top: 20px; /* Add space between meaning and example */
}

.meaning-text, .example-text {
  margin: 0; /* Remove default margins */
  font-size:30px;
}

:deep(.slick-arrow.custom-slick-arrow) {
  font-size: 25px;
  color: black;
  background-color: #fff;
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}


</style>
