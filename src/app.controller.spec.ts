import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  /**
   * Tests the /api/v1/test endpoint.
   */
  describe('Test', () => {
    it('should return "test"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getTest()).toBe('test');
    });
  });
});
