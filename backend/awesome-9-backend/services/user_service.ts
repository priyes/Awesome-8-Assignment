import { UserRepository } from '../repositories/user_repository';

export class UserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async getUserBalance(userId: number): Promise<number> {
    // Sending constant values as of now save time implementing ORM and creating tables with dummy data 
    return 20
  }
}