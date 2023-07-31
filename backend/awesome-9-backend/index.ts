import express, { Request, Response } from 'express';
import { BookController } from './controllers/book_controller';
import { UserController } from './controllers/user_controller';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();
app.use(express.json());

const port = 3000;

const bookController = new BookController();
const userController = new UserController();

// API endpoint to buy a book
app.post('/buyBook', bookController.buyBook.bind(bookController));


// API Books
app.get('/books', bookController.getBooks.bind(bookController));

// API endpoint to get a user's balance
app.get('/userBalance/:userId', userController.getUserBalance.bind(userController));




// API endpoint to buy a book
/**
 * @swagger
 * /buyBook:
 *   post:
 *     summary: Buy a book
 *     description: Use this endpoint to buy a book using a database transaction.
 *     parameters:
 *       - name: userId
 *         in: body
 *         description: ID of the user making the purchase.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: bookId
 *         in: body
 *         description: ID of the book to be purchased.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: quantity
 *         in: body
 *         description: Quantity of the book to be purchased.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book bought successfully.
 *       500:
 *         description: An error occurred while buying the book.
 */
app.post('/buyBook', bookController.buyBook.bind(bookController));

// API endpoint to get a user's balance
/**
 * @swagger
 * /userBalance/{userId}:
 *   get:
 *     summary: Get user balance
 *     description: Use this endpoint to get the balance of a user.
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: ID of the user whose balance is to be fetched.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User balance retrieved successfully.
 *       500:
 *         description: An error occurred while fetching the user balance.
 */
app.get('/userBalance/:userId', userController.getUserBalance.bind(userController));


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book Buying API',
      version: '1.0.0',
      description: 'API documentation for the book buying system.',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ['./controllers/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});