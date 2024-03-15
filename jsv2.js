alert(validaFechaNac(12, 12, 2010));
function validaFechaNac(mes, anio, dia) {
  var hoy = new Date();
  var thisMonth = hoy.getMonth() + 1;
  var thisDay = hoy.getUTCDate();
  var thisYear = hoy.getYear();
  console.log(thisYear == anio);
  console.log(anio);
  console.log(thisYear);
  var returnVal =
    thisYear == anio
      ? mes > thisMonth
        ? true
        : dia >= thisDay && mes == thisMonth
        ? false
        : true
      : true;
  return returnVal;
}
