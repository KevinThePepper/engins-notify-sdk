import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { successReponseJson } from './util/response.util';

/**
 * Base app controller.
 */
@ApiBearerAuth()
@ApiTags('app')
@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Test endpoint that returns the string `test`.
   */
  @Get('test')
  @ApiOperation({ summary: 'Test endpoint' })
  @ApiResponse({
    status: 200,
    description: 'Successfully tested'
  })
  getTest() {
    return successReponseJson(this.appService.getTest());
  }
}
