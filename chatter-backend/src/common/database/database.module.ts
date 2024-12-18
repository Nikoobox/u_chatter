import { Module } from '@nestjs/common';
import { MongooseModule, ModelDefinition } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { DbMigrationService } from './db-migration.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService], // Inject ConfigService
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'), // Access MONGODB_URI
      }),
    }),
  ],
  providers: [DbMigrationService],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
