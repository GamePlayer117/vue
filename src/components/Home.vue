<script>
    export default {
        data() {
            return {
                limit : 0,
                products : [],
                skip : 0,
                total : 0,
                loading : false,
                error : null
            }
        },
        methods : {
            async getData() {
                this.loading = true
                try {
                    const res = await fetch('https://dummyjson.com/products')
                    if (! res.ok) throw Error('Get data failed!')
                    const data = await res.json()
                    this.limit = data.limit
                    this.products = data.products
                    this.skip = data.skip
                    this.total = data.total
                    console.log(this.data)
                } catch(e) {
                    this.error = e
                } finally {
                    this.loading = false
                }
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<template>
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">{{error}}</p>
    <div v-else class="w-full grid grid-cols-4 gap-5 ml-[10px] pt-[10px]">
        <div v-for="product in products" class="flex flex-col items-center justify-center w-44 h-66 bg-orange-400 border-solid border-[3px] border-black rounded-[5px]">
            <img :src="product.images[0]" width="50" class="w-full">
            <p class="text-center">{{product.title}}</p>
            <p>{{product.price}}</p>
            <RouterLink :to="{name: 'products-detail', params: {id: product.id}}">
                <button>View Details</button>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>