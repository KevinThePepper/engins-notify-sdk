import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

/**
 * Base app controller.
 */
@ApiBearerAuth()
@ApiTags('app')
@Controller('/api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Test endpoint that returns the string `test`.
   */
  @Get('test')
  @ApiOperation({ summary: 'Test endpoint' })
  @ApiResponse({
    status: 200,
    description: 'Successfully tested',
  })
  getTest(): string {
    return this.appService.getTest();
  }
}
