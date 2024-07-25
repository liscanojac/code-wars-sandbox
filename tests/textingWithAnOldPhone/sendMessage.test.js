import { sendMessage, sendMessage2 } from "../../katas/textingWithAnOldPhone";

describe('Testing old text messages', ()  => {

  test('hola', () => {

    expect(sendMessage('hola')).toBe('446665552');
  });

  test('Hola', () => {

    expect(sendMessage('Hola')).toBe('#44#6665552');
  });

  test('hoLa', () => {

    expect(sendMessage('hoLa')).toBe('44666#555#2');
  });

  test('hola Amigo', () => {

    expect(sendMessage('hola Amigo')).toBe('4466655520#2#6444 4666');
  });

  test('what!', () => {

    expect(sendMessage('what!')).toBe('944281111');
  });
  
  test('equal is =', () => {

    expect(sendMessage('equal is =')).toBe('3377882555044477770****');
  });

  test('3', () => {

    expect(sendMessage('3')).toBe('3-');
  });

  test('555', () => {

    expect(sendMessage('555')).toBe('5-5-5-');
  });

  test('a7BK', () => {

    expect(sendMessage('a7BK')).toBe('27-#2255');
  });

  test('Az', () => {

    expect(sendMessage('Az')).toBe('#2#9999');
  });

  test('hihi', () => {

    expect(sendMessage('hihi')).toBe('44 444 44 444');
  });

  test('4g', () => {

    expect(sendMessage('4g')).toBe('4-4');
  });

  test('4#', () => {

    expect(sendMessage('4#')).toBe('4-#-');
  });

  test('Jk', () => {

    expect(sendMessage('Jk')).toBe('#5#55');
  });

  test('hey', () => {

    expect(sendMessage('hey')).toBe('4433999');
  });

  test('one two three', () => {

    expect(sendMessage('one two three')).toBe('666 6633089666084477733 33');
  });

  test('Hello World!', () => {

    expect(sendMessage('Hello World!')).toBe('#44#33555 5556660#9#66677755531111');
  });

  test('Def Con 1!', () => {

    expect(sendMessage('Def Con 1!')).toBe('#3#33 3330#222#666 6601-1111');
  });

  test('A-z', () => {

    expect(sendMessage('A-z')).toBe('#2**#9999');
  });

  test('1984', () => {

    expect(sendMessage('1984')).toBe('1-9-8-4-');
  });

  test('Big thanks for checking out my kata', () => {

    expect(sendMessage('Big thanks for checking out my kata')).toBe('#22#444 4084426655777703336667770222443322255444664066688 806999055282');
  });

  test('5 consecutive emptyspaces', () => {

    expect(sendMessage('     ')).toBe('0 0 0 0 0');
  });

});
