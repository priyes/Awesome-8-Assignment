import { Request, Response } from 'express';
import { BookService } from '../services/book_service';

export class BookController {
  private readonly bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  public async buyBook(req: Request, res: Response): Promise<void> {
    try {
      const { userId, bookId, quantity } = req.body;
      await this.bookService.buyBook(userId, bookId, quantity);
      res.status(200).json({ message: 'Book bought successfully.' });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while buying the book.' });
    }
  }

  public async getBooks(req: Request, res: Response): Promise<void> {
    try {
      const resultSet = await this.bookService.getBooks();
      res.status(200).json(resultSet);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while buying the book.' });
    }
  }
}