import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './modules/store/store.module';

@Module({
    imports: [
      ConfigModule.forRoot({ isGlobal: true }),
      MongooseModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (config: ConfigService) => ({
          uri: config.get<string>('MONGO_URI'),
        }),
      }),
      StoreModule,
    ],
    controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
