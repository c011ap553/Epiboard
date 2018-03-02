export default [
  {
    name: 'trends',
    title: 'Trends',
    type: 'switch',
    label: 'Show Google trends',
    value: true,
  },
  {
    name: 'header_design',
    title: 'Header design',
    type: 'select',
    value: 'full',
    label: 'Pick a design',
    items: [
      'full',
      'toolbar',
    ],
  },
  {
    name: 'country',
    title: 'Google trends country',
    type: 'select',
    value: 'france',
    label: 'Pick a country',
    items: [
      'romania',
      'finland',
      'portugal',
      'mexico',
      'egypt',
      'brazil',
      'united_states',
      'india',
      'malaysia',
      'austria',
      'colombia',
      'japan',
      'hungary',
      'new zealand',
      'greece',
      'taiwan',
      'canada',
      'italy',
      'france',
      'kenya',
      'ireland',
      'nigeria',
      'norway',
      'turkey',
      'israel',
      'australia',
      'singapore',
      'netherlands',
      'germany',
      'chile',
      'belgium',
      'thailand',
      'argentina',
      'spain',
      'south_korea',
      'ukraine',
      'hong_kong',
      'south_africa',
      'denmark',
      'poland',
      'indonesia',
      'czech_republic',
      'russia',
      'sweden',
      'vietnam',
      'saudi_arabia',
      'switzerland',
      'philippines',
      'united_kingdom',
    ],
  },
  {
    name: 'google_now',
    title: 'Google now background',
    type: 'select',
    value: 'Random',
    lable: 'Pick a city',
    items: [
      'Random',
      'Austin',
      'Beach',
      'Berlin',
      'Chicago',
      'Default',
      'Great Plains',
      'London',
      'New York',
      'Paris',
      'San Francisco',
      'Seattle',
      'Tahoe',
    ],
  },
];
