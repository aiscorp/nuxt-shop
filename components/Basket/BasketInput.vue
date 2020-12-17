<template>
  <div class="input-group">
    <h3>Оформить заказ</h3>
    <ValidationObserver class="input-group" v-slot="{ handleSubmit }">
      <ValidationProvider
        class="basket-input"
        name="Имя"
        rules="required|min:3"
        v-slot="{ errors }"
      >
        <input name="name" placeholder="Ваше имя" v-model="name" type="text" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider
        class="basket-input"
        name="Телефон"
        rules="required|phone"
        v-slot="{ errors }"
      >
        <input
          name="phone"
          placeholder="+7(999) 999-99-99"
          v-mask="'+7(###) ###-##-##'"
          v-model="phone"
          type="text"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <ValidationProvider
        class="basket-input"
        name="Адрес"
        rules="required"
        v-slot="{ errors }"
      >
        <input
          name="address"
          placeholder="Адрес"
          v-model="address"
          invalid="address.valid"
          type="text"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <button v-on:click="handleSubmit(testmet)" class="btn btn-dark">
        Отправить
      </button>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: "",
      phone: "",
      address: ""
    };
  },
  methods: {
    ...mapActions("shopBasket", ["checkout"]),
    testmet() {
      this.checkout({
        name:this.name,
        phone:this.phone,
        address:this.address
      });
    }
  }
};
</script>

<style>
.input-group {
  display: grid;
  row-gap: 24px;
}

.input-group input {
  display: block;
  height: 50px;
  max-height: 50px;
  width: 100%;
  background: #f8f8f8;
  border-radius: 8px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;

  padding-left: 15px;
}
/* трюк для обхода перекрашивания поля автокомплита*/
.input-group input:-webkit-autofill {
  box-shadow: 0 0 0 30px #f8f8f8 inset !important;
}

.input-group h3 {
  margin-top: 32px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #59606d;
}

.basket-input {
  position: relative;
}

.basket-input span {
  position: absolute;
  bottom: -18px;
  left: 16px;
  font-family: PT Sans;
  font-size: 14px;
  color: red;
}
</style>
