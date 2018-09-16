import { OutfitModule } from './outfit.module';

describe('OutfitModule', () => {
  let outfitModule: OutfitModule;

  beforeEach(() => {
    outfitModule = new OutfitModule();
  });

  it('should create an instance', () => {
    expect(outfitModule).toBeTruthy();
  });
});
