export function CalcularTotal(cantidad,plazo){
    
    /* -------------------------------
    *       *Cantidades
    *       * 0 - 1000 = 25%
    *       * 1001 - 5000 = 20%
    *       * 5001 - 10000 = 15%
    *       * +10000 = 10%
    ----------------------------------*/

    let totalCantitdad;

    if(cantidad <= 1000){
        totalCantitdad = cantidad * .25;
    }else if (cantidad > 1000 && cantidad <= 5000){
        totalCantitdad = cantidad * .20;
    }else if (cantidad > 5000 && cantidad <=10000){
        totalCantitdad = cantidad * .15;
    }else{
        totalCantitdad = cantidad * .1;
    }

    /* -------------------------------
    *        *Calcular plazo
    *        * 3 meses = 5%
    *        * 6 = 10%
    *        * 12 = 15%
    *        * 24 = 20%
    ---------------------------------*/

    let totalPlazo = 0;

    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05; //!5%
            break;
        case 6:
            totalPlazo = cantidad * .10; //!10%
            break;
        case 12:
            totalPlazo = cantidad * .15; //!15%
            break;
        case 24:
            totalPlazo = cantidad * .20; //!20%
            break;
    
        default:
            break;
    }
    return totalPlazo + totalCantitdad + cantidad;

    /*
    *   cantidad = $1000
    *   plazo = 6 meses
    *   intereses por cantidad = 25% //! $250
    *   intereses por plazo = 10%    //! $100
    *   total a pagar =              //! $1350
    */  

}