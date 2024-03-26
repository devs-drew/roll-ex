<script setup>
const toggleNav = ref(false)
</script>

<template>
    <nav class="bg-[#3C3E3E] text-[#F3F3F3] px-6 py-4 flex justify-between items-center">
        <div class="text-2xl">
            <NuxtLink to="/">Re'X</NuxtLink>
        </div>
        <ul class="hidden lg:flex items-center space-x-12">
            <li class="cursor-pointer">
                <NuxtLink to="/collections">Collections</NuxtLink>
            </li>
            <li class="cursor-pointer">
                <NuxtLink to="/accessories">Accessories</NuxtLink>
            </li>
            <li class="cursor-pointer">Promotions</li>
            <li class="cursor-pointer">Stores</li>
            <li class="cursor-pointer">Contact</li>
        </ul>
        <button
            @click="toggleNav = true"
            class="block lg:hidden"
        >
            <Icon name="fe:bar" />
        </button>
    </nav>

    <div
        class="flex flex-col fixed top-0 w-3/4 md:w-1/2 p-6 h-full bg-white z-50 transition-all duration-300 ease-in-out"
        :class="toggleNav ? 'right-0' : '-right-full'"
    >
        <button
            @click="toggleNav = false"
            class="block lg:hidden self-end"
        >
            <Icon
                name="fe:close"
                size="32"
            />
        </button>
        <ul class="flex flex-col space-y-6">
            <li class="cursor-pointer">Collections</li>
            <li class="cursor-pointer">Accessories</li>
            <li class="cursor-pointer">Promotions</li>
            <li class="cursor-pointer">Stores</li>
            <li class="cursor-pointer">Contact</li>
        </ul>
    </div>
</template>
