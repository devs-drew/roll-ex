<template>
    <footer class="flex flex-col justify-between min-h-full h-auto p-6 bg-[#0E1111] text-[#F4F4F4]">
        <div class="h-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div class="w-auto grid place-items-start lg:place-items-center">
                <img
                    src="../assets/images/logo.png"
                    class="h-[150px]"
                />
            </div>
            <div class="col-span-3 justify-self-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <h4 class="mb-4">Quick Links</h4>
                    <ul class="flex flex-col items-start space-y-2">
                        <li class="cursor-pointer hover:underline">Collections</li>
                        <li class="cursor-pointer hover:underline">Accessories</li>
                        <li class="cursor-pointer hover:underline">Promotion</li>
                        <li class="cursor-pointer hover:underline">Stores</li>
                    </ul>
                </div>
                <div>
                    <h4 class="mb-4">Contact Us</h4>
                    <ul class="flex flex-col items-start space-y-2">
                        <li>Watch@watch.com</li>
                        <li>+63 934 384 4921</li>
                        <li>1605 Meralco Ave, Ortigas Center, Pasig, 1605 Metro Manila</li>
                    </ul>
                </div>
                <div>
                    <h4 class="mb-4">Follow Us</h4>
                    <ul class="flex flex-col items-start space-y-2">
                        <li class="cursor-pointer hover:underline">Facebook</li>
                        <li class="cursor-pointer hover:underline">Instagram</li>
                        <li class="cursor-pointer hover:underline">Twitter</li>
                        <li class="cursor-pointer hover:underline">LinkedIn</li>
                        <li class="cursor-pointer hover:underline">Github</li>
                    </ul>
                </div>
                <div>
                    <h4 class="mb-4 hidden md:block md:invisible">Terms</h4>
                    <ul class="flex flex-col items-start space-y-2">
                        <li class="cursor-pointer hover:underline">Terms and Conditions</li>
                        <li class="cursor-pointer hover:underline">Privacy Policy</li>
                        <li class="cursor-pointer hover:underline">FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-full h-auto self-end border-t border-gray-500 py-2 mt-4">
            <div class="text-sm text-gray-500">© 2024 KeeperOfTheNote. All rights reserved</div>
        </div>
    </footer>
</template>
