import { HttpErrorService } from './http-error.service';

describe('HttpErrorService', () => {
  let httpErrorService: HttpErrorService;

  beforeEach(() => {
    httpErrorService = new HttpErrorService();
  });

  it('#getSubject should return something', () => {
    expect(httpErrorService.getSubject()).toBeDefined();
  });
});
