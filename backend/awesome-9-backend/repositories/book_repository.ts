import { BookEntity } from './../entities/book_entity'
export class BookRepository {
    public async getBookQuantity(bookId: number): Promise<number> {
      
      // Sending constant values as of now save time implementing Sequelize ORM and creating tables with dummy data

      return 100
    }
  
    public async updateBookQuantity(bookId: number, newQuantity: number): Promise<void> {
      // Update DB Call
      return
    }
  
    public async getBooks(): Promise<BookEntity[]> {
       // Sending constant values as of now save time implementing Sequelize ORM and creating tables with dummy data

       const books: BookEntity[] = [
        { id: 1, label: '레이블라우스', discount: '10%', price: '57,600', currency: '원' },
        { id: 2, label: '레이블라우스', discount: '10%', price: '57,600', currency: '원' },
      ];

      return books
    }
    
  }