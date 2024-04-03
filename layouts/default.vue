<template>
    <div
        id="app"
        class="relative font-body bg-white overflow-hidden"
    >
        <AnnouncementHeader />
        <NavigationBar />
        <main class="min-h-screen relative flex flex-col">
            <slot />
        </main>
        <Footer />
    </div>
</template>
