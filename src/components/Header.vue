<script setup>

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <div class="Title fs-4">
                <router-link to='/Index'>Index</router-link>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item router">
                        <router-link to="/Order">Order</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Product">Product</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.Title {
    margin: 5px 20px 5px 10px;
}

.nav-item {
    margin: 0 5px;
}
</style>
