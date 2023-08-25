const express = require('express');
const apiErrorResponse = require('./error-handler');

const app = express();

app.get('/api/resource', (req, res) => {
    // Exemplo de erro: recurso não encontrado com detalhes específicos
    const errorDetails = { id: 123, reason: 'Recurso não disponível' };
    const errorResponse = apiErrorResponse('NOT_FOUND', errorDetails);

    return res.status(errorResponse.code).json(errorResponse);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
