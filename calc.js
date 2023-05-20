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
            console.log(price + " " + percentOff + " " + taxRate);

            if (isNaN(price)) price = 0;
            if (isNaN(percentOff)) percentOff = 0;
            if (isNaN(taxRate)) taxRate = 0;
        
            let priceAfterDiscount = price * (1 - percentOff / 100);
            let taxAmount = priceAfterDiscount * (taxRate / 100);
        
            this.output = priceAfterDiscount + taxAmount;
            this.outputType = "Final price";
        
            if (isNaN(this.output)) {
                this.output = 0;
            }
        },

        reset() {
            this.inputPrice = null
            this.inputPercentOff = null
            this.inputTaxRate = null
            this.output = null
            this.outputType = null
            this.selectedCalculation = null        
        }
    }
    });