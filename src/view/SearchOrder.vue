<script setup>

</script>

<template>
    <div class="d-flex flex-column">
        <div class="main-box">
            <div class="main-text">
                <div class="me-2">OrderID:</div>
                <input class="me-2" type="text" name="" id="">
            </div>
            <div class="main-box-button-destop">
                <button type="button" class="btn btn-primary">Search</button>
            </div>
        </div>

        <div class="d-flex justify-content-center d-flex flex-column">

            <div class="d-flex box">
                <div class="d-flex align-items-center">
                    <div class="text_bar">Name</div>
                    <div class="text_bar">44444444444444444444444444444444444</div>
                </div>
                <div class="button-destop">
                    <button type="button" class="btn btn-primary">編輯</button>
                </div>
            </div>

            <div class="d-flex box">
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">ProductID</div>
                    <div class="text_bar">44444444444444</div>
                </div>
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Qty</div>
                    <div class="text_bar">44444444444444</div>
                </div>
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Discount</div>
                    <div class="text_bar">44444444444444</div>
                </div>
            </div>

            <div class="d-flex box">
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Price</div>
                    <div class="text_bar">44444444444444</div>
                </div>
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Total</div>
                    <div class="text_bar">44444444444444</div>
                </div>
            </div>
            <div class="button-mobile">
                <button type="button" class="btn btn-primary">編輯</button>
            </div>
            <hr>
        </div>
        <!-- /////////////////////////////////////////////////////////////////////////// -->
        <div class="d-flex justify-content-center d-flex flex-column">

            <div class="d-flex box">
                <div class="d-flex align-items-center">
                    <div class="text_bar">Name</div>
                    <div class="text_bar">44444444444444444444444444444444444</div>
                </div>
                <div class="button-destop">
                    <button type="button" class="btn btn-primary">DEL_Product</button>
                </div>
            </div>

            <div class="d-flex box">
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">ProductID</div>
                    <div class="text_bar">44444444444444</div>
                </div>
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Qty</div>
                    <div class="text_bar"><input type="text" name="" id="" style="margin-bottom: 5px;"></div>
                </div>
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Discount</div>
                    <div class="text_bar"><input type="text" name="" id=""></div>
                </div>
            </div>

            <div class="d-flex box">
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Price</div>
                    <div class="text_bar">44444444444444</div>
                </div>
                <div class="d-flex align-items-center me-2">
                    <div class="text_bar">Total</div>
                    <div class="text_bar">44444444444444</div>
                </div>
            </div>
            <div class="button-mobile">
                <button type="button" class="btn btn-primary">DEL_Product</button>
            </div>
            <hr>
        </div>
    </div>
    <div class="">
        <button type="button" class="btn btn-primary">更新訂單</button>
    </div>
    <div class="main-box-button-mobile">
        <button type="button" class="btn btn-primary">Search</button>
    </div>
</template>

<style scoped>
.main-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;

    font-size: 20px;
}

.box {
    padding: 5px;
}

.button-mobile {
    margin-top: 10px;
}

.text_bar {
    margin: 0 10px 0 0;
}

@media screen and (max-width: 768px) {
    .button-destop {
        display: none;
    }

    .main-box-button-destop {
        display: none;
    }

    .main-box {
        flex-wrap: wrap;
    }

    .d-flex {
        flex-wrap: wrap;
    }

    .box {
        padding: 1px;
    }
}

@media screen and (min-width: 768px) {
    .button-mobile {
        display: none;
    }

    .main-box-button-mobile {
        display: none;
    }
}
</style>