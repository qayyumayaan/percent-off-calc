new Vue({
    el: '#app',
    data: {
        selectedCalculation: null,
        inputPrice: 0,
        inputPercentOff: 0,
        inputTaxRate: 6.625,
        output: null,
        outputType: null,
    },
    methods: {
        calculate() {
            let price = parseFloat(this.inputPrice);
            let percentOff = parseFloat(this.inputPercentOff);
            let taxRate = parseFloat(this.inputTaxRate);
        
            let priceAfterDiscount = price * (1 - percentOff / 100);
            let taxAmount = priceAfterDiscount * (taxRate / 100);
        
            this.output = priceAfterDiscount + taxAmount;
            this.outputType = "Final price";
        
            if (isNaN(this.output)) {
                this.output = 0;
            }
        },

        reset() {
            this.inputPrice = 0
            this.inputPercentOff = 0
            this.inputTaxRate = 0
            this.output = null
            this.outputType = null
            this.selectedCalculation = null        
        }
    }
    });