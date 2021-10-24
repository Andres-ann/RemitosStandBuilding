function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType   = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

window.addEventListener('load', async () => {
    const image = await loadImage("./assets/img/scanner.jpg");

    const form = document.querySelector('#Form-Datos');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

    let fecha = document.getElementById('Fecha').value;

    let empresa = document.getElementById('Empresa').value;
    let domicilio = document.getElementById('Domicilio').value;
    let iva = document.getElementById('IVA').value;
    let cuit = document.getElementById('CUIT').value;
    let fact = document.getElementById('Fact').value;

    let cantIt1 = document.getElementById('cantIt-1').value;
    let descIt1 = document.getElementById('DescIt-1').value;
    let valIt1 = document.getElementById('ValorIt-1').value;

    let cantIt2 = document.getElementById('cantIt-2').value;
    let descIt2 = document.getElementById('DescIt-2').value;
    let valIt2 = document.getElementById('ValorIt-2').value;

    let cantIt3 = document.getElementById('cantIt-3').value;
    let descIt3 = document.getElementById('DescIt-3').value;
    let valIt3 = document.getElementById('ValorIt-3').value;

    let cantIt4 = document.getElementById('cantIt-4').value;
    let descIt4 = document.getElementById('DescIt-4').value;
    let valIt4= document.getElementById('ValorIt-4').value;

    let cantIt5 = document.getElementById('cantIt-5').value;
    let descIt5 = document.getElementById('DescIt-5').value;
    let valIt5= document.getElementById('ValorIt-5').value;

    let cantIt6 = document.getElementById('cantIt-6').value;
    let descIt6 = document.getElementById('DescIt-6').value;
    let valIt6 = document.getElementById('ValorIt-6').value;

    let cantIt7 = document.getElementById('cantIt-7').value;
    let descIt7 = document.getElementById('DescIt-7').value;
    let valIt7 = document.getElementById('ValorIt-7').value;

    let cantIt8 = document.getElementById('cantIt-8').value;
    let descIt8 = document.getElementById('DescIt-8').value;
    let valIt8 = document.getElementById('ValorIt-8').value;

    let cantIt9 = document.getElementById('cantIt-9').value;
    let descIt9 = document.getElementById('DescIt-9').value;
    let valIt9 = document.getElementById('ValorIt-9').value;

    let cantIt10 = document.getElementById('cantIt-10').value;
    let descIt10 = document.getElementById('DescIt-10').value;
    let valIt10 = document.getElementById('ValorIt-10').value;

    let cantIt11 = document.getElementById('cantIt-11').value;
    let descIt11 = document.getElementById('DescIt-11').value;
    let valIt11 = document.getElementById('ValorIt-11').value;

    let cantIt12 = document.getElementById('cantIt-12').value;
    let descIt12 = document.getElementById('DescIt-12').value;
    let valIt12 = document.getElementById('ValorIt-12').value;

    let cantIt13 = document.getElementById('cantIt-13').value;
    let descIt13 = document.getElementById('DescIt-13').value;
    let valIt13= document.getElementById('ValorIt-13').value;

    let cantIt14 = document.getElementById('cantIt-14').value;
    let descIt14 = document.getElementById('DescIt-14').value;
    let valIt14 = document.getElementById('ValorIt-14').value;

    let cantIt15 = document.getElementById('cantIt-15').value;
    let descIt15 = document.getElementById('DescIt-15').value;
    let valIt15 = document.getElementById('ValorIt-15').value;

    let cantIt16 = document.getElementById('cantIt-16').value;
    let descIt16 = document.getElementById('DescIt-16').value;
    let valIt16 = document.getElementById('ValorIt-16').value;

    let tTxt = document.getElementById('TotalTxt').textContent;
    let total = document.getElementById('ValorTotal').value;



    generatePDF(fecha, empresa, domicilio, iva, cuit, fact, cantIt1, descIt1, valIt1,cantIt2,descIt2,valIt2,cantIt3,descIt3,valIt3,cantIt4,descIt4,valIt4,cantIt5,descIt5,valIt5,cantIt6,descIt6,valIt6,cantIt7,descIt7,valIt7,cantIt8,descIt8,valIt8,cantIt9,descIt9,valIt9,cantIt10,descIt10,valIt10,cantIt11,descIt11,valIt11,cantIt12,descIt12,valIt12,cantIt13,descIt13,valIt13,cantIt14,descIt14,valIt14,cantIt15,descIt15,valIt15,cantIt16,descIt16,valIt16,tTxt, total);

    })

});

async function generatePDF(fecha, empresa, domicilio, iva, cuit, fact, cantIt1, descIt1, valIt1,cantIt2,descIt2,valIt2,cantIt3,descIt3,valIt3,cantIt4,descIt4,valIt4,cantIt5,descIt5,valIt5,cantIt6,descIt6,valIt6,cantIt7,descIt7,valIt7,cantIt8,descIt8,valIt8,cantIt9,descIt9,valIt9,cantIt10,descIt10,valIt10,cantIt11,descIt11,valIt11,cantIt12,descIt12,valIt12,cantIt13,descIt13,valIt13,cantIt14,descIt14,valIt14,cantIt15,descIt15,valIt15,cantIt16,descIt16,valIt16,tTxt, total) {
    const image = await loadImage("./assets/img/scanner.jpg");

    const pdf = new jsPDF('p', 'pt', 'a4');

    //pdf.addImage(image, 'PNG', 0, 0, 565, 792);
    pdf.setFontSize(10);
    
    //Fecha
    const date = new Date(fecha);
    pdf.text(date.getUTCDate().toString()+" /", 410,115);
    pdf.text((date.getUTCMonth() + 1).toString()+" / ", 430,115);
    pdf.text(date.getUTCFullYear().toString(), 450,115);

    //Datos de cabecera
    pdf.text(empresa, 120, 195);
    pdf.text(domicilio, 120, 220);
    pdf.text(iva, 120, 245);
    pdf.text(cuit, 405, 245);
    pdf.text(fact, 405, 275);

    //Item1
    pdf.text(cantIt1, 50, 310);
    pdf.text(descIt1, 130, 310);
    pdf.text(valIt1, 485, 310);

    //Item2
    pdf.text(cantIt2, 50, 335);
    pdf.text(descIt2, 130, 335);
    pdf.text(valIt2, 485, 335);

    //Item3
    pdf.text(cantIt3, 50, 360);
    pdf.text(descIt3, 130, 360);
    pdf.text(valIt3, 485, 360);

    //Item4
    pdf.text(cantIt4, 50, 385);
    pdf.text(descIt4, 130, 385);
    pdf.text(valIt4, 485, 385);

    //Item5
    pdf.text(cantIt5, 50, 410);
    pdf.text(descIt5, 130, 410);
    pdf.text(valIt5, 485, 410);

    //Item6
    pdf.text(cantIt6, 50, 435);
    pdf.text(descIt6, 130, 435);
    pdf.text(valIt6, 485, 435);

    //Item7
    pdf.text(cantIt7, 50, 460);
    pdf.text(descIt7, 130, 460);
    pdf.text(valIt7, 485, 460);

    //Item8
    pdf.text(cantIt8, 50, 485);
    pdf.text(descIt8, 130, 485);
    pdf.text(valIt8, 485, 485);

    //Item9
    pdf.text(cantIt9, 50, 510);
    pdf.text(descIt9, 130, 510);
    pdf.text(valIt9, 485, 510);

    //Item10
    pdf.text(cantIt10, 50, 535);
    pdf.text(descIt10, 130, 535);
    pdf.text(valIt10, 485, 535);

    //Item11
    pdf.text(cantIt11, 50, 560);
    pdf.text(descIt11, 130, 560);
    pdf.text(valIt11, 485, 560);

    //Item12
    pdf.text(cantIt12, 50, 585);
    pdf.text(descIt12, 130, 585);
    pdf.text(valIt12, 485, 585);

    //Item13
    pdf.text(cantIt13, 50, 610);
    pdf.text(descIt13, 130, 610);
    pdf.text(valIt13, 485, 610);

    //Item14
    pdf.text(cantIt14, 50, 635);
    pdf.text(descIt14, 130, 635);
    pdf.text(valIt14, 485, 635);

    //Item15
    pdf.text(cantIt15, 50, 660);
    pdf.text(descIt15, 130, 660);
    pdf.text(valIt15, 485, 660);

    //Item16
    pdf.text(cantIt16, 50, 685);
    pdf.text(descIt16, 130, 685);
    pdf.text(valIt16, 485, 685);

    //Total
    pdf.text(tTxt,445, 710);
    pdf.text(total, 485, 710);



    pdf.save("remito.pdf")
}