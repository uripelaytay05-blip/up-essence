
/* ============================================================
   UP ESSENCE — CATÁLOGO DE PERFUMES
   Incluye: Diseñador, Árabes y Perfumería de Nicho
   ============================================================ */

// Función para completar los datos generales de cada perfume.
function crearPerfume(id, name, brand, category, family, img, extra = {}) {
    return {
        id,
        name,
        brand,
        category,
        family,
        price: ["disenador", "nicho"].includes(category) ? 70000 : 60000,
        img: `imagenes/${img}`,
        desc: "Descubrí esta fragancia de nuestra colección UP Essence. Consultanos por disponibilidad y presentación.",
        topNotes: "Consultar notas oficiales",
        heartNotes: "Consultar notas oficiales",
        baseNotes: "Consultar notas oficiales",
        longevity: "Variable según la piel",
        longevityPct: 80,
        sillage: "Moderada a alta",
        sillagePct: 80,
        ...extra
    };
}

const perfumes = [
    // ========================================================
    // PERFUMES ÁRABES — LATTAFA
    // ========================================================
    crearPerfume("p1", "Yara EDP", "LATTAFA", "arabes", "Gourmand", "yara.jpg", {
        desc: "Fragancia dulce y cremosa con acordes frutales, florales y un fondo de vainilla.",
        topNotes: "Heliotropo, Orquídea, Mandarina",
        heartNotes: "Acorde gourmand, Frutos rojos",
        baseNotes: "Vainilla, Sándalo, Almizcle",
        longevity: "Alta",
        longevityPct: 88,
        sillage: "Alta",
        sillagePct: 85
    }),
    crearPerfume("p4", "His Confession", "LATTAFA", "arabes", "Especiado", "his-confession.jpg", {
    desc: "Una fragancia masculina elegante que combina la frescura de la mandarina y la lavanda con el toque cálido de la canela. En su corazón aparecen el iris, el ciprés y el benjuí, mientras que el fondo de vainilla, haba tonka, pachulí, cedro, incienso y ámbar aporta profundidad y calidez. Ideal para quienes buscan un aroma sofisticado y versátil.",
    topNotes: "Mandarina, Canela, Lavanda",
    heartNotes: "Iris, Ciprés, Benjuí, Mahonial",
    baseNotes: "Vainilla, Haba Tonka, Pachulí, Cedro, Incienso, Ámbar",
    longevity: "Alta",
    longevityPct: 80,
    sillage: "Moderada a Alta",
    sillagePct: 75
        }),
    crearPerfume("p12", "Musamam Black Intense", "LATTAFA", "arabes", "Amaderado", "musamam-black.jpg", {
    desc: "Una fragancia intensa y moderna que combina la frescura aromática de la lavanda, la bergamota y la salvia con un corazón amaderado y floral. Su fondo de madera de arce, pachulí, haba tonka y acordes cálidos aporta profundidad y un carácter envolvente. Ideal para quienes prefieren aromas amaderados, especiados y sofisticados.",
    topNotes: "Lavanda, Nuez Moscada, Bergamota, Salvia",
    heartNotes: "Geranio, Rosyfolia, Mahonial, Cedro",
    baseNotes: "Madera de Arce, Pachulí, Haba Tonka, Cocoapulse, Ambrofix",
    longevity: "Alta",
    longevityPct: 83,
    sillage: "Alta",
    sillagePct: 80
    }),
    crearPerfume("p13", "Crème of Clouds", "FRAGRANCE WORLD", "arabes", "Gourmand", "creme-of-clouds.jpg", {
    desc: "Una fragancia gourmand dulce, cremosa y envolvente que recuerda a un postre suave. Combina crema batida con leche de coco y vainilla, mientras que el azúcar quemado aporta un matiz acaramelado. Su perfil delicado y goloso es ideal para quienes disfrutan de los aromas dulces y cremosos.",
    topNotes: "Crema Batida",
    heartNotes: "Leche de Coco, Vainilla",
    baseNotes: "Azúcar Quemado",
    longevity: "Moderada a Alta",
    longevityPct: 75,
    sillage: "Moderada",
    sillagePct: 70
}),
    crearPerfume("p17", "Khamrah Waha", "LATTAFA", "arabes", "Acuático Amaderado", "khamrah-waha.jpg", {
    desc: "Una fragancia unisex que combina cítricos vibrantes y especias frescas con un corazón aromático y acuático. Su fondo de vainilla, haba tonka, almizcle y maderas aporta calidez y profundidad. Ideal para quienes buscan un aroma moderno que equilibre frescura e intensidad.",
    topNotes: "Bergamota, Yuzu, Enebro, Jengibre",
    heartNotes: "Iris, Pepino, Salvia, Acorde de Sal Marina",
    baseNotes: "Akigalawood, Haba Tonka, Vainilla, Almizcle, Ambrofix",
    longevity: "Alta",
    longevityPct: 80,
    sillage: "Moderada a Alta",
    sillagePct: 75
}),
    crearPerfume("p18", "Khamrah EDP", "LATTAFA", "arabes", "Gourmand", "khamrah.png", {
        desc: "Fragancia cálida y especiada que combina acordes dulces, dátiles, praliné, vainilla y ámbar.",
        topNotes: "Bergamota, Canela, Nuez moscada",
        heartNotes: "Dátiles, Praliné, Nardos",
        baseNotes: "Vainilla, Haba tonka, Madera de ámbar"
    }),
    crearPerfume("p37", "Khamrah Qahwa", "LATTAFA", "arabes", "Gourmand", "khamrah-qahwa.jpg", {
    desc: "Una fragancia unisex cálida, dulce y especiada. Combina aromas de canela y cardamomo con un corazón goloso de praliné y frutas confitadas. Su fondo de café, vainilla y haba tonka aporta profundidad y una sensación envolvente. Ideal para quienes disfrutan de los perfumes dulces e intensos.",
    topNotes: "Canela, Cardamomo, Jengibre",
    heartNotes: "Praliné, Frutas Confitadas, Flores Blancas",
    baseNotes: "Café, Vainilla, Haba Tonka, Benjuí, Almizcle",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
    }),
    crearPerfume("p38", "Asad", "LATTAFA", "arabes", "Ambarado Especiado", "asad.jpg", {
    desc: "Una fragancia masculina intensa y cálida que mezcla pimienta negra, piña y tabaco con un corazón de café, iris y pachulí. Su fondo de vainilla, ámbar, maderas secas, benjuí y ládano le aporta profundidad y un carácter especiado. Ideal para quienes prefieren aromas marcados y envolventes.",
    topNotes: "Pimienta Negra, Piña, Tabaco",
    heartNotes: "Café, Iris, Pachulí",
    baseNotes: "Ámbar, Vainilla, Maderas Secas, Benjuí, Ládano",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
}),
    crearPerfume("p39", "Asad Elixir", "LATTAFA", "arabes", "Amaderado Especiado", "asad-elixir.jpg", {
    desc: "Una fragancia intensa y sofisticada que combina la pimienta rosa, el azafrán y el pomelo con un corazón cálido de tabaco, cedro y vainilla. Su fondo de pachulí, incienso, madera de cachemira y ámbar seco aporta profundidad y un carácter envolvente. Ideal para quienes prefieren aromas cálidos, especiados y amaderados.",
    topNotes: "Pimienta Rosa, Azafrán, Pomelo",
    heartNotes: "Tabaco, Cedro, Vainilla",
    baseNotes: "Pachulí, Incienso, Cashmeran, Ámbar Seco",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
}),
    crearPerfume("p40", "Asad Bourbon", "LATTAFA", "arabes", "Ambarado Especiado", "asad-bourbon.jpg", {
    desc: "Una fragancia cálida y sofisticada que combina la frescura aromática de la lavanda y la pimienta rosa con el dulzor frutal de la ciruela Mirabel. Su corazón de cacao, davana y nuez moscada se funde con un fondo de vainilla Bourbon, ámbar y vetiver. Ideal para quienes disfrutan de aromas dulces, especiados y envolventes.",
    topNotes: "Pimienta Rosa, Lavanda, Ciruela Mirabel",
    heartNotes: "Cacao, Davana, Nuez Moscada",
    baseNotes: "Vetiver, Vainilla Bourbon, Ámbar",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Moderada a Alta",
    sillagePct: 80
}),
    crearPerfume("p41", "Asad Zanzibar", "LATTAFA", "arabes", "Acuático Amaderado", "asad-zanzibar.jpg", {
    desc: "Una fragancia con un perfil tropical y especiado que mezcla la pimienta negra y la lavanda marina con un corazón cremoso de agua de coco salada e iris. El fondo de vainilla e incienso aporta calidez y contraste. Una opción original para quienes buscan un aroma diferente, con matices frescos, salados y dulces.",
    topNotes: "Pimienta Negra, Lavanda Marina",
    heartNotes: "Agua de Coco Salada, Iris",
    baseNotes: "Vainilla, Incienso",
    longevity: "Moderada a Alta",
    longevityPct: 75,
    sillage: "Moderada",
    sillagePct: 70
}),
    crearPerfume("p42", "Yara Elixir", "LATTAFA", "arabes", "Gourmand Floral", "yara-elixir.jpg", {
    desc: "Una fragancia femenina dulce y cremosa que combina un acorde goloso de frutillas con grosella negra. En su corazón aparecen el jazmín y el azahar, mientras que la vainilla, el caramelo, el ámbar y el almizcle aportan un fondo cálido y envolvente. Ideal para quienes disfrutan de los aromas dulces, frutales y florales.",
    topNotes: "Acorde de Frutillas, Grosella Negra",
    heartNotes: "Jazmín, Azahar",
    baseNotes: "Vainilla, Caramelo, Ámbar, Almizcle",
    longevity: "Alta",
    longevityPct: 80,
    sillage: "Moderada a Alta",
    sillagePct: 75
}),
    crearPerfume("p43", "Her Confession", "LATTAFA", "arabes", "Floral Ambarado", "her-confession.jpg", {
    desc: "Una fragancia femenina cálida, dulce y misteriosa. La canela aporta un comienzo especiado, seguido por un corazón floral de jazmín y nardos acompañado por incienso. En el fondo, la vainilla, el almizcle y el haba tonka crean una sensación cremosa y envolvente. Ideal para quienes disfrutan de los aromas florales dulces con un toque elegante.",
    topNotes: "Canela, Mystikal",
    heartNotes: "Jazmín, Nardos, Incienso, Mahonial",
    baseNotes: "Haba Tonka, Almizcle, Vainilla",
    longevity: "Variable según la piel",
    longevityPct: 75,
    sillage: "Moderada",
    sillagePct: 70
}),

    // ========================================================
    // PERFUMES ÁRABES — AFNAN
    // ========================================================
    crearPerfume("p6", "9PM Classic", "AFNAN", "arabes", "Gourmand", "9pm.jpg", {
        desc: "Fragancia dulce con manzana, especias y un fondo de vainilla y haba tonka.",
        topNotes: "Manzana, Lavanda, Bergamota",
        heartNotes: "Flor de azahar, Lirio",
        baseNotes: "Vainilla, Haba tonka, Ámbar"
    }),
    crearPerfume("p8", "9PM Night Out", "AFNAN", "arabes", "Ambarado Afrutado Especiado", "9pm-night-out.jpg", {
    desc: "Una fragancia moderna y envolvente que combina fruta del dragón, bergamota, coñac, lavanda y manzana. Su corazón mezcla cardamomo, gamuza, toffee y cedro, mientras que el fondo de haba tonka, pachulí y maderas aromáticas aporta profundidad y calidez. Ideal para quienes buscan un aroma intenso y sofisticado.",
    topNotes: "Fruta del Dragón, Bergamota, Coñac, Lavanda, Manzana",
    heartNotes: "Cardamomo, Gamuza, Toffee, Cedro, Mahonial",
    baseNotes: "Haba Tonka, Akigalawood, Ambrofix, Pachulí",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Moderada a Alta",
    sillagePct: 80
}),
    crearPerfume("p10", "9PM Rebel", "AFNAN", "arabes", "Amaderado Ambarado Afrutado", "9pm-rebel.jpg", {
    desc: "Una fragancia unisex frutal y amaderada que abre con mandarina, piña y manzana verde. Su corazón combina cedro, musgo de roble y vainilla, mientras que el fondo de caramelo, maderas secas, ámbar gris y almizcle aporta un toque dulce, cálido y persistente. Una opción versátil para quienes buscan un aroma juvenil y con personalidad.",
    topNotes: "Mandarina, Piña, Manzana Verde",
    heartNotes: "Cedro, Musgo de Roble, Vainilla",
    baseNotes: "Caramelo, Maderas Secas, Ámbar Gris, Almizcle",
    longevity: "Alta",
    longevityPct: 80,
    sillage: "Moderada a Alta",
    sillagePct: 75
}),
    crearPerfume("p11", "9PM Elixir", "AFNAN", "arabes", "Cuero Especiado Ambarado", "9pm-elixir.jpg", {
    desc: "Una fragancia intensa y sofisticada que combina la nuez moscada, el elemí y el cardamomo en una apertura especiada. En el corazón aparecen el pimiento de Jamaica, la lavanda y el cuero, mientras que el fondo de ládano, pachulí, vainilla y jara aporta profundidad, calidez y un carácter elegante.",
    topNotes: "Nuez Moscada, Elemí, Cardamomo",
    heartNotes: "Pimiento de Jamaica, Lavanda, Cuero",
    baseNotes: "Jara, Ládano, Pachulí, Vainilla",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
}),
    
crearPerfume("p15", "Supremacy Collector's Edition", "AFNAN", "arabes", "Afrutado Amaderado Ambarado", "supremacy-collectors.jpg", {
    desc: "Una fragancia masculina elegante que combina piña, bergamota, manzana y flores blancas en una apertura fresca y frutal. Su corazón de flor de azahar, abedul y ámbar aporta sofisticación, mientras que el musgo de roble, el almizcle y el ámbar gris completan un fondo amaderado y envolvente.",
    topNotes: "Piña, Bergamota, Manzana, Flores Blancas",
    heartNotes: "Flor de Azahar, Abedul, Ámbar",
    baseNotes: "Musgo de Roble, Almizcle, Ámbar Gris",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Moderada a Alta",
    sillagePct: 80
}),
    crearPerfume("p28", "9PM Femme", "AFNAN", "arabes", "Floral Afrutado Amaderado", "9pm-femme.jpg", {
    desc: "Una fragancia femenina intensa que combina frambuesa, manzana, violeta y naranja con un corazón floral de rosa, peonía, iris y jazmín. Su fondo de cedro, ciprés, pino y ámbar aporta calidez y un carácter elegante, ideal para quienes prefieren aromas florales con personalidad.",
    topNotes: "Frambuesa, Manzana, Violeta, Naranja",
    heartNotes: "Rosa, Peonía, Iris, Jazmín",
    baseNotes: "Cedro, Ciprés, Pino, Ámbar",
    longevity: "Alta",
    longevityPct: 80,
    sillage: "Moderada a Alta",
    sillagePct: 75
}),
    crearPerfume("p29", "9 AM Dive", "AFNAN", "arabes", "Fresco Amaderado Aromático", "9am-dive.jpg", {
    desc: "Una fragancia fresca y versátil que combina limón, pimienta rosa, menta y grosella negra. Su corazón de manzana, incienso y cedro aporta un contraste aromático, mientras que el pachulí, el jazmín, el jengibre y el sándalo completan un fondo amaderado. Ideal para quienes buscan una sensación fresca y revitalizante.",
    topNotes: "Limón, Pimienta Rosa, Menta, Grosella Negra",
    heartNotes: "Manzana, Incienso, Cedro",
    baseNotes: "Pachulí, Jazmín, Jengibre, Sándalo",
    longevity: "Moderada a Alta",
    longevityPct: 75,
    sillage: "Moderada",
    sillagePct: 70
}),
    crearPerfume("p30", "Turathi Electric", "AFNAN", "arabes", "Afrutado Amaderado Fresco", "turathi-electric.jpg", {
    desc: "Una fragancia unisex luminosa y moderna que combina bergamota, pomelo rosado, pera y mandarina. En el corazón aparecen la manzana, el cedro y la flor de azahar, mientras que la vainilla, el ámbar seco, el almizcle y el ambroxan aportan un fondo suave y cálido. Ideal para quienes disfrutan de los aromas frescos y frutales.",
    topNotes: "Bergamota, Pomelo Rosado, Pera, Mandarina",
    heartNotes: "Manzana, Cedro, Flor de Azahar",
    baseNotes: "Vainilla, Ámbar Seco, Almizcle, Ambroxan",
    longevity: "Moderada a Alta",
    longevityPct: 78,
    sillage: "Moderada",
    sillagePct: 70
}),
    crearPerfume("p31", "Turathi Blue", "AFNAN", "arabes", "Cítrico Amaderado Ambarado", "turathi-blue.jpg", {
    desc: "Una fragancia masculina fresca y sofisticada con una apertura cítrica de bergamota y mandarina. Su corazón combina notas amaderadas y especiadas, mientras que el ámbar, el almizcle y las maderas aportan profundidad y calidez. Una opción versátil para quienes buscan un aroma elegante y moderno.",
    topNotes: "Bergamota, Mandarina",
    heartNotes: "Notas Amaderadas, Especiadas",
    baseNotes: "Ámbar, Almizcle, Maderas",
    longevity: "Alta",
    longevityPct: 82,
    sillage: "Moderada a Alta",
    sillagePct: 78
}),

    // ========================================================
    // PERFUMES ÁRABES — RASASI
    // ========================================================
    crearPerfume("p5", "Hawas Verde", "RASASI", "arabes", "Cítrico Aromático", "hawas-verde.jpg", {
    desc: "Una fragancia fresca y luminosa con un perfil cítrico y verde. La manzana verde aporta un toque frutal crujiente, mientras que las notas aromáticas y el fondo de pachulí y ámbar equilibran la frescura con una calidez suave. Ideal para el día, la facultad y los días cálidos.",
    topNotes: "Acordes Cítricos, Manzana Verde",
    heartNotes: "Lima, Romero",
    baseNotes: "Pachulí, Ámbar",
    longevity: "Moderada",
    longevityPct: 70,
    sillage: "Moderada",
    sillagePct: 65
}),
    crearPerfume("p7", "Hawas Fire", "RASASI", "arabes", "Acuático Ambarado", "hawas-fire.jpg", {
    desc: "Una fragancia unisex de carácter acuático y ambarado. La salvia aporta una apertura aromática, seguida por notas marinas y jazmín egipcio. Su fondo de ámbar, matices minerales y ámbar gris crea una sensación intensa, salina y envolvente. Ideal para quienes buscan un aroma diferente y con personalidad.",
    topNotes: "Salvia Esclarea",
    heartNotes: "Notas Marinas, Jazmín Egipcio",
    baseNotes: "Ámbar, Notas Minerales, Ámbar Gris",
    longevity: "Alta",
    longevityPct: 80,
    sillage: "Moderada a Alta",
    sillagePct: 75
}),
    crearPerfume("p9", "Hawas Lava Gold", "RASASI", "arabes", "Afrutado Amaderado", "hawas-lava-gold.jpg", {
    desc: "Una fragancia intensa que combina la frescura jugosa de los cítricos y las frutas con un corazón de cuero, azafrán, oud y frambuesa. El fondo de musgo, ámbar, pachulí y caramelo aporta profundidad y un contraste entre dulzura y calidez amaderada. Ideal para quienes prefieren aromas llamativos y sofisticados.",
    topNotes: "Piña, Pomelo, Manzana, Limón",
    heartNotes: "Cuero, Azafrán, Oud, Frambuesa",
    baseNotes: "Musgo, Ámbar, Pachulí, Caramelo",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
}),
    crearPerfume("p32", "Hawas Ice", "RASASI", "arabes", "Fresco Afrutado Amaderado", "hawas-ice.jpg", {
    desc: "Una fragancia fresca, frutal y revitalizante. La manzana y los cítricos se combinan con el toque aromático del anís estrellado. En el corazón aparecen la ciruela, la flor de azahar y el cardamomo, mientras que el almizcle, el ámbar, la madera flotante y el musgo aportan un cierre equilibrado. Ideal para el uso diario y los días cálidos.",
    topNotes: "Manzana, Limón Italiano, Bergamota, Anís Estrellado",
    heartNotes: "Ciruela, Flor de Azahar, Cardamomo",
    baseNotes: "Almizcle, Ámbar, Madera Flotante, Musgo",
    longevity: "Alta",
    longevityPct: 82,
    sillage: "Moderada a Alta",
    sillagePct: 78
}),
    crearPerfume("p33", "Hawas Elixir", "RASASI", "arabes", "Gourmand Ambarado", "hawas-elixir.jpg", {
    desc: "Una fragancia dulce, cálida y envolvente que combina la frescura de la menta y la bergamota con un corazón de chocolate oscuro, lavanda y benjuí. Su fondo de vainilla, haba tonka y almizcle blanco aporta una sensación cremosa y golosa. Ideal para quienes disfrutan de los perfumes dulces y especiados.",
    topNotes: "Menta, Bergamota, Artemisa",
    heartNotes: "Chocolate Oscuro, Lavanda, Benjuí",
    baseNotes: "Vainilla, Haba Tonka, Almizcle Blanco",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
}),
    crearPerfume("p34", "Hawas Kobra", "RASASI", "arabes", "Cítrico Amaderado", "hawas-kobra.jpg", {
    desc: "Una fragancia masculina fresca y elegante que combina jengibre, bergamota y mandarina con un corazón de té verde, neroli y canela. El almizcle, las notas amaderadas y el ámbar aportan un fondo cálido que equilibra su carácter cítrico y aromático. Una opción versátil para el día a día.",
    topNotes: "Jengibre, Bergamota, Mandarina",
    heartNotes: "Té Verde, Neroli, Canela",
    baseNotes: "Almizcle, Notas Amaderadas, Ámbar",
    longevity: "Alta",
    longevityPct: 82,
    sillage: "Moderada a Alta",
    sillagePct: 78
}),
    crearPerfume("p35", "Hawas Black", "RASASI", "arabes", "Afrutado Amaderado", "hawas-black.jpg", {
    desc: "Una fragancia masculina de carácter frutal y amaderado. La bergamota, la piña y el pomelo aportan una apertura fresca y jugosa. En el corazón, el pachulí, el cedro y el jazmín suman profundidad, mientras que el musgo de roble, las maderas y el ámbar crean un fondo más oscuro y elegante.",
    topNotes: "Bergamota, Piña, Pomelo",
    heartNotes: "Pachulí, Cedro, Jazmín",
    baseNotes: "Musgo de Roble, Notas Amaderadas, Ámbar",
    longevity: "Alta",
    longevityPct: 83,
    sillage: "Moderada a Alta",
    sillagePct: 78
}),
    crearPerfume("p36", "Hawas Malibu", "RASASI", "arabes", "Afrutado Amaderado", "hawas-malibu.jpg", {
    desc: "Una fragancia de perfil frutal, fresco y cremoso. La piña, la naranja y el pomelo aportan una apertura tropical y luminosa. Su corazón combina iris, lavanda y ámbar, mientras que el haba tonka, el almizcle, el pachulí y las maderas suaves aportan calidez y un acabado envolvente.",
    topNotes: "Piña, Naranja, Pomelo",
    heartNotes: "Iris, Lavanda, Ámbar",
    baseNotes: "Haba Tonka, Almizcle, Pachulí, Cashmeran",
    longevity: "Alta",
    longevityPct: 80,
    sillage: "Moderada a Alta",
    sillagePct: 75
}),

    // ========================================================
    // PERFUMES ÁRABES — OTRAS MARCAS
    // ========================================================
    crearPerfume("p16", "Bharara King", "BHARARA", "arabes", "Cítrico Afrutado Ambarado", "bharara-king.jpg", {
    desc: "Una fragancia masculina luminosa y envolvente que combina naranja, bergamota y limón con un corazón frutal dulce. Su fondo de almizcle blanco, ámbar y vainilla aporta calidez y suavidad. Ideal para quienes buscan un aroma llamativo, dulce y versátil.",
    topNotes: "Naranja, Bergamota, Limón",
    heartNotes: "Notas Frutales",
    baseNotes: "Almizcle Blanco, Ámbar, Vainilla",
    longevity: "Alta",
    longevityPct: 82,
    sillage: "Alta",
    sillagePct: 80
}),
    crearPerfume("p52", "Bharara King Gold Edition", "BHARARA", "arabes", "Afrutado Ambarado Gourmand", "bharara-king-gold.jpg", {
    desc: "Una fragancia dulce y sofisticada que combina naranja, bergamota y limón con un corazón de frutos rojos y coco cremoso. Su fondo de almizcle blanco, vainilla y ámbar aporta una sensación cálida y envolvente. Ideal para quienes prefieren perfumes frutales, dulces y con carácter.",
    topNotes: "Naranja Dulce, Bergamota, Limón",
    heartNotes: "Frutos Rojos, Coco",
    baseNotes: "Almizcle Blanco, Vainilla, Ámbar",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 82
}),
    crearPerfume("p44", "Liquid Brun", "FRENCH AVENUE", "arabes", "Ambarado Avainillado", "liquid-brun.jpg", {
    desc: "Una fragancia cálida y especiada que abre con canela, bergamota, cardamomo y flor de azahar. Su corazón de vainilla Bourbon y elemí combina dulzura con un matiz aromático. En el fondo, el almizcle, el praliné, el ambroxan y la madera de guayaco aportan profundidad y un acabado cremoso y amaderado.",
    topNotes: "Canela, Bergamota, Cardamomo, Flor de Azahar",
    heartNotes: "Vainilla Bourbon, Elemí",
    baseNotes: "Almizcle, Praliné, Ambroxan, Madera de Guayaco",
    longevity: "Alta",
    longevityPct: 88,
    sillage: "Alta",
    sillagePct: 85
}),
    crearPerfume("p45", "Vulcan Feu", "FRENCH AVENUE", "arabes", "Afrutado Especiado Amaderado", "vulcan-feu.jpg", {
    desc: "Una fragancia unisex tropical e intensa que combina mango, jengibre, limón y ruibarbo en una apertura jugosa y especiada. Su corazón floral mezcla jazmín y violeta con praliné y pimienta rosa. El cedro, el ámbar gris, el haba tonka y el musgo aportan profundidad y calidez.",
    topNotes: "Jengibre, Mango, Limón, Ruibarbo",
    heartNotes: "Jazmín, Violeta, Praliné, Pimienta Rosa",
    baseNotes: "Cedro, Ámbar Gris, Haba Tonka, Musgo",
    longevity: "Alta",
    longevityPct: 82,
    sillage: "Moderada a Alta",
    sillagePct: 78
}),
    crearPerfume("p46", "Chaos", "FRENCH AVENUE", "arabes", "Afrutado Cuero Avainillado", "chaos.jpg", {
    desc: "Una fragancia unisex atrevida que combina la cereza y los frutos rojos con un corazón de iris elegante y ligeramente atalcado. Su fondo de cuero, vainilla y musgo aporta profundidad, calidez y un contraste entre dulzura y carácter. Ideal para quienes buscan un aroma diferente y sofisticado.",
    topNotes: "Cereza, Frutos Rojos",
    heartNotes: "Iris",
    baseNotes: "Cuero, Vainilla, Musgo",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
}),
    crearPerfume("p47", "Atlantis", "FRENCH AVENUE", "arabes", "Afrutado Acuático Gourmand", "atlantis.jpg", {
    desc: "Una fragancia unisex tropical y cremosa que combina naranja, mandarina y limón con un corazón jugoso de sandía y coco. Su fondo de ámbar gris, madera ambarada y cacao agrega calidez y un contraste dulce. Ideal para quienes disfrutan de los aromas frutales y veraniegos.",
    topNotes: "Mandarina, Naranja, Limón",
    heartNotes: "Sandía, Coco",
    baseNotes: "Ámbar Gris, Madera Ambarada, Cacao",
    longevity: "Alta",
    longevityPct: 82,
    sillage: "Moderada a Alta",
    sillagePct: 78
}),
    crearPerfume("p48", "Aether", "FRENCH AVENUE", "arabes", "Aromático Cítrico Amaderado", "aether.jpg", {
    desc: "Una fragancia unisex fresca y elegante que combina manzana verde, bergamota y mandarina. Su corazón de petitgrain, cashmeran, cedro y violeta aporta un carácter aromático y amaderado. El fondo de musgo de roble, almizcle y madera ambarada deja una sensación limpia, suave y moderna.",
    topNotes: "Manzana Verde, Bergamota, Mandarina",
    heartNotes: "Petitgrain, Cashmeran, Cedro, Violeta",
    baseNotes: "Musgo de Roble, Almizcle, Madera Ambarada",
    longevity: "Moderada a Alta",
    longevityPct: 75,
    sillage: "Moderada",
    sillagePct: 70
}),
    crearPerfume("p49", "Amber Oud Gold Edition", "AL HARAMAIN", "arabes", "Afrutado Ambarado Gourmand", "amber-oud-gold.jpg", {
    price: 65000, 
    desc: "Una fragancia unisex dulce, frutal y envolvente. La bergamota y las notas verdes dan paso a un corazón jugoso de melón, piña y ámbar. Su fondo de vainilla, almizcle y maderas aporta calidez y suavidad. Ideal para quienes disfrutan de aromas frutales dulces y elegantes.",
    topNotes: "Bergamota, Notas Verdes",
    heartNotes: "Melón, Piña, Acordes Gourmand, Ámbar",
    baseNotes: "Maderas, Vainilla, Almizcle",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 80
}),
    crearPerfume("p50", "Amber Oud Aqua Dubai", "AL HARAMAIN", "arabes", "Fresco Afrutado Ambarado", "amber-oud-aqua-dubai.jpg", {
    price: 65000, 
    desc: "Una fragancia unisex fresca y luminosa que combina bergamota, mandarina y notas verdes con un corazón de melón, piña, ámbar y grosella negra. Su fondo de almizcle, vainilla, gálbano y petitgrain aporta equilibrio entre frescura, dulzura y matices verdes.",
    topNotes: "Bergamota, Mandarina, Notas Verdes",
    heartNotes: "Melón, Piña, Ámbar, Grosella Negra",
    baseNotes: "Almizcle, Vainilla, Gálbano, Petitgrain",
    longevity: "Alta",
    longevityPct: 82,
    sillage: "Moderada a Alta",
    sillagePct: 78
}),
    crearPerfume("p51", "Amber Oud Dubai Night", "AL HARAMAIN", "arabes", "Amaderado", "amber-oud-dubai-night.jpg", {
    price: 65000,
    desc: "Una fragancia intensa y elegante que combina cítricos especiados, rosa y madera de oud sobre un fondo cálido de ámbar, haba tonka y almizcle. Ideal para destacar especialmente por la noche.",
    topNotes: "Bergamota, azafrán y elemí",
    heartNotes: "Madera de oud, rosa búlgara y lirio de los valles",
    baseNotes: "Almizcle blanco, haba tonka, ámbar y musgo de roble",
    longevity: "Alta (orientativa)",
    longevityPct: 85,
    sillage: "Moderada a alta (estimada)",
    sillagePct: 80
}),
    crearPerfume("p53", "Club de Nuit Intense Man", "ARMAF", "arabes", "Afrutado Amaderado Ahumado", "club-de-nuit-intense-man.jpg", {
    desc: "Una fragancia masculina de carácter cítrico, frutal y amaderado. Abre con limón, bergamota, manzana, grosella negra y piña. Su corazón de abedul, rosa y jazmín aporta un matiz floral y ahumado, mientras que la vainilla, el almizcle, el ámbar gris y el pachulí completan un fondo intenso.",
    topNotes: "Limón, Piña, Bergamota, Grosella Negra, Manzana",
    heartNotes: "Rosa, Abedul, Jazmín",
    baseNotes: "Almizcle, Ámbar Gris, Pachulí, Vainilla",
    longevity: "Alta",
    longevityPct: 88,
    sillage: "Alta",
    sillagePct: 85
}),
    crearPerfume("p54", "Club de Nuit Urban Elixir", "ARMAF", "arabes", "Ambarado Aromático Amaderado", "club-de-nuit-urban-elixir.jpg", {
    desc: "Una fragancia masculina moderna que combina bergamota, pimienta rosa, flor de azahar y jazmín. Su corazón de lavanda, tagetes, geranio, vetiver, elemí y azafrán aporta matices aromáticos y especiados. El fondo de ambroxan, ámbar, pachulí, cedro y ládano crea una estela cálida y sofisticada.",
    topNotes: "Bergamota, Pimienta Rosa, Flor de Azahar, Jazmín",
    heartNotes: "Lavanda, Tagetes, Geranio, Vetiver, Elemí, Azafrán",
    baseNotes: "Ambroxan, Ámbar, Pachulí, Cedro, Ládano",
    longevity: "Alta",
    longevityPct: 88,
    sillage: "Alta",
    sillagePct: 85
}),
    crearPerfume("p55", "Odyssey Mandarin Sky", "ARMAF", "arabes", "Cítrico Ambarado Gourmand", "odyssey-mandarin-sky.jpg", {
    desc: "Una fragancia masculina dulce y especiada que combina salvia, mandarina, naranja y azafrán. Su corazón de caramelo, haba tonka y tagetes aporta un dulzor cremoso, equilibrado por un fondo de vetiver, cedro y ambroxan. Ideal para quienes buscan un aroma cálido, moderno y llamativo.",
    topNotes: "Salvia, Mandarina, Naranja, Azafrán",
    heartNotes: "Caramelo, Haba Tonka, Tagetes",
    baseNotes: "Vetiver, Cedro, Ambroxan",
    longevity: "Alta",
    longevityPct: 85,
    sillage: "Alta",
    sillagePct: 82
}),
    crearPerfume("p56", "Odyssey Aqua", "ARMAF", "arabes", "Fresco Aromático Amaderado", "odyssey-aqua.jpg", {
    desc: "Una fragancia masculina fresca y energizante. La toronja, la naranja y la artemisa aportan una apertura cítrica y verde. En el corazón, la lavanda y la menta refuerzan la sensación limpia y aromática, mientras que el ciprés, el pachulí y el ambroxan aportan profundidad amaderada.",
    topNotes: "Toronja, Naranja, Artemisa",
    heartNotes: "Lavanda, Menta",
    baseNotes: "Ciprés, Pachulí, Ambroxan",
    longevity: "Moderada a Alta",
    longevityPct: 78,
    sillage: "Moderada",
    sillagePct: 72
}),
    crearPerfume("p57", "Odyssey Li Chi Lush", "ARMAF", "arabes", "Afrutado Floral Gourmand", "odyssey-li-chi-lush.jpg", {
    desc: "Una fragancia unisex frutal, floral y cremosa. La mandarina, el lichi, el durazno y la frambuesa crean una apertura jugosa. Su corazón floral combina peonía, ylang-ylang, rosa, flor de azahar, jazmín y magnolia. El fondo de vainilla, sándalo, almizcle, caramelo y ámbar aporta suavidad y dulzura.",
    topNotes: "Mandarina, Lichi, Durazno, Frambuesa",
    heartNotes: "Peonía, Ylang-Ylang, Rosa, Flor de Azahar, Jazmín, Magnolia",
    baseNotes: "Vainilla, Sándalo, Almizcle, Caramelo, Ámbar",
    longevity: "Moderada a Alta",
    longevityPct: 78,
    sillage: "Moderada",
    sillagePct: 72
}),

    // ========================================================
    // DISEÑADOR
    // ========================================================
    crearPerfume("p2", "Boos Classic White", "BOOS", "disenador", "Fresco", "boos-white.jpg", {
    price: 65000,     
    desc: "Una fragancia fresca y versátil, ideal para quienes buscan un aroma limpio para acompañar el día a día.",
    topNotes: "Cítricos y notas frescas (orientativas)",
    heartNotes: "Aromáticas y florales (orientativas)",
    baseNotes: "Maderas suaves y almizcle (orientativas)",
    longevity: "Por confirmar",
    longevityPct: 65,
    sillage: "Moderada (estimada)",
    sillagePct: 60
}),

crearPerfume("p14", "La Bomba / Butterfly", "CAROLINA HERRERA", "disenador", "Gourmand", "la-bomba.jpg", {
    desc: "Una fragancia femenina vibrante y luminosa que combina frutas exóticas, flores y una vainilla cálida.",
    topNotes: "Pitaya exótica",
    heartNotes: "Peonía de cereza y frangipani rojo",
    baseNotes: "Vainilla solar",
    longevity: "Duradera (orientativa)",
    longevityPct: 80,
    sillage: "Notoria (estimada)",
    sillagePct: 80
}),
crearPerfume("p22", "212 Men", "CAROLINA HERRERA", "disenador", "Fresco", "212-men.jpg", {
    price: 65000, 
    desc: "Una fragancia masculina urbana y elegante, con frescura cítrica, especias y un fondo amaderado.",
    topNotes: "Lavanda, bergamota y notas verdes",
    heartNotes: "Gardenia, pimienta y jengibre",
    baseNotes: "Sándalo, vetiver, incienso y almizcles blancos",
    longevity: "Moderada a duradera (orientativa)",
    longevityPct: 70,
    sillage: "Moderada (estimada)",
    sillagePct: 65
}),

crearPerfume("p23", "Stronger With You Intensely", "GIORGIO ARMANI", "disenador", "Gourmand", "stronger-with-you-intensely.jpg", {
    desc: "Una fragancia intensa, cálida y envolvente, con especias, acordes dulces y un fondo de vainilla y maderas ambaradas.",
    topNotes: "Pimienta rosa",
    heartNotes: "Lavanda y salvia",
    baseNotes: "Maderas ambaradas, vainilla y acorde de castaña dulce",
    longevity: "Alta (orientativa)",
    longevityPct: 90,
    sillage: "Alta (estimada)",
    sillagePct: 85
}),
    crearPerfume("p24", "Le Male Elixir", "JEAN PAUL GAULTIER", "disenador", "Gourmand", "le-male-elixir.jpg", {
    desc: "Una fragancia intensa y cálida que mezcla frescura aromática con dulzura ambarada y un fondo envolvente.",
    topNotes: "Menta",
    heartNotes: "Lavanda",
    baseNotes: "Haba tonka y benjuí",
    longevity: "Alta (orientativa)",
    longevityPct: 90,
    sillage: "Alta (estimada)",
    sillagePct: 90
}),

crearPerfume("p25", "Le Beau Le Parfum", "JEAN PAUL GAULTIER", "disenador", "Gourmand", "le-beau-le-parfum.jpg", {
    desc: "Una fragancia tropical y sensual que combina acordes de coco con dulzura cálida y maderas cremosas.",
    topNotes: "Acorde de coco",
    heartNotes: "Haba tonka",
    baseNotes: "Sándalo",
    longevity: "Alta (orientativa)",
    longevityPct: 85,
    sillage: "Alta (estimada)",
    sillagePct: 85
}),

crearPerfume("p26", "Le Male Le Parfum", "JEAN PAUL GAULTIER", "disenador", "Amaderado", "le-male-le-parfum.jpg", {
    desc: "Una fragancia elegante e intensa que equilibra especias, notas aromáticas y una vainilla cálida.",
    topNotes: "Cardamomo",
    heartNotes: "Lavanda e iris",
    baseNotes: "Vainilla",
    longevity: "Alta (orientativa)",
    longevityPct: 85,
    sillage: "Moderada a alta (estimada)",
    sillagePct: 80
}),

crearPerfume("p27", "Le Beau Paradise Garden", "JEAN PAUL GAULTIER", "disenador", "Fresco", "le-beau-paradise-garden.jpg", {
    desc: "Una fragancia tropical, verde y acuática que combina frescura exótica con acordes cremosos y amaderados.",
    topNotes: "Agua de coco",
    heartNotes: "Higo verde",
    baseNotes: "Sándalo",
    longevity: "Moderada a alta (orientativa)",
    longevityPct: 80,
    sillage: "Moderada a alta (estimada)",
    sillagePct: 80
}),

    // ========================================================
    // PERFUMERÍA DE NICHO
    // ========================================================
    crearPerfume("p19", "Xerjoff Naxos EDP", "XERJOFF", "nicho", "Cítrica Gourmand", "naxos.jpg", {
        price: 70000,
        desc: "Fragancia sofisticada que combina cítricos y lavanda con miel, canela, tabaco y vainilla.",
        topNotes: "Limón, Bergamota, Lavanda",
        heartNotes: "Miel, Canela, Jazmín",
        baseNotes: "Tabaco, Vainilla, Haba tonka"
    }),
    crearPerfume("p20", "Xerjoff Torino21 EDP", "XERJOFF", "nicho", "Cítrica Aromática", "torino.jpg", {
        price: 70000,
        desc: "Fragancia fresca y vibrante con menta, cítricos, hierbas aromáticas y un fondo limpio.",
        topNotes: "Menta, Limón, Albahaca, Tomillo",
        heartNotes: "Grosella negra, Jazmín, Romero",
        baseNotes: "Almizcle, Verbena de limón"
    }),
    crearPerfume("p21", "Xerjoff Erba Pura", "XERJOFF", "nicho", "Frutal Gourmand", "erba-pura.jpg", {
    price: 70000,
    desc: "Una fragancia unisex vibrante y envolvente que combina cítricos luminosos, frutas mediterráneas y un fondo dulce, cálido y almizclado.",
    topNotes: "Naranja siciliana, bergamota de Calabria y limón",
    heartNotes: "Frutas mediterráneas",
    baseNotes: "Ámbar, vainilla de Madagascar y almizcle blanco",
    longevity: "Alta (orientativa)",
    longevityPct: 90,
    sillage: "Intensa (estimada)",
    sillagePct: 90
}),
];

// ============================================================
// ESTADO Y ELEMENTOS DEL DOM
// ============================================================
let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("up_cart")) || [];
} catch {
    cart = [];
}

let currentCategory = "all";
let currentFamily = "all";
let searchQuery = "";

const catalogGrid = document.getElementById("catalogGrid");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const emptyState = document.getElementById("emptyState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");

const cartDrawer = document.getElementById("cartDrawer");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartBadgeCount = document.getElementById("cartBadgeCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const checkoutWhatsAppBtn = document.getElementById("checkoutWhatsAppBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

const detailModal = document.getElementById("detailModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalBackdrop = document.getElementById("modalBackdrop");

// ============================================================
// UTILIDADES
// ============================================================
function formatCurrency(amount) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(amount);
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function categoryLabel(category) {
    if (category === "disenador") return "Diseñador";
    if (category === "nicho") return "Perfumería de Nicho";
    return "Árabe";
}

// ============================================================
// CATÁLOGO
// ============================================================
function renderCatalog() {
    if (!catalogGrid) return;

    catalogGrid.innerHTML = "";

    const filtered = perfumes.filter(p => {
        const matchCategory =
            currentCategory === "all" || p.category === currentCategory;

        const matchFamily =
            currentFamily === "all" || p.family === currentFamily;

        const text = `${p.name} ${p.brand} ${p.desc} ${p.family}`.toLowerCase();
        const matchSearch = text.includes(searchQuery.toLowerCase());

        return matchCategory && matchFamily && matchSearch;
    });

    if (emptyState) {
        emptyState.classList.toggle("hidden", filtered.length !== 0);
    }

    filtered.forEach(p => {
        const card = document.createElement("article");
        card.className = "perfume-card";

        card.innerHTML = `
            <span class="card-tag ${p.category}">
                ${categoryLabel(p.category)}
            </span>

            <div class="card-img-wrap">
                <img
                    src="${escapeHTML(p.img)}"
                    alt="${escapeHTML(p.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/250x300/161e2e/f3c649?text=UP+Essence';"
                >
            </div>

            <div class="card-content">
                <span class="card-brand">${escapeHTML(p.brand)}</span>
                <h3 class="card-name">${escapeHTML(p.name)}</h3>

                <span class="card-family-badge">
                    <i class="fa-solid fa-droplet"></i>
                    ${escapeHTML(p.family)}
                </span>

                <div class="card-footer">
                    <span class="card-price">${formatCurrency(p.price)}</span>

                    <div class="card-actions">
                        <button class="btn-icon view-btn" title="Ver detalles" aria-label="Ver detalles">
                            <i class="fa-solid fa-eye"></i>
                        </button>

                        <button class="btn-icon add-btn" title="Agregar al carrito" aria-label="Agregar al carrito">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            card.style.transform =
                `rotateY(${x / 18}deg) rotateX(${-y / 18}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
        });

        card.querySelector(".view-btn").addEventListener("click", () => openModal(p));
        card.querySelector(".add-btn").addEventListener("click", () => addToCart(p));

        catalogGrid.appendChild(card);
    });
}

// ============================================================
// CARRITO
// ============================================================
function addToCart(perfume) {
    const existing = cart.find(item => item.id === perfume.id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...perfume, qty: 1 });
    }

    updateCart();
    showToast(`<strong>${escapeHTML(perfume.name)}</strong> agregado al carrito.`);
}

function updateCart() {
    try {
        localStorage.setItem("up_cart", JSON.stringify(cart));
    } catch (error) {
        console.warn("No se pudo guardar el carrito:", error);
    }

    renderCart();
}

function renderCart() {
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";

    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-bag-shopping" style="font-size:2.5rem;opacity:0.3;"></i>
                <p>Tu carrito está vacío.</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const qty = Math.max(1, Number(item.qty) || 1);
            const price = Number(item.price) || 0;
            const itemSubtotal = price * qty;

            total += itemSubtotal;
            count += qty;

            const el = document.createElement("div");
            el.className = "cart-item";

            el.innerHTML = `
                <img
                    src="${escapeHTML(item.img)}"
                    alt="${escapeHTML(item.name)}"
                    onerror="this.onerror=null;this.src='https://placehold.co/80x90/161e2e/f3c649?text=UP';"
                >

                <div class="cart-item-details">
                    <div class="cart-item-name">${escapeHTML(item.name)}</div>
                    <div class="cart-item-brand">${escapeHTML(item.brand)}</div>
                    <div class="cart-item-price">${formatCurrency(itemSubtotal)}</div>

                    <div class="cart-item-qty">
                        <button class="qty-btn minus-btn" aria-label="Restar">-</button>
                        <span>${qty}</span>
                        <button class="qty-btn plus-btn" aria-label="Sumar">+</button>
                    </div>
                </div>

                <button class="remove-cart-item" aria-label="Eliminar producto">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;

            el.querySelector(".minus-btn").addEventListener("click", () => changeQty(item.id, -1));
            el.querySelector(".plus-btn").addEventListener("click", () => changeQty(item.id, 1));
            el.querySelector(".remove-cart-item").addEventListener("click", () => removeItem(item.id));

            cartItemsContainer.appendChild(el);
        });
    }

    if (cartBadgeCount) cartBadgeCount.textContent = count;
    if (cartSubtotal) cartSubtotal.textContent = formatCurrency(total);
    if (cartTotalPrice) cartTotalPrice.textContent = formatCurrency(total);
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);

    if (!item) return;

    item.qty = (Number(item.qty) || 1) + delta;

    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    updateCart();
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

if (checkoutWhatsAppBtn) {
    checkoutWhatsAppBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("El carrito está vacío.");
            return;
        }

        let msg = "¡Hola UP Essence! Quisiera consultar por este pedido:\n\n";
        let total = 0;

        cart.forEach(item => {
            const subtotal = (Number(item.price) || 0) * (Number(item.qty) || 1);
            total += subtotal;
            msg += `• ${item.qty}x ${item.name} (${item.brand}) - ${formatCurrency(subtotal)}\n`;
        });

        msg += `\nTotal estimado: ${formatCurrency(total)}\n\n¿Tienen stock disponible y cuáles son las formas de pago y envío?`;

        // Reemplazá el número vacío por el WhatsApp del negocio,
        // incluyendo el código de país y área, sin + ni espacios.
        const numeroWhatsApp = "5492612443960";

        const url = numeroWhatsApp
            ? `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(msg)}`
            : `https://wa.me/?text=${encodeURIComponent(msg)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    });
}

if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
        cart = [];
        updateCart();
    });
}

if (openCartBtn && cartDrawer) {
    openCartBtn.addEventListener("click", () => cartDrawer.classList.add("open"));
}

if (closeCartBtn && cartDrawer) {
    closeCartBtn.addEventListener("click", () => cartDrawer.classList.remove("open"));
}

if (cartOverlay && cartDrawer) {
    cartOverlay.addEventListener("click", () => cartDrawer.classList.remove("open"));
}

// ============================================================
// MODAL DE DETALLES
// ============================================================
function openModal(p) {
    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value ?? "";
    };

    const setImage = document.getElementById("modalImg");
    if (setImage) {
        setImage.src = p.img;
        setImage.alt = p.name;
        setImage.onerror = () => {
            setImage.onerror = null;
            setImage.src = "https://placehold.co/300x350/161e2e/f3c649?text=UP+Essence";
        };
    }

    setText("modalBrand", p.brand);
    setText("modalName", p.name);
    setText("modalDesc", p.desc);
    setText("modalTopNotes", p.topNotes);
    setText("modalHeartNotes", p.heartNotes);
    setText("modalBaseNotes", p.baseNotes);
    setText("modalLongevity", p.longevity);
    setText("modalSillage", p.sillage);
    setText("modalPrice", formatCurrency(p.price));

    const longevityBar = document.getElementById("modalLongevityBar");
    const sillageBar = document.getElementById("modalSillageBar");

    if (longevityBar) longevityBar.style.width = `${p.longevityPct}%`;
    if (sillageBar) sillageBar.style.width = `${p.sillagePct}%`;

    const badge = document.getElementById("modalCategoryBadge");

    if (badge) {
        badge.textContent = categoryLabel(p.category);
        badge.className = `modal-badge ${p.category}`;
    }

    const addBtn = document.getElementById("modalAddToCartBtn");

    if (addBtn) {
        addBtn.onclick = () => {
            addToCart(p);
            closeModal();
        };
    }

    if (detailModal) detailModal.classList.remove("hidden");
}

function closeModal() {
    if (detailModal) detailModal.classList.add("hidden");
}

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

// ============================================================
// FILTROS POR CATEGORÍA
// ============================================================
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        currentCategory = e.currentTarget.dataset.category || "all";
        renderCatalog();
    });
});

document.querySelectorAll(".family-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        document.querySelectorAll(".family-btn").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        currentFamily = e.currentTarget.dataset.family || "all";
        renderCatalog();
    });
});

// ============================================================
// BUSCADOR
// ============================================================
if (searchInput) {
    searchInput.addEventListener("input", e => {
        searchQuery = e.target.value;
        if (clearSearchBtn) clearSearchBtn.classList.toggle("hidden", searchQuery === "");
        renderCatalog();
    });
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";

        searchQuery = "";
        clearSearchBtn.classList.add("hidden");
        renderCatalog();
    });
}

// ============================================================
// RESTABLECER FILTROS
// ============================================================
if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
        currentCategory = "all";
        currentFamily = "all";
        searchQuery = "";

        if (searchInput) searchInput.value = "";
        if (clearSearchBtn) clearSearchBtn.classList.add("hidden");

        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        const allCategoryBtn = document.querySelector('.tab-btn[data-category="all"]');
        if (allCategoryBtn) allCategoryBtn.classList.add("active");

        document.querySelectorAll(".family-btn").forEach(b => b.classList.remove("active"));
        const allFamilyBtn = document.querySelector('.family-btn[data-family="all"]');
        if (allFamilyBtn) allFamilyBtn.classList.add("active");

        renderCatalog();
    });
}

// ============================================================
// NOTIFICACIONES 
// ============================================================
function showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> ${message}`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
renderCatalog();
renderCart();
