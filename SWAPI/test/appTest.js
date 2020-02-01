const expect= require('chai').expect;
const request= require('request');
const APP_BASE_URL= 'https://swapi.co/api';

describe("API Testing", () => {
    it('Find character by valid Id', async ()=> {
        const id = 1;
        await request.get({ url : APP_BASE_URL + "/people/" + id}, 
            function(err, res, body){
                expect(res.statusCode).to.equal(200);
                console.log(body);
        });
    });
    it('Find character by not available id', async ()=> {
        const id = 12034;
        await request.get({ url : APP_BASE_URL + "/people/" + id}, 
            function(err, res, body){
                expect(res.statusCode).to.equal(404);
                console.log(body);
        });
    });
})