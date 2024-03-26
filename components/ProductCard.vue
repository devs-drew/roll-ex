<script setup>
const props = defineProps(['image'])
</script>

<template>
    <div class="w-[300px] h-[450px] flex flex-col items-center justify-center p-4 cursor-pointer md:hover:shadow-xl transition-shadow ease-in-out duration-300">
        <img
            :src="props.image"
            alt="item-1"
            class="object-cover w-auto h-[280px] mb-4"
        />
        <div class="text-center line-clamp-2">Roll’ ex black and gold</div>
        <div>₱ 15,999.00</div>
        <button class="bg-[#0E1111] text-[#F4F4F4] px-8 py-1 rounded mt-4">Buy</button>
    </div>
</template>
