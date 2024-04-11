const importChai = import('chai');
const importChaiHttp = import('chai-http');

(async () => {
  const chai = await importChai;
  const chaiHttp = await importChaiHttp;

  chai.use(chaiHttp.default);

  const expect = chai.expect;

  const app = require('../app');

  describe('Authentication API', () => {
    // Test for sign-in route
    it('should sign in a user with valid credentials', (done) => {
      chai.request(app)
        .post('/user/sign-in')
        .send({
          name: 'Example Name',
          email: 'user@example.com',
          password: 'password123'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          done();
        });
    });

    // Test for login route
    it('should log in a user with valid credentials', (done) => {
      chai.request(app)
        .post('/user/login')
        .send({ email: 'user@example.com', password: 'password123' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('token');
          done();
        });
    });
  });
})();