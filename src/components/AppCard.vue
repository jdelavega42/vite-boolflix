<script>
export default {
    name:"AppCard",
    props: {
        obj: Object
    }
}
</script>

<template>
    <div class="container">
        <h2>{{ obj.title }} {{ obj.name }}</h2>
        <h3>{{ obj.original_title }}</h3>
        <p>{{ obj.original_language }}</p>
        <p>{{ obj.vote_count }}</p>
    </div>

</template>

<style lang="scss" scoped>

</style>