import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "vant/lib/index.css"
import { Tabbar, TabbarItem,Popup,Cell,CellGroup,Sidebar, SidebarItem,NavBar,Icon } from 'vant';

createApp(App).use(store).use(router).use(Tabbar).use(TabbarItem).use(Popup).use(Cell).use(CellGroup)
.use(Sidebar).use(SidebarItem).use(NavBar).use(Icon).mount('#app')
