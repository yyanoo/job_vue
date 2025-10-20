<script setup>
</script>

<template>
    <div class="card-item" v-for="card in cardStore.cards">
        <div class="modal fade" :id="'modal' + card.id" :aria-labelledby="'label-modal' + card.id" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                    <div class="container">
                        <div class="text-content">
                            <div class="destop-button-container">
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                    id="button"></button>
                            </div>
                            <h1>{{ card.name }}</h1>
                            <p>{{ card.id }}</p>
                            <ul>
                                <li v-for="(skill, idx) in card.effect" :key="idx">{{ skill }}</li>
                            </ul>
                            <button class="button-more-data">更多訊息</button>
                        </div>
                        <div class="image-container">
                            <img class="box-img" v-lazy="card.picture" :alt="card.name" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
