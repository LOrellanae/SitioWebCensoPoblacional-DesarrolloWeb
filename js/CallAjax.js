GetDatos();

function GetDatos() {
    const ubicacion = document.getElementById('cmbUbicacion');
    if (ubicacion != null) {
        url = "https://censopoblacion.gt/indicadores/2/" + ubicacion.value + "";
    } else {
        url = "https://censopoblacion.gt/indicadores/2/999";
    }
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var divCenso = document.getElementById('divCenso');
            divCenso.innerHTML = '';


            if (data.length > 0) {

                const div = document.createElement("div");
                div.className = "col-md-12";

                const div2 = document.createElement("div");
                div2.className = "row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-400";

                const table = document.createElement("table");
                table.className = "table table-bordered table-white table-hover";

                const name = document.createElement("h3");
                name.className = "mt-1 mb-1 text-center ";
                name.innerText = data[0].nombre;

                const capital = document.createElement("h5");
                capital.className = "mb-1 text-center";
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
                td4.innerText = data[0].porc_sector_rural+" %";

                const td5 = document.createElement("td");
                td5.innerText = data[0].porc_sector_urbano+" %";

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
            }
        });
}

// [
//     {
//         "id": 20,
//         "depto_id": 2,
//         "municipio_id": 999,
//         "nombre": "El Progreso",
//         "tipo_lugar": 2,
//         "total_lugares": 8,
//         "capital": "Guastatoya",
//         "ext_territorial": 1835,
//         "pob_total": 176632,
//         "indice_masculinidad": 97.44,
//         "prom_hijos_mujer": 3.66,
//         "edad_promedio": 28.38,
//         "indice_dependencia": 59.99,
//         "anios_prom_estudio": 6.62,
//         "alfabetismo": 86.56,
//         "viviendas_part": 54109,
//         "total_hogares": 44213,
//         "prom_personas_hogar": 4,
//         "total_jefas_hogar": 25.26,
//         "total_sexo_hombre": 87172,
//         "porc_sexo_hombre": 49.352325739,
//         "total_sexo_mujeres": 89460,
//         "porc_sexo_mujeres": 50.64767426,
//         "total_sector_urbano": 91416,
//         "porc_sector_urbano": 51.75506137,
//         "total_sector_rural": 85216,
//         "porc_sector_rural": 48.244938629,
//         "pob_edad_014": 53929,
//         "porc_edad_014": 30.53184021,
//         "pob_edad_1564": 110404,
//         "porc_edad_1564": 62.505095339,
//         "pob_edad_65": 12299,
//         "porc_edad_65": 6.96306445,
//         "pob_pueblo_maya": 2627,
//         "porc_pueblo_maya": 1.487272974,
//         "pob_pueblo_garifuna": 184,
//         "porc_pueblo_garifuna": 0.104171384,
//         "pob_pueblo_xinca": 46,
//         "porc_pueblo_xinca": 0.026042846,
//         "pob_pueblo_afrodescendiente": 86,
//         "porc_pueblo_afrodescendiente": 0.048688799,
//         "pob_pueblo_ladino": 173441,
//         "porc_pueblo_ladino": 98.193419086,
//         "pob_pueblo_extranjero": 248,
//         "porc_pueblo_extranjero": 0.140404909
//     }
// ]