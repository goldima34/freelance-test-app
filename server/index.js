const express = require("express");
const cors = require("cors")
const router = require("./routers/index")

const PORT = 5000;
const app = express();
const sequelize = require('./database');

app.use(express.json())
app.use(cors())
app.use("/api", router);

const start = async () => {
    try {
        await sequelize.authenticate()
            .then(() => {
                console.log('Подключено к базе данных SQLite!');
            })
            .catch(error => {
                console.error('Ошибка подключения к базе данных:', error);
            });
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server started on PORT = ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();