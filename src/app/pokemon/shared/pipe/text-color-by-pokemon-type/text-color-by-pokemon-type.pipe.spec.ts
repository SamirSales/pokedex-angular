import { TextColorByPokemonTypePipe } from './text-color-by-pokemon-type.pipe';

describe('TextColorByPokemonTypePipe', () => {
  let backgroundColorByPokemonTypePipe: TextColorByPokemonTypePipe;

  beforeEach(() => {
    backgroundColorByPokemonTypePipe = new TextColorByPokemonTypePipe();
  });

  it('test correct return (outlined = true)', () => {
    expect(backgroundColorByPokemonTypePipe.transform('normal', true)).toBe('#B0BEC5');
    expect(backgroundColorByPokemonTypePipe.transform('fighting', true)).toBe('#F48FB1');
    expect(backgroundColorByPokemonTypePipe.transform('flying', true)).toBe('#82B1FF');
    expect(backgroundColorByPokemonTypePipe.transform('poison', true)).toBe('#CE93D8');
    expect(backgroundColorByPokemonTypePipe.transform('ground', true)).toBe('#F57F17');
    expect(backgroundColorByPokemonTypePipe.transform('rock', true)).toBe('#D7CCC8');
    expect(backgroundColorByPokemonTypePipe.transform('bug', true)).toBe('#C5E1A5');
    expect(backgroundColorByPokemonTypePipe.transform('ghost', true)).toBe('#0277BD');
    expect(backgroundColorByPokemonTypePipe.transform('steel', true)).toBe('#80CBC4');
    expect(backgroundColorByPokemonTypePipe.transform('water', true)).toBe('#40C4FF');
    expect(backgroundColorByPokemonTypePipe.transform('fire', true)).toBe('#FFB300');
    expect(backgroundColorByPokemonTypePipe.transform('grass', true)).toBe('#388E3C');
    expect(backgroundColorByPokemonTypePipe.transform('electric', true)).toBe('#FFEE58');
    expect(backgroundColorByPokemonTypePipe.transform('psychic', true)).toBe('#EF9A9A');
    expect(backgroundColorByPokemonTypePipe.transform('ice', true)).toBe('#B2EBF2');
    expect(backgroundColorByPokemonTypePipe.transform('dragon', true)).toBe('#039BE5');
    expect(backgroundColorByPokemonTypePipe.transform('dark', true)).toBe('#757575');
    expect(backgroundColorByPokemonTypePipe.transform('fairy', true)).toBe('#F8BBD0');
    expect(backgroundColorByPokemonTypePipe.transform('', true)).toBe('#FF9800');
  });

  it('test correct return (outlined = false)', () => {
    expect(backgroundColorByPokemonTypePipe.transform('normal', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('fighting', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('flying', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('poison', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('ground', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('rock', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('bug', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('ghost', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('steel', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('water', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('fire', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('grass', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('electric', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('psychic', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('ice', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('dragon', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('dark', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('fairy', false)).toBe('white');
    expect(backgroundColorByPokemonTypePipe.transform('', false)).toBe('white');
  });
});
