import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://iskra96:Qwe123@nestjsapp-ronnd.mongodb.net/OrderDB?retryWrites=true&w=majority',
      host: 'localhost',
      entities: [__dirname + '/../**/*.entity.ts'],
      database: 'OrderDB',
      synchronize: true,
      port: 27017,
      useUnifiedTopology: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
