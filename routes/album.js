module.exports = app => {

    let service = app.services.album;

    app.get('/albuns', service.lista);

    app.post('/albuns', service.adiciona);
}