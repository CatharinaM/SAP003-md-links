const mdLinks = require('../index.js');

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  test('returns text and link', () => {
    return mdLinks('/home/ubutu/Documentos/projetos/SAP003-md-links/lib/__test__/README.md')
    .then((result) => {
      expect(result).toEqual([{ text: 'Markdown', href: 'https://pt.wikipedia.org/wiki/Markdown' }, { text: 'Node.js', href: 'https://nodejs.org/' }]);
    })
});

  test('returns error', () => {
    return mdLinks('lib/__test__')
    .catch((error) => {
     expect(error).toEqual('file is not found');
   })
});

});

