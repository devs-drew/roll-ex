<template>
    <header class="bg-[#0E1111] text-[#F3F3F3] px-6 py-4 flex justify-between items-center">
        <div class="text-xs animate-pulse">March SALE! up to 40%</div>
        <div class="flex items-center space-x-3">
            <select class="hidden sm:block bg-transparent">
                <option selected>PHP</option>
                <option>USD</option>
                <option>CAD</option>
            </select>
            <select class="hidden sm:block bg-transparent">
                <option selected>English</option>
                <option>Tagalog</option>
                <option>UK English</option>
            </select>
            <button>
                <Icon name="fe:user" />
            </button>
            <button>
                <Icon name="fe:shopping-bag" />
            </button>
        </div>
    </header>
</template>
