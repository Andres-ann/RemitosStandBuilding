// Función para formatear el valor como moneda con signo de pesos
function formatCurrency(inputField) {
  const inputValue = inputField.value;
  const numericValue = parseFloat(
    inputValue.replace('$', '').replace(/[^0-9.]/g, '')
  );
  if (!isNaN(numericValue)) {
    inputField.value = `$${numericValue.toFixed(2)}`;
  } else {
    inputField.value = '';
  }
}

// Recorre los campos de valor y los formatea como moneda con signo de pesos
for (let i = 1; i <= 16; i++) {
  const valorField = document.getElementById(`ValorIt-${i}`);
  valorField.addEventListener('blur', function () {
    formatCurrency(valorField);
    actualizarValoresArray();
  });
}

// Función para actualizar el array y el campo ValorTotal
function actualizarValoresArray() {
  const valoresArray = [];
  for (let i = 1; i <= 16; i++) {
    const valorField = document.getElementById(`ValorIt-${i}`);
    const numericValue = parseFloat(
      valorField.value.replace('$', '').replace(/[^0-9.]/g, '')
    );
    if (!isNaN(numericValue)) {
      valoresArray.push(numericValue);
    }
  }

  const sumaValores = valoresArray.reduce((total, valor) => total + valor, 0);

  const valorTotalField = document.getElementById('ValorTotal');
  valorTotalField.value = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2,
  }).format(sumaValores);
}

// Recorre los campos DescIt y agrega un evento input para verificar el límite de caracteres
for (let i = 1; i <= 16; i++) {
  const descField = document.getElementById(`DescIt-${i}`);
  const nextDescField = document.getElementById(`DescIt-${i + 1}`);

  if (descField && nextDescField) {
    descField.addEventListener('input', function () {
      if (descField.value.length >= 75) {
        nextDescField.focus();
      }
    });
  }
}
