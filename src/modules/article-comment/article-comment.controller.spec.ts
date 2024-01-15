import { Test, TestingModule } from '@nestjs/testing';
import { ArticleCommentController } from './article-comment.controller';
import { ArticleCommentService } from './article-comment.service';

describe('ArticleCommentController', () => {
  let controller: ArticleCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleCommentController],
      providers: [ArticleCommentService],
    }).compile();

    controller = module.get<ArticleCommentController>(ArticleCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
