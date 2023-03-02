import { HttpErrorService } from './http-error.service';

describe('HttpErrorService', () => {
  let httpErrorService: HttpErrorService;

  beforeEach(() => {
    httpErrorService = new HttpErrorService();
  });

  it('#getSubject should return an object', () => {
    expect(httpErrorService.getSubject()).toBeDefined();
  });
});
