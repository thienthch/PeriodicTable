const data = [
    {
        row: '1',
        column: '1',
        name: 'Hydrogen',
        number: '1',
        symbol: 'H',
        atomic: '1.008',
    },
    {
        row: '18',
        column: '1',
        name: 'Helium',
        number: '2',
        symbol: 'He',
        atomic: '4.0026',
    },
    {
        row: '1',
        column: '2',
        name: 'Lithium',
        number: '3',
        symbol: 'Li',
        atomic: '6.94',
    },
    {
        row: '2',
        column: '2',
        name: 'Beryllium',
        number: '4',
        symbol: 'Be',
        atomic: '9.0122',
    },
    {
        row: '13',
        column: '2',
        name: 'Boron',
        number: '5',
        symbol: 'B',
        atomic: '10.81',
    },
    {
        row: '14',
        column: '2',
        name: 'Carbon',
        number: '6',
        symbol: 'C',
        atomic: '12.011',
    },
    {
        row: '15',
        column: '2',
        name: 'Nitrogen',
        number: '7',
        symbol: 'Ni',
        atomic: '14.007',
    },
    {
        row: '16',
        column: '2',
        name: 'Oxigen',
        number: '8',
        symbol: 'O',
        atomic: '15.999',
    },
    {
        row: '17',
        column: '2',
        name: 'Flourine',
        number: '9',
        symbol: 'F',
        atomic: '18.988',
    },
    {
        row: '18',
        column: '2',
        name: 'Neon',
        number: '10',
        symbol: 'Ne',
        atomic: '20.18',
    },
    {
        row: '1',
        column: '3',
        name: 'Sodium',
        number: '11',
        symbol: 'Na',
        atomic: '22.99',
    },
    {
        row: '2',
        column: '3',
        name: 'Magnesium',
        number: '12',
        symbol: 'Mg',
        atomic: '24.305',
    },
    {
        row: '13',
        column: '3',
        name: 'Aluminium',
        number: '13',
        symbol: 'Al',
        atomic: '26.982',
    },
    {
        row: '14',
        column: '3',
        name: 'Silicon',
        number: '14',
        symbol: 'Si',
        atomic: '28.085',
    },
    {
        row: '15',
        column: '3',
        name: 'Phosphorus',
        number: '15',
        symbol: 'P',
        atomic: '30.974',
    },
    {
        row: '16',
        column: '3',
        name: 'Sulfur',
        number: '16',
        symbol: 'S',
        atomic: '32.06',
    },
    {
        row: '17',
        column: '3',
        name: 'Chlorine',
        number: '17',
        symbol: 'Cl',
        atomic: '35.45',
    },
    {
        row: '18',
        column: '3',
        name: 'Argon',
        number: '18',
        symbol: 'Ar',
        atomic: '39.948',
    },
    {
        row: '1',
        column: '4',
        name: 'Potassium',
        number: '19',
        symbol: 'K',
        atomic: '39.098',
    },
    {
        row: '2',
        column: '4',
        name: 'Calcium',
        number: '20',
        symbol: 'Ca',
        atomic: '40.078',
    },
    {
        row: '3',
        column: '4',
        name: 'Scansium',
        number: '21',
        symbol: 'Sc',
        atomic: '44.956',
    },
    {
        row: '4',
        column: '4',
        name: 'Titanium',
        number: '22',
        symbol: 'Ti',
        atomic: '47.867',
    },
    {
        row: '5',
        column: '4',
        name: 'Vanadium',
        number: '23',
        symbol: 'V',
        atomic: '50.942',
    },
    {
        row: '6',
        column: '4',
        name: 'Chromium',
        number: '24',
        symbol: 'Cr',
        atomic: '51.996',
    },
    {
        row: '7',
        column: '4',
        name: 'Manganese',
        number: '25',
        symbol: 'Mn',
        atomic: '54.938',
    },
    {
        row: '8',
        column: '4',
        name: 'Iron',
        number: '26',
        symbol: 'Fe',
        atomic: '55.845',
    },
    {
        row: '9',
        column: '4',
        name: 'Cobalt',
        number: '27',
        symbol: 'Co',
        atomic: '58.933',
    },
    {
        row: '10',
        column: '4',
        name: 'Nickel',
        number: '28',
        symbol: 'Ni',
        atomic: '58.693',
    },
    {
        row: '11',
        column: '4',
        name: 'Copper',
        number: '29',
        symbol: 'Cu',
        atomic: '63.546',
    },
    {
        row: '12',
        column: '4',
        name: 'Zinc',
        number: '30',
        symbol: 'Zn',
        atomic: '65.38',
    },
    {
        row: '13',
        column: '4',
        name: 'Gallium',
        number: '31',
        symbol: 'Ga',
        atomic: '69.723',
    },
    {
        row: '14',
        column: '4',
        name: 'Germanium',
        number: '32',
        symbol: 'Ge',
        atomic: '72.63',
    },
    {
        row: '15',
        column: '4',
        name: 'Arsenic',
        number: '33',
        symbol: 'As',
        atomic: '74.922',
    },
    {
        row: '16',
        column: '4',
        name: 'Selenium',
        number: '34',
        symbol: 'Se',
        atomic: '78.971',
    },
    {
        row: '17',
        column: '4',
        name: 'Bromine',
        number: '35',
        symbol: 'Br',
        atomic: '79.904',
    },
    {
        row: '18',
        column: '4',
        name: 'Krypton',
        number: '36',
        symbol: 'Kr',
        atomic: '83.798',
    },
    {
        row: '1',
        column: '5',
        name: 'Rubidium',
        number: '37',
        symbol: 'Rb',
        atomic: '85.468',
    },
    {
        row: '2',
        column: '5',
        name: 'Strontium',
        number: '38',
        symbol: 'Sr',
        atomic: '87.62',
    },
    {
        row: '3',
        column: '5',
        name: 'Yttrium',
        number: '39',
        symbol: 'Y',
        atomic: '88.906',
    },
    {
        row: '4',
        column: '5',
        name: 'Zirconium',
        number: '40',
        symbol: 'Zr',
        atomic: '91.224',
    },
    {
        row: '5',
        column: '5',
        name: 'Niobium',
        number: '41',
        symbol: 'Nb',
        atomic: '92.906',
    },
    {
        row: '6',
        column: '5',
        name: 'Molybdenum',
        number: '42',
        symbol: 'Mo',
        atomic: '95.95',
    },
    {
        row: '7',
        column: '5',
        name: 'Technetium',
        number: '43',
        symbol: 'Tc',
        atomic: '98',
    },
    {
        row: '8',
        column: '5',
        name: 'Ruthenium',
        number: '44',
        symbol: 'Ru',
        atomic: '101.07',
    },
    {
        row: '9',
        column: '5',
        name: 'Rhodium',
        number: '45',
        symbol: 'Rh',
        atomic: '102.91',
    },
    {
        row: '10',
        column: '5',
        name: 'Palladium',
        number: '46',
        symbol: 'Pd',
        atomic: '106.42',
    },
    {
        row: '11',
        column: '5',
        name: 'Silver',
        number: '47',
        symbol: 'Ag',
        atomic: '107.87',
    },
    {
        row: '12',
        column: '5',
        name: 'Cadmium',
        number: '48',
        symbol: 'Cd',
        atomic: '112.41',
    },
    {
        row: '13',
        column: '5',
        name: 'Indium',
        number: '49',
        symbol: 'In',
        atomic: '114.82',
    },
    {
        row: '14',
        column: '5',
        name: 'Tin',
        number: '50',
        symbol: 'Sn',
        atomic: '118.711',
    },
    {
        row: '15',
        column: '5',
        name: 'Antimony',
        number: '51',
        symbol: 'Sb',
        atomic: '121.76',
    },
    {
        row: '16',
        column: '5',
        name: 'Tellurium',
        number: '52',
        symbol: 'Te',
        atomic: '127.6',
    },
    {
        row: '17',
        column: '5',
        name: 'Iodine',
        number: '53',
        symbol: 'I',
        atomic: '126.9',
    },
    {
        row: '18',
        column: '5',
        name: 'Xenon',
        number: '54',
        symbol: 'Xe',
        atomic: '131.29',
    },
    {
        row: '1',
        column: '6',
        name: 'Caesium',
        number: '55',
        symbol: 'Cs',
        atomic: '132.91',
    },
    {
        row: '2',
        column: '6',
        name: 'Barium',
        number: '56',
        symbol: 'Ba',
        atomic: '137.33',
    },
    {
        row: '3',
        column: '6',
        name: '57-71',
        number: '',
        symbol: '',
        atomic: '',
    },
    {
        row: '4',
        column: '6',
        name: 'Hafnium',
        number: '72',
        symbol: 'Hf',
        atomic: '178.49',
    },
    {
        row: '5',
        column: '6',
        name: 'Tantalum',
        number: '73',
        symbol: 'Ta',
        atomic: '180.95',
    },
    {
        row: '6',
        column: '6',
        name: 'Tungsten',
        number: '74',
        symbol: 'W',
        atomic: '183.84',
    },
    {
        row: '7',
        column: '6',
        name: 'Rhenium',
        number: '75',
        symbol: 'Re',
        atomic: '186.21',
    },
    {
        row: '8',
        column: '6',
        name: 'Osmium',
        number: '76',
        symbol: 'Os',
        atomic: '190.23',
    },
    {
        row: '9',
        column: '6',
        name: 'Iridium',
        number: '77',
        symbol: 'Ir',
        atomic: '192.22',
    },
    {
        row: '10',
        column: '6',
        name: 'Platinum',
        number: '78',
        symbol: 'Pt',
        atomic: '195.08',
    },
    {
        row: '11',
        column: '6',
        name: 'Gold',
        number: '79',
        symbol: 'Au',
        atomic: '196.97',
    },
    {
        row: '12',
        column: '6',
        name: 'Mercury',
        number: '80',
        symbol: 'Hg',
        atomic: '200.59',
    },
    {
        row: '13',
        column: '6',
        name: 'Thallium',
        number: '81',
        symbol: 'Tl',
        atomic: '204.38',
    },
    {
        row: '14',
        column: '6',
        name: 'Lead',
        number: '82',
        symbol: 'Pb',
        atomic: '207.2',
    },
    {
        row: '15',
        column: '6',
        name: 'Bismuth',
        number: '83',
        symbol: 'Bi',
        atomic: '208.98',
    },
    {
        row: '16',
        column: '6',
        name: 'Polonium',
        number: '84',
        symbol: 'Bo',
        atomic: '209',
    },
    {
        row: '17',
        column: '6',
        name: 'Astatine',
        number: '85',
        symbol: 'At',
        atomic: '210',
    },
    {
        row: '18',
        column: '6',
        name: 'Radon',
        number: '86',
        symbol: 'Rn',
        atomic: '222',
    },
    {
        row: '1',
        column: '7',
        name: 'Francium',
        number: '87',
        symbol: 'Fr',
        atomic: '223',
    },
    {
        row: '2',
        column: '7',
        name: 'Radium',
        number: '88',
        symbol: 'Ra',
        atomic: '226',
    },
    {
        row: '3',
        column: '7',
        name: '89-103',
        number: '',
        symbol: '',
        atomic: '',
    },
    {
        row: '4',
        column: '7',
        name: 'Rutherfordium',
        number: '104',
        symbol: 'Rf',
        atomic: '267',
    },
    {
        row: '5',
        column: '7',
        name: 'Dubnium',
        number: '105',
        symbol: 'Db',
        atomic: '268',
    },
    {
        row: '6',
        column: '7',
        name: 'Seaborgium',
        number: '106',
        symbol: 'Sg',
        atomic: '269',
    },
    {
        row: '7',
        column: '7',
        name: 'Bohrium',
        number: '107',
        symbol: 'Bh',
        atomic: '270',
    },
    {
        row: '8',
        column: '7',
        name: 'Hassium',
        number: '108',
        symbol: 'Hs',
        atomic: '277',
    },
    {
        row: '9',
        column: '7',
        name: 'Meitnerium',
        number: '109',
        symbol: 'Mt',
        atomic: '278',
    },
    {
        row: '10',
        column: '7',
        name: 'Darmstadtium',
        number: '110',
        symbol: 'Ds',
        atomic: '281',
    },
    {
        row: '11',
        column: '7',
        name: 'Roentgenium',
        number: '111',
        symbol: 'Rg',
        atomic: '282',
    },
    {
        row: '12',
        column: '7',
        name: 'Copernicium',
        number: '112',
        symbol: 'Cn',
        atomic: '282',
    },
    {
        row: '13',
        column: '7',
        name: 'Nihonium',
        number: '113',
        symbol: 'Nh',
        atomic: '286',
    },
    {
        row: '14',
        column: '7',
        name: 'Flerovium',
        number: '114',
        symbol: 'Fl',
        atomic: '289',
    },
    {
        row: '15',
        column: '7',
        name: 'Moscovium',
        number: '115',
        symbol: 'Mc',
        atomic: '290',
    },
    {
        row: '16',
        column: '7',
        name: 'Livermorium',
        number: '116',
        symbol: 'Lv',
        atomic: '293',
    },
    {
        row: '17',
        column: '7',
        name: 'Tennessine',
        number: '117',
        symbol: 'Ts',
        atomic: '294',
    },
    {
        row: '18',
        column: '7',
        name: 'Oganesson',
        number: '118',
        symbol: 'Og',
        atomic: '294',
    },
    {
        row: '4',
        column: '9',
        name: 'Lanthanum',
        number: '57',
        symbol: 'La',
        atomic: '138.91',
    },
    {
        row: '5',
        column: '9',
        name: 'Cerium',
        number: '58',
        symbol: 'Ce',
        atomic: '140.12',
    },
    {
        row: '6',
        column: '9',
        name: 'Praseodymium',
        number: '59',
        symbol: 'Pr',
        atomic: '140.91',
    },
    {
        row: '7',
        column: '9',
        name: 'Neodymium',
        number: '60',
        symbol: 'Nd',
        atomic: '144.24',
    },
    {
        row: '8',
        column: '9',
        name: 'Promethium',
        number: '61',
        symbol: 'Pm',
        atomic: '144.24',
    },
    {
        row: '9',
        column: '9',
        name: 'Samarium',
        number: '62',
        symbol: 'Sm',
        atomic: '150.36',
    },
    {
        row: '10',
        column: '9',
        name: 'Europium',
        number: '63',
        symbol: 'Eu',
        atomic: '151.96',
    },
    {
        row: '11',
        column: '9',
        name: 'Gadolinium',
        number: '64',
        symbol: 'Gd',
        atomic: '157.25',
    },
    {
        row: '12',
        column: '9',
        name: 'Terbium',
        number: '65',
        symbol: 'Tb',
        atomic: '168.93',
    },
    {
        row: '13',
        column: '9',
        name: 'Dysprosium',
        number: '66',
        symbol: 'Dy',
        atomic: '162.5',
    },
    {
        row: '14',
        column: '9',
        name: 'Holmium',
        number: '67',
        symbol: 'Ho',
        atomic: '164.93',
    },
    {
        row: '15',
        column: '9',
        name: 'Erbium',
        number: '68',
        symbol: 'Er',
        atomic: '167.26',
    },
    {
        row: '16',
        column: '9',
        name: 'Thulium',
        number: '69',
        symbol: 'Tm',
        atomic: '168.93',
    },
    {
        row: '17',
        column: '9',
        name: 'Ytterbium',
        number: '70',
        symbol: 'Yb',
        atomic: '173.05',
    },
    {
        row: '18',
        column: '9',
        name: 'Lutetium',
        number: '71',
        symbol: 'Lu',
        atomic: '174.97',
    },
    {
        row: '4',
        column: '10',
        name: 'Actinium',
        number: '89',
        symbol: 'Ac',
        atomic: '227',
    },
    {
        row: '5',
        column: '10',
        name: 'Thorium',
        number: '90',
        symbol: 'Th',
        atomic: '232.04',
    },
    {
        row: '6',
        column: '10',
        name: 'Protactinium',
        number: '91',
        symbol: 'Pa',
        atomic: '231.04',
    },
    {
        row: '7',
        column: '10',
        name: 'Uranium',
        number: '92',
        symbol: 'U',
        atomic: '238.03',
    },
    {
        row: '8',
        column: '10',
        name: 'Neptunium',
        number: '93',
        symbol: 'Np',
        atomic: '237',
    },
    {
        row: '9',
        column: '10',
        name: 'Plutonium',
        number: '94',
        symbol: 'Pu',
        atomic: '244',
    },
    {
        row: '10',
        column: '10',
        name: 'Americium',
        number: '95',
        symbol: 'Am',
        atomic: '243',
    },
    {
        row: '11',
        column: '10',
        name: 'Curium',
        number: '96',
        symbol: 'Cm',
        atomic: '247',
    },
    {
        row: '12',
        column: '10',
        name: 'Berkelium',
        number: '97',
        symbol: 'Bk',
        atomic: '247',
    },
    {
        row: '13',
        column: '10',
        name: 'Californium',
        number: '98',
        symbol: 'Cf',
        atomic: '251',
    },
    {
        row: '14',
        column: '10',
        name: 'Einsteinium',
        number: '99',
        symbol: 'Es',
        atomic: '252',
    },
    {
        row: '15',
        column: '10',
        name: 'Fermium',
        number: '100',
        symbol: 'Fm',
        atomic: '257',
    },
    {
        row: '16',
        column: '10',
        name: 'Mendelevium',
        number: '101',
        symbol: 'Md',
        atomic: '258',
    },
    {
        row: '17',
        column: '10',
        name: 'Nobelium',
        number: '102',
        symbol: 'No',
        atomic: '259',
    },
    {
        row: '18',
        column: '10',
        name: 'Lawrencium',
        number: '103',
        symbol: 'Lr',
        atomic: '266',
    }
]

export default data;