import type { Lang } from './i18n/dictionaries'

/*
  Menu data — structured from the official PDF menus of Famiglia Mancini.
  Prices are in BRL and reflect the PDF values (may be outdated).
  Dish names are kept in their original Italian/Portuguese form across all locales.
  Descriptions are in Portuguese (pt) as in the original menu, with en/it translations.
*/

export type HouseId = 'trattoria' | 'ristorante' | 'pizzaria'

export type MenuItem = {
  code?: string
  name: string
  desc: Record<Lang, string>
  price: number | null
  serves?: string
  suggested?: string
}

export type MenuCategory = {
  id: string
  label: Record<Lang, string>
  items: MenuItem[]
}

export type House = {
  id: HouseId
  name: string
  kind: Record<Lang, string>
  note?: Record<Lang, string>
  categories: MenuCategory[]
}

export const houses: House[] = [
  {
    id: 'trattoria',
    name: 'Famiglia Mancini',
    kind: { pt: 'Trattoria', en: 'Trattoria', it: 'Trattoria' },
    note: {
      pt: 'Nossas porções são generosas, atendem de 2 a mais pessoas.',
      en: 'Our portions are generous, serving 2 or more people.',
      it: 'Le nostre porzioni sono generose, per 2 o più persone.',
    },
    categories: [
      {
        id: 'entradas',
        label: { pt: 'Entradas', en: 'Starters', it: 'Antipasti' },
        items: [
          {
            code: '001',
            name: 'Antepasto',
            desc: {
              pt: '100 gramas',
              en: '100 grams',
              it: '100 grammi',
            },
            price: 27,
          },
          {
            code: '002',
            name: 'Cesto de Pão Italiano',
            desc: {
              pt: 'A manteiga é por nossa conta.',
              en: 'Butter is on us.',
              it: 'Il burro è offerto dalla casa.',
            },
            price: 25,
          },
        ],
      },
      {
        id: 'sopas',
        label: { pt: 'Sopas', en: 'Soups', it: 'Zuppe' },
        items: [
          {
            code: '005',
            name: 'Canja de Galinha',
            desc: {
              pt: 'Caldo de galinha com arroz, galinha desfiada e cenoura ralada.',
              en: 'Chicken broth with rice, shredded chicken and grated carrot.',
              it: 'Brodo di pollo con riso, pollo sfilacciato e carota grattugiata.',
            },
            price: 136,
          },
          {
            code: '006',
            name: 'Capeletti in Brodo',
            desc: {
              pt: 'Caldo de galinha, capeletti, galinha desfiada, cenoura ralada e salsinha.',
              en: 'Chicken broth, capeletti, shredded chicken, grated carrot and parsley.',
              it: 'Brodo di pollo, capeletti, pollo sfilacciato, carota e prezzemolo.',
            },
            price: 136,
          },
          {
            code: '007',
            name: 'Creme de Palmito',
            desc: {
              pt: 'Creme de leite, gema de ovo e molho branco.',
              en: 'Cream, egg yolk and white sauce.',
              it: 'Panna, tuorlo d\'uovo e salsa bianca.',
            },
            price: 136,
          },
        ],
      },
      {
        id: 'massas',
        label: { pt: 'Massas', en: 'Pasta', it: 'Paste' },
        items: [
          {
            code: '045',
            name: 'Ao Sugo',
            desc: {
              pt: 'Tomates frescos, apurados com temperos aromáticos.',
              en: 'Fresh tomatoes, reduced with aromatic seasonings.',
              it: 'Pomodori freschi, ridotti con aromi.',
            },
            price: 228,
            suggested: 'todas',
          },
          {
            code: '046',
            name: 'Ao Alho e Óleo',
            desc: {
              pt: 'Alho, óleo e salsinha.',
              en: 'Garlic, oil and parsley.',
              it: 'Aglio, olio e prezzemolo.',
            },
            price: 228,
            suggested: 'todas',
          },
          {
            code: '047',
            name: 'À Napolitana',
            desc: {
              pt: 'Molho com tomates frescos, azeitonas pretas e temperos aromáticos.',
              en: 'Sauce with fresh tomatoes, black olives and aromatic seasonings.',
              it: 'Salsa con pomodori freschi, olive nere e aromi.',
            },
            price: 228,
            suggested: 'todas',
          },
          {
            code: '048',
            name: 'Ao Pesto',
            desc: {
              pt: 'Azeite, alho, pinole, nozes, parmesão e manjericão.',
              en: 'Olive oil, garlic, pine nuts, walnuts, parmesan and basil.',
              it: 'Olio, aglio, pinoli, noci, parmigiano e basilico.',
            },
            price: 228,
            suggested: 'spaghetti / fettuccine',
          },
          {
            code: '049',
            name: 'Com Brócolis',
            desc: {
              pt: 'Brócolis no azeite, alho e azeitonas pretas.',
              en: 'Broccoli in olive oil, garlic and black olives.',
              it: 'Broccoli in olio, aglio e olive nere.',
            },
            price: 228,
            suggested: 'spaghetti / penne',
          },
          {
            code: '050',
            name: 'À Alfredo',
            desc: {
              pt: 'Manteiga, creme de leite, parmesão e presunto cru tipo Parma.',
              en: 'Butter, cream, parmesan and Parma-style raw ham.',
              it: 'Burro, panna, parmigiano e prosciutto crudo tipo Parma.',
            },
            price: 228,
            suggested: 'fettuccine / penne',
          },
          {
            code: '051',
            name: 'À Arrabiata',
            desc: {
              pt: 'Molho à napolitana e pimenta dedo de moça.',
              en: 'Napolitana sauce and finger pepper.',
              it: 'Salsa napolitana e peperoncino.',
            },
            price: 228,
            suggested: 'spaghetti / penne',
          },
          {
            code: '052',
            name: 'À Matriciana',
            desc: {
              pt: 'Molho à napolitana, bacon e temperos aromáticos.',
              en: 'Napolitana sauce, bacon and aromatic seasonings.',
              it: 'Salsa napolitana, pancetta e aromi.',
            },
            price: 228,
            suggested: 'spaghetti / penne',
          },
          {
            code: '053',
            name: 'À Palermitana',
            desc: {
              pt: 'Molho à napolitana, parmesão, manjericão, creme de leite e nozes.',
              en: 'Napolitana sauce, parmesan, basil, cream and walnuts.',
              it: 'Salsa napolitana, parmigiano, basilico, panna e noci.',
            },
            price: 236,
            suggested: 'spaghetti / penne',
          },
          {
            code: '054',
            name: 'À Carbonara — Moda da Casa',
            desc: {
              pt: 'Bacon, gemas de ovos, creme de leite, tomate cereja, parmesão, cebola, salsinha e manjericão.',
              en: 'Bacon, egg yolks, cream, cherry tomatoes, parmesan, onion, parsley and basil.',
              it: 'Pancetta, tuorli, panna, pomodorini, parmigiano, cipolla, prezzemolo e basilico.',
            },
            price: 236,
            suggested: 'spaghetti / penne',
          },
          {
            code: '055',
            name: 'Com Linguiça Calabresa',
            desc: {
              pt: 'Molho napolitano com linguiça calabresa fatiada, alho, cebola, tomate em cubos, salsinha e manjericão.',
              en: 'Napolitana sauce with sliced calabrese sausage, garlic, onion, diced tomatoes, parsley and basil.',
              it: 'Salsa napolitana con salsiccia calabrese, aglio, cipolla, pomodori a cubetti, prezzemolo e basilico.',
            },
            price: 236,
            suggested: 'fettuccine / penne',
          },
        ],
      },
      {
        id: 'massas-gratinadas',
        label: { pt: 'Massas Gratinadas', en: 'Gratinated Pasta', it: 'Paste Gratinée' },
        items: [
          {
            code: '070',
            name: 'À Benedetto di Lucca',
            desc: {
              pt: 'Molho ao sugo, manteiga, creme de leite e gorgonzola.',
              en: 'Sugo sauce, butter, cream and gorgonzola.',
              it: 'Salsa al sugo, burro, panna e gorgonzola.',
            },
            price: 228,
            suggested: 'fettuccine / penne',
          },
          {
            code: '071',
            name: 'Ao Creme de Funghi Secchi',
            desc: {
              pt: 'Manteiga, vinho branco, creme de leite, cebola e funghi secchi.',
              en: 'Butter, white wine, cream, onion and dried porcini.',
              it: 'Burro, vino bianco, panna, cipolla e funghi secchi.',
            },
            price: 264,
            suggested: 'fettuccine / penne',
          },
          {
            code: '072',
            name: 'Ao Quadrifoglio',
            desc: {
              pt: 'Molho branco, catupiry, nozes, temperos aromáticos e manjericão.',
              en: 'White sauce, catupiry, walnuts, aromatic seasonings and basil.',
              it: 'Salsa bianca, catupiry, noci, aromi e basilico.',
            },
            price: 264,
            suggested: 'penne',
          },
          {
            code: '073',
            name: 'Aos Quatro Queijos',
            desc: {
              pt: 'Molho branco, gorgonzola, parmesão, provolone e catupiry.',
              en: 'White sauce, gorgonzola, parmesan, provolone and catupiry.',
              it: 'Salsa bianca, gorgonzola, parmigiano, provolone e catupiry.',
            },
            price: 264,
            suggested: 'spaghetti / fusilli',
          },
          {
            code: '074',
            name: 'À Fiorentina',
            desc: {
              pt: 'Molho branco, espinafre e parmesão.',
              en: 'White sauce, spinach and parmesan.',
              it: 'Salsa bianca, spinaci e parmigiano.',
            },
            price: 232,
            suggested: 'spaghetti / fusilli',
          },
          {
            code: '075',
            name: 'Ao Creme Branco',
            desc: {
              pt: 'Molho branco.',
              en: 'White sauce.',
              it: 'Salsa bianca.',
            },
            price: 228,
            suggested: 'spaghetti / fusilli',
          },
          {
            code: '076',
            name: 'Ao Creme Rosado',
            desc: {
              pt: 'Molho branco e molho vermelho.',
              en: 'White sauce and red sauce.',
              it: 'Salsa bianca e salsa rossa.',
            },
            price: 228,
            suggested: 'spaghetti / fusilli',
          },
          {
            code: '077',
            name: 'À La Dolce Vita',
            desc: {
              pt: 'Molho branco, ervilhas, presunto, frango desfiado e parmesão.',
              en: 'White sauce, peas, ham, shredded chicken and parmesan.',
              it: 'Salsa bianca, piselli, prosciutto, pollo sfilacciato e parmigiano.',
            },
            price: 264,
            suggested: 'spaghetti / fusilli',
          },
          {
            code: '078',
            name: 'Com Champignon',
            desc: {
              pt: 'Molho branco, champignon e parmesão.',
              en: 'White sauce, mushrooms and parmesan.',
              it: 'Salsa bianca, champignon e parmigiano.',
            },
            price: 264,
            suggested: 'spaghetti / fusilli',
          },
          {
            code: '079',
            name: 'À Don Camillo',
            desc: {
              pt: 'Molho branco aos quatro queijos. Acompanha 5 escalopes de filet mignon grelhados.',
              en: 'Four-cheese white sauce. Served with 5 grilled filet mignon escalopes.',
              it: 'Salsa bianca ai quattro formaggi. Accompagnato da 5 scaloppine di filet mignon grigliate.',
            },
            price: 342,
            suggested: 'todas',
          },
          {
            code: '080',
            name: 'À Casa Nova',
            desc: {
              pt: 'Molho branco e catupiry. Acompanha 5 escalopes de filet mignon grelhados.',
              en: 'White sauce and catupiry. Served with 5 grilled filet mignon escalopes.',
              it: 'Salsa bianca e catupiry. Accompagnato da 5 scaloppine di filet mignon grigliate.',
            },
            price: 342,
            suggested: 'todas',
          },
          {
            code: '081',
            name: 'À San Giovanni',
            desc: {
              pt: 'Iscas de filet mignon ao molho rosé.',
              en: 'Filet mignon strips in pink sauce.',
              it: 'Striscioline di filet mignon in salsa rosa.',
            },
            price: 298,
            suggested: 'fettuccine / penne',
          },
        ],
      },
      {
        id: 'massas-mar',
        label: { pt: 'Massas & Mar', en: 'Pasta & Seafood', it: 'Paste & Mare' },
        items: [
          {
            code: '082',
            name: 'À Carbonara de Camarões',
            desc: {
              pt: '18 camarões, bacon, gemas de ovos, creme de leite, tomate cereja, parmesão, cebola, salsinha e manjericão.',
              en: '18 shrimp, bacon, egg yolks, cream, cherry tomatoes, parmesan, onion, parsley and basil.',
              it: '18 gamberi, pancetta, tuorli, panna, pomodorini, parmigiano, cipolla, prezzemolo e basilico.',
            },
            price: 472,
            suggested: 'spaghetti / fettuccine / penne',
          },
          {
            code: '085',
            name: 'Com Camarões',
            desc: {
              pt: '18 camarões, molho napolitano, tomate em cubos, salsinha e manjericão.',
              en: '18 shrimp, napolitana sauce, diced tomatoes, parsley and basil.',
              it: '18 gamberi, salsa napolitana, pomodori a cubetti, prezzemolo e basilico.',
            },
            price: 472,
            suggested: 'spaghetti / fettuccine / penne',
          },
          {
            code: '087',
            name: 'À Genova',
            desc: {
              pt: 'Lâminas de bacalhau, azeite, temperos aromáticos, tomates frescos, azeitonas pretas e manjericão.',
              en: 'Salt cod slices, olive oil, aromatic seasonings, fresh tomatoes, black olives and basil.',
              it: 'Fettine di baccalà, olio, aromi, pomodori freschi, olive nere e basilico.',
            },
            price: 308,
            suggested: 'spaghetti / fettuccine / penne',
          },
        ],
      },
      {
        id: 'risotos',
        label: { pt: 'Risotos', en: 'Risottos', it: 'Risotti' },
        items: [
          {
            code: '136',
            name: 'Alla Venezia',
            desc: {
              pt: 'Arroz com 18 camarões, frutos do mar, vinho branco, azeite, manteiga, salsinha, tomate em cubos e parmesão.',
              en: 'Rice with 18 shrimp, seafood, white wine, olive oil, butter, parsley, diced tomatoes and parmesan.',
              it: 'Riso con 18 gamberi, frutti di mare, vino bianco, olio, burro, prezzemolo, pomodori a cubetti e parmigiano.',
            },
            price: 486,
          },
          {
            code: '137',
            name: 'Al Funghi',
            desc: {
              pt: 'Arroz com cogumelos, vinho branco, azeite, manteiga e parmesão.',
              en: 'Rice with mushrooms, white wine, olive oil, butter and parmesan.',
              it: 'Riso con funghi, vino bianco, olio, burro e parmigiano.',
            },
            price: 276,
          },
          {
            code: '140',
            name: 'Coração de Palmito',
            desc: {
              pt: 'Arroz com coração de palmito, mozzarella, rúcula, vinho branco, azeite, salsinha, manteiga e parmesão.',
              en: 'Rice with heart of palm, mozzarella, arugula, white wine, olive oil, parsley, butter and parmesan.',
              it: 'Riso con cuore di palmito, mozzarella, rucola, vino bianco, olio, prezzemolo, burro e parmigiano.',
            },
            price: 276,
          },
          {
            code: '141',
            name: 'Com Lâminas de Bacalhau',
            desc: {
              pt: 'Arroz, azeite, manteiga, vinho branco, parmesão, brócolis, alho, cebola, salsinha, azeitonas verdes e ovos cozidos.',
              en: 'Rice, olive oil, butter, white wine, parmesan, broccoli, garlic, onion, parsley, green olives and boiled eggs.',
              it: 'Riso, olio, burro, vino bianco, parmigiano, broccoli, aglio, cipolla, prezzemolo, olive verdi e uova sode.',
            },
            price: 324,
          },
          {
            code: '143',
            name: 'Com Ragú de Ossobuco',
            desc: {
              pt: 'Arroz, açafrão, vinho branco, guisado de ossobuco no próprio molho, tomate em cubos, salsinha, manjericão e funghi secchi.',
              en: 'Rice, saffron, white wine, braised ossobuco in its own sauce, diced tomatoes, parsley, basil and dried porcini.',
              it: 'Riso, zafferano, vino bianco, brasato di ossobuco nel suo sugo, pomodori a cubetti, prezzemolo, basilico e funghi secchi.',
            },
            price: 284,
          },
        ],
      },
      {
        id: 'carnes',
        label: { pt: 'Carnes', en: 'Meat', it: 'Carni' },
        items: [
          {
            code: '170',
            name: 'Escalopes à Parigi',
            desc: {
              pt: '5 unidades de escalope de filet mignon grelhado. Escolha o acompanhamento.',
              en: '5 units of grilled filet mignon escalope. Choose your side.',
              it: '5 scaloppine di filet mignon grigliate. Scegli il contorno.',
            },
            price: 346,
            suggested: 'spaghetti / fettuccine / penne',
          },
          {
            code: '171',
            name: 'Escalopes Grelhados',
            desc: {
              pt: '5 unidades.',
              en: '5 units.',
              it: '5 unità.',
            },
            price: 286,
          },
          {
            code: '225',
            name: 'Medalhão à Francis Bacon',
            desc: {
              pt: 'Envolvido em bacon. Acompanha batatas coradas e arroz à grega.',
              en: 'Wrapped in bacon. Served with roasted potatoes and Greek-style rice.',
              it: 'Avvolto in pancetta. Accompagnato da patate al forno e riso alla greca.',
            },
            price: 346,
          },
          {
            code: '224',
            name: 'Medalhão à Oswaldo Aranha',
            desc: {
              pt: 'Acompanha arroz branco, batata gratin, alcaparras e farofa de palmito.',
              en: 'Served with white rice, gratin potato, capers and palm heart farofa.',
              it: 'Accompagnato da riso bianco, patate gratinate, capperi e farofa di palmito.',
            },
            price: 346,
          },
          {
            code: '181',
            name: 'Gennarino di Napoli',
            desc: {
              pt: 'Filé empanado recheado com presunto e mussarela. Acompanha arroz piemontese e batatas coradas ao molho de aliche, cebola, molho madeira e creme de leite.',
              en: 'Breaded fillet stuffed with ham and mozzarella. Served with Piemontese rice and roasted potatoes with anchovy sauce, onion, Madeira sauce and cream.',
              it: 'Filetto impanato ripieno di prosciutto e mozzarella. Accompagnato da riso piemontese e patate al forno con salsa di alici, cipolla, salsa al Madeira e panna.',
            },
            price: 346,
          },
        ],
      },
      {
        id: 'peixes',
        label: { pt: 'Peixes', en: 'Fish', it: 'Pesce' },
        items: [
          {
            code: '145',
            name: 'Pescada Amarela Grelhada ao Molho de Ervas',
            desc: {
              pt: 'Manteiga e vinho branco. Acompanha risoto primavera: arroz, vinho branco, espinafre, ervilha, cenoura e brócolis.',
              en: 'Butter and white wine. Served with primavera risotto: rice, white wine, spinach, peas, carrot and broccoli.',
              it: 'Burro e vino bianco. Accompagnato da risotto primavera: riso, vino bianco, spinaci, piselli, carote e broccoli.',
            },
            price: 298,
          },
          {
            code: '146',
            name: 'Pescada Amarela Grelhada com Legumes ao Alho e Óleo',
            desc: {
              pt: 'Pescada amarela grelhada com legumes ao alho e óleo.',
              en: 'Grilled yellow hake with vegetables in garlic and oil.',
              it: 'Merluzzo giallo grigliato con verdure ad aglio e olio.',
            },
            price: 298,
          },
          {
            code: '147',
            name: 'Pescada Amarela Grelhada com Legumes na Manteiga',
            desc: {
              pt: 'Pescada amarela grelhada com legumes na manteiga.',
              en: 'Grilled yellow hake with vegetables in butter.',
              it: 'Merluzzo giallo grigliato con verdure nel burro.',
            },
            price: 298,
          },
          {
            code: '148',
            name: 'Pescada Amarela Grelhada ao Molho de Alcaparras',
            desc: {
              pt: 'Vinho branco e manteiga. Acompanha arroz com brócolis.',
              en: 'White wine and butter. Served with rice and broccoli.',
              it: 'Vino bianco e burro. Accompagnato da riso con broccoli.',
            },
            price: 298,
          },
        ],
      },
      {
        id: 'acompanhamentos',
        label: { pt: 'Acompanhamentos', en: 'Side Dishes', it: 'Contorni' },
        items: [
          { code: '178', name: 'Molho ao Sugo', desc: { pt: '', en: '', it: '' }, price: 65 },
          { code: '179', name: 'Molho à Bolognesa', desc: { pt: '', en: '', it: '' }, price: 70 },
          { code: '180', name: 'Braciola', desc: { pt: '', en: '', it: '' }, price: 70 },
          { code: '182', name: 'Batatas Fritas', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '183', name: 'Batatas Coradas', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '184', name: 'Purê de Batatas', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '185', name: 'Espinafre', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '186', name: 'Espinafre ao Creme', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '187', name: 'Espinafre ao Alho e Óleo', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '188', name: 'Espinafre na Manteiga', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '189', name: 'Brócolis ao Alho e Óleo', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '190', name: 'Panachê de Legumes na Manteiga', desc: { pt: '', en: '', it: '' }, price: 61 },
          { code: '191', name: 'Panachê de Legumes ao Alho e Óleo', desc: { pt: '', en: '', it: '' }, price: 61 },
        ],
      },
      {
        id: 'pra-levar',
        label: { pt: 'Pra Levar pra Casa', en: 'To Go', it: 'Da Portare a Casa' },
        items: [
          { code: '194', name: 'Molho ao Sugo', desc: { pt: 'Já inclui embalagem.', en: 'Includes packaging.', it: 'Include il contenitore.' }, price: 100 },
          { code: '195', name: 'Molho à Bolognesa', desc: { pt: 'Já inclui embalagem.', en: 'Includes packaging.', it: 'Include il contenitore.' }, price: 118 },
          { code: '196', name: 'Molho à Napolitana', desc: { pt: 'Já inclui embalagem.', en: 'Includes packaging.', it: 'Include il contenitore.' }, price: 100 },
          { code: '197', name: 'Pão Italiano (unidade)', desc: { pt: '', en: '', it: '' }, price: 21 },
        ],
      },
      {
        id: 'sobremesas',
        label: { pt: 'Sobremesas', en: 'Desserts', it: 'Dolci' },
        items: [
          {
            code: '239',
            name: 'Cheesecake de Mascarpone',
            desc: {
              pt: 'Suave creme de mascarpone com zabaione, marsala, base de pão de ló, coberto com geléia de goiaba. Servido com calda de morango e iogurte.',
              en: 'Smooth mascarpone cream with zabaione, marsala, sponge cake base, topped with guava jelly. Served with strawberry and yogurt sauce.',
              it: 'Crema morbida di mascarpone con zabaione, marsala, base di pan di Spagna, coperta con marmellata di guava. Servito con salsa di fragola e yogurt.',
            },
            price: 38,
          },
          {
            code: '258',
            name: 'Crème Brûlée',
            desc: {
              pt: 'Base de creme de leite, ovos e baunilha, aromatizado com limão siciliano e gratinado com açúcar cristal.',
              en: 'Cream base with eggs and vanilla, flavored with Sicilian lemon and gratinated with crystal sugar.',
              it: 'Base di panna, uova e vaniglia, aromatizzato al limone di Sicilia e gratinato con zucchero cristallo.',
            },
            price: 38,
          },
          {
            code: '274',
            name: 'Petit Gâteau',
            desc: {
              pt: 'Mini bolo de chocolate recheado de calda quente de chocolate. Acompanha bola de sorvete de creme e calda de chocolate.',
              en: 'Mini chocolate cake filled with warm chocolate sauce. Served with cream ice cream and chocolate sauce.',
              it: 'Mini tortino al cioccolato ripieno di salsa calda al cioccolato. Accompagnato da gelato alla crema e salsa al cioccolato.',
            },
            price: 38,
          },
          {
            code: '277',
            name: 'Pudim de Leite',
            desc: {
              pt: 'Pudim de leite tradicional com chantilly e ameixa.',
              en: 'Traditional milk pudding with whipped cream and plum.',
              it: 'Budino di latte tradizionale con panna montata e prugna.',
            },
            price: 38,
          },
          {
            code: '318',
            name: 'Tiramissù',
            desc: {
              pt: 'Suave creme de mascarpone com zabaione, marsala, biscoito e café.',
              en: 'Smooth mascarpone cream with zabaione, marsala, cookie and coffee.',
              it: 'Crema morbida di mascarpone con zabaione, marsala, biscotto e caffè.',
            },
            price: 48,
          },
        ],
      },
    ],
  },
  {
    id: 'ristorante',
    name: 'Walter Mancini',
    kind: { pt: 'Il Ristorante', en: 'Il Ristorante', it: 'Il Ristorante' },
    note: {
      pt: 'Todos os pratos são servidos de forma individual. Música ao vivo durante o jantar.',
      en: 'All dishes are served individually. Live music during dinner.',
      it: 'Tutti i piatti sono serviti individualmente. Musica dal vivo durante la cena.',
    },
    categories: [
      {
        id: 'entradas',
        label: { pt: 'Entradas', en: 'Starters', it: 'Antipasti' },
        items: [
          {
            name: 'Vitello Tonnato',
            desc: {
              pt: 'Vitela em fatias finas ao molho de atum e alcaparras.',
              en: 'Thinly sliced veal in tuna and caper sauce.',
              it: 'Vitello a fette sottili con salsa tonnata e capperi.',
            },
            price: 92,
          },
          {
            name: 'Burrata con Pomodorini',
            desc: {
              pt: 'Burrata cremosa, tomatinhos confitados e manjericão.',
              en: 'Creamy burrata, confit cherry tomatoes and basil.',
              it: 'Burrata cremosa, pomodorini confit e basilico.',
            },
            price: 89,
          },
          {
            name: 'Antipasto della Casa',
            desc: {
              pt: 'Seleção de antepastos da mesa de entrada.',
              en: 'Selection of antipasti from the entrance table.',
              it: 'Selezione di antipasti dal tavolo d\'ingresso.',
            },
            price: 95,
          },
        ],
      },
      {
        id: 'massas',
        label: { pt: 'Massas', en: 'Pasta', it: 'Paste' },
        items: [
          {
            name: 'Fettuccine al Tartufo',
            desc: {
              pt: 'Fettuccine ao creme de trufas negras.',
              en: 'Fettuccine in black truffle cream.',
              it: 'Fettuccine alla crema di tartufo nero.',
            },
            price: 148,
          },
          {
            name: 'Risotto ai Frutti di Mare',
            desc: {
              pt: 'Risoto de frutos do mar frescos.',
              en: 'Risotto with fresh seafood.',
              it: 'Risotto ai frutti di mare freschi.',
            },
            price: 132,
          },
          {
            name: 'Spaghetti alle Vongole',
            desc: {
              pt: 'Spaghetti com vôngles frescos, alho e vinho branco.',
              en: 'Spaghetti with fresh clams, garlic and white wine.',
              it: 'Spaghetti con vongole fresche, aglio e vino bianco.',
            },
            price: 138,
          },
        ],
      },
      {
        id: 'carnes',
        label: { pt: 'Carnes', en: 'Meat', it: 'Carni' },
        items: [
          {
            name: 'Filetto al Barolo',
            desc: {
              pt: 'Filé mignon ao molho de vinho Barolo.',
              en: 'Beef tenderloin in Barolo wine sauce.',
              it: 'Filetto al vino Barolo.',
            },
            price: 164,
          },
          {
            name: 'Costoletta alla Milanese',
            desc: {
              pt: 'Costeleta de vitela empanada, à milanesa.',
              en: 'Breaded veal cutlet, Milanese style.',
              it: 'Costoletta di vitello alla milanese.',
            },
            price: 158,
          },
          {
            name: 'Ossobuco alla Milanese',
            desc: {
              pt: 'Ossobuco braseado com risoto milanês ao açafrão.',
              en: 'Braised veal shank with saffron Milanese risotto.',
              it: 'Ossobuco brasato con risotto alla milanese allo zafferano.',
            },
            price: 168,
          },
        ],
      },
      {
        id: 'peixes',
        label: { pt: 'Peixes', en: 'Fish', it: 'Pesce' },
        items: [
          {
            name: 'Branzino al Forno',
            desc: {
              pt: 'Robalo assado com ervas e limão siciliano.',
              en: 'Roasted sea bass with herbs and Sicilian lemon.',
              it: 'Branzino al forno con erbe e limone.',
            },
            price: 156,
          },
          {
            name: 'Salmone alla Griglia',
            desc: {
              pt: 'Salmão grelhado com legumes da estação.',
              en: 'Grilled salmon with seasonal vegetables.',
              it: 'Salmone alla griglia con verdure di stagione.',
            },
            price: 138,
          },
        ],
      },
      {
        id: 'sobremesas',
        label: { pt: 'Sobremesas', en: 'Desserts', it: 'Dolci' },
        items: [
          {
            name: 'Cannoli Siciliani',
            desc: {
              pt: 'Massa crocante recheada com ricota doce.',
              en: 'Crisp shells filled with sweet ricotta.',
              it: 'Cialde croccanti ripiene di ricotta dolce.',
            },
            price: 44,
          },
          {
            name: 'Affogato al Caffè',
            desc: {
              pt: 'Gelato de creme afogado no espresso.',
              en: 'Cream gelato drowned in espresso.',
              it: 'Gelato alla crema affogato nell\'espresso.',
            },
            price: 36,
          },
          {
            name: 'Crème Brûlée',
            desc: {
              pt: 'Base de creme de leite, ovos e baunilha, aromatizado com limão siciliano e gratinado com açúcar cristal.',
              en: 'Cream base with eggs and vanilla, flavored with Sicilian lemon and gratinated with crystal sugar.',
              it: 'Base di panna, uova e vaniglia, aromatizzato al limone di Sicilia e gratinato con zucchero cristallo.',
            },
            price: 38,
          },
        ],
      },
    ],
  },
  {
    id: 'pizzaria',
    name: 'Famiglia Mancini',
    kind: { pt: 'Pizzaria', en: 'Pizzaria', it: 'Pizzeria' },
    note: {
      pt: 'Pizzas em tamanho grande ou individual.',
      en: 'Pizzas in large or individual size.',
      it: 'Pizze in formato grande o individuale.',
    },
    categories: [
      {
        id: 'entradas',
        label: { pt: 'Entradas', en: 'Starters', it: 'Antipasti' },
        items: [
          {
            code: '1300',
            name: 'Cesto de Pães',
            desc: {
              pt: 'Cesto de pães e manteiga.',
              en: 'Basket of breads and butter.',
              it: 'Cesto di pani e burro.',
            },
            price: null,
          },
          {
            code: '2284',
            name: 'Salada Fresca da Horta',
            desc: {
              pt: 'Mix de folhas, rabanete, abobrinha, cenoura, pepino, tomate, tomate cereja e palmito. Acompanha molho de mostarda e croutons.',
              en: 'Mix of greens, radish, zucchini, carrot, cucumber, tomato, cherry tomato and heart of palm. Served with mustard dressing and croutons.',
              it: 'Mix di foglie, ravanello, zucchine, carota, cetriolo, pomodoro, pomodorini e cuore di palmito. Accompagnato da salsa di senape e crostini.',
            },
            price: null,
          },
          {
            code: '1304',
            name: 'Picadinho à Paulista',
            desc: {
              pt: 'Iscas de filet mignon, pimentão vermelho, cenoura, banana à milanesa, ovo frito e milho.',
              en: 'Filet mignon strips, red pepper, carrot, breaded banana, fried egg and corn.',
              it: 'Striscioline di filet mignon, peperone rosso, carota, banana impanata, uovo fritto e mais.',
            },
            price: null,
          },
        ],
      },
      {
        id: 'pratos-principais',
        label: { pt: 'Pratos Principais', en: 'Main Dishes', it: 'Piatti Principali' },
        items: [
          {
            code: '8905',
            name: 'Galeto Gre lhado',
            desc: {
              pt: 'Galeto grelhado no azeite e alecrim. Acompanha arroz branco, farofa de bacon, batata frita e ovo frito.',
              en: 'Grilled spring chicken in olive oil and rosemary. Served with white rice, bacon farofa, fries and fried egg.',
              it: 'Galletto grigliato in olio e rosmarino. Accompagnato da riso bianco, farofa di pancetta, patatine e uovo fritto.',
            },
            price: null,
          },
          {
            code: '3327',
            name: 'Canelloni ao Molho Rosado',
            desc: {
              pt: 'Massa fresca recheada de ricota, espinafre, amêndoas e uva passa ao molho branco e sugo.',
              en: 'Fresh pasta filled with ricotta, spinach, almonds and raisins in white and red sauce.',
              it: 'Pasta fresca ripiena di ricotta, spinaci, mandorle e uvetta in salsa bianca e al sugo.',
            },
            price: null,
          },
          {
            code: '8108',
            name: 'Spaghetti com Linguiça Calabresa',
            desc: {
              pt: 'Massa seca ao molho à napolitana e linguiça calabresa fatiada.',
              en: 'Dry pasta in napolitana sauce with sliced calabrese sausage.',
              it: 'Pasta secca in salsa napolitana con salsiccia calabrese a fette.',
            },
            price: null,
          },
          {
            code: '8349',
            name: 'Filet de Frango à Parmegiana',
            desc: {
              pt: 'Filet ao forno com mussarela ao sugo e parmesão. Acompanha arroz branco e batata frita.',
              en: 'Baked chicken fillet with mozzarella in tomato sauce and parmesan. Served with white rice and fries.',
              it: 'Filetto di pollo al forno con mozzarella al sugo e parmigiano. Accompagnato da riso bianco e patatine.',
            },
            price: null,
          },
          {
            code: '8906',
            name: 'Escalope ao Molho Madeira',
            desc: {
              pt: 'Escalope de filet mignon ao molho madeira e toque de molho pomodoro. Acompanha risoto de açafrão.',
              en: 'Filet mignon escalope in Madeira sauce with a touch of pomodoro. Served with saffron risotto.',
              it: 'Scaloppina di filet mignon in salsa al Madeira con tocco di pomodoro. Accompagnato da risotto allo zafferano.',
            },
            price: null,
          },
          {
            code: '8833',
            name: 'Gnocchi ao Molho Pomodoro',
            desc: {
              pt: 'Massa fresca ao molho de tomates frescos e manjericão.',
              en: 'Fresh pasta in fresh tomato and basil sauce.',
              it: 'Pasta fresca in salsa di pomodori freschi e basilico.',
            },
            price: null,
          },
          {
            code: '8811',
            name: 'Penne com Lascas de Bacalhau',
            desc: {
              pt: 'Massa seca, lâminas de bacalhau, tomate concasse, azeite, brócolis, azeitonas, alho e manjericão.',
              en: 'Dry pasta, salt cod flakes, tomato concasse, olive oil, broccoli, olives, garlic and basil.',
              it: 'Pasta secca, fettine di baccalà, pomodoro concasse, olio, broccoli, olive, aglio e basilico.',
            },
            price: null,
          },
          {
            code: '1308',
            name: 'Lasagna Verde ao Molho Branco Gratinado',
            desc: {
              pt: 'Massa fresca com recheio de carne moída e mussarela ao molho branco gratinado.',
              en: 'Fresh pasta with ground beef and mozzarella filling, gratinated in white sauce.',
              it: 'Pasta fresca con ripieno di carne macinata e mozzarella, gratinata in salsa bianca.',
            },
            price: null,
          },
          {
            code: '8754',
            name: 'Cubos de Pescada ao Molho de Amêndoas',
            desc: {
              pt: 'Acompanha risoto de parmesão.',
              en: 'Served with parmesan risotto.',
              it: 'Accompagnato da risotto al parmigiano.',
            },
            price: null,
          },
          {
            code: '1319',
            name: 'Risoto Caprese',
            desc: {
              pt: 'Arroz arbóreo, tomate seco, mussarela de búfala e manjericão.',
              en: 'Arborio rice, sun-dried tomato, buffalo mozzarella and basil.',
              it: 'Riso arboreo, pomodoro secco, mozzarella di bufala e basilico.',
            },
            price: null,
          },
          {
            code: '8830',
            name: 'Capeletti in Brodo',
            desc: {
              pt: 'Caldo de galinha, massa fresca e galinha desfiada.',
              en: 'Chicken broth, fresh pasta and shredded chicken.',
              it: 'Brodo di pollo, pasta fresca e pollo sfilacciato.',
            },
            price: null,
          },
        ],
      },
      {
        id: 'pizzas-salgadas',
        label: { pt: 'Pizzas Salgadas', en: 'Savory Pizzas', it: 'Pizze Salate' },
        items: [
          {
            name: 'Margherita',
            desc: {
              pt: 'Molho de tomate fresco, mussarela e manjericão.',
              en: 'Fresh tomato sauce, mozzarella and basil.',
              it: 'Salsa di pomodoro fresco, mozzarella e basilico.',
            },
            price: 127,
            serves: 'Grande / Individual R$ 105',
          },
          {
            name: 'Pancetta ao Limone',
            desc: {
              pt: 'Molho de tomate fresco, mussarela, pancetta fatiada, mascarpone, alho poro, raspas de limão siciliano e orégano.',
              en: 'Fresh tomato sauce, mozzarella, sliced pancetta, mascarpone, leek, Sicilian lemon zest and oregano.',
              it: 'Salsa di pomodoro fresco, mozzarella, pancetta, mascarpone, porro, scorza di limone di Sicilia e origano.',
            },
            price: 138,
            serves: 'Grande / Individual R$ 120',
          },
          {
            name: 'Palermo',
            desc: {
              pt: 'Molho de tomate fresco, mussarela, tomate concasse, alho assado, manjericão e orégano.',
              en: 'Fresh tomato sauce, mozzarella, tomato concasse, roasted garlic, basil and oregano.',
              it: 'Salsa di pomodoro fresco, mozzarella, pomodoro concasse, aglio arrosto, basilico e origano.',
            },
            price: 127,
            serves: 'Grande / Individual R$ 105',
          },
          {
            name: 'Parma',
            desc: {
              pt: 'Molho de tomate fresco, mussarela, presunto tipo Parma e orégano.',
              en: 'Fresh tomato sauce, mozzarella, Parma-style ham and oregano.',
              it: 'Salsa di pomodoro fresco, mozzarella, prosciutto tipo Parma e origano.',
            },
            price: 132,
            serves: 'Grande / Individual R$ 115',
          },
          {
            name: 'Rabiata',
            desc: {
              pt: 'Molho de tomate fresco, linguiça calabresa fatiada, pimenta calabresa e cebola fatiada.',
              en: 'Fresh tomato sauce, sliced calabrese sausage, calabrese pepper and sliced onion.',
              it: 'Salsa di pomodoro fresco, salsiccia calabrese, peperoncino e cipolla a fette.',
            },
            price: 127,
            serves: 'Grande / Individual R$ 105',
          },
          {
            name: 'Quatro Queijos',
            desc: {
              pt: 'Molho de tomate fresco, mussarela, parmesão, catupiry e gorgonzola.',
              en: 'Fresh tomato sauce, mozzarella, parmesan, catupiry and gorgonzola.',
              it: 'Salsa di pomodoro fresco, mozzarella, parmigiano, catupiry e gorgonzola.',
            },
            price: 138,
            serves: 'Grande / Individual R$ 120',
          },
          {
            name: 'Pepperoni',
            desc: {
              pt: 'Pepperoni fatiado sobre o molho de tomate fresco e mussarela.',
              en: 'Sliced pepperoni over fresh tomato sauce and mozzarella.',
              it: 'Pepperoni a fette su salsa di pomodoro fresco e mozzarella.',
            },
            price: 127,
            serves: 'Grande / Individual R$ 105',
          },
          {
            name: 'Portuguesa',
            desc: {
              pt: 'Molho de tomate fresco, mussarela, presunto, ovos, cebola e azeitonas pretas.',
              en: 'Fresh tomato sauce, mozzarella, ham, eggs, onion and black olives.',
              it: 'Salsa di pomodoro fresco, mozzarella, prosciutto, uova, cipolla e olive nere.',
            },
            price: 127,
            serves: 'Grande / Individual R$ 105',
          },
          {
            name: 'Romana',
            desc: {
              pt: 'Molho de tomate fresco, mussarela, aliche e rodelas de tomate.',
              en: 'Fresh tomato sauce, mozzarella, anchovy and tomato slices.',
              it: 'Salsa di pomodoro fresco, mozzarella, alici e fette di pomodoro.',
            },
            price: 132,
            serves: 'Grande / Individual R$ 115',
          },
          {
            name: 'Suiça',
            desc: {
              pt: 'Molho de tomate fresco, folhas de manjericão, tomates em cubos, mix de queijos amarelos.',
              en: 'Fresh tomato sauce, basil leaves, diced tomatoes, mix of yellow cheeses.',
              it: 'Salsa di pomodoro fresco, foglie di basilico, pomodori a cubetti, mix di formaggi gialli.',
            },
            price: 138,
            serves: 'Grande / Individual R$ 120',
          },
          {
            name: 'Toscana',
            desc: {
              pt: 'Molho de tomate fresco, linguiça calabresa moída, mussarela e cebolas assadas.',
              en: 'Fresh tomato sauce, ground calabrese sausage, mozzarella and roasted onions.',
              it: 'Salsa di pomodoro fresco, salsiccia calabrese tritata, mozzarella e cipolle arrosto.',
            },
            price: 132,
            serves: 'Grande / Individual R$ 115',
          },
          {
            name: 'Parma & Rúcula',
            desc: {
              pt: 'Molho de tomate fresco, mussarela, presunto tipo Parma e rúcula.',
              en: 'Fresh tomato sauce, mozzarella, Parma-style ham and arugula.',
              it: 'Salsa di pomodoro fresco, mozzarella, prosciutto tipo Parma e rucola.',
            },
            price: 127,
            serves: 'Grande / Individual R$ 105',
          },
        ],
      },
      {
        id: 'pizzas-doces',
        label: { pt: 'Pizzas Doces', en: 'Sweet Pizzas', it: 'Pizze Dolci' },
        items: [
          {
            code: '2332',
            name: 'Nutella',
            desc: {
              pt: 'Creme de avelã Nutella.',
              en: 'Nutella hazelnut cream.',
              it: 'Crema di nocciole Nutella.',
            },
            price: 85,
          },
          {
            code: '2333',
            name: 'Nutella com Banana',
            desc: {
              pt: 'Creme de avelã Nutella coberta com fatias de banana e canela polvilhada.',
              en: 'Nutella hazelnut cream topped with banana slices and cinnamon.',
              it: 'Crema di nocciole Nutella con fette di banana e cannella.',
            },
            price: 85,
          },
          {
            code: '2334',
            name: 'Romeu e Julieta',
            desc: {
              pt: 'Catupiry e goiabada cremosa.',
              en: 'Catupiry and creamy guava paste.',
              it: 'Catupiry e goiabada cremosa.',
            },
            price: 85,
          },
        ],
      },
      {
        id: 'sobremesas',
        label: { pt: 'Sobremesas', en: 'Desserts', it: 'Dolci' },
        items: [
          {
            code: '286',
            name: 'Cheesecake de Mascarpone',
            desc: {
              pt: 'Suave creme de mascarpone com zabaione, marsala, base de pão de ló, coberto com geléia de goiaba. Servido com calda de morango e iogurte.',
              en: 'Smooth mascarpone cream with zabaione, marsala, sponge cake base, topped with guava jelly. Served with strawberry and yogurt sauce.',
              it: 'Crema morbida di mascarpone con zabaione, marsala, base di pan di Spagna, coperta con marmellata di guava. Servito con salsa di fragola e yogurt.',
            },
            price: 38,
          },
          {
            code: '336',
            name: 'Crème Brûlée',
            desc: {
              pt: 'Base de creme de leite, ovos e baunilha, aromatizado com limão siciliano e gratinado com açúcar cristal.',
              en: 'Cream base with eggs and vanilla, flavored with Sicilian lemon and gratinated with crystal sugar.',
              it: 'Base di panna, uova e vaniglia, aromatizzato al limone di Sicilia e gratinato con zucchero cristallo.',
            },
            price: 38,
          },
          {
            code: '8890',
            name: 'Torta Três Mousses',
            desc: {
              pt: 'Pedaço de torta em três camadas de mousses: chocolate meio amargo, ao leite e branco com base de pão de ló de chocolate.',
              en: 'Slice of three-layer mousse cake: dark, milk and white chocolate on a chocolate sponge cake base.',
              it: 'Fetta di torta a tre strati di mousse: cioccolato fondente, al latte e bianco su base di pan di Spagna al cioccolato.',
            },
            price: 38,
          },
          {
            code: '1326',
            name: 'Pudim',
            desc: {
              pt: 'Pudim de leite tradicional com chantilly e ameixa.',
              en: 'Traditional milk pudding with whipped cream and plum.',
              it: 'Budino di latte tradizionale con panna montata e prugna.',
            },
            price: 38,
          },
          {
            code: '8881',
            name: 'Cheesecake de Mascarpone ao Vinho Branco',
            desc: {
              pt: 'Suave creme de mascarpone ao vinho branco com base de pão de ló, coberto com geléia de goiaba. Servido com calda de morango e iogurte.',
              en: 'Smooth mascarpone cream with white wine, sponge cake base, topped with guava jelly. Served with strawberry and yogurt sauce.',
              it: 'Crema morbida di mascarpone al vino bianco con base di pan di Spagna, coperta con marmellata di guava. Servito con salsa di fragola e yogurt.',
            },
            price: 48,
          },
        ],
      },
    ],
  },
]

export const PDF_URLS: Record<HouseId, string> = {
  trattoria: 'https://cdn.me-qr.com/pdf/12607344.pdf?time=1712690862',
  ristorante: 'https://cdn.me-qr.com/pdf/12607216.pdf?time=1712578944',
  pizzaria: 'https://cdn.me-qr.com/pdf/12607404.pdf?time=1712578858',
}

export const PDF_URL = PDF_URLS.trattoria

export function formatBRL(value: number | null): string {
  if (value == null) return ''
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(value)
}
