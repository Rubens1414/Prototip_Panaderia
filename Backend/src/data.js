export const sample_breads = [
  {
    id: '1',
    name: 'Baguette',
    cookTime: '20-30 minutos',
    price: 3,
    origins: ['France'],
    imageUrl: 'bread-1.jpg',
    tags: ['Crusty', 'Dinner'],
  },
  {
    id: '2',
    name: 'Ciabatta',
    price: 4, 
    cookTime: '30-40 minutos',
    origins: ['Italy'],
    imageUrl: 'bread-2.jpg',
    tags: ['Flatbread', 'Lunch'],
  },
  {
    id: '3',
    name: 'Rye Bread',
    price: 5,
    cookTime: '50-60 minutos',
    origins: ['Eastern Europe'],
    imageUrl: 'bread-3.jpg',
    tags: ['Dense', 'Sandwich'],
  },
  {
    id: '4',
    name: 'Sourdough',
    price: 6,
    cookTime: '20-24 minutos',
    origins: ['Egypt', 'Ancient'],
    imageUrl: 'bread-4.jpg',
    tags: ['Tangy', 'Breakfast'],
  },
  {
    id: '5',
    name: 'Focaccia',
    price: 4,
    cookTime: '20-30 minutos',
    origins: ['Italy'],
    imageUrl: 'bread-5.jpg',
    tags: ['Oily', 'Dinner'],
  },
  {
    id: '6',
    name: 'Whole Wheat Bread',
    price: 3,
    cookTime: '30-40 minutos',
    origins: ['Global'],
    imageUrl: 'bread-6.jpg',
    tags: ['Healthy', 'Lunch'],
  },
  {
    id: '7',
    name: 'Pumpernickel',
    cookTime: '15-24 horas',
    price: 4,
    origins: ['Germany'],
    imageUrl: 'bread-7.jpg',
    tags: ['Dense', 'Dark'],
  },
  {
    id: '8',
    name: 'Challah',
    price: 5,
    cookTime: '3-4 horas',
    origins: ['Jewish'],
    imageUrl: 'bread-8.jpg',
    tags: ['Braided', 'Festive'],
  },
  {
    id: '9',
    name: 'Brioche',
    price: 4,
    cookTime: '2-3 horas',
    origins: ['France'],
    imageUrl: 'bread-9.jpg',
    tags: ['Buttery', 'Breakfast'],
  },
  {
    id: '10',
    name: 'Cornbread',
    price: 3,
    cookTime: '20-30 minutos',
    origins: ['America'],
    imageUrl: 'bread-10.jpg',
    tags: ['Sweet', 'Dinner'],
  },
  {
    id: '11',
    name: 'Naan',
    price: 2,
    cookTime: '5-10 horas',
    origins: ['Indian'],
    imageUrl: 'bread-11.jpg',
    tags: ['Flatbread', 'Dinner'],
  },
  {
    id: '12',
    name: 'Multigrain Bread',
    price: 4,
    cookTime: '40-50 minutos',
    origins: ['Global'],
    imageUrl: 'bread-12.jpg',
    tags: ['Healthy', 'Breakfast'],
  },
];

export const sample_tags = [
  { name: 'All', count: 12 },  // Todos los panes
  { name: 'Dinner', count: 3 },  // Baguette, Focaccia, Cornbread
  { name: 'Lunch', count: 3 },  // Ciabatta, Whole Wheat Bread, Naan
  { name: 'Breakfast', count: 3 },  // Sourdough, Brioche, Multigrain Bread
  { name: 'Flatbread', count: 2 },  // Ciabatta, Naan
  { name: 'Healthy', count: 2 },  // Whole Wheat Bread, Multigrain Bread
  { name: 'Sandwich', count: 1 },  // Rye Bread
  { name: 'Festive', count: 1 },  // Challah
];

export const sample_users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    password: '12345',
    address: 'Toronto On',
    isAdmin: false,
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    password: '12345',
    address: 'Shanghai',
    isAdmin: true,
  },
];
