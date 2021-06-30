// fórmula descuentos (precio * (100 - descuento))/100

const cienPorciento = 100

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = cienPorciento - descuento
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100

    return precioConDescuento
}

const coupons = [
    {
        name: "Abraham_chido",
        discount: 15,
    },
    {
        name: "Pipe_gei",
        discount: 30,
    },
    {
        name: "Pirinola",
        discount: 25,
    },
]

function obtenerDescuento(){
    const price = document.getElementById("Price")
    const priceValue = price.value

    const cupon = document.getElementById("cupon")
    const cuponValue = cupon.value

    const isCouponValueValid = function (coupon) {
        return coupon.name === cuponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + userCouponValue + "no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = `Tu precio total es de ${precioConDescuento}`;
    }

    // let descuento

    // switch (cuponValue) {
    //     case "Abraham_chido":
    //         descuento = 15
    //         break;
    //     case "Pipe_gei":
    //         descuento = 30
    //         break;
    //     case "Pirinola":
    //         descuento = 25
    //         break;
    // }

    // const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)

    
   // resultPrice.innerHTML  innerHTML nos permite agregar texto en alguna etiqueta html
}

