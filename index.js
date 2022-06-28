/*
axel Miquilena ci:28243093
profesor tuve una semana muy dificil llena de tareas
hice todo lo que pude y lo que sabia si en algun momento usted
podria explicxarme como hacer este programa desde 0 a detalle 
seria perfecto dado que estos programas con servidores siempre se me complican
espero entienda y disculpe la molestia profesor
*/ 

/*aqui abro el servidor en http://Localhost:3000*/ 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});
server.listen(port, hostname, () => {
    console.log(`SERVER CPORRIENDO EN http://Localhost:3000/`);
  });

  /*apartor de aqui conecto la base de datos*/ 
const { Pool } = require("postgres-pool");
var pool = new Pool({
    "user": "postgres",
    "password": "AXEL",            
    "host": "localhost",
    "port": "5432",
    "database": "Estudiantes",
    "ssl": false,
    "idleTimeoutMillis": 10000,
    "waitFoeAvailableTimeoutMillis": 90000,
    "connectionTimeoutMillis": 30000
});

function exec(sentence, callBack){
    pool.connect().then(cnn => {
         cnn.query(sentence).then(r=>{
                callBack(r.rows);
            })
            .catch(e => {
                callBack(e);
            })
    })
}

function mostrartabla() {
    exec('select * from estudiante', (rows)=>{
    console.log(rows);
})
};
mostrartabla();





































































































































