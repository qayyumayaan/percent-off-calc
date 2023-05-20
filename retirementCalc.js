new Vue({
    el: '#app',
    data: {
        selectedCalculation: null,
        inputPrice: 0,
        inputPercentOff: 0,
        output: null,
        outputType: null,
    },
    methods: {
        calculate() {
        let price = parseFloat(this.inputPrice);
        let percentOff = parseFloat(this.inputPercentOff);

        this.output = price * (1 - percentOff / 100);
        this.outputType = "Final price"

        if (isNaN(this.output)) {
            this.output = 0;
        }
        
        },

        reset() {
            this.inputPrice = 0,
            this.inputPercentOff = 0,
            this.output = null
            this.outputType = null
            this.selectedCalculation = null        
        }
    }
    });