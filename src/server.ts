import express from 'express';

const app = express();

app.get('/users', (req, res) =>{
  return res.send('Recebido')
})

app.listen(3333, () => {
  console.log('ta rodando 123')
});

//32:30
