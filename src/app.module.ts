import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://root:pass12345@127.0.0.0:27017/nest-blog',
      'mongodb://localhost:27017/nest-blog',
      { useNewUrlParser: true }
    ),
    BlogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
