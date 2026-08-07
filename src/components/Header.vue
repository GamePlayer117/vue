<script>
    import cartLogo from '@/assets/cart_logo.svg'
    import searchLogo from '@/assets/search_logo.svg'

    export default {
        data() {
            return {
                cartLogo, searchLogo
            }
        }
    }
</script>

<template>
    <div class="bg-orange-400 border-solid border-b-[3px] border-b-black p-[5px] flex items-center justify-between">
        <!-- Main website logo-->
        <div class="bg-yellow-300 border-solid border-[2px] border-blue-700 rounded-[5px] p-[3px]">
            <img :src="cartLogo" alt="Main Logo">
        </div>
        <!-- Navigation bar-->
        <nav class="flex gap-5">
            <span>Home</span>
            <span>Promos</span>
            <span>Carts</span>
        </nav>
        <!-- Search bar -->
        <div>
            <input placeholder="Search" class="bg-gray-600 border-solid border-[2px] border-black rounded-[5px] pl-[2px]">
            <img :src="searchLogo" alt="Search logo" class="inline">
        </div>
    </div>
</template>

<style scoped></style>