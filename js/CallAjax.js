DataIni();

function DataIni() {
  Chart.defaults.global.defaultFontColor = "#fff";
  const comboBoxUbi = document.getElementById("cmbUbicacion");

  var DepOpciones = [
    { value: "98", text: "Republica de Guatemala" },
    { value: "1", text: "Guatemala" },
    { value: "2", text: "El Progreso" },
    { value: "3", text: "Sacatepequez" },
    { value: "4", text: "Chimaltenango" },
    { value: "5", text: "Escuintla" },
    { value: "6", text: "Santa Rosa" },
    { value: "7", text: "Solola" },
    { value: "8", text: "Totonicapan" },
    { value: "9", text: "Quetzaltenango" },
    { value: "10", text: "Suchitepequez" },
    { value: "11", text: "Retalhuleu" },
    { value: "12", text: "San Marcos" },
    { value: "13", text: "Huehuetenango" },
    { value: "14", text: "Quiche" },
    { value: "15", text: "Baja Verapaz" },
    { value: "16", text: "Alta Verapaz" },
    { value: "17", text: "Peten" },
    { value: "18", text: "Izabal" },
    { value: "19", text: "Zacapa" },
    { value: "20", text: "Chiquimula" },
    { value: "21", text: "Jalapa" },
    { value: "22", text: "Jutiapa" }
  ]

  comboBoxUbi.innerHTML = "";

  DepOpciones.forEach(function (OpcionesDep) {
    var option = document.createElement("option");
    option.value = OpcionesDep.value;
    option.text = OpcionesDep.text;
    comboBoxUbi.appendChild(option);
  })

  var btnSr = document.getElementById("btnSearch");
  btnSr.addEventListener('click', function () {
    if (comboBoxUbi != null || comboBoxUbi.value != 98) {
      url = "https://censopoblacion.gt/indicadores/" + comboBoxUbi.value + "/999";
    } else {
      url = "https://censopoblacion.gt/indicadores/98/999";
    }
    let info = "";
    GetCenso(url, comboBoxUbi.value);
  }, false);

  if (comboBoxUbi != null || comboBoxUbi.value != 98) {
    url = "https://censopoblacion.gt/indicadores/" + comboBoxUbi.value + "/999";
  } else {
    url = "https://censopoblacion.gt/indicadores/98/999";
  }
  GetCenso(url);

}


// function BusquedaDept(IDdept) {
// const comboBoxUbi = document.getElementById("cmbUbicacion");
// comboBoxUbi.innerHTML = "";
// const op
// let MuniOpciones = [];
// switch (IDdept) {
//   case 1:
//     MuniOpciones = [
//       { value: "98", text: "Republica de Guatemala" },
//       { value: "999", text: "Departamento de Guatemala" },
//       { value: "101", text: "Guatemala" },
//       { value: "102", text: "Santa Catarina Pinula" },
//       { value: "103", text: "San Jose Pinula" },
//       { value: "104", text: "San Jose del Golfo" },
//       { value: "105", text: "Palencia" },
//       { value: "106", text: "Chinautla" },
//       { value: "107", text: "San Pedro Ayampuc" },
//       { value: "108", text: "Mixco" },
//       { value: "109", text: "San Pedro Sacatepequez" },
//       { value: "110", text: "San Juan Sacatepequez" },
//       { value: "111", text: "San Raymundo" },
//       { value: "112", text: "Chuarrancho" },
//       { value: "113", text: "Fraijanes" },
//       { value: "114", text: "Amatitlan" },
//       { value: "115", text: "Villa Nueva" },
//       { value: "116", text: "Villa Canales" },
//       { value: "117", text: "San Miguel Petapa" }
//     ]
//     break;

//   case 2:
//     console.log("testo");
//     break;

//   default:
//     console.log("testo prueba");
// }

// MuniOpciones.forEach(function (OpcionesMuni) {
//   var option = document.createElement("option");
//   option.value = OpcionesMuni.value;
//   option.text = OpcionesMuni.text;
//   comboBoxUbi.appendChild(option);
// })
// }

function GetCenso(url, ID) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      info = data[0].total_lugares;

      var divCenso = document.getElementById('divCenso');
      divCenso.innerHTML = '';


      if (data.length > 0) {

        const div = document.createElement("div");
        div.className = "col-md-12";

        const div2 = document.createElement("div");
        div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-400";

        const table = document.createElement("table");
        table.className = "table table-bordered table-dark table-hover";

        const name = document.createElement("h3");
        name.className = "mt-1 mb-1 text-center text-white ";
        name.innerText = data[0].nombre;

        const capital = document.createElement("h5");
        capital.className = "mb-1 text-center text-white";
        capital.innerText = data[0].capital;

        const tbody = document.createElement("tbody");
        const tr = document.createElement("tr");
        const tr1 = document.createElement("tr");
        const tr2 = document.createElement("tr");
        const tr3 = document.createElement("tr");
        const tr4 = document.createElement("tr");
        const tr5 = document.createElement("tr");

        const td = document.createElement("td");
        td.innerText = data[0].total_sexo_hombre;

        const td1 = document.createElement("td");
        td1.innerText = data[0].total_sexo_mujeres;

        const td2 = document.createElement("td");
        td2.innerText = data[0].pob_total;

        const td3 = document.createElement("td");
        td3.innerText = data[0].total_hogares;

        const td4 = document.createElement("td");
        td4.innerText = data[0].porc_sector_rural + " %";

        const td5 = document.createElement("td");
        td5.innerText = data[0].porc_sector_urbano + " %";

        const thH = document.createElement("th");
        thH.scope = "row";
        thH.innerText = "Total Hombres";

        const thM = document.createElement("th");
        thM.scope = "row";
        thM.innerText = "Total Mujeres";

        const thT = document.createElement('th');
        thT.scope = "row";
        thT.innerText = "Poblacion Total";

        const thHogar = document.createElement('th');
        thHogar.scope = "row";
        thHogar.innerText = "Total Hogares";

        const thRu = document.createElement('th');
        thRu.scope = "row";
        thRu.innerText = "Poblacion area Rural";

        const thUrb = document.createElement('th');
        thUrb.scope = "row";
        thUrb.innerText = "Poblacion area Urbana";


        div2.appendChild(name);
        div2.appendChild(capital);
        div2.appendChild(table);
        table.appendChild(tbody);

        tbody.appendChild(tr);
        tr.appendChild(thH);
        tr.appendChild(td);

        tbody.appendChild(tr1);
        tr1.appendChild(thM);
        tr1.appendChild(td1);

        tbody.appendChild(tr2);
        tr2.appendChild(thT);
        tr2.appendChild(td2);

        tbody.appendChild(tr3);
        tr3.appendChild(thHogar);
        tr3.appendChild(td3);

        tbody.appendChild(tr4);
        tr4.appendChild(thRu);
        tr4.appendChild(td4);

        tbody.appendChild(tr5);
        tr5.appendChild(thUrb);
        tr5.appendChild(td5);

        div.appendChild(div2);
        divCenso.appendChild(div);

        var divMuni = document.getElementById('divMuni');
        divMuni.innerHTML = '';
        
        actualizarGraficaHombresMujeres(data);
        actualizarGraficaEdades(data);

        const solicitudesMuni = [];

        if (ID <= 22 && ID >= 1) {
          for (let i = 1; i <= info; i++) {
            if (i < 10) {
              url1 = "https://censopoblacion.gt/indicadores/" + ID + "/" + ID + "0" + i;
            } else {
              url1 = "https://censopoblacion.gt/indicadores/" + ID + "/" + ID + "" + i;
            }
            solicitudesMuni.push(fetch(url1));

          }
          return Promise.all(solicitudesMuni);
        }
      }
    })
    .then(responses => {
      const datosObtenidos = [];

      for (const response of responses) {
        datosObtenidos.push(response.json());
      }

      return Promise.all(datosObtenidos);
    })
    .then(resultados => {
      var divMuni = document.getElementById('divMuni');
      divMuni.innerHTML = '';

      if (resultados.length > 0) {

        resultados.forEach(resultados => {
          const div = document.createElement("div");
          div.className = "col-md-6";

          const div2 = document.createElement("div");
          div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-400";

          const table = document.createElement("table");
          table.className = "table table-bordered table-dark table-hover";

          const name = document.createElement("h3");
          name.className = "mt-1 mb-1 text-center ";
          name.innerText = resultados[0].nombre;

          const capital = document.createElement("h5");
          capital.className = "mb-1 text-center";
          capital.innerText = resultados[0].capital;

          const tbody = document.createElement("tbody");
          const tr = document.createElement("tr");
          const tr1 = document.createElement("tr");
          const tr2 = document.createElement("tr");
          const tr3 = document.createElement("tr");
          const tr4 = document.createElement("tr");
          const tr5 = document.createElement("tr");

          const td = document.createElement("td");
          td.innerText = resultados[0].total_sexo_hombre;

          const td1 = document.createElement("td");
          td1.innerText = resultados[0].total_sexo_mujeres;

          const td2 = document.createElement("td");
          td2.innerText = resultados[0].pob_total;

          const td3 = document.createElement("td");
          td3.innerText = resultados[0].total_hogares;

          const td4 = document.createElement("td");
          td4.innerText = resultados[0].porc_sector_rural + " %";

          const td5 = document.createElement("td");
          td5.innerText = resultados[0].porc_sector_urbano + " %";

          const thH = document.createElement("th");
          thH.scope = "row";
          thH.innerText = "Total Hombres";

          const thM = document.createElement("th");
          thM.scope = "row";
          thM.innerText = "Total Mujeres";

          const thT = document.createElement('th');
          thT.scope = "row";
          thT.innerText = "Poblacion Total";

          const thHogar = document.createElement('th');
          thHogar.scope = "row";
          thHogar.innerText = "Total Hogares";

          const thRu = document.createElement('th');
          thRu.scope = "row";
          thRu.innerText = "Poblacion area Rural";

          const thUrb = document.createElement('th');
          thUrb.scope = "row";
          thUrb.innerText = "Poblacion area Urbana";


          div2.appendChild(name);
          div2.appendChild(capital);
          div2.appendChild(table);
          table.appendChild(tbody);

          tbody.appendChild(tr);
          tr.appendChild(thH);
          tr.appendChild(td);

          tbody.appendChild(tr1);
          tr1.appendChild(thM);
          tr1.appendChild(td1);

          tbody.appendChild(tr2);
          tr2.appendChild(thT);
          tr2.appendChild(td2);

          tbody.appendChild(tr3);
          tr3.appendChild(thHogar);
          tr3.appendChild(td3);

          tbody.appendChild(tr4);
          tr4.appendChild(thRu);
          tr4.appendChild(td4);

          tbody.appendChild(tr5);
          tr5.appendChild(thUrb);
          tr5.appendChild(td5);

          div.appendChild(div2);
          divMuni.appendChild(div);
        });
      }
    });
}



function actualizarGraficaHombresMujeres(data) {
  const graficaHombresMujeres = new Chart(document.getElementById("graficaHombresMujeres"), {
    type: "pie",
    data: {
      labels: ["Hombres", "Mujeres"],
      datasets: [
        {
          data: [
            data[0].total_sexo_hombre,
            data[0].total_sexo_mujeres,
          ],
          backgroundColor: [
            "rgba(75, 252, 13, 1.0)",
            "rgba(252, 35, 13, 1.0)",
          ],
          borderColor: [
            "rgba(163, 221, 203, 1)",
            "rgba(232, 233, 161, 1)",
          ],
          borderWidth: 0.5,
        },
      ],
    },
  });

  // Actualizar los datos y estilos de la gráfica de Hombres y Mujeres
  graficaHombresMujeres.data.datasets[0].data = [
    data[0].total_sexo_hombre,
    data[0].total_sexo_mujeres,
  ];
  graficaHombresMujeres.update();
}


function actualizarGraficaEdades(data) {
  const graficaEdades = new Chart(document.getElementById("graficaEdades"), {
    type: "pie",
    data: {
      labels: ["Edad 0-14", "Edad 15-64", "Edad 65 o Mayor"],
      datasets: [
        {
          data: [
            data[0].pob_edad_014,
            data[0].pob_edad_1564,
            data[0].pob_edad_65,
          ],
          backgroundColor: [
            "rgba(13, 115, 252, 1.0)",
            "rgba(251, 255, 1, 1.0)",
            "rgba(0, 255, 255, 1.0)",
          ],
          borderColor: [
            "rgba(13, 115, 252, 1)",
            "rgba(229, 112, 126, 1)",
            "rgba(231, 160, 115, 1)",
            ,
          ],
          borderWidth: 0.5,
        },
      ],
    },
  });

  // Actualizar los datos y estilos de la gráfica de Edades
  graficaEdades.data.datasets[0].data = [
    data[0].pob_edad_014,
    data[0].pob_edad_1564,
    data[0].pob_edad_65,
  ];
  graficaEdades.update();
}