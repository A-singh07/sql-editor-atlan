// CSV Files
import categories from '../data/categories.csv';
import customers from '../data/customers.csv';
import products from '../data/products.csv';
import regions from '../data/regions.csv';
import shippers from '../data/shippers.csv';
import suppliers from '../data/suppliers.csv';
import territories from '../data/territories.csv';

export const csvFilesList = [
  {
    name: 'categories',
    file: categories,
  },
  {
    name: 'customers',
    file: customers
  },
  {
    name: 'products',
    file: products
  },
  {
    name: 'regions',
    file: regions
  },
  {
    name: 'shippers',
    file: shippers
  },
  {
    name: 'suppliers',
    file: suppliers
  },
  {
    name: 'territories',
    file: territories
  },
]
