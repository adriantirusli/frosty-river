export const formCreate = {
  Komoditas: {
    type: 'text',
    required: true,
    placeholder: 'Contoh: Bandeng',
  },
  Provinsi: {
    type: 'select',
    required: true,
    options: [
      {
        value: 'BANTEN',
        label: 'BANTEN',
      },
      {
        value: 'JAWA BARAT',
        label: 'JAWA BARAT',
      },
      {
        value: 'JAWA TENGAH',
        label: 'JAWA TENGAH',
      },
      {
        value: 'SUMATRA UTARA',
        label: 'SUMATRA UTARA',
      },
      {
        value: 'SULAWESI BARAT',
        label: 'SULAWESI BARAT',
      },
    ],
    placeholder: 'Pilih Provinsi',
  },
  Kota: {
    type: 'select',
    required: true,
    options: [
      {
        value: 'PANDEGLANG',
        label: 'PANDEGLANG',
      },
      {
        value: 'MAMUJU',
        label: 'JAWA BARAT',
      },
      {
        value: 'SEMARANG',
        label: 'SEMARANG',
      },
      {
        value: 'MEDAN',
        label: 'MEDAN',
      },
      {
        value: 'BANDUNG',
        label: 'BANDUNG',
      },
    ],
    placeholder: 'Pilih Kota',
  },
  Ukuran: {
    type: 'number',
    required: true,
    min: 0,
    placeholder: 'Contoh: 60',
  },
  Harga: {
    type: 'number',
    required: true,
    min: 500,
    placeholder: 'Contoh: 50000',
  },
  Save: {
    type: 'submit',
  },
}
