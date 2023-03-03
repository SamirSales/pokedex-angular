import { BackgroundColorByPokemonTypePipe } from './background-color-by-pokemon-type.pipe';

describe('BackgroundColorByPokemonTypePipe', () => {
  let backgroundColorByPokemonTypePipe: BackgroundColorByPokemonTypePipe;

  beforeEach(() => {
    backgroundColorByPokemonTypePipe = new BackgroundColorByPokemonTypePipe();
  });

  it('test correct return (outlined = false)', () => {
    expect(backgroundColorByPokemonTypePipe.transform('normal')).toBe('#B0BEC5');
    expect(backgroundColorByPokemonTypePipe.transform('fighting')).toBe('#F48FB1');
    expect(backgroundColorByPokemonTypePipe.transform('flying')).toBe('#82B1FF');
    expect(backgroundColorByPokemonTypePipe.transform('poison')).toBe('#CE93D8');
    expect(backgroundColorByPokemonTypePipe.transform('ground')).toBe('#F57F17');
    expect(backgroundColorByPokemonTypePipe.transform('rock')).toBe('#D7CCC8');
    expect(backgroundColorByPokemonTypePipe.transform('bug')).toBe('#C5E1A5');
    expect(backgroundColorByPokemonTypePipe.transform('ghost')).toBe('#0277BD');
    expect(backgroundColorByPokemonTypePipe.transform('steel')).toBe('#80CBC4');
    expect(backgroundColorByPokemonTypePipe.transform('water')).toBe('#40C4FF');
    expect(backgroundColorByPokemonTypePipe.transform('fire')).toBe('#FFB300');
    expect(backgroundColorByPokemonTypePipe.transform('grass')).toBe('#388E3C');
    expect(backgroundColorByPokemonTypePipe.transform('electric')).toBe('#FFEE58');
    expect(backgroundColorByPokemonTypePipe.transform('psychic')).toBe('#EF9A9A');
    expect(backgroundColorByPokemonTypePipe.transform('ice')).toBe('#B2EBF2');
    expect(backgroundColorByPokemonTypePipe.transform('dragon')).toBe('#039BE5');
    expect(backgroundColorByPokemonTypePipe.transform('dark')).toBe('#757575');
    expect(backgroundColorByPokemonTypePipe.transform('fairy')).toBe('#F8BBD0');
    expect(backgroundColorByPokemonTypePipe.transform('')).toBe('#FF9800');
  });

  it('test correct return (outlined = true)', () => {
    expect(backgroundColorByPokemonTypePipe.transform('normal', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('fighting', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('flying', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('poison', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('ground', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('rock', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('bug', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('ghost', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('steel', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('water', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('fire', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('grass', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('electric', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('psychic', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('ice', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('dragon', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('dark', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('fairy', true)).toBe('transparent');
    expect(backgroundColorByPokemonTypePipe.transform('', true)).toBe('transparent');
  });
});
