<script>
import { defineComponent, ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link as InertiaLink } from '@inertiajs/vue3';
import { PieChartOutlined, DesktopOutlined, UserOutlined, SearchOutlined, FileOutlined, LaptopOutlined, NotificationOutlined, DownOutlined, HomeFilled, FileTextFilled, IdcardFilled } from '@ant-design/icons-vue';
import { Layout, Menu, Breadcrumb, Dropdown } from 'ant-design-vue';

export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    SearchOutlined,
    FileOutlined,
    LaptopOutlined,
    NotificationOutlined,
    DownOutlined,
    HomeFilled,
    FileTextFilled,
    IdcardFilled,
    'a-layout': Layout,
    'a-layout-sider': Layout.Sider,
    'a-layout-header': Layout.Header,
    'a-layout-content': Layout.Content,
    'a-layout-footer': Layout.Footer,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-sub-menu': Menu.SubMenu,
    'a-breadcrumb': Breadcrumb,
    'a-breadcrumb-item': Breadcrumb.Item,
    'a-dropdown': Dropdown,
    'a-menu-divider': Menu.Divider,
    'inertia-link': InertiaLink,
  },
  setup() {
    const collapsed = ref(false);
    const selectedKeys = ref(['1']);
    const selectedKeys1 = ref(['0']);
    const selectedKeys2 = ref(['2']);
    const openKeys = ref(['sub1']);

    return {
      collapsed,
      selectedKeys,
      selectedKeys1,
      selectedKeys2,
      openKeys
    };
  },
});
</script>

<template>
    <a-layout :style="{minHeight: '100vh'}">
      <a-layout-header class="header" :style="{backgroundColor: '#256caf' }">
        <a-menu
        v-model:selectedKeys="selectedKeys1"
          theme="dark"
          :theme="{
            token: {
                colorPrimary: '#256caf'
            }
          }"
          mode="horizontal"
          :style="{ lineHeight: '64px', backgroundColor: '#256caf'}"
        >
          <a-menu-item key="1">
            <a :href="route('login')">Đăng nhập</a>
          </a-menu-item>
          <a-menu-item key="2">
            <a :href="route('register')">Đăng ký</a>
          </a-menu-item>
        </a-menu>

      </a-layout-header>
      <a-layout>
        <a-layout-sider v-model:collapsed="collapsed" :style="{backgroundColor: '#ffff' }" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="light" mode="inline">
        <a-menu-item key="1">
          <search-outlined />
          <span>
            <a>Search</a>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item> -->
          </a-breadcrumb>
          <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
          >
            Content
          </a-layout-content>
          <a-layout-footer style="text-align: center">
            LearnEigo ©2024 Created by Team Uncle4
          </a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </template>

  <style scoped>
  #components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }

  .ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }

  .site-layout-background {
    background: #fff;
  }

  .header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

  </style>
