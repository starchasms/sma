<template>
    
        <van-nav-bar
        title="标题"
        
        left-arrow
        @click-left="onClickLeft"
        >
            <template #left>
                <van-icon name="wap-nav" size="18" />
            </template>
        </van-nav-bar>
    <!-- <van-cell title="展示弹出层" is-link @click="showPopup" /> -->
    <van-popup v-model:show="show" 
    position="left"
    :style="{ width: max, height: '100%' }">
        <van-sidebar v-model="active">
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
            <van-sidebar-item title="标签名称" />
        </van-sidebar>    
    </van-popup>
    
    
</template>
<script setup>
    import { ref } from 'vue';
    const show = ref(false);
    const showPopup = () => {
    show.value = true;
    };
    const active = ref(0);
    const onClickLeft = () => {
    show.value = true;
    };
</script>




