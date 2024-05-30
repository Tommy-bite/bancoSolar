import express from 'express';
import bancoSolarRoutes from './routes/bancosolar.route.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.use('/bancosolar', bancoSolarRoutes);

// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).send('Oh no pagina no encontrada');
});

app.listen(PORT, () => {
    console.log('Servidor funcionando http://localhost:' + PORT);
})