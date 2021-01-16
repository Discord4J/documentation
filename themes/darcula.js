const theme = {
  plain: {
    color: '#a9b7c6',
    backgroundColor: '#2b2b2b',
  },
  styles: [
    {
      types: ['prolog', 'cdata'],
      style: {
        color: 'rgb(189, 147, 249)',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#808080'
      },
    },
    {
      types: ['delimiter', 'boolean', 'keyword', 'selector', 'important', 'atrule'],
      style: {
        color: '#cc7832',
      },
    },
    {
      types: ['operator', 'punctuation', 'attr-name'],
      style: {
        color: '#a9b7c6',
      },
    },
    {
      types: ['tag', 'doctype', 'builtin'],
      style: {
        color: '#e8bf6a',
      },
    },
    {
      types: ['entity', 'number', 'symbol'],
      style: {
        color: '#6897bb',
      },
    },
    {
      types: ['property', 'constant', 'variable'],
      style: {
        color: '#9876aa',
      },
    },
    {
      types: ['string', 'char'],
      style: {
        color: '#6a8759',
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: '#a5c261',
      },
    },
    {
      types: ['url'],
      style: {
        color: '#287bde',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#ffc66d',
      },
    },
    {
      types: ['regex'],
      style: {
        color: '#364135',
      },
    },
    {
      types: ['bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted'],
      style: {
        fontStyle: '#294436',
      },
    },
    {
      types: ['deleted'],
      style: {
        fontStyle: '#484a4a',
      },
    },
  ],
}

module.exports = theme
