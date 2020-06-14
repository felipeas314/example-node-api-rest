module.exports = app => {

    let service = app.services.album;

    app.get('/albuns', service.lista);

    app.post('/albuns', service.adiciona);

    app.get('/albuns/:id', service.buscaPorId);
    
    app.put('/albuns/:id', service.atualiza);

    app.delete('/albuns/:id', service.deleta);
}