import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './controllers/posts.controller';
import { postsProviders } from './providers/posts.providers';

@Module({
  providers: [PostsService, ...postsProviders],
  controllers: [PostsController]
})
export class PostsModule {}
