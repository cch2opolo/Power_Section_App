
window.onload = function() {
  var test = "test";
  document.getElementById('test_output').innerHTML = test;
}

function calcCompression() {
  var temps = [125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375];
  let shopTemp = 70;
  var expansionRate = document.getElementById('expansion_rate').innerText;
  var tubeID = document.getElementById('tube_id').innerText;
  tubeID = tubeID.replace(/[^\d+(\.\d{1,2})$]/g, '');
  var shopFit = document.getElementById('shop_fit').value;
  var rotorCV = document.getElementById('rotor_cv').innerText;
  rotorCV = rotorCV.replace(/[^\d+(\.\d{1,2})$]/g, '');
  var minorID = rotorCV - shopFit;

  dhFitRow = document.getElementById('dh_fit_row');
  dhCompRow = document.getElementById('dh_comp_row');
  for (i = 0; i < temps.length; i++) {
    var deltaTemp = temps[i] - parseFloat(shopTemp);
    var dhSwell = parseFloat(deltaTemp) * parseFloat(expansionRate);
    var dhFit = parseFloat(shopFit) + parseFloat(dhSwell);
    dhFit = parseFloat(dhFit).toFixed(3);
    dhFitRow.getElementsByTagName('td')[i].innerText = dhFit;
    var rubberThickness = parseFloat(tubeID) - parseFloat(minorID);
    var dhRubberThickness = parseFloat(rubberThickness) + parseFloat(dhSwell);
    dhCompression = (parseFloat(dhFit) / parseFloat(dhRubberThickness)) * 100;
    dhCompression = parseFloat(dhCompression).toFixed(2);
    dhCompRow.getElementsByTagName('td')[i].innerText = dhCompression + "%"
  }
  test = dhFitRow.getElementsByTagName('td')[1].innerText;
  document.getElementById('test_output').innerText = dhCompression;
}
