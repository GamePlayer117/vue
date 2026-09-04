<script>
    export default {
        props: ['id'],
        data() {
            return {
                data: {},
                title: '',
                description: '',
                price: 0,
                rating: 0,
                stock: 0,
                info: {},
                availabilityStatus: '',
                images: [],
                loading: false,
                error: null
            }
        },
        methods: {
            async getData() {
                this.loading = true
                try {
                    const res = await fetch(`https://dummyjson.com/products/${this.id}`)
                    if (!res.ok) throw Error('get data failed!')
                    const data = await res.json()
                    this.data = data

                    this.title = data.title
                    this.description = data.description
                    this.price = data.price
                    this.rating = data.rating
                    this.stock = data.stock
                    this.info = {
                        'width': `${data.dimensions.width}cm`,
                        'height': `${data.dimensions.height}cm`,
                        'depth': `${data.dimensions.depth}cm`,
                        'weight': `${data.weight}g`,
                    }
                    this.availabilityStatus = data.availabilityStatus
                    this.images = data.images
                }catch(e) {
                    this.error = e
                }finally {
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
    <div v-else class="grid grid-cols-2 w-screen h-3/5">
        <!-- Product image -->
        <div class="w-full h-full">
           <img :src="images[0]" alt="Product Image">
        </div>
        <div>
            <!-- Product title -->
            <div class="bg-orange-400 p-[5px]">
                <h1 class="text-[30px] text-white">{{title}}</h1>
            </div>
            <!-- Rating, stock, and price -->
            <div class="flex items-center justify-between p-[5px] border-b-[3px] border-solid border-b-black">
                <div class="flex flex-col">
                    <p><span class="text-green-500">{{availabilityStatus}}</span> ({{stock}} left)</p>
                    <div class="flex flex-row">
                        <p v-for="item in Math.round(rating)" class="text-[30px] text-yellow-300" :title="rating">★</p>
                    </div>
                </div>
                <p class="text-[30px]">{{price}}</p>
            </div>
            <!-- Description -->
            <p class="p-[5px] border-b-[3px] border-solid border-b-black">{{description}}</p>
            <!-- Extra details -->
            <div class="flex flex-col p-[5px] border-b-[3px] border-solid border-b-black">
                <p>Additional product details:</p>
                <p v-for="(magnitude, dimension) in info">- {{dimension}}: {{magnitude}}</p>
            </div>
        </div>
    </div>
    <p v-for="(v, k) in data">{{k}}: {{v}}<br></p>
</template>

<style scoped></style>
