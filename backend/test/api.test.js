const request = require('supertest');
const app = require('../app');

describe('API Tests', () => {
  it('should fetch all users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('success', true);
    });

  it('should create a new user', async () => {
    const newUser = { id: '123456789',name: 'John Doe', email: 'johndoe@example.com' };
    const response = await request(app).post('/api/users').send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.name).toBe(newUser.name);
    expect(response.body.data.email).toBe(newUser.email);
  });

  it('should update a user', async () => {
    const userIdToUpdate = '123456789'; // Replace with a valid user ID
    const updatedUser = { name: 'Jane Smith', email: 'janesmith@example.com' };
    const response = await request(app)
      .put(`/api/users/${userIdToUpdate}`)
      .send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toHaveProperty('id');
    expect(response.body.data.name).toBe(updatedUser.name);
    expect(response.body.data.email).toBe(updatedUser.email);
  });

  it('should delete a user', async () => {
    const userIdToDelete = '123456789'; // Replace with a valid user ID
    const response = await request(app).delete(`/api/users/${userIdToDelete}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('success', true);
  });
});