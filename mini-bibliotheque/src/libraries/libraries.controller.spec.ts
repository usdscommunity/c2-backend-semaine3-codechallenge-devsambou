import { Test, TestingModule } from '@nestjs/testing';
import { LibraryController } from './libraries.controller';

describe('LibrariesController', () => {
  let controller: LibraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibraryController],
    }).compile();

    controller = module.get<LibraryController>(LibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
