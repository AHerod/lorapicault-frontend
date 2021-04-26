const mixin = {
  methods: {
    getCurrencyFormat(value) {
      return new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN'
      }).format(value);
    }
  }
};

export default mixin;
