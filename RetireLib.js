export default class RetireLib {
    static FP(P, i, N) {
      // F/P
      const F = P * Math.pow(1 + i, N);
      return F;
    }
  
    static PF(F, i, N) {
      // P/F
      const P = F / Math.pow(1 + i, N);
      return P;
    }
  
    static FA(A, i, N) {
      // F/A
      const F = (A / i) * (Math.pow(1 + i, N) - 1);
      return F;
    }
  
    static PA(A, i, N) {
      // P/A
      const intRate = Math.pow(1 + i, N);
      const P = (A * (intRate - 1)) / (i * intRate);
      return P;
    }
  
    static AF(F, i, N) {
      // A/F
      const intRate = Math.pow(1 + i, N);
      const A = F * i / (intRate - 1);
      return A;
    }
  
    static AP(P, i, N) {
      // A/P
      const intRate = Math.pow(1 + i, N);
      const A = P * (i * intRate) / (intRate - 1);
      return A;
    }
  
    static PG(G, i, N) {
      // P/G
      const intRate = Math.pow(1 + i, N);
      const P = G * ((intRate - 1) / (i * intRate) - N / intRate) / i;
      return P;
    }
  
    static AG(G, i, N) {
      // A/G
      const intRate = Math.pow(1 + i, N);
      const A = G * (1 / i - N / (intRate - 1));
      return A;
    }
  
    static PAG(A, G, i, N) {
      // Uniform Arithmetic Gradient
      const P = RetireLib.PA(A, i, N) + RetireLib.PG(G, i, N);
      return P;
    }
  
    static PGGeo(A, i, N, f) {
      // Geometric Gradient Series
      let P = 0;
      if (f === i) {
        P = RetireLib.PF(A * N, i, N);
      } else if (f !== i) {
        P = A * Math.abs(((1 - Math.pow(1 + i, -N) * Math.pow(1 + f, N)) / (i - f)));
      }
      return P;
    }
  }
  