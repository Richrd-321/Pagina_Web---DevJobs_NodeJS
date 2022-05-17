exports.mostarTrabajos = (req, res) => {
    res.render('home', {
        nombrePagina : 'Trabajos para Desarrolladores',
        tagline: 'Encuentra y Pública trabajos para Desarrolladores Web',
        barra: true,
        boton: true
    })
}