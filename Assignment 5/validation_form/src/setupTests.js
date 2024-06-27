// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react';
import {render, fireEvent,screen,waitFor } from '@testing-library/react';
import ValidationForm from './ValidationForm';

// Mocking window.alert
window.alert = jest.fn();


describe('ValidationForm component', () => {
    test('should validate name input correctly', () => {
        const { getByLabelText, queryByText } = render(<ValidationForm />);
      
        // Valid name input
        fireEvent.change(getByLabelText('Name:'), { target: { value: 'John' } });
        expect(queryByText(/Name should contain only alphabets/i)).toBeNull();
      
        // Invalid name input
        fireEvent.change(getByLabelText('Name:'), { target: { value: '123' } });
        expect(queryByText(/Name should contain only alphabets/i)).toBeInTheDocument();
      });
    });      
    

    test('should validate PAN card input correctly', () => {
        const { getByLabelText, queryByText } = render(<ValidationForm />);
      
        // Valid PAN card input
        fireEvent.change(getByLabelText('PAN Card:'), { target: { value: 'AZNPH7488K' } });
        expect(queryByText(/First 5 characters should be alphabets only./i)).toBeNull();
        expect(queryByText(/Characters 6 to 9 should be numbers only./i)).toBeNull();
        expect(queryByText(/Last character should be an alphabet./i)).toBeNull();
      
        // Invalid PAN card input (simulate an invalid pattern)
        fireEvent.change(getByLabelText('PAN Card:'), { target: { value: '12345' } });
        expect(queryByText(/First 5 characters should be alphabets only./i)).toBeInTheDocument();
      });
      

      test('should validate date of birth input correctly', () => {
        render(<ValidationForm />);
      
        // Simulate entering an invalid date
        fireEvent.change(screen.getByLabelText('Date of Birth:'), { target: { value: '2025-01-01' } });
      
        // Example: Check for aria-invalid attribute or error message
        const dateOfBirthInput = screen.getByLabelText('Date of Birth:');
        expect(dateOfBirthInput).toHaveAttribute('aria-invalid', 'true');
      });

      
      test('should calculate number of days correctly from DOB', async () => {
        render(<ValidationForm />);
        
        // Simulate entering a valid Date of Birth
        fireEvent.change(screen.getByLabelText('Date of Birth:'), { target: { value: '2022-05-12' } });
        
        // Wait for the days count element to appear with updated content
        await waitFor(() => {
          const daysCountElement = screen.getByTestId('daysCount');
          expect(daysCountElement.textContent).toContain('Total days since date of birth:');
        });
      });
      
      
      

  test('should submit the form successfully', () => {
    const { getByLabelText, getByText } = render(<ValidationForm />);
    
    fireEvent.change(getByLabelText('Name:'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Roll No:'), { target: { value: '12345678' } });
    fireEvent.change(getByLabelText('PAN Card:'), { target: { value: 'AZNPH7488K' } });
    fireEvent.change(getByLabelText('Date of Birth:'), { target: { value: '2000-01-01' } });

    fireEvent.submit(getByText('Submit'));
    expect(window.alert).toHaveBeenCalledWith('Form submitted successfully!');
  });

