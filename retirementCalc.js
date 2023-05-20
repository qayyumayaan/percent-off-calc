import RetireLib from './RetireLib.js';

new Vue({
    el: '#app',
    data: {
        calculations: [
        "Single payment compound amount (F/P, i, N)",
        "Single payment present worth (P/F, i, N)",
        "Uniform series compound amount (F/A, i, N)",
        "Uniform series present worth (P/A, i, N)",
        "Sinking fund (A/F, i, N)",
        "Capital recovery (A/P, i, N)",
        "Arithmetic gradient present worth (P/G, i, N)",
        "Arithmetic gradient worth per amount (A/G, i, N)",
        "Uniform arithmetic gradient present worth (P/A + P/G, i, N)",
        "Geometric gradient present worth (P/A,f, i, N)"
        ],
        selectedCalculation: null,
        inputP: 0,
        inputF: 0,
        inputI: 0,
        inputA: 0,
        inputN: 0,
        inputG: 0,
        inputf: 0,
        output: null,
        outputType: null,
        inputPValues: [0, 5],
        inputFValues: [1, 4],
        inputIValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        inputAValues: [2, 3, 8, 9],
        inputNValues: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        inputGValues: [6, 7, 8],
        inputfValues: [9]
    },
    methods: {
        calculate() {
        let response = parseInt(this.selectedCalculation);
        let P = parseFloat(this.inputP);
        let F = parseFloat(this.inputF);
        let i = parseFloat(this.inputI);
        let A = parseFloat(this.inputA);
        let N = parseInt(this.inputN);
        let G = parseFloat(this.inputG);
        let f = parseFloat(this.inputf);

        i = i / 100;
        f = f / 100;

        switch (response) {
            case 0:
                this.output = RetireLib.FP(P, i, N);
                this.outputType = "Final amount (F)"
                break;
            case 1:
                this.output = RetireLib.PF(F, i, N);
                this.outputType = "Principle amount (P)"
                break;
            case 2:
                this.output = RetireLib.FA(A, i, N);
                this.outputType = "Final amount (F)"
                break;
            case 3:
                this.output = RetireLib.PA(A, i, N);
                this.outputType = "Principle amount (P)"
                break;
            case 4:
                this.output = RetireLib.AF(F, i, N);
                this.outputType = "Amount per compounding period (A)"
                break;
            case 5:
                this.output = RetireLib.AP(P, i, N);
                this.outputType = "Amount per compounding period (A)"
                break;
            case 6:
                this.output = RetireLib.PG(G, i, N);
                this.outputType = "Principle amount (P)"
                break;
            case 7:
                this.output = RetireLib.AG(G, i, N);
                this.outputType = "Amount per compounding period (A)"
                break;
            case 8:
                this.output = RetireLib.PAG(A, G, i, N);
                this.outputType = "Principle amount (P)"
                break;
            case 9:
                this.output = RetireLib.PGGeo(A, i, N, f);
                this.outputType = "Principle amount (P)"
                break;
            case 10:
                this.output = null;
                break;
            default:
                this.output = null;
                this.outputType = null;
                break;
        }
            if (isNaN(this.output)) {
                this.output = 0;
            }
        
        },
        reset() {
            this.inputP = 0,
            this.inputF = 0,
            this.inputI = 0,
            this.inputA = 0,
            this.inputN = 0,
            this.inputG = 0,
            this.inputf = 0
            this.output = null
            this.outputType = null
            this.selectedCalculation = null        
        }
    }
    });