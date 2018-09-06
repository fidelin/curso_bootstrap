 var alumnos = [
    {
        nombre : "Diego",
        apellido : "Cueto",
        edad : 23,
        sexo : "H",
        gmail : "diegocueto-9@hotmail.com",
        telefono : 966232309,
        direccioncalle : "16 de Septiembre",
        colonia : "Nicatan",
        municipio : "Tonala",
        estado : "Chiapas",
        pais : "Mexico"

    },
    {
        nombre : "Lucio",
        apellido : "Escobar",
        edad : 22,
        sexo : "H",
        gmail : "lucio48@outlook.com",
        telefono : 9681197536,
        direccioncalle : "Revolucion",
        colonia : "Union Agrarista",
        municipio : "Jiquipilas",
        estado : "Chiapas",
        pais : "Mexico"

    },
    {
        nombre : "Tomas",
        apellido : "Lopez",
        edad : 22,
        sexo : "H",
        gmail : "thomas_mcthom@Outlook.com",
        telefono : 9681009079,
        direccioncalle : "Segunda Avenida Sur",
        colonia : "Santa Cruz",
        municipio : "Cintalapa",
        estado : "Chiapas",
        pais : "Mexico"

    },
    {
        nombre : "Fidel",
        apellido : "Rodriguez",
        edad : 22,
        sexo : "H",
        gmail : "fidelin24_@hotmail.com",
        telefono : 9681143111,
        direccioncalle : "calle central",
        colonia : "Las Merceditas",
        municipio : "Cintalapa",
        estado : "Chiapas",
        pais : "Mexico"

    },
    {
        nombre : "Lorena",
        apellido : "Zarate",
        edad : 22,
        sexo : "M",
        gmail : "anerol_brumars@hotmail.com",
        telefono : 9684556783,
        direccioncalle : "8a oriente entre 4a y 5a Norte",
        colonia : "San Francisco",
        municipio : "Cintalapa",
        estado : "Chiapas",
        pais : "Mexico"

    },
    {
        nombre : "Roxana",
        apellido : "Salazar",
        edad : 22,
        sexo : "M",
        gmail : "monce.26@hotmail.com",
        telefono : 9689542380,
        direccioncalle : "Segunda Avenida Sur",
        colonia : "Tehuacan",
        municipio : "Cintalapa",
        estado : "Chiapas",
        pais : "Mexico"

    },
    {
        nombre : "Guadalupe",
        apellido : "Aguilar",
        edad : 22,
        sexo : "M",
        gmail : "guadalupeaguilarmedina@outlook.com",
        telefono : 9684345300,
        direccioncalle : "Avenida ferrocarril",
        colonia : "Joaquin Amaro",
        municipio : "Pijijiapan",
        estado : "Chiapas",
        pais : "Mexico"

    }

  ];

      (document).ready(mostrar());

    function mostrar(){
      for (var i = 0; i < alumnos.length; i++) {
        var tabla = document.getElementById("tabla").innerHTML;
        document.getElementById("tabla").innerHTML=tabla+'<tr><td>'+
        alumnos[i].nombre+'</td><td>'+
        alumnos[i].apellido+'</td><td>'+
        alumnos[i].edad+'</td><td>'+
        alumnos[i].sexo+'</td><td>'+
        alumnos[i].gmail+'</td><td>'+
        alumnos[i].telefono+'</td><td>'+
        alumnos[i].direccioncalle+'</td><td>'+
        alumnos[i].colonia+'</td><td>'+
        alumnos[i].municipio+'</td><td>'+
        alumnos[i].estado+'</td><td>'+
        alumnos[i].pais+'</td></tr>';
      }
    }
