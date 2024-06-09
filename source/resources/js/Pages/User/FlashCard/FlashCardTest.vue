<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';
import { ref, watch, h, reactive, toRaw } from 'vue';
import { Button, Space, Card, Carousel, Divider, CardGrid } from 'ant-design-vue';
import {CreditCardFilled, SnippetsFilled, PieChartFilled,
        BulbOutlined, SoundOutlined, CaretLeftFilled,
        CaretRightFilled, CloseCircleFilled, CheckCircleFilled,
        StarFilled, SoundFilled, SearchOutlined,FilterOutlined,
        FullscreenOutlined, DiffFilled, ClockCircleFilled} from '@ant-design/icons-vue';


const { props } = usePage();

const historyTests = ref(props.tests);
const cardAll = ref(props.cardAll);
const cardAllValue = cardAll.value;

console.log(historyTests)
console.log(cardAll)
console.log(cardAllValue);

const open = ref(false);
const showModal = () => {
  open.value = true;
};
const handleOk = e => {
  console.log(e);
  open.value = false;
};

const open2 = ref(false);
const showModal2 = () => {
  open2.value = true;
};
const handleOk2 = e => {
  console.log(e);
  open2.value = false;
};

const value1 = ref(10);
const focus = () => {
  console.log('focus');
};
const handleChange = value => {
  console.log(`selected ${value}`);
};

const value2 = ref(10);
const focus2 = () => {
  console.log('focus');
};
const handleChange2 = value2 => {
  console.log(`selected ${value2}`);
};

</script>

<template>
    <Head title="Học FlashCard"/>
    <AuthenticatedLayout>
        <div>
            <Space wrap style="display: flex;">
              <Button :href="route('flashcard.index')">
                <CreditCardFilled />
                <span>
                    Thẻ ghi nhớ
                </span>
              </Button>
              <Button :href="route('flashcard.learn')">
                <SnippetsFilled />
                <span>
                    Học
                </span>
              </Button>
              <Button type="primary">
                <PieChartFilled />
                <span>
                    Kiểm tra
                </span>
              </Button>
            </Space>
        </div>
        <br /><br /><br />
        <div>
            <Button @click="showModal" style="background-color:blueviolet;">
                <ClockCircleFilled style="color:blue;" />
                <span style="color: aliceblue;">
                    Lịch sử điểm
                </span>
                <a-modal v-model:open="open" title="Lịch sử điểm" @ok="handleOk">
                    <div v-if="historyTests.length === 0">
                        <p style="color: red;">Bạn chưa làm bài kiểm tra nào!!!</p>
                    </div>
                    <div v-else>
                        <p>oke</p>
                    </div>
                </a-modal>
            </Button>
            <Button @click="showModal2" style="background-color: chocolate;">
                <DiffFilled style="color:blue;"/>
                <span style="color: aliceblue;">
                    Tạo bài kiểm tra
                </span>
                <a-modal  v-model:open="open2" title="Cấu trúc bài kiểm tra" @ok="handleOk2">
                    <div>
                        <p>Số câu</p>
                        <a-select
                          ref="select"
                          v-model:value="value1"
                          style="width: 120px"
                          @focus="focus"
                          @change="handleChange" >
                          <a-select-option value=10>10</a-select-option>
                          <a-select-option value=15>15</a-select-option>
                          <a-select-option value=20>20</a-select-option>
                        </a-select>
                    </div>
                    <div>
                        <p style="padding-top: 10px;">Thời gian</p>
                        <a-select
                          ref="select2"
                          v-model:value="value2"
                          style="width: 120px"
                          @focus="focus2"
                          @change="handleChange2">
                          <a-select-option value=10>10</a-select-option>
                          <a-select-option value=15>15</a-select-option>
                          <a-select-option value=20>20</a-select-option>
                          <a-select-option value=25>25</a-select-option>
                          <a-select-option value=30>30</a-select-option>
                          <a-select-option value=35>35</a-select-option>
                          <a-select-option value=40>40</a-select-option>
                          <a-select-option value=45>45</a-select-option>
                          <a-select-option value=50>50</a-select-option>
                          <a-select-option value=55>55</a-select-option>
                          <a-select-option value=60>60</a-select-option>
                        </a-select>
                        <span style="padding-left: 10px;">Phút</span>
                    </div>
                </a-modal>
            </Button>
        </div>
        <br /><br /><br /><br />
        <div class="center-container2" style="width: 100%;">
            <div style="width: 100%;">
                <Card title="Các từ vựng đã học" style="font-size: 18px;">
                    <div class="right-align">
                      <Space>
                        <Button style="background-color: #d9d9d9; display: flex; align-items: center;" :icon="h(SearchOutlined)">Tìm kiếm từ</Button>
                        <Button style="background-color: #d9d9d9; align-items: center;" :icon="h(FilterOutlined)"></Button>
                      </Space>
                    </div>
                    <br/>
                    <div style="padding-bottom: 16px;">
                        <Card class="custom-shadow2" v-for="card in cardAll" :key="card.id">
                            <CardGrid style="width: 10%; text-align: left" :hoverable="false">
                                {{ card.name }}
                            </CardGrid>
                            <CardGrid style="width: 80%; text-align: left" :hoverable="false">
                                {{ card.sentence }}
                            </CardGrid>
                            <CardGrid style="width: 10%; text-align: center" :hoverable="false">
                                <Space>
                                    <a>
                                        <StarFilled :style="{color: card.is_favorite === 1 ? 'yellow' : 'black'}" style="font-size: 24px;"></StarFilled>
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
