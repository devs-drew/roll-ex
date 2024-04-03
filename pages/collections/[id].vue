<script setup>
import Item3 from '~/assets/images/item_3.png'
const route = useRoute()

const image_placeholder = ref(Array(10).fill(Item3))
</script>

<template>
    <section class="grid grid-cols-12 gap-4 container m-auto">
        <div class="col-span-12 lg:col-span-7 bg-[#ececec] py-6 rounded-xl shadow-lg">
            <Swiper
                :modules="[SwiperPagination]"
                slides-per-view="1"
                :pagination="{ clickable: true }"
            >
                <SwiperSlide
                    class="mt-4 mb-12"
                    v-for="(item, index) in image_placeholder"
                    :key="index"
                >
                    <img
                        :src="item"
                        class="w-full max-h-[700px] object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="col-span-12 lg:col-span-5 flex flex-col justify-between ps-6">
            <div>
                <h3 class="mb-6">Roll’ ex Black and Gold</h3>
                <div class="grid grid-cols-2 gap-6">
                    <div class="px-6">
                        <h4>Case</h4>
                        <ul class="px-6 list-disc">
                            <li>case size</li>
                            <li>thickness</li>
                            <li>lug to lug</li>
                            <li>crown</li>
                            <li>water resistance</li>
                            <li>bezel</li>
                            <li>materials</li>
                            <li>finish</li>
                        </ul>
                    </div>
                    <div class="px-6">
                        <h4>Movement</h4>
                        <ul class="px-6 list-disc">
                            <li>movement</li>
                            <li>calibre</li>
                            <li>accuracy</li>
                            <li>power reserve</li>
                            <li>complications</li>
                            <li>frequency</li>
                            <li>jewels</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="text-2xl text-end">
                    <div>₱15,999.00</div>
                </div>
                <div class="flex justify-between items-center">
                    <nuxt-link
                        to="/collections"
                        class="hover:underline"
                    >
                        <Icon name="fe:arrow-left" />
                        <span>Continue Shopping</span>
                    </nuxt-link>
                    <button class="bg-[#0E1111] text-white px-6 py-3 rounded-lg">Add to cart</button>
                </div>
            </div>
        </div>
    </section>
</template>
