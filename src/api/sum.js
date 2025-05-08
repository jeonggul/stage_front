import client from './client';

export function calculateSum(a, b) {
  return client.post('/api/sum', {a, b});
}
