import { Test, TestingModule } from '@nestjs/testing';
import { ManageCustomerController } from './manage-customer.controller';

describe('ManageCustomerController', () => {
  let controller: ManageCustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManageCustomerController],
    }).compile();

    controller = module.get<ManageCustomerController>(ManageCustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
