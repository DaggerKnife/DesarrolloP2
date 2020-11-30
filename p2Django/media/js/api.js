((d, w) => {
    // Antes de jugar con el DOM, debemos esperar que cargue
    d.onreadystatechange = () => {
        // El dom esta listo para manipular en interactive
        // En complete, ya se pueden accerde a todo...
        if (d.readyState === "complete") {
            metodos.init();
            w.metodos = metodos;
        }
    }

    const metodos = {
        datos: [],
        rutas: {},
        dias: {
            0: "Domingo",
            1: "Lunes",
            2: "Martes",
            3: "Miercoles",
            4: "Jueves",
            5: "Viernes",
            6: "Sabado"
        },
        token: '12d889927a2ab0508477527474cd4699',
        buscarElemento(elemento) {
            return d.querySelector(elemento);
        },
        crearElemento(elemento) {
            return d.createElement(elemento);
        },
        anadirCiudad(nuevaCiudad) {
            // Fetch de la ciudad
            let tempDatos = this.datos;
            let tempCrear = this.crearInterna;

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nuevaCiudad},cl&appid=${this.token}&lang=es&units=metric`)
                .then(resultado => {
                    return resultado.json();
                })
                .then(json => {
                    // Destructurando los datos de la respuesta
                    let { name,
                        weather: { 0: { description, icon } },
                        main: { temp, temp_max, temp_min },
                        sys: { country }
                    } = json;

                    const nuevoRegistro = {
                        ciudad: name,
                        icono: icon,
                        estado_del_tiempo: description,
                        actual: temp,
                        max: temp_max,
                        min: temp_min,
                        pais: country
                    }
                    tempDatos.push(nuevoRegistro);
                    tempCrear(nuevoRegistro);
                })
                .catch(err => {
                    w.console.error(err);
                })
        },
        crearCajitas() {

        },
        dibujar(elemento) {
            const datos = this.buscarElemento("#datos");
            console.log(datos);
            datos.appendChild(elemento);
            setTimeout(() => {
                requestAnimationFrame(() => {
                    elemento.classList.remove("esconder");
                });
            }, 200);
        },
        crearInterna({
            ciudad,
            estado_del_tiempo,
            icono,
            actual,
            min,
            max,
            pais
        }) {
            console.log("Entro a crearInterna");
            const article = this.metodos.crearElemento("article");
            article.classList.add("col", "s5", "m2", "l1.5","borderandcolor","center","tamanio");

            // Cabecera de carta

            const header = this.metodos.crearElemento("header");
            // 
            // Agregando hijos a header
            const picture = this.metodos.crearElemento("picture");
            header.appendChild(picture);
            // 
            // cuerpo de carta
            const section = this.metodos.crearElemento("section");
            const detalle = this.metodos.crearElemento("section");
            const titulo = this.metodos.crearElemento("p");
            titulo.classList.add("center-align");
            titulo.innerText = ciudad;
            const dia = this.metodos.crearElemento("p");
            dia.classList.add("center-align");

            dia.innerText = this.metodos.dias[new Date().getDay()];
            detalle.appendChild(titulo);
            detalle.appendChild(dia);
            section.appendChild(detalle);
            // footer de la carta
            const footer = this.metodos.crearElemento("footer");
            const p = this.metodos.crearElemento("p");
            p.classList.add("center-align");

            p.innerText = `${Number.parseFloat(actual).toFixed(1)}°`;
            footer.appendChild(p);
            // Añadiendo al padre
            article.appendChild(section);
            section.appendChild(header);
            article.appendChild(footer);

            this.metodos.dibujar(article);
        },
        init() {
            if (this.datos.length > 0) {
                this.crearCajitas();
            }
            this.eventos();
        },
        enrutar(ruta, payload) {
            if (this.rutas[ruta] === undefined) {
                this.rutas[ruta] = payload;
            }
        },
        cargarWeb() {
            console.log(w.location);
        },
        eventos() {
            w.onhashchange = this.cargarWeb();
        }
    };


})(document, window);


new Promise((resolver, rechazar) => {
    console.log('Iniciar');

    resolver();
})
    .then(() => {
        metodos.anadirCiudad('Santiago');
    })
    .catch(() => {
        anadirCiudad('Santiago');
    })
    .then(() => {
        console.log('Haz esto sin que importe lo que sucedió antes');
    });