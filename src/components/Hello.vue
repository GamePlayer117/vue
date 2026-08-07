<script>
    export default {
        data() {
            return {count : 1, riwayat : []}
        },
        methods : {
            tambah() {
            this.count++;
            this.riwayat.unshift(`${this.count}`)
        },
            kurang() {
            this.count--;
            this.riwayat.unshift(`${this.count}`)
        }
        }
    }
</script>

<template>
    <p>{{count}}</p>
    <button @click="tambah" class="plus-btn">Tambah</button>
    <button @click="kurang" class="minus-btn">Kurang</button>
</template>

<style scoped>
    p {
        display: inline;
        margin-right: 10px;
        margin-left: 5px;
    }
    .plus-btn {
        background-color: lime;
        border: 2px solid green;
        border-radius: 5px;
        margin-right: 10px;
        padding-right: 5px;
        padding-left: 5px;
    }
    .plus-btn:active {
        background-color: rgb(0, 163, 0);
        border: 2px solid rgb(0, 77, 0);
    }
    .minus-btn {
        background-color: red;
        color: white;
        border: 2px solid darkred;
        border-radius: 5px;
        padding-right: 5px;
        padding-left: 5px;
    }
    .minus-btn:active {
        background-color: rgb(179, 0, 0);
        color: rgb(156, 156, 156);
        border: 2px solid rgb(73, 0, 0);
    }
</style>