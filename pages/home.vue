<script setup>
import RolexLogo from '~/assets/images/rolex_logo.png'
import PatekPhLogo from '~/assets/images/patek_ph_logo.png'
import HuaweiLogo from '~/assets/images/huawei_logo.png'
import PHLogo from '~/assets/images/ph-logo.png'
import Item3 from '~/assets/images/item_3.png'

const image_placeholder = ref(Array(10).fill(Item3))
</script>

<template>
    <section class="grid place-items-center h-screen px-3 py-5 bg-[#0E1111] lg:py-10">
        <div class="container grid lg:grid-cols-2 items-center justify-items-center gap-5">
            <div class="order-2 lg:order-1 flex flex-col justify-center items-start text-[#F4F4F4]">
                <p class="text-4xl font-bold md:text-7xl">lorem ipsum dolor</p>
                <p class="mt-2 text-sm md:text-lg">Principal Designer of Agile Philosophy!</p>
                <button class="text-xl md:text-2xl bg-[#F4F4F4] text-[#0E1111] rounded-lg px-4 py-3 mt-5">Discover More</button>
            </div>
            <div class="order-1 lg:order-2">
                <img
                    class="w-60 object-cover lg:w-[400px]"
                    src="../assets/images/hero_image.png"
                    alt=""
                />
            </div>
        </div>
    </section>
    <section class="h-screen w-full flex justify-center items-center bg-[#F4F4F4]">
        <div class="flex flex-col items-center">
            <h2 class="text-center text-5xl font-extralight mb-4">Roll'ex Store</h2>
            <p class="self-end cursor-pointer mb-8 hover:underline">Show more items ></p>
            <Swiper
                class="feauted-swiper w-[335px] lg:w-[1005px]"
                :breakpoints="{
                    1024: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                }"
                :modules="[SwiperPagination]"
                :pagination="{ clickable: true }"
            >
                <SwiperSlide
                    class="flex justify-center !w-[auto] mx-auto mt-4 mb-12"
                    v-for="(item, index) in image_placeholder"
                    :key="index"
                >
                    <ProductCard
                        :image="item"
                        class="mx-4"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
    <section class="flex justify-center items-center w-full overflow-hidden bg-[#F4F4F4]">
        <div class="container p-16">
            <h2 class="text-center text-5xl font-extralight mb-12">Our partners</h2>
            <div class="flex flex-wrap justify-center md:justify-center items-center gap-12">
                <template
                    v-for="index in [RolexLogo, HuaweiLogo, PatekPhLogo, PHLogo]"
                    :key="index"
                >
                    <SponsorLogoContainer :src="index" />
                </template>
            </div>
            <!-- <div class="flex flex-col h-auto">
                <Swiper
                    class="sponsor-swiper w-[100vw]"
                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                    :loop="true"
                    :centeredSlides="false"
                    :slidesPerView="2"
                    :breakpoints="{
                        320: {
                            slidesPerView: 3,
                            centeredSlides: false,
                        },
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :speed="1500"
                >
                    <template
                        v-for="index in [RolexLogo, PatekPhLogo, HuaweiLogo, RolexLogo, PatekPhLogo, HuaweiLogo, RolexLogo, PatekPhLogo]"
                        :key="index"
                    >
                        <SwiperSlide>
                            <SponsorLogoContainer :src="index" />
                        </SwiperSlide>
                    </template>
                </Swiper>
            </div> -->
        </div>
    </section>
</template>

<style>
.swiper-pagination-horizontal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-pagination-bullet {
    background: #0e1111;
}

.swiper-pagination-bullet-active {
    background-color: #0e1111 !important;
    width: 9px;
    height: 9px;
}

.swiper.sponsor-swiper .swiper-wrapper .swiper-slide {
    width: auto !important;
    display: flex;
    justify-content: center;
    border: 1px solid red;
}

/* .swiper.sponsor-swiper .swiper-wrapper {
    width: 100vw;
}

.swiper.sponsor-swiper .swiper-wrapper .swiper-slide {
    display: flex;
    width: 150px;
    justify-content: center;
} */
</style>
<!-- 
<style>

</style> -->
