const precios = { negro: 7, normal: 6, capuchino: 5 };
let cantidad = { negro: 0, normal: 0, capuchino: 0 };

function agregarCafe(tipo) {
    cantidad[tipo]++;
    actualizarPantalla();
}

function reiniciarPedido() {
    cantidad = { negro: 0, normal: 0, capuchino: 0 };
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").textContent = "";
    actualizarPantalla();
}

function registrarPedido() {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }

    const total = (cantidad.negro * precios.negro) +
                  (cantidad.normal * precios.normal) +
                  (cantidad.capuchino * precios.capuchino);

    document.getElementById("mensaje").textContent =
        `${nombre}, compraste ${cantidad.negro} café(s) negro, ${cantidad.normal} café(s) normal y ${cantidad.capuchino} capuchino(s). Tu cuenta es $${total}`;
}

function actualizarPantalla() {
    document.getElementById("cantNegro").textContent = cantidad.negro;
    document.getElementById("cantNormal").textContent = cantidad.normal;
    document.getElementById("cantCapuchino").textContent = cantidad.capuchino;

    const total = (cantidad.negro * precios.negro) +
                  (cantidad.normal * precios.normal) +
                  (cantidad.capuchino * precios.capuchino);
    document.getElementById("total").textContent = total;
}

