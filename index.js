const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

let connection;

// INICIO DEL SERVIDOR + CONEXIÓN A MYSQL
async function start() {
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'school'
        });

        console.log("Conectado a MySQL");
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });

    } catch (err) {
        console.error("Error conectando a MySQL:", err);
    }
}

app.use(express.json());

// RUTA CON PAGINACIÓN
app.get('/students', async (req, res) => {
    try {
        const page = Number(req.query.page ?? 1);
        const pageSize = Number(req.query.pageSize ?? 5);

        if (Number.isNaN(page) || Number.isNaN(pageSize) || page < 1 || pageSize < 1) {
            return res.status(400).json({
                error: "page y pageSize deben ser números positivos"
            });
        }

        const offset = (page - 1) * pageSize;

        const query = `SELECT * FROM student ORDER BY id LIMIT ${offset}, ${pageSize}`;
        const [rows] = await connection.execute(query);

        const [[{ total }]] = await connection.execute(
            'SELECT COUNT(*) AS total FROM student'
        );

        res.json({
            current_page: page,
            page_size: pageSize,
            total_records: total,
            total_pages: Math.ceil(total / pageSize),
            data: rows
        });

    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

start();
