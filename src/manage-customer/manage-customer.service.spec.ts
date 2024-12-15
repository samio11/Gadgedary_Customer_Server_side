import { Test, TestingModule } from '@nestjs/testing';
import { ManageCustomerService } from './manage-customer.service';

describe('ManageCustomerService', () => {
  let service: ManageCustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManageCustomerService],
    }).compile();

    service = module.get<ManageCustomerService>(ManageCustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
