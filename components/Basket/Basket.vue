<template>
  <div  class="basket-container">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h2 >Корзина</h2>
      <button class="btn btn-dark px-4 h-25" @click="closeBasket">
        X
      </button>
    </div>
    <div v-if="!isNotEmpty && !isOrdered">
      <p>Пока что вы ничего не добавили в корзину</p>
      <button @click="closeBasket" class="btn btn-dark">
        Закрыть корзину
      </button>
    </div>
    <div class="basket-notEmpty" v-if="isNotEmpty">
      <h3>Товары в корзине</h3>
      <transition-group name="basket">

        <BasketCard v-for="item in items"
                    :key="item.id2"
                    :item="item" />
      </transition-group>
      <BasketInput/>
    </div>
    <div v-if="isOrdered">
      <h2>Заявка успешно отправлена</h2>
      <h3>Вскоре наш менеджер свяжется с Вами</h3>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations("shopBasket", ["deleteItem", "closeBasket", "openBasket"])
  },
  computed: {
    ...mapGetters("shopBasket", ["items", "isOpen", "isNotEmpty", "isOrdered"])
  },
  mounted() {
    document.body.classList.add("overflow-block");
    this.openBasket();
  },
  beforeDestroy() {
    document.body.classList.remove("overflow-block");
  }

};
</script>

<style>
.overflow-block {
  overflow-y: hidden;
}

/*Animations*/

.basket-enter-active,
.basket-leave-active {
  transition: all 0.5s;
}
.basket-enter,
.basket-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
</style>
