const server = require("../../server");
const supertest = require("supertest");
const mocks = require('../mock');

jest.mock('../../components/colourLoversClient');
const colourLoversClient = require('../../components/colourLoversClient');
// jest.setTimeout(15000);

describe('POST /build', () => {
    test('should return HTTP 200 on happy path', async () => {
        colourLoversClient.getPattern.mockImplementation(() => mocks.colourLoversPatternGet);
        await supertest(server)
            .post("/build")
            .send({
                "patternID": 4370608,
                "theme": "bootstrap"
            })
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    "cssPath": "http://localhost:3000/css/bootstrap4370608.css",
                    "demo": "http://localhost:3000/demo/bootstrap/4370608"
                });
            })
    });


    test('should return HTTP 400 for invalid input', async () => {
        await supertest(server)
            .post("/build")
            .send({
                "patternID": "3333333",
                "theme": 0
            })
            .expect(400);
    });
})