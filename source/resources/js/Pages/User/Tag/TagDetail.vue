<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { ref, watch, h } from 'vue';
import { Tabs, TabPane, Card, CardGrid, Button, Space } from 'ant-design-vue';
import { IdcardFilled, PlusSquareOutlined, SearchOutlined, FilterOutlined, StarFilled, SoundFilled, RiseOutlined, CheckOutlined } from '@ant-design/icons-vue';

const { props } = usePage();
const tags = ref(props.tags);
const cards = ref(props.cards);
const examples = ref(props.examples);
const notLearn = ref(props.notLearn);
const learning = ref(props.learning);
const learned = ref(props.learned);

const panes = ref(tags.value.filter(tag => tag.status === 1).map((tag, index) => ({
  title: `${tag.title}`,
  content: `${tag.description}`,
  key: `${index + 1}`,
  closable: true,
})));

watch(tags, (newTags) => {
  panes.value = newTags.filter(tag => tag.status === 1).map((tag, index) => ({
    title: `${tag.title}`,
    content: `${tag.description}`,
    key: `${index + 1}`,
    closable: true,
  }));
}, { immediate: true });

const activeKey = ref(panes.value.length ? panes.value[0].key : '1');
const newTabIndex = ref(panes.value.length);

const add = () => {
  const newKey = `newTab${++newTabIndex.value}`;
  activeKey.value = newKey;
  panes.value.push({
    title: 'New Tab',
    content: 'Content of new Tab',
    key: newKey,
    closable: true,
  });
};

const remove = (targetKey) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
};

const onEdit = (targetKey, action) => {
  if (action === 'add') {
    add();
  } else {
    remove(targetKey);
  }
};
</script>

<template>
    <Head title="Ghi chú" />

    <AuthenticatedLayout >
        <Tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
          <TabPane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
            <Card title="Mô tả">
                <CardGrid class="card-grid-left" style="width: 75%;" :hoverable="false">
                    <p>{{ pane.content }}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <Space align="start" style="display: flex; align-items: center;">
                            <RiseOutlined style="color: red; font-size: 24px;"></RiseOutlined>
                            <span>
                                <span>Đang học </span>{{ learning }}<span> từ</span>
                            </span>
                        </Space>
                        <Space align="end" style="display: flex; align-items: center;">
                            <CheckOutlined style="color: green; font-size: 24px;"></CheckOutlined>
                            <span>
                                <span>Đã học </span>{{ learned }}<span> từ</span>
                            </span>
                        </Space>
                    </div>
                </CardGrid>
                <CardGrid style="width: 25%; text-align: center" :hoverable="false">
                    <Space>
                        <Button size="large" style="font-size: 18px; display: flex; align-items: center;" type="primary" :icon="h(IdcardFilled)">FlashCard</Button>
                        <Button size="large" style="font-size: 18px; display: flex; align-items: center;" type="primary" :icon="h(PlusSquareOutlined)">Thêm từ</Button>
                    </Space>

                </CardGrid>
            </Card>
            <Card title="Các từ vựng" style="font-size: 18px;">
                <div class="right-align">
                  <Space>
                    <Button style="background-color: #d9d9d9; display: flex; align-items: center;" :icon="h(SearchOutlined)">Tìm kiếm từ</Button>
                    <Button style="background-color: #d9d9d9; align-items: center;" :icon="h(FilterOutlined)"></Button>
                  </Space>
                </div>
                <br/>
                <div>
                    <Card class="custom-shadow" v-for="example in examples" :key="example.id">
                        <CardGrid style="width: 10%; text-align: left" :hoverable="false">
                            {{ example[0].name }}
                        </CardGrid>
                        <CardGrid style="width: 80%; text-align: left" :hoverable="false">
                            {{ example[0].sentence }}
                        </CardGrid>
                        <CardGrid style="width: 10%; text-align: center" :hoverable="false">
                            <Space>
                                <a>
                                    <StarFilled :style="{color: example[0].is_favorite === 1 ? 'yellow' : 'black'}" style="font-size: 24px;"></StarFilled>
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
          </TabPane>
        </Tabs>
    </AuthenticatedLayout>
</template>

<style scoped>
.right-align {
  display: flex;
  justify-content: flex-end;
}
.custom-shadow {
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
}
.text-align-right {
    text-align: right;
}
.card-grid-left {
    text-align: left;
    font-size: 24px;
}
</style>
