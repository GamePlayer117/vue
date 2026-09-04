<script>
    export default {
        data() {
            return {
                limit : 0,
                products : [],
                skip : 0,
                total : 0,
                loading : false,
                error : null,
                timer : null,
            }
        },
        computed : {
            keyword() {
                return this.$route.query.q || ''
            }
        },
        watch : {
            keyword : {
                immediate : true,
                handler() {
                    this.debounceFetch()
                }
            }
        },
        methods : {
            async getData() {
                this.loading = true
                const query = this.keyword.trim()
                try {
                    const url = query ? `https://dummyjson.com/products/search?q=${query}` : 'https://dummyjson.com/products'
                    const res = await fetch(url)
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
            },
            debounceFetch() {
                clearTimeout(this.timer)
                this.timer = setTimeout(()=>{this.getData()}, 400)
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
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>

<style scoped></style>