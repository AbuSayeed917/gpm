import { sendQuoteRequest } from '../emailService';

describe('emailService', () => {
  test('sendQuoteRequest function exists', () => {
    expect(typeof sendQuoteRequest).toBe('function');
  });
});
