// Import Chai and Chai-HTTP using the dynamic import syntax
const importChai = import('chai');
const importChaiHttp = import('chai-http');

// Set up Chai and Chai-HTTP
(async () => {
  const chai = await importChai;
  const chaiHttp = await importChaiHttp;

  // Use the default export of chaiHttp
  chai.use(chaiHttp.default);

  // Set up Chai's expect function
  const expect = chai.expect;

  // Assuming your Express app is in app.js
  const app = require('../app');

  describe('Authentication API', () => {
    // Test for sign-in route
    it('should sign in a user with valid credentials', (done) => {
      chai.request(app)
        .post('/user/sign-in')
        .send({
          name: 'John Doe', // Optional: Use if your sign-in endpoint requires a name
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