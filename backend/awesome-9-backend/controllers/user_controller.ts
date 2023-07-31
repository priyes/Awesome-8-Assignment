import { Request, Response } from 'express';
import { UserService } from '../services/user_service';

export class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getUserBalance(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const balance = await this.userService.getUserBalance(parseInt(userId, 10));
      res.status(200).json({ balance });
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching the user balance.' });
    }
  }
}