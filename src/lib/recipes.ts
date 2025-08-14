// A simple recipe database.
// The key is the recipe name, and the value is a list of required ingredients.
export const recipeData = new Map<string, string[]>([
  // ===== Base que você já tinha =====
  ['Macarronada à parmegiana', ['molho de tomate', 'macarrão', 'frango', 'queijo']],
  ['Galinhada', ['frango', 'arroz', 'tomate', 'cebola']],
  ['Frango Assado com Batatas', ['frango', 'batata', 'cebola', 'limão']],
  ['Strogonoff de Frango', ['frango', 'creme de leite', 'ketchup', 'mostarda', 'champignon']],
  ['Ovos Mexidos', ['ovo', 'leite', 'manteiga']],
  ['Salada de Tomate', ['tomate', 'cebola', 'azeite']],
  ['Caipirinha', ['limão', 'cachaça', 'açúcar']],
  ['Gin Tônica', ['gin', 'água tônica', 'limão', 'gelo']],
  ['Vodka com Limão', ['vodka', 'limão', 'gelo']],
  ['Risoto de Cogumelos', ['arroz', 'cogumelo', 'vinho branco', 'queijo parmesão']],
  ['Sopa de Legumes', ['batata', 'cenoura', 'cebola', 'tomate']],
  ['Purê de Batata', ['batata', 'leite', 'manteiga']],

  // ===== Massas e italianos =====
  ['Espaguete ao Alho e Óleo', ['macarrão', 'alho', 'azeite', 'sal']],
  ['Penne ao Molho de Tomate', ['macarrão', 'molho de tomate', 'cebola', 'alho']],
  ['Macarrão à Bolonhesa', ['macarrão', 'carne moída', 'molho de tomate', 'cebola']],
  ['Lasanha de Carne', ['massa para lasanha', 'carne moída', 'molho de tomate', 'queijo']],
  ['Lasanha de Frango', ['massa para lasanha', 'frango', 'molho branco', 'queijo']],
  ['Nhoque ao Sugo', ['nhoque', 'molho de tomate', 'queijo parmesão']],
  ['Fettuccine Alfredo', ['macarrão', 'creme de leite', 'manteiga', 'queijo parmesão']],
  ['Mac and Cheese', ['macarrão', 'queijo', 'leite', 'manteiga']],
  ['Ravioli ao Sugo', ['ravioli', 'molho de tomate', 'queijo parmesão']],
  ['Pasta Pesto Simples', ['macarrão', 'manjericão', 'alho', 'azeite', 'queijo parmesão']],
  ['Canelone de Presunto e Queijo', ['massa para canelone', 'presunto', 'queijo', 'molho de tomate']],
  ['Espaguete à Carbonara (simplificado)', ['macarrão', 'ovo', 'bacon', 'queijo parmesão']],
  ['Panqueca de Carne', ['massa de panqueca', 'carne moída', 'molho de tomate', 'queijo']],
  ['Panqueca de Frango', ['massa de panqueca', 'frango', 'molho de tomate', 'queijo']],

  // ===== Arroz, grãos e feijões =====
  ['Arroz de Alho', ['arroz', 'alho', 'óleo', 'sal']],
  ['Arroz com Brócolis', ['arroz', 'brócolis', 'alho', 'azeite']],
  ['Arroz à Grega', ['arroz', 'cenoura', 'ervilha', 'pimentão']],
  ['Arroz com Lentilha', ['arroz', 'lentilha', 'cebola', 'alho']],
  ['Baião de Dois', ['arroz', 'feijão', 'queijo coalho', 'bacon']],
  ['Feijão Tropeiro', ['feijão', 'farinha de mandioca', 'ovo', 'bacon']],
  ['Mexido Mineiro', ['arroz', 'feijão', 'ovo', 'linguiça']],
  ['Risoto de Frango', ['arroz', 'frango', 'caldo', 'queijo parmesão']],
  ['Risoto de Tomate e Manjericão', ['arroz', 'tomate', 'manjericão', 'queijo parmesão']],

  // ===== Carnes =====
  ['Carne de Panela', ['carne bovina', 'cebola', 'tomate', 'alho']],
  ['Picadinho', ['carne bovina', 'cebola', 'alho', 'salsinha']],
  ['Bife à Milanesa', ['carne bovina', 'ovo', 'farinha de rosca', 'óleo']],
  ['Almôndegas ao Sugo', ['carne moída', 'ovo', 'farinha de rosca', 'molho de tomate']],
  ['Hambúrguer Caseiro', ['carne moída', 'sal', 'pimenta-do-reino', 'pão']],
  ['Carne Louca', ['carne bovina', 'pimentão', 'cebola', 'azeite']],
  ['Escondidinho de Carne', ['carne moída', 'batata', 'queijo', 'cebola']],
  ['Chili Rápido', ['carne moída', 'feijão', 'tomate', 'pimenta']],
  ['Tacos de Carne', ['tortilha', 'carne moída', 'tomate', 'alface']],
  ['Carne com Batata', ['carne bovina', 'batata', 'cebola', 'alho']],
  ['Carne ao Molho Madeira (simplificado)', ['carne bovina', 'cebola', 'vinho tinto', 'champignon']],
  ['Ragu de Carne', ['carne bovina', 'molho de tomate', 'cebola', 'alho']],

  // ===== Frango =====
  ['Frango Xadrez', ['frango', 'pimentão', 'cebola', 'molho shoyu']],
  ['Filé de Frango Grelhado', ['frango', 'alho', 'limão', 'azeite']],
  ['Frango à Milanesa', ['frango', 'ovo', 'farinha de rosca', 'óleo']],
  ['Curry de Frango', ['frango', 'leite de coco', 'curry', 'cebola']],
  ['Tirinhas de Frango com Legumes', ['frango', 'cenoura', 'brócolis', 'shoyu']],
  ['Frango com Requeijão ao Forno', ['frango', 'requeijão', 'queijo', 'tomate']],

  // ===== Suínos e linguiças =====
  ['Linguiça Acebolada', ['linguiça', 'cebola', 'azeite']],
  ['Costelinha ao Barbecue (simplificado)', ['costelinha suína', 'molho barbecue', 'sal']],
  ['Lombo Assado', ['lombo suíno', 'alho', 'limão', 'azeite']],
  ['Feijão com Linguiça', ['feijão', 'linguiça', 'cebola', 'alho']],

  // ===== Peixes e frutos do mar =====
  ['Peixe Assado com Limão', ['peixe', 'limão', 'alho', 'azeite']],
  ['Moqueca Baiana', ['peixe', 'leite de coco', 'azeite de dendê', 'pimentão']],
  ['Moqueca Capixaba', ['peixe', 'tomate', 'cebola', 'coentro']],
  ['Filé de Peixe Empanado', ['peixe', 'ovo', 'farinha de rosca', 'óleo']],
  ['Camarão ao Alho e Óleo', ['camarão', 'alho', 'azeite', 'sal']],
  ['Bobó de Camarão', ['camarão', 'mandioca', 'leite de coco', 'azeite de dendê']],
  ['Atum com Macarrão', ['atum', 'macarrão', 'molho de tomate', 'cebola']],

  // ===== Ovos, lanches e sanduíches =====
  ['Omelete de Queijo e Presunto', ['ovo', 'queijo', 'presunto', 'cebola']],
  ['Omelete de Legumes', ['ovo', 'cenoura', 'tomate', 'cebola']],
  ['Crepioca Salgada', ['ovo', 'tapioca', 'queijo', 'sal']],
  ['Tapioca com Queijo', ['tapioca', 'queijo', 'manteiga']],
  ['Cachorro-Quente', ['pão', 'salsicha', 'molho de tomate', 'batata palha']],
  ['Misto Quente', ['pão', 'presunto', 'queijo', 'manteiga']],
  ['Sanduíche Natural', ['pão', 'frango', 'maionese', 'alface']],
  ['Wrap de Frango', ['tortilha', 'frango', 'alface', 'maionese']],
  ['Quesadilla de Queijo', ['tortilha', 'queijo', 'cebola', 'pimentão']],
  ['Tostex de Queijo', ['pão', 'queijo', 'manteiga']],

  // ===== Sopas e cremes =====
  ['Caldo Verde', ['batata', 'couve', 'linguiça', 'cebola']],
  ['Creme de Abóbora', ['abóbora', 'creme de leite', 'cebola', 'alho']],
  ['Sopa de Cebola', ['cebola', 'caldo', 'queijo', 'pão']],
  ['Canja de Galinha', ['frango', 'arroz', 'cenoura', 'cebola']],
  ['Sopa de Tomate', ['tomate', 'cebola', 'alho', 'caldo']],
  ['Sopa de Ervilha', ['ervilha', 'bacon', 'cebola', 'alho']],

  // ===== Saladas e acompanhamentos =====
  ['Salada Caesar (simplificada)', ['alface', 'frango', 'croutons', 'queijo parmesão']],
  ['Salada Grega', ['tomate', 'pepino', 'azeitona', 'queijo']],
  ['Salada Caprese', ['tomate', 'muçarela', 'manjericão', 'azeite']],
  ['Vinagrete', ['tomate', 'cebola', 'pimentão', 'vinagre']],
  ['Farofa Simples', ['farinha de mandioca', 'manteiga', 'cebola', 'sal']],
  ['Legumes Salteados', ['cenoura', 'brócolis', 'abobrinha', 'azeite']],
  ['Batata Rústica', ['batata', 'alho', 'azeite', 'páprica']],
  ['Batata Frita', ['batata', 'óleo', 'sal']],
  ['Pão de Alho', ['pão', 'alho', 'manteiga', 'salsinha']],

  // ===== Brasileiras clássicas =====
  ['Feijoada', ['feijão preto', 'carne seca', 'linguiça', 'bacon']],
  ['Carreteiro', ['arroz', 'carne seca', 'cebola', 'salsinha']],
  ['Escondidinho de Frango', ['frango', 'batata', 'queijo', 'cebola']],
  ['Cuscuz Nordestino', ['flocos de milho', 'água', 'sal', 'manteiga']],
  ['Tutu de Feijão', ['feijão', 'farinha de mandioca', 'bacon', 'cebola']],
  ['Vatapá (simplificado)', ['pão', 'leite de coco', 'azeite de dendê', 'camarão']],
  ['Caruru (simplificado)', ['quiabo', 'camarão', 'amendoim', 'azeite de dendê']],
  ['Frango com Quiabo', ['frango', 'quiabo', 'cebola', 'alho']],
  ['Picadinho com Abóbora', ['carne bovina', 'abóbora', 'cebola', 'alho']],
  ['Polenta com Molho', ['fubá', 'molho de tomate', 'queijo', 'manteiga']],
  ['Pão de Queijo', ['polvilho', 'queijo', 'leite', 'ovo']],
  ['Tapioca Doce', ['tapioca', 'coco ralado', 'leite condensado']],

  // ===== Vegetarianas e veganas =====
  ['Ratatouille', ['berinjela', 'abobrinha', 'pimentão', 'tomate']],
  ['Shakshuka', ['ovo', 'tomate', 'pimentão', 'cebola']],
  ['Quibe de Abóbora', ['abóbora', 'trigo para quibe', 'cebola', 'hortelã']],
  ['Falafel', ['grão-de-bico', 'cebola', 'alho', 'coentro']],
  ['Homus', ['grão-de-bico', 'tahine', 'limão', 'alho']],
  ['Tabule', ['trigo para quibe', 'tomate', 'pepino', 'hortelã']],
  ['Legumes ao Curry', ['batata', 'cenoura', 'curry', 'leite de coco']],
  ['Hambúrguer de Grão-de-bico', ['grão-de-bico', 'cebola', 'alho', 'farinha']],
  ['Escondidinho de Abóbora e Cogumelo', ['abóbora', 'cogumelo', 'cebola', 'alho']],
  ['Forno de Legumes com Queijo', ['abobrinha', 'berinjela', 'tomate', 'queijo']],

  // ===== Molhos, pastas e petiscos =====
  ['Guacamole', ['abacate', 'limão', 'cebola', 'coentro']],
  ['Pico de Gallo', ['tomate', 'cebola', 'coentro', 'limão']],
  ['Bruschetta de Tomate', ['pão', 'tomate', 'alho', 'azeite']],
  ['Patê de Atum', ['atum', 'maionese', 'cebola', 'salsinha']],
  ['Patê de Frango', ['frango', 'maionese', 'cenoura', 'salsinha']],
  ['Caprese no Palito', ['tomate cereja', 'muçarela', 'manjericão']],
  ['Queijo Coalho Grelhado', ['queijo coalho', 'azeite']],
  ['Ovos de Codorna Temperados', ['ovo', 'azeite', 'orégano', 'sal']],
  ['Molho Tártaro', ['maionese', 'picles', 'mostarda', 'limão']],
  ['Molho Pesto', ['manjericão', 'alho', 'azeite', 'queijo parmesão']],
  ['Molho de Iogurte e Alho', ['iogurte', 'alho', 'limão', 'sal']],

  // ===== Internacionais rápidas =====
  ['Yakissoba Simples', ['macarrão', 'brócolis', 'cenoura', 'molho shoyu']],
  ['Fried Rice', ['arroz', 'ovo', 'cebola', 'shoyu']],
  ['Curry de Grão-de-bico', ['grão-de-bico', 'curry', 'leite de coco', 'cebola']],
  ['Tortilla Espanhola', ['batata', 'ovo', 'cebola', 'azeite']],
  ['Paella Rápida', ['arroz', 'frango', 'pimentão', 'ervilha']],
  ['Goulash Simples', ['carne bovina', 'páprica', 'cebola', 'tomate']],
  ['Ramen Caseiro (simplificado)', ['macarrão', 'caldo', 'ovo', 'cebola']],
  ['Burrito de Frango', ['tortilha', 'frango', 'arroz', 'feijão']],
  ['Cuscuz Marroquino', ['cuscuz', 'cenoura', 'abobrinha', 'azeite']],

  // ===== Doces e cafés (opcional) =====
  ['Brigadeiro', ['leite condensado', 'chocolate em pó', 'manteiga']],
  ['Beijinho', ['leite condensado', 'coco ralado', 'manteiga']],
  ['Mousse de Maracujá', ['creme de leite', 'leite condensado', 'suco de maracujá']],
  ['Pudim de Leite', ['leite condensado', 'leite', 'ovo']],
  ['Bolo de Chocolate Simples', ['farinha de trigo', 'açúcar', 'chocolate em pó', 'ovo']],
  ['Panqueca Doce', ['farinha de trigo', 'leite', 'ovo', 'açúcar']],
  ['Crepe de Nutella (genérico)', ['massa de crepe', 'chocolate', 'banana']],
  ['Banana Flambada (sem álcool)', ['banana', 'açúcar', 'manteiga', 'canela']],
  ['Chocolate Quente', ['leite', 'chocolate em pó', 'açúcar']],
  ['Café com Leite', ['café', 'leite', 'açúcar']],
  ['Vitamina de Banana', ['banana', 'leite', 'açúcar']],

  // ===== DRINKS (álcool e não alcoólicos) =====
  ['Caipiroska', ['vodka', 'limão', 'açúcar', 'gelo']],
  ['Caipirinha de Maracujá', ['cachaça', 'maracujá', 'açúcar', 'gelo']],
  ['Mojito', ['rum', 'limão', 'hortelã', 'água com gás']],
  ['Cuba Libre', ['rum', 'refrigerante de cola', 'limão', 'gelo']],
  ['Piña Colada', ['rum', 'leite de coco', 'abacaxi', 'gelo']],
  ['Margarita', ['tequila', 'triple sec', 'limão', 'gelo']],
  ['Paloma', ['tequila', 'refrigerante de grapefruit', 'limão', 'gelo']],
  ['Negroni', ['gin', 'campari', 'vermouth', 'gelo']],
  ['Aperol Spritz', ['aperol', 'espumante', 'água com gás', 'gelo']],
  ['Moscow Mule', ['vodka', 'gengibre', 'limão', 'água com gás']],
  ['Bloody Mary', ['vodka', 'suco de tomate', 'limão', 'molho inglês']],
  ['Whisky Sour', ['uísque', 'limão', 'açúcar', 'gelo']],
  ['Old Fashioned', ['uísque', 'açúcar', 'bitter', 'gelo']],
  ['Gin Tônica de Pepino', ['gin', 'água tônica', 'pepino', 'gelo']],
  ['Spritz de Maracujá (leve)', ['suco de maracujá', 'água com gás', 'gelo', 'limão']],
  ['Limonada Suíça', ['limão', 'água', 'açúcar', 'gelo']],
  ['Clericot (simplificado)', ['vinho branco', 'frutas', 'água com gás', 'gelo']],
  ['Sangria', ['vinho tinto', 'frutas', 'açúcar', 'gelo']],
  ['Batida de Coco', ['leite de coco', 'vodka', 'leite condensado', 'gelo']],
  ['Batida de Maracujá', ['maracujá', 'cachaça', 'leite condensado', 'gelo']],
  ['Gin com Hibisco (simples)', ['gin', 'chá de hibisco', 'limão', 'gelo']],
  ['Coquetel de Morango sem Álcool', ['morango', 'suco de laranja', 'água com gás', 'gelo']],
  ['Pink Lemonade', ['limão', 'xarope de groselha', 'água', 'gelo']],
  ['Mate com Limão', ['chá mate', 'limão', 'açúcar', 'gelo']],
  ['Iced Coffee', ['café', 'gelo', 'leite', 'açúcar']],
  ['Espresso Tônica', ['café', 'água tônica', 'gelo']],
  ['Irish Coffee (simplificado)', ['café', 'uísque', 'açúcar', 'creme de leite']],
  ['Dry Martini', ['gin', 'vermouth seco', 'azeitona']],
  ['Manhattan', ['uísque', 'vermouth tinto', 'bitter']],
  ['Cosmopolitan', ['vodka', 'licor de laranja', 'suco de cranberry', 'limão']],
  ['Daiquiri', ['rum', 'limão', 'açúcar']],
  ['Tom Collins', ['gin', 'limão', 'açúcar', 'água com gás']],
  ['French 75', ['gin', 'espumante', 'limão', 'açúcar']],
  ['Tequila Sunrise', ['tequila', 'suco de laranja', 'groselha', 'gelo']],
  ['Bellini', ['espumante', 'suco de pêssego']],
  ['Kir Royal', ['espumante', 'licor de cassis']],
  ['Amaretto Sour', ['amaretto', 'limão', 'açúcar']],
  ['Sidecar', ['conhaque', 'licor de laranja', 'limão']],
  ['Mint Julep', ['uísque', 'hortelã', 'açúcar', 'gelo']],
  ['Caipirinha de Morango', ['cachaça', 'morango', 'açúcar', 'gelo']],
  ['Caipirinha de Abacaxi com Hortelã', ['cachaça', 'abacaxi', 'hortelã', 'açúcar']],
  ['Batida de Morango', ['vodka', 'morango', 'leite condensado', 'gelo']],
  ['Batida de Paçoca', ['cachaça', 'paçoca', 'leite condensado', 'gelo']],
  ['Rabo de Galo', ['cachaça', 'vermouth tinto', 'gelo']],
  ['Catuaba com Açaí', ['catuaba', 'açaí', 'gelo', 'leite condensado']],
  ['Vinho Quente (simplificado)', ['vinho tinto', 'açúcar', 'cravo', 'canela']],
  ['Quentão (simplificado)', ['cachaça', 'gengibre', 'açúcar', 'água']],
  ['Suco de Abacaxi com Hortelã', ['abacaxi', 'hortelã', 'açúcar', 'água']],
  ['Suco Verde Simples', ['couve', 'laranja', 'gengibre', 'água']],
  ['Suco de Melancia com Gengibre', ['melancia', 'gengibre', 'gelo']],
  ['Suco de Laranja com Cenoura', ['laranja', 'cenoura', 'açúcar', 'água']],
  ['Chá Gelado de Pêssego', ['chá preto', 'pêssego', 'açúcar', 'gelo']],
  ['Limonada com Gengibre e Hortelã', ['limão', 'gengibre', 'hortelã', 'água']],
  ['Água Saborizada de Pepino e Limão', ['água', 'pepino', 'limão', 'hortelã']],
  ['Smoothie de Banana e Morango', ['banana', 'morango', 'leite', 'aveia']],
  ['Chocolate Gelado', ['leite', 'chocolate em pó', 'açúcar', 'gelo']],
  ['Café Gelado com Caramelo', ['café', 'leite', 'calda de caramelo', 'gelo']],

  // ===== Extras úteis =====
  ['Quiche de Queijo', ['ovo', 'queijo', 'creme de leite', 'massa']],
  ['Quiche de Alho-Poró', ['alho-poró', 'ovo', 'creme de leite', 'massa']],
  ['Esfiha de Carne', ['massa', 'carne moída', 'cebola', 'tomate']],
  ['Kibe Assado', ['trigo para quibe', 'carne moída', 'cebola', 'hortelã']],
  ['Empadão de Frango', ['massa', 'frango', 'requeijão', 'milho']],
  ['Torta de Legumes', ['massa', 'abobrinha', 'cenoura', 'cebola']],
  ['Francesinha Simples', ['pão', 'presunto', 'queijo', 'molho de tomate']],
  ['Pizza Marguerita Caseira', ['massa de pizza', 'molho de tomate', 'muçarela', 'manjericão']],
  ['Pizza de Calabresa Caseira', ['massa de pizza', 'molho de tomate', 'calabresa', 'cebola']],
  ['Escondidinho de Bacalhau', ['bacalhau', 'batata', 'cebola', 'azeite']],
  ['Cuscuz Paulista', ['farinha de milho', 'atum', 'tomate', 'ervilha']],
  ['Pan con Tomate', ['pão', 'tomate', 'alho', 'azeite']],
  ['Tofu Grelhado com Legumes', ['tofu', 'shoyu', 'brócolis', 'cenoura']],
  ['Berinjela à Parmegiana', ['berinjela', 'molho de tomate', 'queijo', 'farinha de rosca']],
  ['Abobrinha Recheada', ['abobrinha', 'carne moída', 'queijo', 'molho de tomate']],
  ['Yakimeshi', ['arroz', 'ovo', 'cenoura', 'cebola']],
  ['Frango Teriyaki (simplificado)', ['frango', 'shoyu', 'açúcar', 'gengibre']],
  ['Salpicão de Frango', ['frango', 'maionese', 'cenoura', 'milho']],
  ['Maionese de Batata', ['batata', 'maionese', 'cenoura', 'ervilha']],
  ['Couve Refogada', ['couve', 'alho', 'azeite', 'sal']],
  ['Quiabo Refogado', ['quiabo', 'cebola', 'alho', 'azeite']],
  ['Abóbora Assada', ['abóbora', 'azeite', 'alho', 'sal']],
  ['Cenoura Glaceada', ['cenoura', 'manteiga', 'açúcar', 'sal']],
  ['Gratinado de Couve-Flor', ['couve-flor', 'creme de leite', 'queijo', 'manteiga']],
  ['Pan con Ajo (alho)', ['pão', 'alho', 'azeite', 'sal']],
  ['Arepa Simples', ['farinha de milho', 'água', 'sal']],
  ['Tostones', ['banana-da-terra', 'óleo', 'sal']],

  // ===== NOVAS RECEITAS - PETISCOS E LANCHES BRASILEIROS =====
  ['Coxinha', ['frango', 'farinha de trigo', 'caldo', 'óleo', 'cebola']],
  ['Pastel de Carne', ['massa de pastel', 'carne moída', 'ovo', 'cebola', 'azeitona']],
  ['Pastel de Queijo', ['massa de pastel', 'queijo', 'óleo', 'orégano']],
  ['Bolinha de Queijo', ['leite', 'farinha de trigo', 'manteiga', 'queijo', 'óleo']],
  ['Pão de Batata', ['batata', 'farinha de trigo', 'leite', 'ovo', 'fermento']],
  ['Joelho de Presunto e Queijo', ['massa', 'presunto', 'queijo', 'molho de tomate']],
  ['Esfiha de Queijo', ['massa', 'queijo', 'ovo', 'leite']],
  ['Mini Pizza', ['massa de pizza', 'molho de tomate', 'queijo', 'orégano']],
  ['Dadinho de Tapioca', ['tapioca granulada', 'queijo coalho', 'leite', 'sal']],
  ['Bolinho de Bacalhau', ['bacalhau', 'batata', 'ovo', 'salsinha', 'farinha de trigo']],
  ['Bolinho de Arroz', ['arroz', 'ovo', 'queijo', 'farinha de trigo', 'salsinha']],
  ['Calabresa Acebolada com Pão', ['linguiça', 'cebola', 'pão', 'azeite']],

  // ===== NOVAS RECEITAS - PRATOS PRINCIPAIS BRASILEIROS =====
  ['Virado à Paulista', ['bisteca suína', 'feijão', 'ovo', 'couve', 'farinha de mandioca']],
  ['Arrumadinho de Carne Seca', ['carne seca', 'feijão', 'farinha de mandioca', 'vinagrete']],
  ['Galeto Assado', ['galeto', 'alho', 'sal', 'vinagre', 'limão']],
  ['Dobradinha', ['dobradinha', 'feijão branco', 'linguiça', 'bacon', 'tomate']],
  ['Rabada com Agrião', ['rabada', 'agrião', 'cebola', 'tomate', 'alho']],
  ['Escondidinho de Charque', ['charque', 'mandioca', 'manteiga', 'queijo coalho']],
  ['Torta de Frango de Liquidificador', ['frango', 'farinha de trigo', 'leite', 'ovo', 'milho']],
  ['Suflê de Queijo', ['ovo', 'queijo', 'leite', 'farinha de trigo', 'manteiga']],

  // ===== NOVAS RECEITAS - SOBREMESAS CLÁSSICAS =====
  ['Quindim', ['gema', 'açúcar', 'coco ralado', 'manteiga']],
  ['Pavê de Chocolate', ['biscoito maisena', 'leite condensado', 'creme de leite', 'chocolate em pó']],
  ['Manjar de Coco', ['leite de coco', 'amido de milho', 'açúcar', 'ameixa em calda']],
  ['Arroz Doce', ['arroz', 'leite', 'açúcar', 'canela']],
  ['Canjica', ['milho para canjica', 'leite de coco', 'leite', 'açúcar', 'canela']],
  ['Curau de Milho', ['milho', 'leite', 'açúcar', 'manteiga', 'canela']],
  ['Romeu e Julieta', ['goiabada', 'queijo minas']],
  ['Torta Holandesa (simplificada)', ['biscoito maisena', 'manteiga', 'creme de leite', 'chocolate']],
  ['Torta de Limão (simplificada)', ['biscoito maisena', 'leite condensado', 'limão', 'creme de leite']],
  ['Doce de Abóbora com Coco', ['abóbora', 'coco ralado', 'açúcar', 'cravo']],
  ['Pé de Moleque', ['amendoim', 'açúcar', 'leite condensado']],
  ['Bolo de Fubá com Goiabada', ['fubá', 'farinha de trigo', 'ovo', 'leite', 'goiabada']],
  ['Ambrosia', ['leite', 'ovo', 'açúcar', 'cravo', 'canela']],
  ['Sagu com Vinho', ['sagu', 'vinho tinto', 'açúcar', 'cravo']],
  ['Gelatina Colorida', ['gelatina', 'creme de leite', 'leite condensado']],

]);

/**
 * Retorna receitas sugeridas que contêm pelo menos 3 dos ingredientes disponíveis.
 * Para cada receita, também lista os ingredientes que estão faltando.
 * @param detectedIngredients Uma lista de ingredientes detectados da imagem.
 * @returns Uma lista de objetos de receita, cada um contendo o nome da receita e os ingredientes que faltam.
 */
export function findMatchingRecipes(detectedIngredients: string[]): { recipeName: string; missingIngredients: string[] }[] {
  const suggestedRecipes: { recipeName: string; missingIngredients: string[] }[] = [];
  const minMatchingIngredients = 3;

  const availableIngredients = new Set(detectedIngredients.map(ing => ing.toLowerCase()));

  for (const [recipe, requiredIngredients] of recipeData.entries()) {
    let matchCount = 0;
    const missingIngredients: string[] = [];

    // Verifique cada ingrediente necessário para a receita
    for (const requiredIngredient of requiredIngredients) {
      const requiredLower = requiredIngredient.toLowerCase();
      // Lógica flexível para considerar variações (e.g., 'tomate' vs 'tomates')
      if (availableIngredients.has(requiredLower) || availableIngredients.has(requiredLower + 's') || availableIngredients.has(requiredLower.slice(0, -1))) {
        matchCount++;
      } else {
        missingIngredients.push(requiredIngredient);
      }
    }

    // Se o número de ingredientes correspondentes for maior ou igual ao mínimo, adicione a receita
    if (matchCount >= minMatchingIngredients) {
      suggestedRecipes.push({
        recipeName: recipe,
        missingIngredients: missingIngredients
      });
    }
  }

  return suggestedRecipes;
}

/**
 * Finds matching recipes from the database based on available ingredients.
 * A recipe is considered a match if all of its required ingredients are present
 * in the list of detected ingredients.
 * @param detectedIngredients A list of ingredients detected from the image.
 * @returns A list of recipe names that can be made with the available ingredients.
 */
// export function findMatchingRecipes(detectedIngredients: string[]): string[] {
//   const matchingRecipes: string[] = [];
  
//   // Create a set for quick lookups of detected ingredients.
//   // Convert to lowercase for case-insensitive matching.
//   const availableIngredients = new Set(detectedIngredients.map(ing => ing.toLowerCase()));

//   for (const [recipe, requiredIngredients] of recipeData.entries()) {
//     // Check if all required ingredients for the recipe are available.
//     const hasAllIngredients = requiredIngredients.every(req => {
//         // Simple check for inclusion. For more complex cases, you might want to handle plurals or variations.
//         // e.g., 'tomate' vs 'tomates'
//         const reqLower = req.toLowerCase();
//         return availableIngredients.has(reqLower) || availableIngredients.has(reqLower + 's');
//     });

//     if (hasAllIngredients) {
//       matchingRecipes.push(recipe);
//     }
//   }

//   return matchingRecipes;
// }
