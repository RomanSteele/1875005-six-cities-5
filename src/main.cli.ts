import { CLIApplication, GenerateCommand, HelpCommand, ImportCommand, VersionCommand } from './cli/index.js';
import 'reflect-metadata';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
    new GenerateCommand(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
