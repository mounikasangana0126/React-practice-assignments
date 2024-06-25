const request = require('supertest');
const app = require('../index'); // Adjust the path as per your project structure
const StudentModel = require('../models/Student'); // Adjust the path as per your project structure

jest.mock('../models/Student'); // Mocking the entire Student model

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        StudentModel.find.mockResolvedValueOnce([]); // Mocking the find method to resolve with an empty array

        const response = await request(app).get('/students');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });
});

describe('Test POST /applicationform', () => {
    test('It should respond with 200 for valid data', async () => {
        const studentData = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobileNumber: '1234567890' };
        StudentModel.prototype.save.mockResolvedValue(studentData); // Mocking the save method to resolve with studentData

        const response = await request(app)
            .post('/applicationform')
            .send(studentData);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('User Created'); // Assuming your application responds with a message
    });

    test('It should respond with 500 for invalid data', async () => {
        const errorMessage = 'Mock Error';
        StudentModel.prototype.save.mockRejectedValue(new Error(errorMessage)); // Mocking save to reject with an error

        const response = await request(app)
            .post('/applicationform')
            .send({});

        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe(errorMessage); // Assuming your application sends back the error message
    });
});

describe('Test PUT /students/:id', () => {
    test('It should response with 200 for valid id', async () => {
        const studentData = { firstName: 'John', lastName: 'Doe', email: 'john@example.com', mobileNumber: '1234567890' };
        StudentModel.findByIdAndUpdate.mockResolvedValueOnce(studentData); // Mocking findByIdAndUpdate to resolve with studentData

        const response = await request(app).put('/students/123').send(studentData);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(studentData);
    });

    test('It should response with 404 for invalid id', async () => {
        StudentModel.findByIdAndUpdate.mockResolvedValueOnce(null); // Mocking findByIdAndUpdate to resolve with null

        const response = await request(app).put('/students/123').send({});

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe('cannot find any user with ID 123'); // Adjust based on your application's response
    });
});

describe('DELETE /students/:id', () => {
    test('It should respond with 404 for invalid id', async () => {
        StudentModel.findByIdAndDelete.mockResolvedValueOnce(null); // Mocking findByIdAndDelete to resolve with null

        const response = await request(app).delete('/students/123');

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe('cannot find any user with ID 123'); // Adjust based on your application's response
    });
});
