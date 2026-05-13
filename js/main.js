/* =============================================================
   Premier Herbal Inc. — Main JavaScript
   Handles: nav, catalogue, form validation, scroll animations,
            product autocomplete
   ============================================================= */

'use strict';

/* ─────────────────────────────────────────
   Product Price Data — autocomplete source
───────────────────────────────────────── */
const PRICE_DATA = [
  { name: 'Acacia Catechu',               price: '$18.50/lb'        },
  { name: 'Agrimony Herb',                price: 'Price on request' },
  { name: 'Ajawan Seed',                  price: '$9.00/lb'         },
  { name: 'Alfalfa Leaves',               price: 'Price on request' },
  { name: 'Allspice',                     price: 'Price on request' },
  { name: 'Aloe Vera',                    price: 'Price on request' },
  { name: 'Amla',                         price: 'Price on request' },
  { name: 'Angelica Root',               price: 'Price on request' },
  { name: 'Anise Seed',                   price: '$10.00/lb'        },
  { name: 'Anise Star',                   price: '$20.00/lb'        },
  { name: 'Ashwagandha',                  price: '$27.00/lb'        },
  { name: 'Astragalus Root',              price: '$23.00/lb'        },
  { name: 'Balm of Gilead Buds',          price: '$42.00/lb'        },
  { name: 'Basil Leaves',                 price: 'Price on request' },
  { name: 'Bay Leaves',                   price: 'Price on request' },
  { name: 'Bayberry Bark',               price: '$78.00/lb'        },
  { name: 'Bee Pollen',                   price: 'Price on request' },
  { name: 'Beet Root',                    price: 'Price on request' },
  { name: 'Behda',                        price: '$20.00/lb'        },
  { name: 'Benzoin Gum',                  price: 'Price on request' },
  { name: 'Bilberry',                     price: '$45.00/lb'        },
  { name: 'Birch Bark',                   price: 'Price on request' },
  { name: 'Birch Leaves',                 price: 'Price on request' },
  { name: 'Bistort Root',                 price: 'Price on request' },
  { name: 'Bitter Melon',                 price: 'Price on request' },
  { name: 'Black Pepper',                 price: 'Price on request' },
  { name: 'Black Seed',                   price: 'Price on request' },
  { name: 'Black Tea',                    price: 'Price on request' },
  { name: 'Black Walnut',                 price: 'Price on request' },
  { name: 'Black Walnut Hull',            price: 'Price on request' },
  { name: 'Bladderwrack',                 price: 'Price on request' },
  { name: 'Blessed Thistle',              price: '$22.00/lb'        },
  { name: 'Blue Cohosh Root',             price: 'Price on request' },
  { name: 'Blueberry Leaves',             price: 'Price on request' },
  { name: 'Boldo Leaves',                 price: 'Price on request' },
  { name: 'Borage Herb',                  price: 'Price on request' },
  { name: 'Boswellia Pieces',             price: 'Price on request' },
  { name: 'Buchu Leaves',                 price: '$100.00/lb'       },
  { name: 'Buckthorn Bark',               price: 'Price on request' },
  { name: 'Burdock Leaves',               price: '$18.00/lb'        },
  { name: 'Burdock Root',                 price: 'Price on request' },
  { name: 'Calamus Root',                 price: 'Price on request' },
  { name: 'Calendula Flower',             price: 'Price on request' },
  { name: 'Calendula Petals',             price: '$20.00/lb'        },
  { name: 'Caraway Seed',                 price: '$9.00/lb'         },
  { name: 'Cardamom Green',               price: '$42.00/lb'        },
  { name: 'Cardamom Seed',               price: 'Price on request' },
  { name: 'Carob',                        price: 'Price on request' },
  { name: 'Cascara Bark',                 price: 'Price on request' },
  { name: 'Cassia Bark',                  price: 'Price on request' },
  { name: 'Cats Claw Bark',               price: '$23.50/lb'        },
  { name: 'Catnip Herb',                  price: 'Price on request' },
  { name: 'Cayenne Pepper',               price: 'Price on request' },
  { name: 'Celery Seed',                  price: 'Price on request' },
  { name: 'Chaga Mushroom',               price: 'Price on request' },
  { name: 'Chamomile Flower',             price: 'Price on request' },
  { name: 'Chaste Berry',                 price: 'Price on request' },
  { name: 'Cherry Stems',                 price: '$18.50/lb'        },
  { name: 'Chia Seed',                    price: 'Price on request' },
  { name: 'Chickweed Herb',               price: '$30.00/lb'        },
  { name: 'Chicory Root Raw',             price: 'Price on request' },
  { name: 'Chicory Root Roasted',         price: '$16.00/lb'        },
  { name: 'Chondroitin Sulphate',         price: '$34.00/lb'        },
  { name: 'Chrysanthemum Flower',         price: 'Price on request' },
  { name: 'Cinnamon',                     price: 'Price on request' },
  { name: 'Cinnamon Sticks',              price: '$18.00/lb'        },
  { name: 'Citric Acid',                  price: 'Price on request' },
  { name: 'Cloves',                       price: 'Price on request' },
  { name: 'Codonopsis Root',              price: 'Price on request' },
  { name: 'Coltsfoot Root',               price: 'Price on request' },
  { name: 'Comfrey Leaves',               price: 'Price on request' },
  { name: 'Comfrey Root',                 price: 'Price on request' },
  { name: 'Condurango Bark',              price: 'Price on request' },
  { name: 'Coriander Seed',               price: 'Price on request' },
  { name: 'Cornsilk',                     price: '$18.50/lb'        },
  { name: 'Crampbark',                    price: '$30.00/lb'        },
  { name: 'Cranberries',                  price: '$39.50/lb'        },
  { name: 'Cumin Seed',                   price: 'Price on request' },
  { name: 'Daisy Flower',                 price: 'Price on request' },
  { name: 'Damiana Leaves',               price: 'Price on request' },
  { name: 'Dandelion Leaves',             price: '$20.00/lb'        },
  { name: 'Dandelion Root',               price: 'Price on request' },
  { name: 'Devils Claw Root',             price: 'Price on request' },
  { name: 'Dill Seed',                    price: '$10.00/lb'        },
  { name: 'Dong Quai Root',               price: 'Price on request' },
  { name: 'Dulse',                        price: '$53.00/lb'        },
  { name: 'Echinacea Angustifolia Herb',  price: 'Price on request' },
  { name: 'Echinacea Angustifolia Root',  price: 'Price on request' },
  { name: 'Echinacea Purpurea Herb',      price: 'Price on request' },
  { name: 'Echinacea Purpurea Root',      price: 'Price on request' },
  { name: 'Elder Berry',                  price: '$25.00/lb'        },
  { name: 'Elder Flower',                 price: '$28.00/lb'        },
  { name: 'Elecampane Root',              price: 'Price on request' },
  { name: 'Epimedium Herb',               price: 'Price on request' },
  { name: 'Epsom Salt',                   price: 'Price on request' },
  { name: 'Eucalyptus Leaves',            price: 'Price on request' },
  { name: 'Evening Primrose',             price: '$27.00/lb'        },
  { name: 'Everlasting Flower',           price: 'Price on request' },
  { name: 'Eyebright Herb',               price: 'Price on request' },
  { name: 'False Unicorn',               price: '$350.00/lb'       },
  { name: 'Fennel Seed',                  price: 'Price on request' },
  { name: 'Fenugreek Seed',               price: 'Price on request' },
  { name: 'Feverfew Herb',                price: 'Price on request' },
  { name: 'Figwort Herb',                 price: 'Price on request' },
  { name: 'Flax Seed',                    price: '$6.50/lb'         },
  { name: 'Fo-Ti Root',                   price: '$25.00/lb'        },
  { name: 'Frankincense Tears',           price: '$26.99/lb'        },
  { name: 'Fumitory Herb',                price: 'Price on request' },
  { name: 'Garcinia Cambogia',            price: 'Price on request' },
  { name: 'Garlic',                       price: 'Price on request' },
  { name: 'Gentian Root',                 price: 'Price on request' },
  { name: 'Ginger Root',                  price: 'Price on request' },
  { name: 'Ginkgo Leaves',                price: 'Price on request' },
  { name: 'Ginseng Korean Root',          price: 'Price on request' },
  { name: 'Ginseng Panax Root',           price: 'Price on request' },
  { name: 'Ginseng Siberian Root',        price: 'Price on request' },
  { name: 'Glucosamine Sulphate',         price: 'Price on request' },
  { name: 'Goats Rue',                    price: 'Price on request' },
  { name: 'Goji Berry',                   price: 'Price on request' },
  { name: 'Goksura Puncture Vine',        price: '$15.00/lb'        },
  { name: 'Goldenseal Leaves',            price: 'Price on request' },
  { name: 'Goldenseal Root',              price: 'Price on request' },
  { name: 'Gotu Kola Leaves',             price: 'Price on request' },
  { name: 'Grains of Paradise',           price: 'Price on request' },
  { name: 'Grape Seed',                   price: 'Price on request' },
  { name: 'Grape Seed Extract',           price: 'Price on request' },
  { name: 'Grape Seed Powder',            price: '$18.50/lb'        },
  { name: 'Green Tea',                    price: '$15.00/lb'        },
  { name: 'Green Tea Matcha',             price: '$34.00/lb'        },
  { name: 'Guar Gum',                     price: 'Price on request' },
  { name: 'Guarana Seed',                 price: 'Price on request' },
  { name: 'Guduchi Root',                 price: 'Price on request' },
  { name: 'Gugal Gum Pieces',             price: 'Price on request' },
  { name: 'Gum Arabic',                   price: 'Price on request' },
  { name: 'Gymnema Leaves',               price: 'Price on request' },
  { name: 'Gynostemma',                   price: 'Price on request' },
  { name: 'Hawthorne Berries',            price: 'Price on request' },
  { name: 'Heather Flower',               price: 'Price on request' },
  { name: 'Hemp Seed',                    price: '$12.00/lb'        },
  { name: 'Henna',                        price: 'Price on request' },
  { name: 'Hibiscus Flower',              price: 'Price on request' },
  { name: 'Honeysuckle Flower',           price: '$48.00/lb'        },
  { name: 'Hops Flower',                  price: 'Price on request' },
  { name: 'Horehound Herb',               price: 'Price on request' },
  { name: 'Horney Goat Weed',             price: 'Price on request' },
  { name: 'Horse Chestnut',               price: 'Price on request' },
  { name: 'Horsetail',                    price: '$20.00/lb'        },
  { name: 'Hyssop Herb',                  price: 'Price on request' },
  { name: 'Icelandic Moss',               price: 'Price on request' },
  { name: 'Irish Moss',                   price: 'Price on request' },
  { name: 'Jamaican Dogwood Bark',        price: 'Price on request' },
  { name: 'Jambul Seed',                  price: 'Price on request' },
  { name: 'Jasmine Flower',               price: '$25.00/lb'        },
  { name: 'Jasmine Tea',                  price: 'Price on request' },
  { name: 'Juniper Berries',              price: 'Price on request' },
  { name: 'Kava Kava Root',               price: '$112.00/lb'       },
  { name: 'Kelp Atlantic',                price: 'Price on request' },
  { name: 'Kalmeg',                       price: '$16.00/lb'        },
  { name: 'Lavender Flower Super Blue',   price: '$27.00/lb'        },
  { name: 'Lavender Flower Powder',       price: '$23.50/lb'        },
  { name: 'Lecithin',                     price: 'Price on request' },
  { name: 'Lemon Balm',                   price: 'Price on request' },
  { name: 'Lemon Grass',                  price: 'Price on request' },
  { name: 'Lemon Verbena',                price: 'Price on request' },
  { name: 'Licorice Root',               price: 'Price on request' },
  { name: 'Licorice Root Sticks',         price: 'Price on request' },
  { name: 'Linden Leaves and Flower',     price: 'Price on request' },
  { name: 'Lobelia',                      price: 'Price on request' },
  { name: 'Lovage Root',                  price: 'Price on request' },
  { name: 'Lungwort Herb',                price: 'Price on request' },
  { name: 'Maca',                         price: 'Price on request' },
  { name: 'Madder Root',                  price: 'Price on request' },
  { name: 'Magnolia Bark',               price: '$24.50/lb'        },
  { name: 'Male Fern',                    price: 'Price on request' },
  { name: 'Malva Black',                  price: 'Price on request' },
  { name: 'Marigold Flower',              price: 'Price on request' },
  { name: 'Marjoram',                     price: 'Price on request' },
  { name: 'Marshmallow Leaves',           price: 'Price on request' },
  { name: 'Marshmallow Root',             price: 'Price on request' },
  { name: 'Meadowsweet Herb',             price: 'Price on request' },
  { name: 'Milk Thistle Herb',            price: 'Price on request' },
  { name: 'Milk Thistle Seed',            price: 'Price on request' },
  { name: 'Mistletoe',                    price: 'Price on request' },
  { name: 'Motherwort',                   price: '$19.50/lb'        },
  { name: 'Mugwort',                      price: 'Price on request' },
  { name: 'Muira Puama',                  price: 'Price on request' },
  { name: 'Mullein Flower',               price: '$25.50/lb'        },
  { name: 'Mushrooms Shiitake',           price: 'Price on request' },
  { name: 'Mustard Seed',                 price: '$5.00/lb'         },
  { name: 'Myrrh Gum',                    price: 'Price on request' },
  { name: 'Neem Leaves',                  price: 'Price on request' },
  { name: 'Nettle Leaves',                price: 'Price on request' },
  { name: 'Nettle Root',                  price: 'Price on request' },
  { name: 'Noni Fruit',                   price: 'Price on request' },
  { name: 'Nopal Cactus',                 price: 'Price on request' },
  { name: 'Nutmeg',                       price: '$18.00/lb'        },
  { name: 'Oak Bark White',               price: 'Price on request' },
  { name: 'Oatstraw',                     price: 'Price on request' },
  { name: 'Olive Leaves',                 price: '$14.00/lb'        },
  { name: 'Oolong Tea',                   price: 'Price on request' },
  { name: 'Orange Blossom Flower',        price: 'Price on request' },
  { name: 'Orange Peel',                  price: 'Price on request' },
  { name: 'Oregano Leaves',               price: '$14.00/lb'        },
  { name: 'Orris Root',                   price: 'Price on request' },
  { name: 'Osha Root',                    price: 'Price on request' },
  { name: 'Pansy',                        price: 'Price on request' },
  { name: 'Papaya Leaves',                price: 'Price on request' },
  { name: 'Paprika Spanish',              price: 'Price on request' },
  { name: 'Parsley',                      price: 'Price on request' },
  { name: 'Parsley Root',                 price: 'Price on request' },
  { name: 'Parsley Seed',                 price: 'Price on request' },
  { name: 'Passion Flower',               price: '$15.00/lb'        },
  { name: 'Patchouli Leaves',             price: '$18.00/lb'        },
  { name: 'Pau Darco Bark',               price: '$22.00/lb'        },
  { name: 'Pellitory of the Wall Herb',   price: 'Price on request' },
  { name: 'Penny Royal',                  price: '$17.00/lb'        },
  { name: 'Peony Root',                   price: 'Price on request' },
  { name: 'Peppermint Leaves',            price: 'Price on request' },
  { name: 'Periwinkle',                   price: 'Price on request' },
  { name: 'Pine Buds',                    price: 'Price on request' },
  { name: 'Pine Needles',                 price: '$27.00/lb'        },
  { name: 'Pine Bark Extract 95%',        price: '$55.50/lb'        },
  { name: 'Plantain Leaves',              price: '$18.00/lb'        },
  { name: 'Pleurisy Root',                price: 'Price on request' },
  { name: 'Poke Root',                    price: 'Price on request' },
  { name: 'Poplar Buds',                  price: '$42.00/lb'        },
  { name: 'Psyllium Husk',               price: '$11.50/lb'        },
  { name: 'Psyllium Seed',               price: 'Price on request' },
  { name: 'Pumpkin Seed',                 price: 'Price on request' },
  { name: 'Puncture Vine',                price: 'Price on request' },
  { name: 'Pygeum Bark',                  price: 'Price on request' },
  { name: 'Quassia Bark',                 price: 'Price on request' },
  { name: 'Queen of the Meadow',          price: 'Price on request' },
  { name: 'Raspberry Leaves',             price: '$18.00/lb'        },
  { name: 'Red Clover Blossoms',          price: '$28.00/lb'        },
  { name: 'Red Rose Buds and Petals',     price: 'Price on request' },
  { name: 'Rehmannia Root',               price: '$22.00/lb'        },
  { name: 'Rest Harrow Root',             price: 'Price on request' },
  { name: 'Rhodiola',                     price: 'Price on request' },
  { name: 'Ritha',                        price: '$13.00/lb'        },
  { name: 'Rosehips Seedless',            price: '$26.00/lb'        },
  { name: 'Rosemary Leaves',              price: '$10.00/lb'        },
  { name: 'Rue Herb',                     price: 'Price on request' },
  { name: 'Rupturewort',                  price: 'Price on request' },
  { name: 'Saffron Spanish',              price: '$4.50/lb'         },
  { name: 'Sage Leaves',                  price: '$15.00/lb'        },
  { name: 'Sandalwood Red',               price: '$22.00/lb'        },
  { name: 'Sarsaparilla Root',            price: '$25.00/lb'        },
  { name: 'Sassafras Root',               price: '$32.00/lb'        },
  { name: 'Savory Leaves',                price: 'Price on request' },
  { name: 'Saw Palmetto Berry',           price: '$43.00/lb'        },
  { name: 'Schizandra Berry',             price: 'Price on request' },
  { name: 'Sea Salt',                     price: 'Price on request' },
  { name: 'Senna Leaves',                 price: '$10.00/lb'        },
  { name: 'Senna Pods',                   price: 'Price on request' },
  { name: 'Sheep Sorrel',                 price: 'Price on request' },
  { name: 'Shepherds Purse',              price: 'Price on request' },
  { name: 'Shilajit Powder',              price: '$36.50/lb'        },
  { name: 'Slippery Elm Bark',            price: 'Price on request' },
  { name: 'Soapwort Root',                price: 'Price on request' },
  { name: 'Solomon Seal Root',            price: '$82.00/lb'        },
  { name: 'Spearmint Leaves',             price: 'Price on request' },
  { name: 'Speedwell Herb',               price: 'Price on request' },
  { name: 'Spirulina',                    price: 'Price on request' },
  { name: 'St Johns Wort',                price: 'Price on request' },
  { name: 'Stevia Leaves',                price: 'Price on request' },
  { name: 'Stone Root Powder',            price: '$39.50/lb'        },
  { name: 'Strawberry Leaves',            price: 'Price on request' },
  { name: 'Suma Root',                    price: 'Price on request' },
  { name: 'Sumac Berry',                  price: '$17.00/lb'        },
  { name: 'Tansy Flower',                 price: '$24.50/lb'        },
  { name: 'Tansy Herb',                   price: '$15.00/lb'        },
  { name: 'Tarragon',                     price: 'Price on request' },
  { name: 'Thyme Leaves',                 price: 'Price on request' },
  { name: 'Tonka Beans',                  price: 'Price on request' },
  { name: 'Tongkat Ali Extract 10:1',     price: '$37.00/lb'        },
  { name: 'Triphala Powder',              price: 'Price on request' },
  { name: 'Tulsi Leaves',                 price: '$20.00/lb'        },
  { name: 'Turmeric',                     price: 'Price on request' },
  { name: 'Turmeric Root CS',             price: '$10.00/lb'        },
  { name: 'Turmeric Root Extract',        price: '$32.00/lb'        },
  { name: 'Turkey Tail',                  price: '$26.00/lb'        },
  { name: 'Usnea Lichen',                 price: 'Price on request' },
  { name: 'Uva Ursi Leaves',              price: 'Price on request' },
  { name: 'Valerian Root',                price: 'Price on request' },
  { name: 'Vervain Blue',                 price: 'Price on request' },
  { name: 'Violet Herb',                  price: 'Price on request' },
  { name: 'Watercress',                   price: 'Price on request' },
  { name: 'Wheat Grass',                  price: 'Price on request' },
  { name: 'White Pine Bark',              price: 'Price on request' },
  { name: 'White Sage Leaves',            price: 'Price on request' },
  { name: 'White Willow Bark',            price: 'Price on request' },
  { name: 'Wild Cherry Bark',             price: 'Price on request' },
  { name: 'Wild Lettuce Herb',            price: '$32.00/lb'        },
  { name: 'Wild Yam Root',                price: 'Price on request' },
  { name: 'Wintergreen',                  price: 'Price on request' },
  { name: 'Witch Hazel Leaves',           price: 'Price on request' },
  { name: 'Wood Betony',                  price: 'Price on request' },
  { name: 'Wormwood',                     price: 'Price on request' },
  { name: 'Yarrow Flower',                price: 'Price on request' },
  { name: 'Yellow Dock Root',             price: 'Price on request' },
  { name: 'Yerba Mate Green',             price: 'Price on request' },
  { name: 'Yerba Santa',                  price: '$39.50/lb'        },
  { name: 'Yucca Root',                   price: 'Price on request' },
];

/* ─────────────────────────────────────────
   Product Price Lookup — card display
   Keys are lowercase product titles.
   Values are already formatted for display.
───────────────────────────────────────── */
const PRODUCT_PRICES = {
  'acacia catechu':                    '$15.00 / lb',
  'acai berry':                        '$32.00 / lb',
  'acerola berry 25%':                 '$38.00 / lb',
  'activated charcoal':                '$19.50 / lb',
  'african chili bird pepper':         '$23.50 / lb',
  'agrimony herb':                     '$19.00 / lb',
  'ajawan seed':                       '$9.00 / lb',
  'alfalfa seed':                      '$13.00 / lb',
  'alfalfa lvs':                       '$13.00 / lb',
  'alfalfa leaves':                    '$13.00 / lb',
  'allspice':                          '$17.00 / lb',
  'aloe vera':                         '$29.00 / lb',
  'amla':                              '$13.00 / lb',
  'angelica root':                     '$23.50 / lb',
  'angelica seed':                     '$23.50 / lb',
  'anise seed':                        '$10.00 / lb',
  'anise star':                        '$20.00 / lb',
  'annato seed':                       '$12.00 / lb',
  'apple cider vinegar':               '$20.50 / lb',
  'arjuna terminalia':                 '$15.00 / lb',
  'arnica flower':                     '$94.00 / lb',
  'artichoke leaves':                  '$19.00 / lb',
  'asafoetida pieces':                 '$30.00 / lb',
  'ascorbic acid':                     '$19.50 / lb',
  'ash bark':                          '$15.00 / lb',
  'ashwagandha':                       '$30.00 / lb',
  'astragalus root':                   '$19.50 / lb',
  'balm lemon herb':                   '$20.00 / lb',
  'balm of gilead buds':               '$42.00 / lb',
  'barley grass':                      '$20.50 / lb',
  'basil leaves':                      '$11.00 / lb',
  'bay leaves':                        '$9.50 / lb',
  'bayberry bark':                     '$34.50 / lb',
  'bean pods fava':                    '$20.00 / lb',
  'bedstraw yellow herb':              '$19.50 / lb',
  'bee pollen':                        '$14.00 / lb',
  'bee pollen granules':               '$14.00 / lb',
  'beet root':                         '$14.00 / lb',
  'benzoin gum':                       '$24.00 / lb',
  'beth root':                         '$54.00 / lb',
  'bhringraj':                         '$14.00 / lb',
  'bilberry':                          '$50.50 / lb',
  'birch bark':                        '$15.00 / lb',
  'birch leaves':                      '$15.00 / lb',
  'bistort root':                      '$26.00 / lb',
  'black berry leaves':                '$44.00 / lb',
  'black cohosh root':                 '$44.00 / lb',
  'black current leaves':              '$44.00 / lb',
  'black malva flower':                '$43.00 / lb',
  'black pepper':                      '$13.00 / lb',
  'black seed':                        '$44.00 / lb',
  'black walnut':                      '$17.00 / lb',
  'black walnut hull':                 '$17.00 / lb',
  'black willow':                      '$44.00 / lb',
  'bladderwrack':                      '$18.00 / lb',
  'blessed thistle':                   '$20.50 / lb',
  'blood root':                        '$82.50 / lb',
  'blue cohosh root':                  '$36.00 / lb',
  'blueberry leaves':                  '$22.00 / lb',
  'boldo leaves':                      '$24.00 / lb',
  'borage herb':                       '$25.00 / lb',
  'boswellia pieces':                  '$16.00 / lb',
  'broom tops':                        '$16.00 / lb',
  'buckthorn bark':                    '$17.00 / lb',
  'buckwheat hulls':                   '$9.50 / lb',
  'burdock leaves':                    '$17.00 / lb',
  'burdock root':                      '$17.00 / lb',
  'butchers broom':                    '$18.50 / lb',
  'calamus root':                      '$14.00 / lb',
  'calendula marigold flower':         '$14.00 / lb',
  'calendula flower':                  '$14.00 / lb',
  'calendula petals':                  '$20.00 / lb',
  'caraway seed':                      '$9.00 / lb',
  'cardamom green':                    '$36.50 / lb',
  'cardamom seed':                     '$36.50 / lb',
  'carob':                             '$15.00 / lb',
  'cascara bark':                      '$20.00 / lb',
  'cassia bark':                       '$14.00 / lb',
  'cats claw bark':                    '$24.50 / lb',
  'catnip herb':                       '$21.50 / lb',
  'cayenne pepper':                    '$12.00 / lb',
  'celandine herb':                    '$16.00 / lb',
  'celery seed':                       '$9.00 / lb',
  'chaga mushroom':                    '$77.00 / lb',
  'chamomile':                         '$17.00 / lb',
  'chamomile flower':                  '$17.00 / lb',
  'chaste berry':                      '$14.00 / lb',
  'chestnut leaves':                   '$17.00 / lb',
  'chia seed':                         '$12.00 / lb',
  'chicory root raw':                  '$15.00 / lb',
  'chicory root roasted':              '$14.00 / lb',
  'chondroitin sulphate':              '$34.00 / lb',
  'chrysanthemum':                     '$23.00 / lb',
  'chrysanthemum flower':              '$23.00 / lb',
  'cinnamon':                          '$17.00 / lb',
  'cinnamon sticks':                   '$17.00 / lb',
  'citric acid':                       '$7.50 / lb',
  'clay white':                        '$16.00 / lb',
  'cloves':                            '$20.00 / lb',
  'clubmoss':                          '$21.50 / lb',
  'codonopsis root':                   '$46.00 / lb',
  'coleus forshkoli root':             '$17.00 / lb',
  'coltsfoot root':                    '$19.00 / lb',
  'comfrey leaves':                    '$20.00 / lb',
  'comfrey root':                      '$20.00 / lb',
  'condurango bark':                   '$24.50 / lb',
  'coriander seed':                    '$9.50 / 114g',
  'cornsilk':                          '$16.00 / lb',
  'couch grass':                       '$16.00 / lb',
  'cranberries':                       '$39.50 / lb',
  'cumin seed':                        '$12.00 / lb',
  'daisy':                             '$17.00 / lb',
  'daisy flower':                      '$17.00 / lb',
  'damiana leaves':                    '$23.00 / lb',
  'dandelion leaves':                  '$26.00 / lb',
  'dandelion root':                    '$26.00 / lb',
  'deer tongue leaves':                '$55.50 / lb',
  'devils claw root':                  '$24.50 / lb',
  'dill seed':                         '$9.00 / lb',
  'dong quai root':                    '$32.00 / lb',
  'dulse':                             '$54.00 / lb',
  'echinacea angustifolia herb':       '$72.00 / lb',
  'echinacea angustifolia root':       '$72.00 / lb',
  'echinacea purpurea herb':           '$37.50 / lb',
  'echinacea purpurea root':           '$37.50 / lb',
  'elder berry':                       '$25.00 / lb',
  'elder flower':                      '$28.00 / lb',
  'elecampane root':                   '$24.00 / lb',
  'epimedium herb':                    '$21.50 / lb',
  'epsom salt':                        '$5.50 / lb',
  'eucalyptus leaves':                 '$13.00 / lb',
  'euphorbia herb':                    '$15.00 / lb',
  'evening primrose':                  '$42.50 / lb',
  'everlasting flower':                '$26.00 / lb',
  'life everlasting flower':           '$26.00 / lb',
  'eyebright herb':                    '$32.00 / lb',
  'false unicorn':                     '$350.00 / lb',
  'fennel seed':                       '$7.50 / 114g',
  'fenugreek seed':                    '$16.00 / lb',
  'feverfew herb':                     '$25.00 / lb',
  'figwort herb':                      '$33.00 / lb',
  'flax seed':                         '$6.50 / lb',
  'frankincense tears':                '$28.50 / lb',
  'fumitory herb':                     '$19.50 / lb',
  'garcinia cambogia':                 '$16.00 / lb',
  'garlic':                            '$14.00 / lb',
  'gentian root':                      '$29.00 / lb',
  'ginger root':                       '$11.00 / lb',
  'ginkgo leaves':                     '$18.00 / lb',
  'ginseng korean root':               '$88.00 / lb',
  'ginseng panax root':                '$88.00 / lb',
  'ginseng siberian root':             '$16.00 / lb',
  'glucosamine sulphate':              '$26.00 / lb',
  'goats rue':                         '$18.00 / lb',
  'goji berry':                        '$18.50 / lb',
  'goksura puncture vine':             '$17.00 / lb',
  'goldenseal leaves':                 '$222.00 / lb',
  'goldenseal root':                   '$222.00 / lb',
  'gotu kola leaves':                  '$17.00 / lb',
  'grains of paradise':                '$39.50 / lb',
  'grape seed':                        '$18.50 / lb',
  'grape seed extract':                '$18.50 / lb',
  'grape seed powder':                 '$18.50 / lb',
  'green tea japanese':                '$30.00 / lb',
  'guar gum':                          '$8.50 / lb',
  'guarana seed':                      '$29.00 / lb',
  'guduchi root':                      '$15.00 / lb',
  'gugal gum pieces':                  '$50.50 / lb',
  'gum arabic':                        '$16.00 / lb',
  'gymnema leaves':                    '$16.00 / lb',
  'gynostemma':                        '$38.50 / lb',
  'hawthorne berries':                 '$16.00 / lb',
  'heather flower':                    '$13.00 / lb',
  'henna':                             '$17.00 / lb',
  'hibiscus':                          '$14.00 / lb',
  'hibiscus flower':                   '$14.00 / lb',
  'honey suckle':                      '$48.00 / lb',
  'honeysuckle flower':                '$48.00 / lb',
  'hops':                              '$19.50 / lb',
  'hops flower':                       '$19.50 / lb',
  'horehound herb':                    '$16.00 / lb',
  'horney goat weed':                  '$21.50 / lb',
  'horse chestnut':                    '$14.00 / lb',
  'horsetail':                         '$17.00 / lb',
  'hyssop herb':                       '$19.00 / lb',
  'icelandic moss':                    '$18.50 / lb',
  'irish moss':                        '$26.00 / lb',
  'jamaican dogwood bark':             '$34.50 / lb',
  'jambul seed':                       '$13.00 / lb',
  'jasmine tea':                       '$15.00 / lb',
  'jasmine flower':                    '$25.00 / lb',
  'juniper berries':                   '$18.00 / lb',
  'kalmeg':                            '$16.00 / lb',
  'kava kava root':                    '$41.00 / lb',
  'kelp atlantic':                     '$10.50 / lb',
  'knot grass':                        '$20.50 / lb',
  'kudzu root':                        '$19.50 / lb',
  'kutki':                             '$37.50 / lb',
  'lecithin':                          '$27.00 / lb',
  'lemon balm':                        '$20.00 / lb',
  'balm lemon':                        '$20.00 / lb',
  'lemon grass':                       '$13.00 / lb',
  'lemon verbena':                     '$21.50 / lb',
  'licorice root':                     '$16.00 / lb',
  'licorice root sticks':              '$18.50 / lb',
  'lily of the valley leaves':         '$28.00 / lb',
  'linden':                            '$17.00 / lb',
  'linden leaves and flower':          '$17.00 / lb',
  'lobelia':                           '$25.00 / lb',
  'lovage root':                       '$20.50 / lb',
  'lungwort herb':                     '$23.00 / lb',
  'maca':                              '$34.50 / lb',
  'madder root':                       '$18.50 / lb',
  'male fern':                         '$28.99 / lb',
  'malva black':                       '$43.00 / lb',
  'marigold':                          '$17.00 / lb',
  'marigold flower':                   '$17.00 / lb',
  'marjoram':                          '$10.50 / lb',
  'marshmallow leaves':                '$18.00 / lb',
  'marshmallow root':                  '$18.00 / lb',
  'meadowsweet herb':                  '$16.00 / lb',
  'milk thistle herb':                 '$21.00 / lb',
  'milk thistle seed':                 '$21.00 / lb',
  'mistletoe':                         '$15.00 / lb',
  'motherwort':                        '$21.50 / lb',
  'mugwort':                           '$18.00 / lb',
  'muira puama':                       '$15.00 / lb',
  'mulberry twig':                     '$14.00 / lb',
  'mullein':                           '$17.00 / lb',
  'mullein flower':                    '$17.00 / lb',
  'mushrooms shiitake':                '$22.50 / lb',
  'mustard seed':                      '$5.00 / lb',
  'myrrh gum':                         '$34.50 / lb',
  'neem leaves':                       '$14.00 / lb',
  'nettle leaves':                     '$17.00 / 114g',
  'nettle root':                       '$17.00 / 114g',
  'noni fruit':                        '$14.00 / lb',
  'nopal cactus':                      '$22.50 / lb',
  'nutmeg':                            '$18.00 / lb',
  'nutmeg whole':                      '$10.00 / lb',
  'oak bark white':                    '$21.00 / lb',
  'oatstraw':                          '$19.00 / lb',
  'olive leaves':                      '$15.00 / lb',
  'oolong tea':                        '$15.00 / lb',
  'orange blossom':                    '$42.00 / lb',
  'orange blossom flower':             '$42.00 / lb',
  'orange peel':                       '$14.00 / lb',
  'oregano leaves':                    '$14.00 / lb',
  'orris root':                        '$28.00 / lb',
  'osha root':                         '$281.50 / lb',
  'pansy':                             '$19.00 / lb',
  'papaya leaves':                     '$14.00 / lb',
  'paprika spanish':                   '$12.00 / lb',
  'parsley':                           '$18.50 / lb',
  'parsley root':                      '$18.50 / lb',
  'parsley seed':                      '$18.50 / lb',
  'passion flower':                    '$15.00 / lb',
  'patchouli leaves':                  '$17.00 / lb',
  'pau darco bark':                    '$21.00 / lb',
  'pellitory of the wall herb':        '$18.00 / lb',
  'penny royal':                       '$17.00 / lb',
  'peony root':                        '$21.50 / lb',
  'peppermint leaves':                 '$14.00 / lb',
  'periwinkle':                        '$21.00 / lb',
  'pine buds':                         '$27.00 / lb',
  'pine needles':                      '$27.00 / lb',
  'pine bark extract 95%':             '$55.50 / lb',
  'plantain':                          '$18.00 / lb',
  'plantain leaves':                   '$18.00 / lb',
  'pleurisy root':                     '$48.00 / lb',
  'poke root':                         '$34.00 / lb',
  'poplar buds':                       '$19.00 / lb',
  'psyllium husk':                     '$11.50 / lb',
  'psyllium seed':                     '$11.50 / lb',
  'pumpkin seed':                      '$16.00 / lb',
  'puncture vine':                     '$17.00 / lb',
  'pygeum bark':                       '$34.00 / lb',
  'quassia bark':                      '$18.00 / lb',
  'queen of the meadow':               '$38.00 / lb',
  'raspberry leaves':                  '$19.50 / lb',
  'red clover tops':                   '$28.00 / lb',
  'red clover blossoms':               '$28.00 / lb',
  'red rose buds petals':              '$19.00 / lb',
  'red rose buds and petals':          '$19.00 / lb',
  'rehmannia root':                    '$22.00 / lb',
  'rest harrow root':                  '$16.00 / lb',
  'rhodiola':                          '$47.00 / lb',
  'ritha':                             '$12.00 / lb',
  'rosehips':                          '$16.00 / lb',
  'rosehips seedless':                 '$16.00 / lb',
  'rosemary leaves':                   '$10.00 / lb',
  'rosemary leaves organic':           '$20.00 / lb',
  'rue goat':                          '$18.00 / lb',
  'rue herb':                          '$18.00 / lb',
  'rupturewort':                       '$20.50 / lb',
  'saffron american safflower':        '$38.00 / lb',
  'saffron spanish':                   '$4.50 / lb',
  'saffron spanish 1g':                '$4.50 / lb',
  'sage leaves':                       '$15.00 / lb',
  'sandalwood red':                    '$19.50 / lb',
  'sandalwood red chips':              '$19.50 / lb',
  'sarsaparilla root':                 '$25.00 / lb',
  'sassafras root':                    '$37.00 / lb',
  'savory leaves':                     '$10.50 / lb',
  'saw palmetto berry':                '$41.00 / lb',
  'schizandra berry':                  '$32.00 / lb',
  'sea salt':                          '$14.00 / lb',
  'senna leaves':                      '$10.00 / lb',
  'senna pods':                        '$15.00 / lb',
  'shark cartilage':                   '$34.50 / lb',
  'sheep sorrel':                      '$21.00 / lb',
  'shepherds purse':                   '$17.00 / lb',
  'shilajit powder':                   '$42.00 / lb',
  'slippery elm bark':                 '$41.00 / lb',
  'small willow flower':               '$22.50 / lb',
  'soapwort root':                     '$18.50 / lb',
  'solomon seal root':                 '$82.00 / lb',
  'spearmint leaves':                  '$14.00 / lb',
  'speedwell herb':                    '$18.00 / lb',
  'spirulina':                         '$29.00 / lb',
  'st johns wort':                     '$16.00 / lb',
  'stevia leaves':                     '$15.00 / lb',
  'stone root':                        '$42.00 / lb',
  'stone root powder':                 '$42.00 / lb',
  'strawberry leaves':                 '$19.00 / lb',
  'suma root':                         '$30.00 / lb',
  'sumac berry':                       '$18.50 / lb',
  'tansy':                             '$15.00 / lb',
  'tansy flower':                      '$15.00 / lb',
  'tansy herb':                        '$15.00 / lb',
  'tarragon':                          '$31.00 / lb',
  'thyme leaves':                      '$13.00 / lb',
  'tomato':                            '$17.00 / lb',
  'tonka beans':                       '$72.00 / lb',
  'tongkat ali extract':               '$37.00 / lb',
  'tongkat ali extract 10:1':          '$37.00 / lb',
  'triphala powder':                   '$24.50 / lb',
  'turmeric':                          '$9.50 / lb',
  'turmeric root cs':                  '$9.50 / lb',
  'turmeric root extract':             '$32.00 / lb',
  'turkey tail':                       '$26.00 / lb',
  'usnea lichen':                      '$79.00 / lb',
  'uva ursi leaves':                   '$19.00 / lb',
  'valerian root':                     '$27.00 / lb',
  'vervain blue':                      '$36.00 / lb',
  'violet herb':                       '$24.50 / lb',
  'watercress':                        '$21.00 / lb',
  'wheat grass':                       '$16.00 / lb',
  'white pine bark':                   '$22.50 / lb',
  'white sage leaves':                 '$35.50 / lb',
  'white willow bark':                 '$20.00 / lb',
  'wild cherry bark':                  '$20.00 / lb',
  'wild lettuce herb':                 '$32.00 / lb',
  'wild yam root':                     '$38.00 / lb',
  'wintergreen':                       '$20.50 / lb',
  'wintergreen leaves':                '$20.50 / lb',
  'witch hazel leaves':                '$25.50 / lb',
  'wood betony':                       '$23.50 / lb',
  'woodruff':                          '$27.00 / lb',
  'wormwood':                          '$20.00 / lb',
  'yarrow flower':                     '$17.00 / lb',
  'yellow dock root':                  '$18.50 / lb',
  'yerba mate green':                  '$19.00 / lb',
  'yerba santa':                       '$19.00 / lb',
  'yucca root':                        '$28.00 / lb',
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCatalogue();
  initCart();
  initForm();
  initScrollAnimations();
  initSmoothScroll();
  initProductAutocomplete();
});

/* ─────────────────────────────────────────
   Navigation — sticky blur + hamburger
───────────────────────────────────────── */
function initNav() {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');

  // Add backdrop blur after scrolling 60px
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu when a nav link is clicked
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ─────────────────────────────────────────
   Product Image Map
───────────────────────────────────────── */
const PRODUCT_IMAGES = {
  'acacia catechu':               'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Acacia_catechu_flowers.jpg/640px-Acacia_catechu_flowers.jpg',
  'acai berry':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A%C3%A7a%C3%AD_na_Ver_o_Peso.jpg/640px-A%C3%A7a%C3%AD_na_Ver_o_Peso.jpg',
  'activated charcoal':           'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Activated_Carbon.jpg/640px-Activated_Carbon.jpg',
  'agrimony herb':                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Agrimonia_eupatoria_%28Gewone_agrimonie%29_2.jpg/640px-Agrimonia_eupatoria_%28Gewone_agrimonie%29_2.jpg',
  'aloe vera':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/640px-Aloe_vera_flower_inset.png',
  'angelica root':                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Angelica_archangelica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-013.jpg/640px-Angelica_archangelica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-013.jpg',
  'anise seed':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pimpinella_anisum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg/640px-Pimpinella_anisum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg',
  'anise star':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Star_anise.jpg/640px-Star_anise.jpg',
  'arnica flower':                'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Arnica_montana_LC0082.jpg/640px-Arnica_montana_LC0082.jpg',
  'artichoke leaves':             'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Artichoke_-_Cynara_scolymus_from_The_Grammar_of_Ornament.jpg/640px-Artichoke_-_Cynara_scolymus_from_The_Grammar_of_Ornament.jpg',
  'ashwagandha':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ashwagandha_Withania_somnifera_roots_and_leaves.jpg/640px-Ashwagandha_Withania_somnifera_roots_and_leaves.jpg',
  'barley grass':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Barley_field.jpg/640px-Barley_field.jpg',
  'basil leaves':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Basilico_fresco.jpg/640px-Basilico_fresco.jpg',
  'bay leaves':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bay_leaves_on_white.jpg/640px-Bay_leaves_on_white.jpg',
  'bee pollen':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bee_pollen_in_a_bowl.jpg/640px-Bee_pollen_in_a_bowl.jpg',
  'beet root':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Beetroot_Beta_vulgaris.jpg/640px-Beetroot_Beta_vulgaris.jpg',
  'bilberry':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blueberries_%28Vaccinium_myrtillus%29.jpg/640px-Blueberries_%28Vaccinium_myrtillus%29.jpg',
  'birch bark':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Birch_bark_Lamprecht.jpg/640px-Birch_bark_Lamprecht.jpg',
  'bitter melon':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bittermelon.jpg/640px-Bittermelon.jpg',
  'black pepper':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg/640px-Piper_nigrum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-107.jpg',
  'black seed':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Nigella_sativa_seeds.jpg/640px-Nigella_sativa_seeds.jpg',
  'black tea':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Long_jing_tea_leaves_2.jpg/640px-Long_jing_tea_leaves_2.jpg',
  'black walnut':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Juglans_nigra_nuts.jpg/640px-Juglans_nigra_nuts.jpg',
  'black walnut hull':            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Juglans_nigra_nuts.jpg/640px-Juglans_nigra_nuts.jpg',
  'bladderwrack':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fucus_vesiculosus_Luc_Viatour.jpg/640px-Fucus_vesiculosus_Luc_Viatour.jpg',
  'blessed thistle':              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cnicus_benedictus0.jpg/640px-Cnicus_benedictus0.jpg',
  'borage herb':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Borage_flowers.jpg/640px-Borage_flowers.jpg',
  'burdock root':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Arctium_lappa.jpg/640px-Arctium_lappa.jpg',
  'burdock leaves':               'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Arctium_lappa.jpg/640px-Arctium_lappa.jpg',
  'calendula marigold flower':    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Calendula_officinalis.jpg/640px-Calendula_officinalis.jpg',
  'calendula flower':             'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Calendula_officinalis.jpg/640px-Calendula_officinalis.jpg',
  'calendula petals':             'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Calendula_officinalis.jpg/640px-Calendula_officinalis.jpg',
  'caraway seed':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Carum_carvi.jpg/640px-Carum_carvi.jpg',
  'cardamom green':               'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cardamom_Pods.jpg/640px-Cardamom_Pods.jpg',
  'cardamom seed':                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cardamom_Pods.jpg/640px-Cardamom_Pods.jpg',
  'cats claw bark':               'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Uncaria_tomentosa.jpg/640px-Uncaria_tomentosa.jpg',
  'catnip herb':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nepeta_cataria.jpg/640px-Nepeta_cataria.jpg',
  'cayenne pepper':               'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Cayenne_peppers_-_whole_and_open.jpg/640px-Cayenne_peppers_-_whole_and_open.jpg',
  'celery seed':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Celery_seeds.jpg/640px-Celery_seeds.jpg',
  'chaga mushroom':               'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Inonotus_obliquus_-_birch_fungus.jpg/640px-Inonotus_obliquus_-_birch_fungus.jpg',
  'chamomile':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chamomile%40original_size.jpg/640px-Chamomile%40original_size.jpg',
  'chamomile flower':             'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chamomile%40original_size.jpg/640px-Chamomile%40original_size.jpg',
  'chia seed':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chia_seeds.jpg/640px-Chia_seeds.jpg',
  'cinnamon':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cinnamon-other.jpg/640px-Cinnamon-other.jpg',
  'cinnamon sticks':              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cinnamon-other.jpg/640px-Cinnamon-other.jpg',
  'cloves':                       'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cloves.jpg/640px-Cloves.jpg',
  'comfrey leaves':               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Symphytum_officinale_%28illustration%29.jpg/640px-Symphytum_officinale_%28illustration%29.jpg',
  'comfrey root':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Symphytum_officinale_%28illustration%29.jpg/640px-Symphytum_officinale_%28illustration%29.jpg',
  'coriander seed':               'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Coriander_seeds.jpg/640px-Coriander_seeds.jpg',
  'cranberries':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CranberryWool.jpg/640px-CranberryWool.jpg',
  'cumin seed':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cumin_seeds.jpg/640px-Cumin_seeds.jpg',
  'damiana leaves':               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Turnera_diffusa_flowers.jpg/640px-Turnera_diffusa_flowers.jpg',
  'dandelion leaves':             'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dandelion_Flowers.jpg/640px-Dandelion_Flowers.jpg',
  'dandelion root':               'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dandelion_Flowers.jpg/640px-Dandelion_Flowers.jpg',
  'devils claw root':             'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Harpagophytum_procumbens01.jpg/640px-Harpagophytum_procumbens01.jpg',
  'dill seed':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Anethum_graveolens.jpg/640px-Anethum_graveolens.jpg',
  'dong quai root':               'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Angelica_sinensis.jpg/640px-Angelica_sinensis.jpg',
  'dulse':                        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dulse_seaweed.jpg/640px-Dulse_seaweed.jpg',
  'echinacea angustifolia herb':  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Echinacea_purpurea_-_Igelkottenstråle.jpg/640px-Echinacea_purpurea_-_Igelkottenstråle.jpg',
  'echinacea angustifolia root':  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Echinacea_purpurea_-_Igelkottenstråle.jpg/640px-Echinacea_purpurea_-_Igelkottenstråle.jpg',
  'echinacea purpurea herb':      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Echinacea_purpurea_-_Igelkottenstråle.jpg/640px-Echinacea_purpurea_-_Igelkottenstråle.jpg',
  'echinacea purpurea root':      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Echinacea_purpurea_-_Igelkottenstråle.jpg/640px-Echinacea_purpurea_-_Igelkottenstråle.jpg',
  'elder berry':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Elderberries_%28Sambucus_nigra%29.jpg/640px-Elderberries_%28Sambucus_nigra%29.jpg',
  'elder flower':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sambucus_nigra_flowers.jpg/640px-Sambucus_nigra_flowers.jpg',
  'eucalyptus leaves':            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Eucalyptus_leaves.jpg/640px-Eucalyptus_leaves.jpg',
  'evening primrose':             'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Oenothera_biennis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg/640px-Oenothera_biennis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg',
  'eyebright herb':               'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Euphrasia_officinalis.jpg/640px-Euphrasia_officinalis.jpg',
  'fennel seed':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Fennel_seeds.jpg/640px-Fennel_seeds.jpg',
  'fenugreek seed':               'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Fenugreek_seeds.jpg/640px-Fenugreek_seeds.jpg',
  'feverfew herb':                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tanacetum_parthenium.jpg/640px-Tanacetum_parthenium.jpg',
  'flax seed':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Flax_seeds.jpg/640px-Flax_seeds.jpg',
  'frankincense tears':           'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Frankincense_%28Boswellia_sacra%29_tears.jpg/640px-Frankincense_%28Boswellia_sacra%29_tears.jpg',
  'garlic':                       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Garlic-_Allium_sativum.jpg/640px-Garlic-_Allium_sativum.jpg',
  'gentian root':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Gentiana_lutea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-072.jpg/640px-Gentiana_lutea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-072.jpg',
  'ginger root':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ginger_roots.jpg/640px-Ginger_roots.jpg',
  'ginkgo leaves':                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Ginkgo_biloba_at_Old_Westbury_Gardens.jpg/640px-Ginkgo_biloba_at_Old_Westbury_Gardens.jpg',
  'ginseng korean root':          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg/640px-Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg',
  'ginseng panax root':           'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg/640px-Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg',
  'ginseng siberian root':        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg/640px-Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-105.jpg',
  'goji berry':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Goji_Berries.jpg/640px-Goji_Berries.jpg',
  'golden rod herb':              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Solidago_virgaurea1.jpg/640px-Solidago_virgaurea1.jpg',
  'goldenseal root':              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Hydrastis_canadensis.jpg/640px-Hydrastis_canadensis.jpg',
  'goldenseal leaves':            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Hydrastis_canadensis.jpg/640px-Hydrastis_canadensis.jpg',
  'gotu kola leaves':             'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Centella_asiatica.jpg/640px-Centella_asiatica.jpg',
  'grape seed':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Grape_seeds.jpg/640px-Grape_seeds.jpg',
  'grape seed extract':           'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Grape_seeds.jpg/640px-Grape_seeds.jpg',
  'green tea':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Long_jing_tea_leaves_2.jpg/640px-Long_jing_tea_leaves_2.jpg',
  'guarana seed':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Guarana_seeds.jpg/640px-Guarana_seeds.jpg',
  'gymnema leaves':               'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gymnema_sylvestre.jpg/640px-Gymnema_sylvestre.jpg',
  'hawthorne berries':            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Hawthorn_berries.jpg/640px-Hawthorn_berries.jpg',
  'hemp seed':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Hemp_seeds.jpg/640px-Hemp_seeds.jpg',
  'hibiscus':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hibiscus_sabdariffa_-_dried_flowers.jpg/640px-Hibiscus_sabdariffa_-_dried_flowers.jpg',
  'honeysuckle flower':           'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lonicera_japonica.jpg/640px-Lonicera_japonica.jpg',
  'hops flower':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/HopCones.jpg/640px-HopCones.jpg',
  'hops':                         'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/HopCones.jpg/640px-HopCones.jpg',
  'horehound herb':               'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Marrubium_vulgare2.jpg/640px-Marrubium_vulgare2.jpg',
  'horse chestnut':               'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/AescHippSeeds.jpg/640px-AescHippSeeds.jpg',
  'horsetail':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Equisetum_arvense.jpg/640px-Equisetum_arvense.jpg',
  'irish moss':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chondrus_crispus_Helgoland.jpg/640px-Chondrus_crispus_Helgoland.jpg',
  'jasmine flower':               'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jasminum_officinale.jpg/640px-Jasminum_officinale.jpg',
  'jasmine tea':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Jasminum_officinale.jpg/640px-Jasminum_officinale.jpg',
  'juniper berries':              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Juniperus_communis_berries.jpg/640px-Juniperus_communis_berries.jpg',
  'kava kava root':               'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Piper_methysticum_01.jpg/640px-Piper_methysticum_01.jpg',
  'kelp atlantic':                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fucus_vesiculosus_Luc_Viatour.jpg/640px-Fucus_vesiculosus_Luc_Viatour.jpg',
  'lavender flower super blue':   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lavandula_angustifolia_Hidcote_1.jpg/640px-Lavandula_angustifolia_Hidcote_1.jpg',
  'lavender flower':              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Lavandula_angustifolia_Hidcote_1.jpg/640px-Lavandula_angustifolia_Hidcote_1.jpg',
  'lemon balm':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-089.jpg/640px-Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-089.jpg',
  'lemon grass':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lemongrass_001.jpg/640px-Lemongrass_001.jpg',
  'lemongrass':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lemongrass_001.jpg/640px-Lemongrass_001.jpg',
  'licorice root':                'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Glycyrrhiza_glabra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-076.jpg/640px-Glycyrrhiza_glabra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-076.jpg',
  'licorice root sticks':         'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Glycyrrhiza_glabra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-076.jpg/640px-Glycyrrhiza_glabra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-076.jpg',
  'maca':                         'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Maca.jpg/640px-Maca.jpg',
  'magnolia bark':                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Magnolia_flower_2.jpg/640px-Magnolia_flower_2.jpg',
  'marigold flower':              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Calendula_officinalis.jpg/640px-Calendula_officinalis.jpg',
  'marjoram':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Origanum_majorana_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-100.jpg/640px-Origanum_majorana_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-100.jpg',
  'marshmallow root':             'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Althaea_officinalis1.jpg/640px-Althaea_officinalis1.jpg',
  'marshmallow leaves':           'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Althaea_officinalis1.jpg/640px-Althaea_officinalis1.jpg',
  'milk thistle herb':            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Silybum_marianum_Mk.jpg/640px-Silybum_marianum_Mk.jpg',
  'milk thistle seed':            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Silybum_marianum_Mk.jpg/640px-Silybum_marianum_Mk.jpg',
  'mistletoe':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Mistletoe.jpg/640px-Mistletoe.jpg',
  'motherwort':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Leonurus_cardiaca.jpg/640px-Leonurus_cardiaca.jpg',
  'mugwort':                      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Artemisia_vulgaris.jpg/640px-Artemisia_vulgaris.jpg',
  'mullein flower':               'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Verbascum_thapsus.jpg/640px-Verbascum_thapsus.jpg',
  'mullein':                      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Verbascum_thapsus.jpg/640px-Verbascum_thapsus.jpg',
  'mushrooms shiitake':           'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Shiitake_mushrooms.jpg/640px-Shiitake_mushrooms.jpg',
  'mustard seed':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mustard_seeds_-_Brassica_hirta.jpg/640px-Mustard_seeds_-_Brassica_hirta.jpg',
  'myrrh gum':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Myrrh_-_gum.jpg/640px-Myrrh_-_gum.jpg',
  'neem leaves':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Azadirachta_indica_%28Neem%29_in_Hyderabad_W2_IMG_6976.jpg/640px-Azadirachta_indica_%28Neem%29_in_Hyderabad_W2_IMG_6976.jpg',
  'nettle leaves':                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Brennnessel.jpg/640px-Brennnessel.jpg',
  'nettle root':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Brennnessel.jpg/640px-Brennnessel.jpg',
  'nutmeg':                       'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nutmeg_2.jpg/640px-Nutmeg_2.jpg',
  'olive leaves':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Olive_leaf_%28Olea_europaea%29.jpg/640px-Olive_leaf_%28Olea_europaea%29.jpg',
  'oolong tea':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Long_jing_tea_leaves_2.jpg/640px-Long_jing_tea_leaves_2.jpg',
  'orange peel':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orange-Fruit-Pieces.jpg/640px-Orange-Fruit-Pieces.jpg',
  'oregano leaves':               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Origanum_vulgare_-_harilik_pune%C3%BCrt.jpg/640px-Origanum_vulgare_-_harilik_pune%C3%BCrt.jpg',
  'papaya leaves':                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-180.jpg/640px-Carica_papaya_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-180.jpg',
  'paprika spanish':              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Paprika_powder.jpg/640px-Paprika_powder.jpg',
  'parsley':                      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Petroselinum_crispum.jpg/640px-Petroselinum_crispum.jpg',
  'parsley root':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Petroselinum_crispum.jpg/640px-Petroselinum_crispum.jpg',
  'parsley seed':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Petroselinum_crispum.jpg/640px-Petroselinum_crispum.jpg',
  'passion flower':               'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Passiflora_caerulea_-_Passionsblume.jpg/640px-Passiflora_caerulea_-_Passionsblume.jpg',
  'patchouli leaves':             'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pogostemon_cablin.jpg/640px-Pogostemon_cablin.jpg',
  'pau darco bark':               'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Handroanthus_impetiginosus.jpg/640px-Handroanthus_impetiginosus.jpg',
  'peppermint leaves':            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mentha_x_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-096.jpg/640px-Mentha_x_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-096.jpg',
  'peppermint':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mentha_x_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-096.jpg/640px-Mentha_x_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-096.jpg',
  'plantain':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Plantago_major_leaves.jpg/640px-Plantago_major_leaves.jpg',
  'psyllium husk':                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Psyllium_husks.jpg/640px-Psyllium_husks.jpg',
  'psyllium seed':                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Psyllium_husks.jpg/640px-Psyllium_husks.jpg',
  'pumpkin seed':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Pumpkin_seeds.jpg/640px-Pumpkin_seeds.jpg',
  'raspberry leaves':             'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Raspberry_Leaves.jpg/640px-Raspberry_Leaves.jpg',
  'red clover tops':              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Trifolium_pratense_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-141.jpg/640px-Trifolium_pratense_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-141.jpg',
  'red rose buds petals':         'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Simple_red_rose.jpg/640px-Simple_red_rose.jpg',
  'red rose buds & petals':       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Simple_red_rose.jpg/640px-Simple_red_rose.jpg',
  'rhodiola':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Rhodiola_rosea.jpg/640px-Rhodiola_rosea.jpg',
  'rosehips':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rose_hip_-_Rosa_canina.jpg/640px-Rose_hip_-_Rosa_canina.jpg',
  'rosemary leaves':              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Rosemary_in_bloom.jpg/640px-Rosemary_in_bloom.jpg',
  'saffron':                      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Saffron_filaments.jpg/640px-Saffron_filaments.jpg',
  'sage leaves':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Salvia_officinalis1.jpg/640px-Salvia_officinalis1.jpg',
  'sage clary':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Salvia_officinalis1.jpg/640px-Salvia_officinalis1.jpg',
  'sandalwood red chips':         'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Santalum_album_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-259.jpg/640px-Santalum_album_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-259.jpg',
  'saw palmetto berry':           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Saw_Palmetto_%28Serenoa_repens%29.jpg/640px-Saw_Palmetto_%28Serenoa_repens%29.jpg',
  'sea buckthorn':                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Hippoph%C3%A4e_rhamnoides.jpg/640px-Hippoph%C3%A4e_rhamnoides.jpg',
  'senna leaves':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Cassia_senna_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-037.jpg/640px-Cassia_senna_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-037.jpg',
  'senna pods':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Cassia_senna_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-037.jpg/640px-Cassia_senna_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-037.jpg',
  'shilajit powder':              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Shilajit.jpg/640px-Shilajit.jpg',
  'slippery elm bark':            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ulmus_rubra.jpg/640px-Ulmus_rubra.jpg',
  'spearmint leaves':             'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Minze.jpg/640px-Minze.jpg',
  'spearmint':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Minze.jpg/640px-Minze.jpg',
  'spirulina':                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Spirulina_Tablets.jpg/640px-Spirulina_Tablets.jpg',
  'st johns wort':                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hypericum_perforatum_-_Echtes_Johanniskraut_-_Common_St._John%27s_Wort_-_Perforate_St_John%27s-wort.jpg/640px-Hypericum_perforatum_-_Echtes_Johanniskraut_-_Common_St._John%27s_Wort_-_Perforate_St_John%27s-wort.jpg',
  "st john's wort":               'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hypericum_perforatum_-_Echtes_Johanniskraut_-_Common_St._John%27s_Wort_-_Perforate_St_John%27s-wort.jpg/640px-Hypericum_perforatum_-_Echtes_Johanniskraut_-_Common_St._John%27s_Wort_-_Perforate_St_John%27s-wort.jpg',
  'stevia leaves':                'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Stevia_rebaudiana.jpg/640px-Stevia_rebaudiana.jpg',
  'sumac berry':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sumac_in_bowl.jpg/640px-Sumac_in_bowl.jpg',
  'tansy':                        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tanacetum_vulgare_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-135.jpg/640px-Tanacetum_vulgare_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-135.jpg',
  'tarragon':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Tarragon.jpg/640px-Tarragon.jpg',
  'thyme leaves':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-138.jpg/640px-Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-138.jpg',
  'thyme':                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-138.jpg/640px-Thymus_vulgaris_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-138.jpg',
  'triphala powder':              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ashwagandha_Withania_somnifera_roots_and_leaves.jpg/640px-Ashwagandha_Withania_somnifera_roots_and_leaves.jpg',
  'tulsi leaves':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ocimum_tenuiflorum3.jpg/640px-Ocimum_tenuiflorum3.jpg',
  'turmeric':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Turmeric_rhizomes_and_powder.jpg/640px-Turmeric_rhizomes_and_powder.jpg',
  'uva ursi leaves':              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Arctostaphylos_uva-ursi_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-019.jpg/640px-Arctostaphylos_uva-ursi_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-019.jpg',
  'valerian root':                'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-146.jpg/640px-Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-146.jpg',
  'watercress':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Watercress.jpg/640px-Watercress.jpg',
  'wheat grass':                  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Wheatgrass.jpg/640px-Wheatgrass.jpg',
  'wheatgrass':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Wheatgrass.jpg/640px-Wheatgrass.jpg',
  'white sage leaves':            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Salvia_officinalis1.jpg/640px-Salvia_officinalis1.jpg',
  'white willow bark':            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Salix_alba.jpg/640px-Salix_alba.jpg',
  'wild cherry bark':             'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Prunus_serotina.jpg/640px-Prunus_serotina.jpg',
  'wild yam root':                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Dioscorea_villosa.jpg/640px-Dioscorea_villosa.jpg',
  'witch hazel leaves':           'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hamamelis_virginiana.jpg/640px-Hamamelis_virginiana.jpg',
  'wormwood':                     'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Artemisia_absinthium_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-018.jpg/640px-Artemisia_absinthium_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-018.jpg',
  'yarrow flower':                'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Achillea_millefolium_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-004.jpg/640px-Achillea_millefolium_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-004.jpg',
  'yellow dock root':             'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Rumex_crispus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-120.jpg/640px-Rumex_crispus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-120.jpg',
  'yerba mate green':             'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Yerba_mate_dry_leaves.jpg/640px-Yerba_mate_dry_leaves.jpg',
  'yerba mate':                   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Yerba_mate_dry_leaves.jpg/640px-Yerba_mate_dry_leaves.jpg',
  'yohimbe bark':                 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Pausinystalia_johimbe.jpg/640px-Pausinystalia_johimbe.jpg',
};

/* ─────────────────────────────────────────
   Catalogue — filter, search, load more
───────────────────────────────────────── */
function initCatalogue() {
  const grid        = document.getElementById('productGrid');
  const searchInput = document.getElementById('catalogueSearch');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreWrap = document.getElementById('loadMoreWrap');

  const PAGE_SIZE = 48;
  let currentSearch   = '';
  let visibleCount    = PAGE_SIZE;
  let filteredProducts = [];

  /* Apply search query, then re-render */
  function applyFilters() {
    const query = currentSearch.toLowerCase().trim();

    filteredProducts = ALL_PRODUCTS.filter(p => {
      return !query
        || p.title.toLowerCase().includes(query)
        || p.form.toLowerCase().includes(query);
    });

    visibleCount = PAGE_SIZE;
    renderGrid();
  }

  /* Render the visible slice of filteredProducts into the grid */
  function renderGrid() {
    const slice = filteredProducts.slice(0, visibleCount);
    const total = filteredProducts.length;

    // Build cards HTML
    grid.innerHTML = slice.map((product, i) => createCardHTML(product, i)).join('');

    // Show/hide Load More button
    if (slice.length < total) {
      loadMoreWrap.style.display = 'flex';
    } else {
      loadMoreWrap.style.display = 'none';
    }

    // Stagger card entrance animation
    grid.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.animationDelay = `${(i % PAGE_SIZE) * 0.025}s`;
    });
  }

  const FORM_LABELS = { 'Cut Sifted': 'C/S', 'Whole': 'W', 'Powder': 'PWD' };

  /* Generate HTML string for a single product card */
  function createCardHTML(product, index) {
    const formLabel = FORM_LABELS[product.form] || escapeHTML(product.form);
    const priceKey  = product.title.toLowerCase().trim();
    const priceVal  = PRODUCT_PRICES[priceKey];
    const priceHTML = priceVal
      ? `<span class="product-card__price">${escapeHTML(priceVal)}</span>`
      : `<span class="product-card__price product-card__price--muted">Price on request</span>`;

    const imgUrl  = PRODUCT_IMAGES[priceKey];
    const initial = escapeHTML(product.title.charAt(0).toUpperCase());
    const imgHTML = imgUrl
      ? `<img class="product-card__img" src="${escapeHTML(imgUrl)}" alt="${escapeHTML(product.title)}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="product-card__placeholder" style="display:none" aria-hidden="true">${initial}</div>`
      : `<div class="product-card__placeholder" aria-hidden="true">${initial}</div>`;

    return `
      <article class="product-card" aria-label="${escapeHTML(product.title)}">
        <div class="product-card__img-wrap">
          ${imgHTML}
          <span class="product-card__badge">${formLabel}</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__name-row">
            <h3 class="product-card__name">${escapeHTML(product.title)}</h3>
            ${priceHTML}
          </div>
          <hr class="product-card__divider">
          <button class="product-card__add-btn"
                  data-name="${escapeHTML(product.title)}"
                  data-price="${escapeHTML(priceVal || '')}">
            Add to Cart
          </button>
        </div>
      </article>
    `;
  }

  /* Live search with 180ms debounce */
  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      currentSearch = searchInput.value;
      applyFilters();
    }, 180);
  });

  /* Load next page of results */
  loadMoreBtn.addEventListener('click', () => {
    visibleCount += PAGE_SIZE;
    renderGrid();
    // Scroll to bring new cards into view
    const cards = grid.querySelectorAll('.product-card');
    const firstNew = cards[visibleCount - PAGE_SIZE];
    if (firstNew) {
      firstNew.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  // Initial render
  applyFilters();
}

/* ─────────────────────────────────────────
   Contact Form — inline blur validation
───────────────────────────────────────── */
function initForm() {
  // Inline validation on blur for required fields
  ['fullName', 'businessName', 'email'].forEach(id => {
    const field = document.getElementById(id);
    if (!field) return;
    field.addEventListener('blur',  () => validateField(field));
    field.addEventListener('input', () => clearFieldError(field));
  });
}

/* Returns true if the whole form is valid */
function validateForm() {
  const requiredFields = [
    document.getElementById('fullName'),
    document.getElementById('businessName'),
    document.getElementById('email'),
  ];
  let allValid = true;
  requiredFields.forEach(field => {
    if (field && !validateField(field)) allValid = false;
  });
  return allValid;
}

/* Validate a single field; returns true if valid */
function validateField(field) {
  const errorEl = document.getElementById(field.id + 'Error');
  let message   = '';

  if (field.required && !field.value.trim()) {
    const labelEl  = document.querySelector(`label[for="${field.id}"]`);
    const labelText = labelEl
      ? labelEl.textContent.replace('*', '').replace('(optional)', '').trim()
      : 'This field';
    message = `${labelText} is required.`;
  } else if (field.type === 'email' && field.value.trim() && !isValidEmail(field.value)) {
    message = 'Please enter a valid email address.';
  }

  if (errorEl) errorEl.textContent = message;
  field.classList.toggle('has-error', !!message);
  return !message;
}

/* Clear validation error for a field as the user types */
function clearFieldError(field) {
  const errorEl = document.getElementById(field.id + 'Error');
  if (errorEl) errorEl.textContent = '';
  field.classList.remove('has-error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ─────────────────────────────────────────
   Product Autocomplete — Products textarea
───────────────────────────────────────── */
function initProductAutocomplete() {
  const textarea = document.getElementById('products');
  const dropdown = document.getElementById('productsDropdown');
  if (!textarea || !dropdown) return;

  /* Show suggestions as user types */
  textarea.addEventListener('input', () => {
    const val    = textarea.value;
    const pos    = textarea.selectionStart;
    const before = val.substring(0, pos);

    // Find the last separator (comma or newline) before the cursor
    const sepIdx = Math.max(before.lastIndexOf(','), before.lastIndexOf('\n'));
    const term   = before.substring(sepIdx + 1).trim();

    if (term.length < 2) { closeDropdown(); return; }

    const matches = PRICE_DATA.filter(p =>
      p.name.toLowerCase().includes(term.toLowerCase())
    ).slice(0, 5);

    if (!matches.length) { closeDropdown(); return; }

    // Build dropdown items
    dropdown.innerHTML = matches.map(p => {
      const isMuted = p.price === 'Price on request';
      return `<li class="ac-item" role="option" tabindex="-1"
                  data-name="${escapeHTML(p.name)}"
                  data-price="${escapeHTML(p.price)}">
                <span class="ac-name">${escapeHTML(p.name)}</span>
                <span class="ac-price${isMuted ? ' ac-price--muted' : ''}">${escapeHTML(p.price)}</span>
              </li>`;
    }).join('');

    dropdown.classList.add('ac-open');

    // Bind click handlers — use mousedown to fire before textarea blur
    dropdown.querySelectorAll('.ac-item').forEach(item => {
      item.addEventListener('mousedown', e => {
        e.preventDefault(); // keep textarea focused
        insertSuggestion(item.dataset.name, item.dataset.price, val, pos, sepIdx);
        closeDropdown();
      });
    });
  });

  /* Close when clicking outside */
  document.addEventListener('mousedown', e => {
    if (!e.target.closest('.autocomplete-wrap')) closeDropdown();
  });

  /* Close on Escape */
  textarea.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDropdown();
  });

  /* ── Insertion logic ─────────────────── */
  function insertSuggestion(name, price, val, pos, sepIdx) {
    // Text that already exists up to and including the last separator
    const prefix = sepIdx >= 0 ? val.substring(0, sepIdx + 1) + ' ' : '';
    // Text after the cursor (anything the user may have typed further along)
    const after  = val.substring(pos).replace(/^\s*/, '');

    const insert  = name + ' — ' + price + ', ';
    const newVal  = (prefix + insert + after).trimStart();
    const newPos  = prefix.length + insert.length;

    textarea.value = newVal;
    textarea.setSelectionRange(newPos, newPos);
    textarea.focus();
  }

  function closeDropdown() {
    dropdown.classList.remove('ac-open');
    dropdown.innerHTML = '';
  }
}

/* ─────────────────────────────────────────
   Scroll Animations — IntersectionObserver
───────────────────────────────────────── */
function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-in-section');

  // Fallback: if IntersectionObserver not supported, show everything
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px',
  });

  targets.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   Smooth Scroll — offset for fixed nav
───────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const hash   = anchor.getAttribute('href');
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('nav').offsetHeight;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────
   Utility — HTML entity escaping
───────────────────────────────────────── */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ─────────────────────────────────────────
   Cart System
   Parts: badge, drawer, checkout modal,
   mailto submission, localStorage persist
───────────────────────────────────────── */
function initCart() {
  const STORAGE_KEY = 'premierherbal_cart';
  const MIN_ORDER   = 200;

  /* ── State ─────────────────────────── */
  let cart = loadCart();

  /* ── DOM refs ──────────────────────── */
  const cartBtn       = document.getElementById('cartBtn');
  const cartBadge     = document.getElementById('cartBadge');
  const cartOverlay   = document.getElementById('cartOverlay');
  const cartDrawer    = document.getElementById('cartDrawer');
  const cartClose     = document.getElementById('cartClose');
  const cartBody      = document.getElementById('cartBody');
  const cartFooter    = document.getElementById('cartFooter');
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutContent = document.getElementById('checkoutContent');
  const checkoutBackdrop = document.getElementById('checkoutBackdrop');
  const productGrid   = document.getElementById('productGrid');

  /* ── Persistence ───────────────────── */
  function loadCart() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch { return []; }
  }
  function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }
  function clearCart() {
    cart = [];
    saveCart();
    updateBadge();
  }

  /* ── Price helpers ─────────────────── */
  // Returns { numeric: Number|null, unit: String }
  function parsePrice(label) {
    if (!label) return { numeric: null, unit: 'lb' };
    const m = label.match(/\$([\d.]+)\s*\/\s*(.+)/);
    if (!m) return { numeric: null, unit: 'lb' };
    return { numeric: parseFloat(m[1]), unit: m[2].trim() };
  }

  function getSubtotal() {
    return cart.reduce((sum, item) => {
      return sum + (item.numericPrice ? item.numericPrice * item.quantity : 0);
    }, 0);
  }

  function getTotalQty() {
    return cart.reduce((n, item) => n + item.quantity, 0);
  }

  /* ── Cart CRUD ─────────────────────── */
  function addItem(name, priceLabel) {
    const id = name.toLowerCase();
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      const { numeric, unit } = parsePrice(priceLabel);
      cart.push({
        id,
        name,
        priceLabel: priceLabel || null,
        numericPrice: numeric,
        unit,
        quantity: 1
      });
    }
    saveCart();
    updateBadge();
  }

  function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateBadge();
    renderDrawer();
  }

  function setQuantity(id, qty) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    const n = Math.max(1, parseInt(qty) || 1);
    item.quantity = n;
    saveCart();
    // Re-render just the footer (cheaper) but full drawer is simpler & safe
    renderDrawer();
  }

  /* ── Badge ─────────────────────────── */
  function updateBadge() {
    const qty = getTotalQty();
    if (qty > 0) {
      cartBadge.textContent = qty > 99 ? '99+' : qty;
      cartBadge.removeAttribute('hidden');
    } else {
      cartBadge.setAttribute('hidden', '');
    }
  }

  /* ── Drawer open / close ───────────── */
  function openDrawer() {
    cartDrawer.classList.add('cart-drawer--open');
    cartOverlay.classList.add('cart-overlay--visible');
    cartDrawer.setAttribute('aria-hidden', 'false');
    cartOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderDrawer();
  }

  function closeDrawer() {
    cartDrawer.classList.remove('cart-drawer--open');
    cartOverlay.classList.remove('cart-overlay--visible');
    cartDrawer.setAttribute('aria-hidden', 'true');
    cartOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ── Modal open / close ────────────── */
  function openModal() {
    checkoutModal.removeAttribute('hidden');
    checkoutModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderCheckoutForm();
  }

  function closeModal() {
    checkoutModal.setAttribute('hidden', '');
    checkoutModal.setAttribute('aria-hidden', 'true');
    // Only restore scroll if drawer also closed
    if (!cartDrawer.classList.contains('cart-drawer--open')) {
      document.body.style.overflow = '';
    }
  }

  /* ── Render drawer ─────────────────── */
  function renderDrawer() {
    // Empty state
    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty">
          <span class="cart-empty__icon" aria-hidden="true">🌿</span>
          <p class="cart-empty__msg">Your cart is empty — browse our catalogue to add products.</p>
          <button class="btn btn--outline-dark" id="cartBrowseBtn" style="margin-top:0.5rem">
            Browse Products
          </button>
        </div>`;
      cartFooter.innerHTML = '';
      document.getElementById('cartBrowseBtn').addEventListener('click', () => {
        closeDrawer();
        document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    // Item rows
    cartBody.innerHTML = cart.map(item => {
      const imgUrl = PRODUCT_IMAGES[item.id];
      const initial = item.name.charAt(0).toUpperCase();
      const thumbHTML = imgUrl
        ? `<img class="cart-item__thumb" src="${escapeHTML(imgUrl)}" alt=""
                onerror="this.outerHTML='<div class=\\'cart-item__thumb-ph\\'>${initial}</div>'">`
        : `<div class="cart-item__thumb-ph" aria-hidden="true">${initial}</div>`;

      const lineTotal = item.numericPrice
        ? `$${(item.numericPrice * item.quantity).toFixed(2)}`
        : '—';
      const unitPrice = item.priceLabel || 'Price on request';

      return `
        <div class="cart-item" data-id="${escapeHTML(item.id)}">
          ${thumbHTML}
          <div class="cart-item__info">
            <p class="cart-item__name">${escapeHTML(item.name)}</p>
            <p class="cart-item__unit-price">${escapeHTML(unitPrice)}</p>
            <div class="cart-item__qty-row">
              <button class="cart-qty-btn cart-qty-minus" aria-label="Decrease quantity">−</button>
              <input class="cart-qty-input" type="number" min="1" value="${item.quantity}"
                     aria-label="Quantity">
              <span class="cart-qty-unit">${escapeHTML(item.unit)}</span>
              <button class="cart-qty-btn cart-qty-plus" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="cart-item__right">
            <span class="cart-item__line-total">${lineTotal}</span>
            <button class="cart-item__remove" aria-label="Remove ${escapeHTML(item.name)}">✕ Remove</button>
          </div>
        </div>`;
    }).join('');

    // Wire up item events
    cartBody.querySelectorAll('.cart-item').forEach(el => {
      const id    = el.dataset.id;
      const input = el.querySelector('.cart-qty-input');
      el.querySelector('.cart-qty-minus').addEventListener('click', () => {
        const cur = cart.find(i => i.id === id);
        if (cur) setQuantity(id, cur.quantity - 1);
      });
      el.querySelector('.cart-qty-plus').addEventListener('click', () => {
        const cur = cart.find(i => i.id === id);
        if (cur) setQuantity(id, cur.quantity + 1);
      });
      input.addEventListener('change', () => setQuantity(id, input.value));
      el.querySelector('.cart-item__remove').addEventListener('click', () => removeItem(id));
    });

    // Footer
    const subtotal   = getSubtotal();
    const belowMin   = subtotal < MIN_ORDER;
    const hasUnpriced = cart.some(i => !i.numericPrice);

    cartFooter.innerHTML = `
      <div class="cart-subtotal">
        <span class="cart-subtotal__label">Subtotal</span>
        <span class="cart-subtotal__amount">$${subtotal.toFixed(2)} CAD</span>
      </div>
      ${hasUnpriced ? `<p class="cart-unpriced-note">* Some items are priced on request — final total may be higher.</p>` : ''}
      ${belowMin ? `<p class="cart-min-warning">Add more products to reach the $200 CAD minimum order.</p>` : ''}
      <div class="cart-notice">
        Wholesale orders only. Minimum order $200 CAD. Our team will confirm your order and arrange shipping within 24–48 hours.
      </div>
      <button class="btn btn--primary cart-checkout-btn" id="cartCheckoutBtn" ${belowMin ? 'disabled' : ''}>
        ${belowMin
          ? 'Add more to reach $200 CAD'
          : `Submit Order Request — $${subtotal.toFixed(2)} CAD`}
      </button>`;

    if (!belowMin) {
      document.getElementById('cartCheckoutBtn').addEventListener('click', () => {
        closeDrawer();
        openModal();
      });
    }
  }

  /* ── Render checkout form ──────────── */
  function renderCheckoutForm() {
    const subtotal   = getSubtotal();
    const hasUnpriced = cart.some(i => !i.numericPrice);

    const tableRows = cart.map(item => {
      const lineTotal = item.numericPrice
        ? `$${(item.numericPrice * item.quantity).toFixed(2)}`
        : 'On request';
      return `<tr>
        <td>${escapeHTML(item.name)}</td>
        <td>${item.quantity} ${escapeHTML(item.unit)}</td>
        <td>${escapeHTML(item.priceLabel || 'Price on request')}</td>
        <td>${lineTotal}</td>
      </tr>`;
    }).join('');

    checkoutContent.innerHTML = `
      <div class="checkout-header">
        <h2 id="checkoutModalTitle">Order Summary</h2>
        <button class="checkout-header__close" id="checkoutClose" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="checkout-body">
        <div class="checkout-notice">
          You are submitting a wholesale order request. Payment will be arranged by our team after
          your order is confirmed. Minimum order $200 CAD.
        </div>

        <div class="checkout-summary">
          <p class="checkout-summary__heading">Your Order</p>
          <table class="checkout-table">
            <thead>
              <tr>
                <th>Product</th><th>Qty</th><th>Unit Price</th><th>Total</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
            <tfoot>
              <tr>
                <td colspan="3">
                  Estimated Total${hasUnpriced ? ' (excl. on-request items)' : ''}
                </td>
                <td>$${subtotal.toFixed(2)} CAD</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <hr class="checkout-divider">

        <p class="checkout-form-heading">Your Details</p>
        <form id="checkoutForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="co-name">
                Full Name <span class="required" aria-hidden="true">*</span>
              </label>
              <input class="form-input" id="co-name" name="fullName" type="text"
                     required autocomplete="name" placeholder="Jane Smith">
            </div>
            <div class="form-group">
              <label class="form-label" for="co-biz">
                Business Name <span class="required" aria-hidden="true">*</span>
              </label>
              <input class="form-input" id="co-biz" name="businessName" type="text"
                     required autocomplete="organization" placeholder="Acme Botanicals Ltd.">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="co-email">
                Email Address <span class="required" aria-hidden="true">*</span>
              </label>
              <input class="form-input" id="co-email" name="email" type="email"
                     required autocomplete="email" placeholder="jane@example.com">
            </div>
            <div class="form-group">
              <label class="form-label" for="co-phone">
                Phone Number <span class="optional">(optional)</span>
              </label>
              <input class="form-input" id="co-phone" name="phone" type="tel"
                     autocomplete="tel" placeholder="+1 (416) 555-0123">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="co-address">
              Shipping Address <span class="required" aria-hidden="true">*</span>
            </label>
            <textarea class="form-input form-textarea" id="co-address" name="address"
                      rows="2" required autocomplete="street-address"
                      placeholder="123 Main St, Toronto, ON M5V 1A1, Canada"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label" for="co-notes">
              Order Notes <span class="optional">(optional)</span>
            </label>
            <textarea class="form-input form-textarea" id="co-notes" name="notes"
                      rows="2"
                      placeholder="Any special instructions or questions"></textarea>
          </div>
          <button type="submit" class="btn btn--primary btn--full" style="margin-top:0.5rem">
            Submit Order
          </button>
        </form>
      </div>`;

    document.getElementById('checkoutClose').addEventListener('click', closeModal);
    checkoutBackdrop.addEventListener('click', closeModal);
    document.getElementById('checkoutForm').addEventListener('submit', handleOrderSubmit);
  }

  /* ── Handle order submission ───────── */
  function handleOrderSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Validate required fields
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('form-input--error');
      if (!field.value.trim()) {
        field.classList.add('form-input--error');
        valid = false;
      }
    });
    if (!valid) {
      form.querySelector('.form-input--error').focus();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    const subtotal = getSubtotal();

    // Build email body
    const itemLines = cart.map(item => {
      const lineTotal = item.numericPrice
        ? `$${(item.numericPrice * item.quantity).toFixed(2)} CAD`
        : 'Price on request';
      return `  • ${item.name}: ${item.quantity} ${item.unit} @ ${item.priceLabel || 'Price on request'} = ${lineTotal}`;
    }).join('\n');

    const emailBody =
`NEW WHOLESALE ORDER REQUEST
Premier Herbal Inc.
===========================

ORDER ITEMS
-----------
${itemLines}

Estimated Total: $${subtotal.toFixed(2)} CAD
(Final total confirmed by Premier Herbal team)

CUSTOMER DETAILS
----------------
Name:             ${data.fullName}
Business:         ${data.businessName}
Email:            ${data.email}
Phone:            ${data.phone || 'Not provided'}
Shipping Address: ${data.address}
Notes:            ${data.notes || 'None'}

---
Order submitted via premierherbal.ca`;

    /* =========================================================
       STRIPE CHECKOUT GOES HERE
       Replace this mailto section with Stripe Checkout
       when keys are ready.
       ========================================================= */
    const subject = 'New Wholesale Order Request — Premier Herbal Inc.';
    window.location.href =
      `mailto:Premierherbal99@gmail.com`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${encodeURIComponent(emailBody)}`;

    // Clear cart after submission
    clearCart();

    // Show confirmation screen
    showConfirmation();
  }

  /* ── Confirmation screen ───────────── */
  function showConfirmation() {
    checkoutContent.innerHTML = `
      <div class="checkout-header">
        <h2>Order Submitted</h2>
        <button class="checkout-header__close" id="confirmClose" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="checkout-body">
        <div class="checkout-confirm">
          <span class="checkout-confirm__icon" aria-hidden="true">✿</span>
          <h2>Your order request has been submitted.</h2>
          <p>
            The Premier Herbal team will contact you within 24 to 48 business hours
            to confirm your order and arrange payment and shipping.
          </p>
          <p>
            If you have any questions email
            <a href="mailto:Premierherbal99@gmail.com">Premierherbal99@gmail.com</a> directly.
          </p>
          <div class="checkout-confirm__btns">
            <button class="btn btn--outline-dark" id="confirmClose2">Close</button>
            <a href="#catalogue" class="btn btn--primary" id="confirmCatalogue">
              Back to Catalogue
            </a>
          </div>
        </div>
      </div>`;

    document.getElementById('confirmClose').addEventListener('click', closeModal);
    document.getElementById('confirmClose2').addEventListener('click', closeModal);
    document.getElementById('confirmCatalogue').addEventListener('click', () => {
      closeModal();
      document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ── Add to Cart — event delegation on grid ── */
  if (productGrid) {
    productGrid.addEventListener('click', e => {
      const btn = e.target.closest('.product-card__add-btn');
      if (!btn) return;
      const name  = btn.dataset.name;
      const price = btn.dataset.price;
      addItem(name, price);
      btn.textContent = 'Added ✓';
      btn.classList.add('product-card__add-btn--added');
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.classList.remove('product-card__add-btn--added');
      }, 1000);
    });
  }

  /* ── Keyboard — Escape closes ──────── */
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!checkoutModal.hasAttribute('hidden')) { closeModal(); return; }
    if (cartDrawer.classList.contains('cart-drawer--open')) closeDrawer();
  });

  /* ── Wire nav events ───────────────── */
  cartBtn.addEventListener('click', openDrawer);
  cartClose.addEventListener('click', closeDrawer);
  cartOverlay.addEventListener('click', closeDrawer);

  /* ── Init badge from persisted cart ── */
  updateBadge();
}
