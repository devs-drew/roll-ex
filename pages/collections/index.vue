<script setup>
import Item1 from '~/assets/images/item_1.png'
import Item2 from '~/assets/images/item_2.png'
import Item3 from '~/assets/images/item_3.png'

const movements = ref(['mechanical', 'automatic', 'quartz', 'solar'])
const styles = ref(['fashion', 'luxury', 'aviator', 'military', 'sport', 'smart'])
const functionalities = ref(['analogue', 'digital', 'chronograph', 'hybrid'])

const image_placeholder = ref(ref(Array(3).fill([Item1, Item2, Item3]).flat()))
</script>

<template>
    <section class="grid grid-cols-12 container mx-auto my-16 h-full">
        <aside class="col-span-2 space-y-4 me-4 sticky top-0">
            <h3>Collections</h3>
            <div class="flex gap-2">
                <Icon name="fe:search" />
                <input
                    class="w-full bg-transparent border-b border-[#0E1111] outline-none"
                    type="text"
                    placeholder="Search here..."
                />
            </div>
            <div>
                <h5 class="text-base font-bold mb-2">Filter by Movements</h5>
                <div class="space-y-1">
                    <div class="flex items-center gap-2">
                        <input
                            class="size-5 border borde-red-500 accent-[#0E1111]"
                            type="checkbox"
                            id="allTypeMovement"
                            name="allTypeMovement"
                        />
                        <label for="allTypeMovement">All Types</label>
                    </div>
                    <template
                        v-for="item in movements"
                        :key="item"
                    >
                        <div class="flex items-center gap-2">
                            <input
                                class="size-5 border borde-red-500 accent-[#0E1111]"
                                type="checkbox"
                                :id="item"
                                name="movement"
                            />
                            <label
                                :for="item"
                                class="capitalize"
                                >{{ item }}</label
                            >
                        </div>
                    </template>
                </div>
            </div>
            <div>
                <h5 class="text-base font-bold mb-2">Filter by Style</h5>
                <div class="space-y-1">
                    <div class="flex items-center gap-2">
                        <input
                            class="size-5 border borde-red-500 accent-[#0E1111]"
                            type="checkbox"
                            id="allTypeStyle"
                            name="allTypeStyle"
                        />
                        <label for="allTypeStyle">All Types</label>
                    </div>
                    <template
                        v-for="item in styles"
                        :key="item"
                    >
                        <div class="flex items-center gap-2">
                            <input
                                class="size-5 border borde-red-500 accent-[#0E1111]"
                                type="checkbox"
                                :id="item"
                                name="style"
                            />
                            <label
                                :for="item"
                                class="capitalize"
                                >{{ item }}</label
                            >
                        </div>
                    </template>
                </div>
            </div>
            <div>
                <h5 class="text-base font-bold mb-2">Filter by Functionality</h5>
                <div class="space-y-1">
                    <div class="flex items-center gap-2">
                        <input
                            class="size-5 border borde-red-500 accent-[#0E1111]"
                            type="checkbox"
                            id="allTypeFunctionality"
                            name="allTypeFunctionality"
                        />
                        <label for="allTypeFunctionality">All Types</label>
                    </div>
                    <template
                        v-for="item in functionalities"
                        :key="item"
                    >
                        <div class="flex items-center gap-2">
                            <input
                                class="size-5 border borde-red-500 accent-[#0E1111]"
                                type="checkbox"
                                :id="item"
                                name="functionality"
                            />
                            <label
                                :for="item"
                                class="capitalize"
                                >{{ item }}</label
                            >
                        </div>
                    </template>
                </div>
            </div>
        </aside>
        <div class="col-span-10 grid grid-cols-4 gap-6">
            <template
                v-for="(item, index) in image_placeholder"
                :key="index"
            >
                <ProductCard :image="item" />
            </template>
        </div>
    </section>
</template>
