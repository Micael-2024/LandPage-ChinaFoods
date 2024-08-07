function enviarPedido() {
    var yakisobaQty = document.getElementById("yakisoba-qty").value;
    var sushiQty = document.getElementById("sushi-qty").value;
    var temakiQty = document.getElementById("temaki-qty").value;

    var pedidoConfirmado = document.getElementById("pedido-confirmado");
    pedidoConfirmado.innerHTML = "Pedido Confirmado: <br>" +
        "Yakisoba: " + yakisobaQty + " porções <br>" +
        "Sushi: " + sushiQty + " peças <br>" +
        "Temaki: " + temakiQty + " unidades";
}

/*calcular valor total*/
function calcularTotal() {
    var yakisobaQty = parseInt(document.getElementById("yakisoba").value);
    var sushi = document.getElementById("sushi").value;
    var temaki = document.getElementById("temaki").value;

    var totalYakisoba = 0;
    var totalSushi = 0;
    var totalTemaki = 0;

    switch (yakisobaQty) {
        case 2:
            totalYakisoba = 35;
            break;
        case 4:
            totalYakisoba = 55;
            break;
        case 6:
            totalYakisoba = 72;
            break;
    }

    switch (sushi) {
        case "salmao":
            totalSushi = 1,50;
        case "atum":
            totalSushi = 2,50;
        case "kani":
            totalSushi = 3,50;
        case "camarao":
            totalSushi = 4;
        case "hot":
            totalSushi = 5;
            break;
        default:
            totalSushi = 0;
            break;
    }

    switch (temaki) {
        case "salmao":
            totalTemaki = 12;
        case "atum":
            totalTemaki = 14;
        case "kani":
            totalTemaki = 16;
        case "camarao":
            totalTemaki = 18;
        case "'Sabor' empanado":
          totalTemaki = 24;
            break;
        default:
            totalTemaki = 0;
            break;
    }

    var totalPedido = totalYakisoba + totalSushi + totalTemaki;

    document.getElementById("total").innerHTML = "Total do Pedido: R$" + totalPedido.toFixed(2);
}
