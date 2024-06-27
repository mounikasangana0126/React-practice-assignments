// tests/app.test.js
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index');
const StudentModel = require('../models/Student');

jest.mock('../models/Student'); // Mocking the entire Student model

beforeAll(async () => {
    jest.spyOn(mongoose, 'connect').mockImplementation(() => {
        console.log('Connected to mock MongoDB');
        return Promise.resolve();
    });
});

afterAll(async () => {
    await mongoose.disconnect();
});

describe('GET /', () => {
    test('It should respond the GET method with empty array', async () => {
        StudentModel.find.mockResolvedValueOnce([]);

        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });
});

describe('POST /applicationform', () => {
    test('It should respond with 200 for valid data', async () => {
        const studentData = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobileNumber: '1234567890' };
        StudentModel.prototype.save.mockResolvedValue(studentData);

        const response = await request(app)
            .post('/applicationform')
            .send(studentData);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('User Created');
    });

    test('It should respond with 500 for invalid data', async () => {
        const errorMessage = 'Mock Error';
        StudentModel.prototype.save.mockRejectedValue(new Error(errorMessage));

        const response = await request(app)
            .post('/applicationform')
            .send({});

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe(errorMessage);
    });
});

describe('PUT /students/:id', () => {
    test('It should respond with 200 for valid id', async () => {
        const studentData = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobileNumber: '1234567890' };
        StudentModel.findByIdAndUpdate.mockResolvedValueOnce(studentData);

        const response = await request(app)
            .put('/students/123')
            .send(studentData);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(studentData);
    });

    test('It should respond with 404 for invalid id', async () => {
        StudentModel.findByIdAndUpdate.mockResolvedValueOnce(null);

        const response = await request(app)
            .put('/students/123')
            .send({});

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe('Cannot find any user with ID 123');
    });
});

describe('DELETE /students/:id', () => {
    test('It should respond with 404 for invalid id', async () => {
        StudentModel.findByIdAndDelete.mockResolvedValueOnce(null);

        const response = await request(app)
            .delete('/students/123');

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe('Cannot find any user with ID 123');
    });
});
