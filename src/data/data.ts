export interface IData {
  label: string;
  value: string;
}

enum Options {
  ALLREGION = 'All region',
  AFRICA = 'Africa',
  AMERICA = 'America',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania',
}
enum OptionsValue {
  ALLREGION = 'all',
  AFRICA = 'Africa',
  AMERICA = 'America',
  ASIA = 'Asia',
  EUROPE = 'Europe',
  OCEANIA = 'Oceania',
}

export const options: IData[] = [
  { label: Options.ALLREGION, value: OptionsValue.ALLREGION },
  { label: Options.AFRICA, value: OptionsValue.AFRICA },
  { label: Options.AMERICA, value: OptionsValue.AMERICA },
  { label: Options.ASIA, value: OptionsValue.ASIA },
  { label: Options.EUROPE, value: OptionsValue.EUROPE },
  { label: Options.OCEANIA, value: OptionsValue.OCEANIA },
];
