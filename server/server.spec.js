// creacion de una instancia de express con la minima configuracion 

const express = require('express');
const logger = require('morgan');
const http = require('http');

const app = express();
const PinsRouter = require('./routes/pins');


const Pins = require('./models/Pins');
const request = require('request');


app.use(logger('dev'));
app.use(express.json());
app.use('/api/',PinsRouter);
app.set('port', 3000);

describe('Testing Router', () => {
  let server;

  beforeAll(() => {
    server = http.createServer(app)
    server.listen(3000);
  })
  afterAll(()=> {
    server.close();
  })

  it('200 and find pin', done => {
    const data = [{id: 1}]
    spyOn(Pins,'find').and.callFake(cb => {
      callBack(false,data)
    })
  })
  request.get('http://localhost:3000', (error, response, body) => {
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(desponse.body))
  })
})