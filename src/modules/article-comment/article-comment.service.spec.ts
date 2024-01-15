import { Test, TestingModule } from '@nestjs/testing';
import { ArticleCommentService } from './article-comment.service';

describe('ArticleCommentService', () => {
  let service: ArticleCommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleCommentService],
    }).compile();

    service = module.get<ArticleCommentService>(ArticleCommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
