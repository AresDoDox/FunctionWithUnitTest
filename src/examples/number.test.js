/** 
 * Viết hàm nhận vào một số n. n có phải là một số tăng dần không?
 * 
 * Ex:
 * - n = 123567 là một số tăng dần
 * - n = 11233 không phải là một số tăng dần
 * 
 * */

import { number } from './number';

describe('number(n)', () => {
  it('Trả về "false" khi n < 10', () => {
    Array.from(Array(10), (x, i) => expect(number(i)).toBe(false));
  });
  
  it('Trả về "false" khi n không phải là một số tăng dần', () => {
    [11, 22, 1224, 321, 24412, 553231, 1232521].forEach(x => {
      expect(number(x)).toBe(false);
    });
  });

  it('Trả về "true" khi n là một số tăng dần', () => {
    [12, 123, 1245, 23478, 23478, 123789, 1245789].forEach(x => {
      expect(number(x)).toBe(true);
    });
  });
});
