function receber() {
  let total = document.querySelector("#total").value;
  let recebido = document.querySelector("#recebido").value;
  let txtTroco = document.querySelector("#troco");
  let txtFalta = document.querySelector("#faltante");
  if (total < recebido) {
    let troco = recebido - total;
    txtTroco.innerHTML = troco.toFixed(2);
  } else if (total > recebido) {
    let falta = total - recebido;
    alert(`Falta r$ ${falta.toFixed(2)}, informe o valor restante.`);
    txtFalta.innerHTML = falta.toFixed(2);
  }
}
