import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'h5bbhelo',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skarcdfoN1nvQUYKQfoU8mroaZGcBYHfqxWGjsaVjGJt7494tSjXSL5TWdE9ghpQRmhTJY6cLhSvXUegWfHurGy2lF5zZfbfXnqJTr0kg5bYhTlG5DUbQmLb92TIOBn86aZwlopnmXfB3Afcf38DRsvMTQRMN2RmlKIrXKOl8UMKzYpi0VWE',
  useCdn: false,
})