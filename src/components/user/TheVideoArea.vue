<template>
    <div class="video-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="video-wrap">
                        <div class="play-btn ">
                            <a class="popup-video"
                                href="https://www.youtube.com/watch?v=KMc6DyEJp04"
                              
                                @click="(e)=>showModal(e)"
                                >
                                <i class="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Arrow -->
            <div class="thumb-content-box">
                <div class="thumb-content">
                    <h3>Next Video</h3>
                    <a href="#"> <i class="flaticon-arrow"></i></a>
                </div>
            </div>
        </div>
    </div>

    <div>
        <a-modal v-model:open="open" :footer="null" :closable="false" width="800px" height="800px"  wrapClassName="custom-modal"
            :bodyStyle="{ height:'472px' }" 
            :destroyOnClose="true">
            <iframe width="100%" height="100%" :src="videoSrc"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>

        </a-modal>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const open = ref<boolean>(false);
const videoSrc = ref<string>("https://www.youtube.com/embed/KMc6DyEJp04?si=e9rU54uk1WUkeMIT");

const showModal = (event:any) => {
    event.preventDefault();
    
    open.value = true;
    
};

const handleOk = (e: MouseEvent) => {
    console.log(e);
};



</script>

<style >
    .custom-modal {
        overflow: hidden !important; 
    }
    .custom-modal .ant-modal-content{
        border-radius: 0 !important; 
       padding: 0 !important;
    }
</style>