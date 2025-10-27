
export type bread = {
   name: string,
   imgUrl: string,
   description: string,
   history: string,
   ingredients: string[],
   recipe: string[],
}


export const breads: bread[] = [
  {
    name: 'Focaccia',
    imgUrl: 'img/focaccia.jpg',
    description: 'Focaccia is a traditional Italian flatbread known for its soft, airy interior and golden, slightly crisp crust, enriched with olive oil and often topped with herbs, garlic, olives, or tomatoes.',
    history: 'Focaccia dates back to ancient Italy and Rome, evolving particularly in Liguria where it became a staple, often topped with olive oil and herbs, and dimpled to hold flavorings.',
    ingredients: [
      "all-purpose flour",
      "active dry yeast",
      "warm water",
      "olive oil",
      "salt",
      "sugar",
      "rosemary (optional)",
      "coarse sea salt (for topping)",
      "garlic (optional)",
      "olives (optional)",
      "cherry tomatoes (optional)"
    ],
    recipe: [
      "Dissolve yeast and sugar in warm water and let it bloom for 5-10 minutes.",
      "Mix flour and salt in a large bowl.",
      "Add yeast mixture and olive oil to flour and mix into a sticky dough.",
      "Knead for 8-10 minutes until smooth and elastic.",
      "Place in an oiled bowl, cover, and let rise 1-2 hours until doubled.",
      "Preheat oven to 425°F (220°C). Oil a baking sheet.",
      "Press dough into sheet, dimpling with fingers.",
      "Drizzle with olive oil and add toppings.",
      "Let rest for 20-30 minutes for second rise.",
      "Bake 20-25 minutes until golden brown.",
      "Cool slightly, drizzle extra olive oil, and serve."
    ]
  },
  {
    name: 'Ciabatta',
    imgUrl: 'img/ciabatta.jpg',
    description: 'Ciabatta is an Italian white bread with a crisp crust and soft, porous interior, ideal for sandwiches.',
    history: 'Ciabatta was created in 1982 in Verona as a response to French baguettes, emphasizing high hydration dough for an airy texture.',
    ingredients: [
      "bread flour",
      "active dry yeast",
      "warm water",
      "olive oil",
      "salt",
      "sugar (optional)"
    ],
    recipe: [
      "Mix yeast with warm water and a pinch of sugar, let bloom 5-10 minutes.",
      "Combine flour and salt in a bowl.",
      "Add yeast mixture and olive oil, mix to form sticky dough.",
      "Knead gently on a floured surface for 10 minutes; dough will remain wet.",
      "Cover and rise 1-2 hours until doubled.",
      "Preheat oven to 450°F (230°C) with a baking stone or sheet inside.",
      "Divide dough into two loaves, stretch gently onto parchment.",
      "Bake 20-25 minutes until crust is golden and hollow sounding.",
      "Cool completely on a wire rack before slicing."
    ]
  },
  {
    name: 'Pane Toscano',
    imgUrl: 'img/panetoscano.jpg',
    description: 'Pane Toscano is a saltless Tuscan bread with a chewy texture and mild flavor, traditionally paired with robust Italian foods.',
    history: 'Originating in Tuscany, salt was historically scarce, leading to this unique unsalted bread.',
    ingredients: [
      "bread flour",
      "water",
      "yeast",
      "olive oil",
      "salt (optional for modern versions)"
    ],
    recipe: [
      "Activate yeast in warm water and let foam.",
      "Mix flour and olive oil; add yeast mixture gradually.",
      "Knead for 10 minutes until elastic.",
      "Cover and let rise 1-2 hours.",
      "Shape into round or oval loaves.",
      "Second rise for 30-45 minutes.",
      "Bake at 400°F (200°C) for 25-30 minutes until golden.",
      "Cool before slicing; traditionally served without salt."
    ]
  },
  {
    name: 'Grissini',
    imgUrl: 'img/grissini.jpg',
    description: 'Grissini are thin, crisp breadsticks from Turin, often served as appetizers with dips or wrapped in prosciutto.',
    history: 'Invented in the 17th century in Turin to aid digestion, grissini became an Italian classic for entertaining and snacks.',
    ingredients: [
      "all-purpose flour",
      "water",
      "olive oil",
      "yeast",
      "salt",
      "sesame seeds or herbs (optional)"
    ],
    recipe: [
      "Activate yeast in warm water.",
      "Combine flour, salt, olive oil, and yeast mixture into a dough.",
      "Knead for 8-10 minutes until smooth.",
      "Let dough rise 1 hour until doubled.",
      "Roll dough into long thin sticks, optionally sprinkle with seeds.",
      "Place on baking sheet, cover and rise 15 minutes.",
      "Bake at 400°F (200°C) for 15-20 minutes until golden and crisp.",
      "Cool completely before serving."
    ]
  },
  {
    name: 'Pane di Altamura',
    imgUrl: 'img/panedialtamura.jpg',
    description: 'A DOP-protected wheat bread from Puglia with a thick crust and soft, aromatic interior made from durum wheat.',
    history: 'Pane di Altamura has ancient origins in southern Italy and is celebrated for its high-quality semolina flour and long fermentation.',
    ingredients: [
      "durum wheat flour",
      "water",
      "natural yeast (or active dry yeast)",
      "salt"
    ],
    recipe: [
      "Mix flour with water and yeast to form a sticky dough.",
      "Knead for 15 minutes until elastic.",
      "Cover and ferment for several hours, ideally overnight.",
      "Shape into round or oval loaves and let rise again 1-2 hours.",
      "Preheat oven to 450°F (230°C) with baking stone.",
      "Bake 35-40 minutes until crust is thick and golden.",
      "Cool on wire rack before slicing."
    ]
  },
  {
    name: 'Pane Casereccio',
    imgUrl: 'img/panecasereccio.jpg',
    description: 'Pane Casereccio is a rustic, country-style Italian bread with chewy crumb and crisp crust, perfect for soups or sandwiches.',
    history: 'Originating from rural Italy, it emphasizes traditional artisanal baking techniques with natural ingredients.',
    ingredients: [
      "all-purpose or bread flour",
      "water",
      "yeast",
      "salt",
      "olive oil (optional)"
    ],
    recipe: [
      "Combine yeast with warm water and let activate.",
      "Mix flour, salt, and olive oil; add yeast mixture.",
      "Knead 10-15 minutes until smooth and elastic.",
      "Let rise 1-2 hours until doubled.",
      "Shape into rounds or oval loaves and second rise 30 minutes.",
      "Bake at 425°F (220°C) for 25-30 minutes until golden brown.",
      "Cool before slicing."
    ]
  },
  {
    name: 'Grano Saraceno (Buckwheat Bread)',
    imgUrl: 'img/granosaraceno.jpg',
    description: 'A rustic bread made with buckwheat flour, giving a nutty flavor and dense texture, often enjoyed in northern Italy.',
    history: 'Traditional in Alpine and northern regions of Italy where buckwheat thrived, this bread was hearty and nutritious.',
    ingredients: [
      "buckwheat flour",
      "all-purpose flour",
      "water",
      "yeast",
      "salt",
      "olive oil (optional)"
    ],
    recipe: [
      "Mix yeast with warm water and a pinch of sugar, let foam.",
      "Combine buckwheat flour, all-purpose flour, and salt.",
      "Add yeast mixture and olive oil, form sticky dough.",
      "Knead 10 minutes until smooth.",
      "Cover and rise 1-2 hours.",
      "Shape into loaf and second rise 30-40 minutes.",
      "Bake at 400°F (200°C) for 30-35 minutes until firm.",
      "Cool completely before slicing."
    ]
  },
  {
    name: 'Pane Pugliese',
    imgUrl: 'img/panepugliese.jpg',
    description: 'A soft, rustic bread from Puglia with a light crust and open crumb, often baked in large round loaves.',
    history: 'Pane Pugliese uses a high hydration dough and long fermentation, typical of southern Italian baking.',
    ingredients: [
      "bread flour",
      "water",
      "yeast",
      "salt",
      "olive oil (optional)"
    ],
    recipe: [
      "Activate yeast in water and allow to bloom.",
      "Combine flour and salt in a bowl.",
      "Add yeast mixture and olive oil, mix to sticky dough.",
      "Knead 10 minutes until elastic.",
      "Let rise 2 hours until doubled.",
      "Shape into large rounds, rest 30 minutes.",
      "Bake at 425°F (220°C) for 30-35 minutes until golden.",
      "Cool before slicing."
    ]
  },
  {
    name: 'Pane Siciliano',
    imgUrl: 'img/panesiciliano.jpg',
    description: 'A sesame-seed topped Sicilian bread with a soft interior and lightly crunchy crust.',
    history: 'Originates from Sicily, often shaped in long loaves and sprinkled with sesame seeds, a staple in local cuisine.',
    ingredients: [
      "bread flour",
      "water",
      "yeast",
      "salt",
      "olive oil",
      "sesame seeds"
    ],
    recipe: [
      "Activate yeast in warm water with a pinch of sugar.",
      "Mix flour and salt, then add yeast mixture and olive oil.",
      "Knead until smooth and elastic, 10 minutes.",
      "Let rise 1-2 hours until doubled.",
      "Shape into elongated loaves, sprinkle with sesame seeds.",
      "Second rise 30 minutes.",
      "Bake at 425°F (220°C) for 25-30 minutes until golden.",
      "Cool on wire rack before serving."
    ]
  },
  {
    name: 'Pane Carasau',
    imgUrl: 'img/panecarasau.jpg',
    description: 'A very thin, crisp flatbread from Sardinia, often called “carta da musica” because of its paper-thin texture.',
    history: 'Traditional Sardinian bread baked in extremely thin sheets, originally for long-term storage by shepherds.',
    ingredients: [
      "semolina flour",
      "water",
      "salt",
      "yeast (optional)"
    ],
    recipe: [
      "Mix semolina flour, salt, and water to form a stiff dough.",
      "Knead for 10 minutes until smooth.",
      "Divide dough into small balls, roll extremely thin.",
      "Bake briefly at high temperature (475°F/245°C) until crisp and lightly browned.",
      "Cool completely and store in airtight containers."
    ]
  },
  {
    name: 'Pane di Matera',
    imgUrl: 'img/panedimatera.jpg',
    description: 'A sourdough bread from Matera, Basilicata, with thick crust and open, chewy crumb.',
    history: 'Pane di Matera uses durum wheat and natural fermentation, prized for its flavor and long shelf life.',
    ingredients: [
      "durum wheat flour",
      "water",
      "natural yeast or sourdough starter",
      "salt"
    ],
    recipe: [
      "Mix flour and water, add natural yeast starter.",
      "Knead 15 minutes until elastic.",
      "Let ferment 6-8 hours or overnight for sour flavor.",
      "Shape into round loaves, second rise 1-2 hours.",
      "Bake at 450°F (230°C) for 35-40 minutes until thick crust forms.",
      "Cool completely before slicing."
    ]
  },
  {
    name: 'Pane di Altamura Integrale',
    imgUrl: 'img/panedialtamuraintegrale.jpg',
    description: 'Whole wheat version of Altamura bread, nutty and aromatic, perfect for hearty meals.',
    history: 'A modern variation of traditional Altamura bread using whole durum wheat flour.',
    ingredients: [
      "whole durum wheat flour",
      "water",
      "natural yeast",
      "salt"
    ],
    recipe: [
      "Mix flour and water, add yeast.",
      "Knead 10-15 minutes until smooth.",
      "Let rise several hours until doubled.",
      "Shape into loaves, rest 30 minutes.",
      "Bake at 450°F (230°C) for 35-40 minutes.",
      "Cool before slicing."
    ]
  },
  {
    name: 'Pane di Segale (Rye Bread)',
    imgUrl: 'img/panedesegale.jpg',
    description: 'Dense, dark bread made with rye flour, slightly sour, popular in northern Italy.',
    history: 'Used in Alpine regions for its storage longevity and hearty flavor.',
    ingredients: [
      "rye flour",
      "bread flour",
      "water",
      "yeast",
      "salt"
    ],
    recipe: [
      "Activate yeast in warm water.",
      "Mix rye and bread flour with salt.",
      "Add yeast mixture, knead until smooth, 10-12 minutes.",
      "Let rise 1-2 hours.",
      "Shape into loaf, second rise 30-45 minutes.",
      "Bake at 400°F (200°C) for 35-40 minutes until firm.",
      "Cool completely before slicing."
    ]
  },
  {
    name: 'Pane di Mais (Cornbread)',
    imgUrl: 'img/panedimais.jpg',
    description: 'Italian cornbread with slightly sweet flavor and rustic crumb, often paired with soups and stews.',
    history: 'Corn introduced from the Americas became common in northern Italian breads.',
    ingredients: [
      "cornmeal",
      "bread flour",
      "water",
      "yeast",
      "salt",
      "sugar (optional)"
    ],
    recipe: [
      "Mix yeast with warm water and sugar.",
      "Combine cornmeal, bread flour, and salt.",
      "Add yeast mixture, mix into sticky dough.",
      "Knead 8-10 minutes until smooth.",
      "Let rise 1-2 hours.",
      "Shape into small loaves or rounds.",
      "Second rise 20-30 minutes.",
      "Bake at 400°F (200°C) for 25-30 minutes.",
      "Cool before serving."
    ]
  },
  {
    name: 'Pane di Latte',
    imgUrl: 'img/panedilatte.jpeg',
    description: 'Soft, slightly sweet milk bread, tender crumb, often used for sandwiches.',
    history: 'Inspired by French-style milk breads, widely adopted in Italy for soft everyday bread.',
    ingredients: [
      "bread flour",
      "milk",
      "butter",
      "yeast",
      "sugar",
      "salt"
    ],
    recipe: [
      "Warm milk slightly, dissolve yeast and 1 tsp sugar, let bloom.",
      "Mix flour, salt, remaining sugar, and butter.",
      "Add milk-yeast mixture, knead 10-12 minutes until soft and elastic.",
      "Let rise 1-2 hours until doubled.",
      "Shape into loaf and second rise 30-40 minutes.",
      "Bake at 375°F (190°C) for 25-30 minutes until golden.",
      "Cool before slicing."
    ]
  },
  {
    name: 'Pane di Patate (Potato Bread)',
    imgUrl: 'img/panedipatate.jpg',
    description: 'Soft, moist bread enriched with cooked potatoes, slightly sweet flavor, tender crumb.',
    history: 'Traditional in northern Italy where potatoes were incorporated to enrich rustic breads.',
    ingredients: [
      "all-purpose flour",
      "mashed potatoes",
      "water",
      "yeast",
      "salt",
      "butter or olive oil"
    ],
    recipe: [
      "Cook and mash potatoes, let cool.",
      "Activate yeast in warm water.",
      "Mix flour, salt, and butter or oil.",
      "Add potatoes and yeast mixture, knead 10 minutes.",
      "Let rise 1-2 hours until doubled.",
      "Shape into loaves, second rise 30 minutes.",
      "Bake at 375°F (190°C) for 30-35 minutes.",
      "Cool before slicing."
    ]
  },
  {
    name: 'Pane al Lievito Madre (Sourdough)',
    imgUrl: 'img/paneallievitomadre.jpg',
    description: 'Classic Italian sourdough with natural starter, tangy flavor, and chewy crumb.',
    history: 'A staple of Italian bakeries, relying on natural fermentation for complex taste.',
    ingredients: [
      "bread flour",
      "water",
      "sourdough starter",
      "salt"
    ],
    recipe: [
      "Mix starter with water.",
      "Add flour and salt, knead 10-15 minutes until elastic.",
      "Let bulk ferment 4-6 hours, folding dough occasionally.",
      "Shape into boule or bâtard, proof 2 hours.",
      "Preheat oven with baking stone at 450°F (230°C).",
      "Bake 35-40 minutes until deep brown crust forms.",
      "Cool completely before slicing."
    ]
  },
  {
    name: 'Pane Carasatu (Thin Sardinian Flatbread)',
    imgUrl: 'img/panecarasatu.jpeg',
    description: 'Ultra-thin crisp Sardinian flatbread, paper-like and used traditionally for storage.',
    history: 'Ancient Sardinian bread baked very thin, used by shepherds for travel and storage.',
    ingredients: [
      "semolina flour",
      "water",
      "salt"
    ],
    recipe: [
      "Mix flour, salt, and water to form stiff dough.",
      "Knead for 10 minutes.",
      "Divide and roll dough extremely thin.",
      "Bake briefly at high temperature (475°F/245°C) until crisp.",
      "Cool and store in airtight containers."
    ]
  },
  {
    name: 'Pane Toscano Integrale',
    imgUrl: 'img/panetoscanointegrale.jpg',
    description: 'Whole wheat Tuscan bread, unsalted, with nutty flavor and chewy crumb.',
    history: 'A modern twist on traditional Tuscan bread, emphasizing whole wheat flour while keeping it unsalted.',
    ingredients: [
      "whole wheat flour",
      "water",
      "yeast",
      "olive oil (optional)",
      "salt (optional)"
    ],
    recipe: [
      "Activate yeast in warm water.",
      "Mix flour, olive oil, and optional salt.",
      "Add yeast mixture and knead 10-12 minutes until smooth.",
      "Bulk ferment 1-2 hours.",
      "Shape loaves, second rise 30-40 minutes.",
      "Bake at 425°F (220°C) for 25-30 minutes.",
      "Cool before slicing."
    ]
  },
  {
    name: 'Pane di Kamut',
    imgUrl: 'img/panedikamut.jpg',
    description: 'Bread made from Kamut wheat, with slightly sweet, nutty flavor and soft crumb.',
    history: 'Kamut, an ancient grain, has been adopted in Italy for its nutritional qualities and flavor.',
    ingredients: [
      "Kamut flour",
      "bread flour",
      "water",
      "yeast",
      "salt",
      "olive oil (optional)"
    ],
    recipe: [
      "Activate yeast in water.",
      "Mix flours, salt, and olive oil.",
      "Add yeast mixture, knead 10 minutes.",
      "Let rise 1-2 hours until doubled.",
      "Shape loaves, second rise 30 minutes.",
      "Bake at 425°F (220°C) for 25-30 minutes.",
      "Cool completely before slicing."
    ]
  },
  {
    name: 'Pane di Semola Rimacinata',
    imgUrl: 'img/panedisemolarimacinata.jpg',
    description: 'Bread made with fine durum semolina flour, golden crust and slightly chewy texture.',
    history: 'Common in southern Italy, especially for everyday bread and sandwich loaves.',
    ingredients: [
      "semolina flour",
      "bread flour",
      "water",
      "yeast",
      "salt",
      "olive oil (optional)"
    ],
    recipe: [
      "Activate yeast in water.",
      "Mix flours and salt, add olive oil.",
      "Add yeast mixture and knead 10-12 minutes.",
      "Bulk ferment 1-2 hours.",
      "Shape loaves, second rise 30-40 minutes.",
      "Bake at 425°F (220°C) for 25-30 minutes.",
      "Cool completely before slicing."
    ]
  }
];