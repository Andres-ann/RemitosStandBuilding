function generatePDF(
  fecha,
  empresa,
  domicilio,
  iva,
  cuit,
  fact,
  itemData,
  tTxt,
  total
) {
  const pdf = new jsPDF('p', 'pt', 'a4');
  pdf.setFontSize(10);

  // Fecha
  const date = new Date(fecha);
  pdf.text(date.getUTCDate().toString() + ' /', 410, 115);
  pdf.text((date.getUTCMonth() + 1).toString() + ' / ', 430, 115);
  pdf.text(date.getUTCFullYear().toString(), 450, 115);

  // Datos de cabecera
  pdf.text(empresa, 120, 195);
  pdf.text(domicilio, 120, 220);
  pdf.text(iva, 120, 245);
  pdf.text(cuit, 405, 245);
  pdf.text(fact, 405, 275);

  // Items
  const itemYStart = 310;
  const itemYIncrement = 25;
  let y = itemYStart;
  for (let i = 0; i < itemData.length; i++) {
    const [cantidad, descripcion, valor] = itemData[i];
    pdf.text(cantidad, 50, y);
    pdf.text(descripcion, 130, y);
    pdf.text(valor, 485, y);
    y += itemYIncrement;
  }

  // Total
  pdf.text(tTxt, 445, 710);
  pdf.text(total, 485, 710);

  const dateTime = Date.now();

  pdf.save(`remito-${dateTime}.pdf`);
}

// Esta es la función que maneja el evento submit del formulario
window.addEventListener('load', () => {
  const form = document.querySelector('#Form-Datos');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const itemData = [];
    for (let i = 1; i <= 16; i++) {
      const cantidad = document.getElementById(`cantIt-${i}`).value;
      const descripcion = document.getElementById(`DescIt-${i}`).value;
      const valor = document.getElementById(`ValorIt-${i}`).value;
      itemData.push([cantidad, descripcion, valor]);
    }

    const tTxt = document.getElementById('TotalTxt').textContent;
    const total = document.getElementById('ValorTotal').value;

    const fecha = document.getElementById('Fecha').value;
    const empresa = document.getElementById('Empresa').value;
    const domicilio = document.getElementById('Domicilio').value;
    const iva = document.getElementById('IVA').value;
    const cuit = document.getElementById('CUIT').value;
    const fact = document.getElementById('Fact').value;

    generatePDF(
      fecha,
      empresa,
      domicilio,
      iva,
      cuit,
      fact,
      itemData,
      tTxt,
      total
    );
  });
});
