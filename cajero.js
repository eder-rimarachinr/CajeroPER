class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

let caja = [];
let entregado = [];


caja.push(new Billete(200, 10));
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));

let dinero = 0;
let div = 0;
let papeles = 0;

let res = document.getElementById("result");
document.getElementById("enviar").onclick = function () {
    entregarDinero();
}


function entregarDinero() {
    res.innerHTML = "";
    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    if (!validarSolicitud(dinero)) {
        return false;
    }

    for (let billete of caja) {

        //recorre una rreglo con el valor de los billetes
        if (dinero >= billete.valor) {
            if (dinero > 100) {
                if ((dinero % billete.valor == 10)) {
                    aux = billete.valor;
                    billete.valor = 50;
                    billete.valor = aux;
                    dinero = dinero - 20;
                } else if ((dinero % billete.valor == 30)) {
                    aux = billete.valor;
                    billete.valor = 50;
                    billete.valor = aux;
                    dinero = dinero - 40;
                }

            }
            if((dinero%20 == 0)){
                div = Math.floor(dinero / billete.valor);
                papeles = div;
                entregado.push(new Billete(billete.valor, papeles));
            }
            
            console.log(dinero, "dinero inicial", billete.valor, "billetes", papeles, "cantidad");
            
            dinero = dinero - (billete.valor * papeles);

        }
    }


    for (var e of entregado) {
        if (e.cantidad > 0) {
            res.innerHTML = res.innerHTML + e.cantidad + " billetes de " + e.valor + "<br/>";
        }
    }
    limpiar();
}

function limpiar() {
    entregado = [];
}

function validarSolicitud(dinero) {
    if (dinero == "") {
        res.innerHTML = "Ingrese una cantidad";
        return false;
    } else if (dinero % 10 != 0) {
        res.innerHTML = "Solo multiplos de 10";
        return false;
    } else if (dinero == 30 || dinero == 10) {
        res.innerHTML = "No compa, no entregamos estos billetes";
        return false;
    }
    return true;

}


