<script setup>
import Item1 from '~/assets/images/accessory_1.png'
import Item2 from '~/assets/images/accessory_2.png'
import Item3 from '~/assets/images/accessory_3.png'

const types = ref(['strap', 'batteries', 'screen protector', 'watch box'])
const image_placeholder = ref(Array(2).fill([Item1, Item2, Item3]).flat())
</script>

<template>
    <section class="grid grid-cols-12 container mx-auto my-16 h-full">
        <aside class="col-span-2 space-y-4 me-4 sticky top-0">
            <h3>Accessories</h3>
            <div class="flex gap-2">
                <Icon name="fe:search" />
                <input
                    class="w-full bg-transparent border-b border-[#0E1111] outline-none"
                    type="text"
                    placeholder="Search here..."
                />
            </div>
            <div>
                <h5 class="text-base font-bold mb-2">Filter by</h5>
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
                        v-for="item in types"
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
        </aside>
        <div class="col-span-10 grid grid-cols-4 gap-6">
            <template
                v-for="item in image_placeholder"
                :key="item"
            >
                <ProductCard :image="item" />
            </template>
        </div>
    </section>
</template>
