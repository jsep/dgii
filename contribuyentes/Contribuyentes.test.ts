import {Contribuyentes} from './Contribuyentes';

jest.mock('../config', () => {
  return {PROJECT_ROOT: ''};
});

describe('Contribuyentes', function () {
  it('should create an instance', () => {
    let contribuyentes = new Contribuyentes();
    expect(contribuyentes).toBeTruthy();
  });
});
