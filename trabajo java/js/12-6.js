let montoTotal = parseInt(prompt("ingrese el total"));
if (montoTotal < 500) {
  document.write(montoTotal);
}
else if (montoTotal >= 500 && montoTotal <= 1000) {
    montoTotal = montoTotal - montoTotal * 0.05;
    document.write(montoTotal);
}
else if (montoTotal >= 1000 && montoTotal <= 7000) {
    montoTotal = montoTotal - montoTotal * 0.11;
    document.write(montoTotal);
}
else if (montoTotal >= 7000 && montoTotal <= 15000) {
    montoTotal = montoTotal - montoTotal * 0.18;
    document.write(montoTotal);
}
else if (montoTotal > 15000 ) {
    montoTotal = montoTotal - montoTotal * 0.25;
    document.write(montoTotal);
}



