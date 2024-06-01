<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import { ref, watch, h } from 'vue';
import { Tabs, TabPane, Card, CardGrid, Button, Space } from 'ant-design-vue';
import { IdcardFilled, PlusSquareOutlined, SearchOutlined, FilterOutlined } from '@ant-design/icons-vue';

const { props } = usePage();
const tags = ref(props.tags);

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
                <CardGrid style="width: 75%; text-align: left" :hoverable="false">
                    {{ pane.content }}
                </CardGrid>
                <CardGrid style="width: 25%; text-align: center" :hoverable="false">
                    <Space>
                        <Button type="primary" :icon="h(IdcardFilled)">FlashCard</Button>
                        <Button type="primary" :icon="h(PlusSquareOutlined)">Thêm từ</Button>
                    </Space>

                </CardGrid>
            </Card>
            <Card title="Các từ vựng" style="font-size: 18px;">
                <div class="right-align">
                  <Space>
                    <Button style="background-color: #d9d9d9;" :icon="h(SearchOutlined)">Tìm kiếm từ</Button>
                    <Button style="background-color: #d9d9d9;" :icon="h(FilterOutlined)"></Button>
                  </Space>
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
</style>
