<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Space, Button, Card, Divider, CardGrid, Carousel} from 'ant-design-vue';
import {CreditCardFilled, SnippetsFilled, PieChartFilled,
        BulbOutlined, SoundOutlined, CaretLeftFilled,
        CaretRightFilled, CloseCircleFilled, CheckCircleFilled,
        StarFilled, SoundFilled} from '@ant-design/icons-vue';

const { props } = usePage();
const randomCards = ref(props.randomCards);
console.log(randomCards);
const isToggle = ref(false)

function flipCard() {
  isToggle.value = !isToggle.value
}

</script>

<template>
    <Head title="FlashCard" />

    <AuthenticatedLayout >

        <div>
            <Space wrap style="display: flex;">
              <Button type="primary">
                <CreditCardFilled />
                <span>
                    Thẻ ghi nhớ
                </span>
              </Button>
              <Button>
                <SnippetsFilled />
                <span>
                    Học
                </span>
              </Button>
              <Button :href="route('flashcard.test')">
                <PieChartFilled />
                <span>
                    Kiểm tra
                </span>
              </Button>
            </Space>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
        <!-- <Carousel  arrows> -->
            <!-- <div v-for="randomCard in randomCards" :key="randomCard.id" class="center-container" @click="flipCard">
                <Card v-show="!isToggle" style="width: 60%; height: 50vh; padding-top: 15px; padding-left: 20px; padding-right: 20px;" class="custom-shadow">
                    <Space style="display: flex; justify-content: space-between; width: 100%;">
                        <div>
                            <BulbOutlined style="font-size: 24px;"/>
                            <span>
                                Hiển thị gợi ý
                            </span>
                        </div>
                        <div>
                            <SoundOutlined style="font-size: 24px;"/>
                        </div>
                    </Space>
                    <div class="center-container">
                        <p>{{ randomCard.name }}</p>
                    </div>
                </Card>
                <Card v-show="isToggle" style="width: 60%; height: 50vh; padding-top: 15px; padding-left: 20px; padding-right: 20px;" class="custom-shadow">
                    <Space style="display: flex; justify-content: space-between; width: 100%;">
                        <div>
                            <BulbOutlined style="font-size: 24px;"/>
                            <span>
                                Hiển thị gợi ý
                            </span>
                        </div>
                        <div>
                            <SoundOutlined style="font-size: 24px;"/>
                        </div>
                    </Space>
                    <div class="center-container">
                        <div>
                            <p>{{ randomCard.meaning }}</p>
                        </div>
                        <br/>
                        <div>
                            <p>VD: {{ randomCard.sentence }}</p>
                        </div>
                    </div>
                </Card>
            </div>
            <br /><br />
            <div class="center-container">
                <div style="width: 60%;">
                    <Space style="display: flex; justify-content: space-between; width: 100%;" direction="honrizontal">
                        <template #prevArrow>
                            <div class="custom-slick-arrow">
                                <CaretLeftFilled style="font-size: 36px;"/>
                            </div>
                        </template>
                        <a>
                            <CloseCircleFilled style="font-size: 36px; color: red;" />
                        </a>
                        <a>
                            <CheckCircleFilled style="font-size: 36px; color: green;" />
                        </a>
                        <template #nextArrow>
                            <div class="custom-slick-arrow">
                                <CaretRightFilled style="font-size: 36px;" />
                            </div>
                        </template>
                    </Space>
                </div>
            </div> -->
        <!-- </Carousel> -->

            <div style="height: 50vh; width: 60%;">
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
                  <div style="width: 100%; height: 100%;" v-for="randomCard in randomCards" :key="randomCard.id" @click="flipCard">
                        <Card v-show="!isToggle" style="height: 100%; padding-left: 20px; padding-right: 20px;" class="custom-shadow">
                            <Space style="display: flex; justify-content: space-between; width: 100%;">
                                <div>
                                    <BulbOutlined style="font-size: 24px;"/>
                                    <span>
                                        Hiển thị gợi ý
                                    </span>
                                </div>
                                <div>
                                    <SoundOutlined style="font-size: 24px;"/>
                                </div>
                            </Space>
                            <div class="center-container" style="font-size: 24px;">
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <p>{{ randomCard.name }}</p>
                            </div>
                        </Card>
                        <Card v-show="isToggle" style="height: 100%; padding-left: 20px; padding-right: 20px;" class="custom-shadow">
                            <Space style="display: flex; justify-content: space-between; width: 100%;">
                                <div>
                                    <BulbOutlined style="font-size: 24px; color: yellow;"/>
                                    <span>
                                        Hiển thị gợi ý
                                    </span>
                                </div>
                                <div>
                                    <SoundOutlined style="font-size: 24px;"/>
                                </div>
                            </Space>
                            <div class="center-container">
                                <div style="font-size: 24px;">
                                    <p>{{ randomCard.meaning }}</p>
                                </div>
                                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <div>
                                    <p>VD: {{ randomCard.sentence }}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Carousel>
            </div>
        <br /><br />
        <div class="center-container">
            <div class="center-container">
                <div style="width: 60%;">
                    <Space style="display: flex; justify-content: space-between; width: 100%;" direction="honrizontal">
                        <a>
                            <CloseCircleFilled style="font-size: 36px; color: red;" />
                        </a>
                        <a>
                            <CheckCircleFilled style="font-size: 36px; color: green;" />
                        </a>
                    </Space>
                </div>
            </div>
        </div>
        <Divider style="height: 1px; background-color: #665A5A" />
        <div class="center-container" style="width: 100%;">
            <div style="width: 60%;">
                <Card title="Các từ vựng" style="font-size: 18px;">
                    <div class="right-align">
                      <Space>
                        <Button style="background-color: #d9d9d9; display: flex; align-items: center;" :icon="h(SearchOutlined)">Tìm kiếm từ</Button>
                        <Button style="background-color: #d9d9d9; align-items: center;" :icon="h(FilterOutlined)"></Button>
                      </Space>
                    </div>
                    <br/>
                    <div>
                        <Card class="custom-shadow" v-for="randomCard in randomCards" :key="randomCard.id">
                            <CardGrid style="width: 10%; text-align: left" :hoverable="false">
                                {{ randomCard.name }}
                            </CardGrid>
                            <CardGrid style="width: 80%; text-align: left" :hoverable="false">
                                {{ randomCard.sentence }}
                            </CardGrid>
                            <CardGrid style="width: 10%; text-align: center" :hoverable="false">
                                <Space>
                                    <a>
                                        <StarFilled :style="{color: randomCard.is_favorite === 1 ? 'yellow' : 'black'}" style="font-size: 24px;"></StarFilled>
                                    </a>
                                    <a>
                                        <SoundFilled style="font-size: 24px;"></SoundFilled>
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
  justify-content: center;
  align-items: center;
}
.custom-shadow {
  box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.1);
}

.flashcard {
  border: 1px black;
  border-style: solid;
  cursor: pointer;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  text-align: center;
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
