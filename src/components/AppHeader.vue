<script>
import { store } from '../store';
export default {
    name:"AppHeader",
    emits: ['search'],
    data() {
        return{
            store
        }
    }
}
</script>

<template>
<header class="ms_header d-flex align-items-center shadow-lg">
    <div class="container d-flex justify-content-between text-center align-items-center">    
        <div class="title d-flex align-items-center fs-1"><span class="text-primary">Prime</span>Boolean</div>
        <input v-model.trim="store.params.query" @keyup.enter="$emit('search')" type="text" placeholder="Search">
    </div>
</header>
</template>

<style lang="scss" scoped>

.ms_header {
    height: 100px;
}

</style>