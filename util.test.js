
jest.mock('./http');
const {loadTitle} =require('./util')


test('print an uppcase text',()=>{
    loadTitle().then(title=>{
        expect(title).toBe('DELECTUS AUT AUTEM');
    });
})