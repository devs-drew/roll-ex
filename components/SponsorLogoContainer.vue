<template>
    <img
        class="w-[150px] lg:w-[220px] object-contain aspect-[21/9]"
        :src="props.src"
        alt="item-1"
    />
</template>

<script setup>
const props = defineProps({
    src: String,
})
</script>
