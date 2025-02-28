import type { App } from 'vue'

// 导入组件库 Ant Design Vue
import Antd  from 'ant-design-vue'
// 导入组件库 Ant Design Vue / 样式
import 'ant-design-vue/dist/reset.css'
// 导入组件库 Ant Design Vue / 图标
import * as AntDesignIconsVue from '@ant-design/icons-vue'

export const setupVisibleAbyss = (app: App<Element>) => {
  // 注册组件库 Ant Design Vue
  app.use(Antd)
  // 注册组件库 Ant Design Vue / 图标
  const icons: any = AntDesignIconsVue
  for (const i in icons) {
    app.component(i, icons[i])
  }
}
