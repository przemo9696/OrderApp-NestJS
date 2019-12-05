import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { OrderModule } from './order/order.module';

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
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
