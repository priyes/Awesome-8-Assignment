import { BookRepository } from '../repositories/book_repository';
import { BookEntity } from './../entities/book_entity'

export class BookService {
  private readonly bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  public async buyBook(userId: number, bookId: number, quantity: number): Promise<void> {
    try {

      // Using Sequelize Transactions we can implement the following: 


      // Deduct the book price * quantity from the user's balance
      // Create a new transaction record in the "transactions" table
      // Update the book quantity in the "books" table
      // Commit the transaction

      return
    } catch (error) {
      // Rollback the transaction in case of any error
      throw error;
    }
  }

  public async getBooks(): Promise<BookEntity[]> {
    try {
      const resultSet: BookEntity[] = await this.bookRepository.getBooks()
      return resultSet
    } catch (error) {
      // log error
      throw error;
    }
  }

}