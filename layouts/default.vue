<template>
    <div
        id="app"
        class="relative font-body bg-[#F4F4F4] overflow-hidden"
    >
        <AnnouncementHeader />
        <NavigationBar />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>
