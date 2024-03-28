import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index') // Render the 'index.hbs' template
  home() {
    return {
      title: 'Use HTML Template Engine', // Dynamic data to be passed to the template
      steps: ['1. Download HTML Template Engine', '2. ???', '3. Profit!'] // Dynamic data to be passed to the template
    };
  }
}
