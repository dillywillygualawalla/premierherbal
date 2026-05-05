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
  { name: 'Ajawan Seed',                  price: '$29.84/lb'        },
  { name: 'Alfalfa Leaves',               price: 'Price on request' },
  { name: 'Allspice',                     price: 'Price on request' },
  { name: 'Aloe Vera',                    price: 'Price on request' },
  { name: 'Amla',                         price: 'Price on request' },
  { name: 'Angelica Root',               price: 'Price on request' },
  { name: 'Anise Seed',                   price: 'Price on request' },
  { name: 'Anise Star',                   price: 'Price on request' },
  { name: 'Ashwagandha',                  price: '$27.00/lb'        },
  { name: 'Astragalus Root',              price: '$23.00/lb'        },
  { name: 'Balm of Gilead Buds',          price: '$42.00/lb'        },
  { name: 'Basil Leaves',                 price: 'Price on request' },
  { name: 'Bay Leaves',                   price: 'Price on request' },
  { name: 'Bayberry Bark',               price: '$78.00/lb'        },
  { name: 'Bee Pollen',                   price: 'Price on request' },
  { name: 'Beet Root',                    price: 'Price on request' },
  { name: 'Behda',                        price: 'Price on request' },
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
  { name: 'Buchu Leaves',                 price: 'Price on request' },
  { name: 'Buckthorn Bark',               price: 'Price on request' },
  { name: 'Burdock Leaves',               price: '$18.00/lb'        },
  { name: 'Burdock Root',                 price: 'Price on request' },
  { name: 'Calamus Root',                 price: 'Price on request' },
  { name: 'Calendula Flower',             price: 'Price on request' },
  { name: 'Calendula Petals',             price: 'Price on request' },
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
  { name: 'Crampbark',                    price: '$19.50/lb'        },
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
  { name: 'Elder Berry',                  price: 'Price on request' },
  { name: 'Elder Flower',                 price: 'Price on request' },
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
  { name: 'Fo-Ti Root',                   price: 'Price on request' },
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
  { name: 'Green Tea',                    price: 'Price on request' },
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
  { name: 'Hemp Seed',                    price: 'Price on request' },
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
  { name: 'Jasmine Flower',               price: 'Price on request' },
  { name: 'Jasmine Tea',                  price: 'Price on request' },
  { name: 'Juniper Berries',              price: 'Price on request' },
  { name: 'Kava Kava Root',               price: '$112.00/lb'       },
  { name: 'Kelp Atlantic',                price: 'Price on request' },
  { name: 'Kalmeg',                       price: '$16.00/lb'        },
  { name: 'Lady Slipper Root',            price: 'Price on request' },
  { name: 'Lavender Flower Super Blue',   price: '$25.00/lb'        },
  { name: 'Lavender Flower Powder',       price: '$23.50/lb'        },
  { name: 'Lecithin',                     price: 'Price on request' },
  { name: 'Lemon Balm',                   price: 'Price on request' },
  { name: 'Lemon Grass',                  price: 'Price on request' },
  { name: 'Lemon Verbena',                price: 'Price on request' },
  { name: 'Licorice Root',               price: 'Price on request' },
  { name: 'Licorice Root Sticks',         price: 'Price on request' },
  { name: 'Linden Leaves and Flower',     price: 'Price on request' },
  { name: 'Lobelia',                      price: 'Price on request' },
  { name: 'Loose Strife Herb',            price: 'Price on request' },
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
  { name: 'Milky Oat Tops',               price: 'Price on request' },
  { name: 'Mistletoe',                    price: 'Price on request' },
  { name: 'Motherwort',                   price: '$19.50/lb'        },
  { name: 'Mugwort',                      price: 'Price on request' },
  { name: 'Muira Puama',                  price: 'Price on request' },
  { name: 'Mullein Flower',               price: '$25.50/lb'        },
  { name: 'Mushrooms Shiitake',           price: 'Price on request' },
  { name: 'Mustard Seed',                 price: 'Price on request' },
  { name: 'Myrrh Gum',                    price: 'Price on request' },
  { name: 'Neem Leaves',                  price: 'Price on request' },
  { name: 'Nettle Leaves',                price: 'Price on request' },
  { name: 'Nettle Root',                  price: 'Price on request' },
  { name: 'Noni Fruit',                   price: 'Price on request' },
  { name: 'Nopal Cactus',                 price: 'Price on request' },
  { name: 'Nutmeg',                       price: 'Price on request' },
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
  { name: 'Passion Flower',               price: 'Price on request' },
  { name: 'Patchouli Leaves',             price: '$18.00/lb'        },
  { name: 'Pau Darco Bark',               price: '$22.00/lb'        },
  { name: 'Pellitory of the Wall Herb',   price: 'Price on request' },
  { name: 'Penny Royal',                  price: '$17.00/lb'        },
  { name: 'Peony Root',                   price: 'Price on request' },
  { name: 'Peppermint Leaves',            price: 'Price on request' },
  { name: 'Periwinkle',                   price: 'Price on request' },
  { name: 'Pigeon Pea Leaves',            price: 'Price on request' },
  { name: 'Pine Buds',                    price: 'Price on request' },
  { name: 'Pine Needles',                 price: '$27.00/lb'        },
  { name: 'Pine Bark Extract 95%',        price: '$55.50/lb'        },
  { name: 'Plantain Leaves',              price: '$18.00/lb'        },
  { name: 'Pleurisy Root',                price: 'Price on request' },
  { name: 'Poke Root',                    price: 'Price on request' },
  { name: 'Poplar Buds',                  price: '$42.00/lb'        },
  { name: 'Psyllium Husk',               price: '$11.50/lb'        },
  { name: 'Psyllium Seed',               price: 'Price on request' },
  { name: 'Pulsatila Root',               price: 'Price on request' },
  { name: 'Pumpkin Seed',                 price: 'Price on request' },
  { name: 'Puncture Vine',                price: 'Price on request' },
  { name: 'Pygeum Bark',                  price: 'Price on request' },
  { name: 'Quassia Bark',                 price: 'Price on request' },
  { name: 'Queen of the Meadow',          price: 'Price on request' },
  { name: 'Raspberry Leaves',             price: '$18.00/lb'        },
  { name: 'Red Clover Blossoms',          price: '$24.00/lb'        },
  { name: 'Red Rose Buds and Petals',     price: 'Price on request' },
  { name: 'Rehmannia Root',               price: '$22.00/lb'        },
  { name: 'Rest Harrow Root',             price: 'Price on request' },
  { name: 'Rhatany Root',                 price: 'Price on request' },
  { name: 'Rhodiola',                     price: 'Price on request' },
  { name: 'Ritha',                        price: '$13.00/lb'        },
  { name: 'Rosehips Seedless',            price: '$26.00/lb'        },
  { name: 'Rosemary Leaves',              price: 'Price on request' },
  { name: 'Rue Herb',                     price: 'Price on request' },
  { name: 'Rupturewort',                  price: 'Price on request' },
  { name: 'Rutin',                        price: 'Price on request' },
  { name: 'Saffron Spanish 1g',           price: '$8.50/g'          },
  { name: 'Sage Clary',                   price: 'Price on request' },
  { name: 'Sage Leaves',                  price: 'Price on request' },
  { name: 'Sandalwood Red',               price: '$22.00/lb'        },
  { name: 'Sarsaparilla Root',            price: '$21.00/lb'        },
  { name: 'Sassafras Root',               price: '$32.00/lb'        },
  { name: 'Savory Leaves',                price: 'Price on request' },
  { name: 'Saw Palmetto Berry',           price: '$43.00/lb'        },
  { name: 'Schizandra Berry',             price: 'Price on request' },
  { name: 'Sea Buckthorn Berries',        price: '$31.00/lb'        },
  { name: 'Sea Buckthorn Leaves',         price: '$24.50/lb'        },
  { name: 'Sea Salt',                     price: 'Price on request' },
  { name: 'Senna Leaves',                 price: 'Price on request' },
  { name: 'Senna Pods',                   price: 'Price on request' },
  { name: 'Sheep Sorrel',                 price: 'Price on request' },
  { name: 'Shepherds Purse',              price: 'Price on request' },
  { name: 'Shilajit Powder',              price: '$36.50/lb'        },
  { name: 'Slippery Elm Bark',            price: 'Price on request' },
  { name: 'Smartweed Herb',               price: 'Price on request' },
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
  { name: 'Tulsi Leaves',                 price: 'Price on request' },
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
  { name: 'Yohimbe Bark',                 price: 'Price on request' },
  { name: 'Yucca Root',                   price: 'Price on request' },
  { name: 'Zizyphus Seed',                price: 'Price on request' },
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
  'ajawan seed':                       '$7.50 / 114g',
  'alfalfa seed':                      '$13.00 / lb',
  'alfalfa lvs':                       '$13.00 / lb',
  'alfalfa leaves':                    '$13.00 / lb',
  'allspice':                          '$17.00 / lb',
  'aloe vera':                         '$29.00 / lb',
  'amla':                              '$13.00 / lb',
  'angelica root':                     '$23.50 / lb',
  'angelica seed':                     '$23.50 / lb',
  'anise seed':                        '$6.50 / 114g',
  'anise star':                        '$7.00 / 114g',
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
  'calendula petals':                  '$17.00 / 114g',
  'caraway seed':                      '$9.00 / lb',
  'cardamom green':                    '$36.50 / lb',
  'cardamom seed':                     '$36.50 / lb',
  'carob':                             '$15.00 / lb',
  'cascara bark':                      '$20.00 / lb',
  'cassia bark':                       '$14.00 / lb',
  'cats claw bark':                    '$24.50 / lb',
  'catnip herb':                       '$21.50 / lb',
  'catuba bark':                       '$13.00 / 114g',
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
  'elder berry':                       '$17.00 / 114g',
  'elder flower':                      '$17.00 / 114g',
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
  'golden rod herb':                   '$6.50 / lb',
  'goldenseal leaves':                 '$222.00 / lb',
  'goldenseal root':                   '$222.00 / lb',
  'gotu kola leaves':                  '$17.00 / lb',
  'grains of paradise':                '$39.50 / lb',
  'grape seed':                        '$18.50 / lb',
  'grape seed extract':                '$18.50 / lb',
  'grape seed powder':                 '$18.50 / lb',
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
  'jasmine flower':                    '$15.00 / lb',
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
  'mustard seed':                      '$12.00 / 114g',
  'myrrh gum':                         '$34.50 / lb',
  'neem leaves':                       '$14.00 / lb',
  'nettle leaves':                     '$17.00 / 114g',
  'nettle root':                       '$17.00 / 114g',
  'noni fruit':                        '$14.00 / lb',
  'nopal cactus':                      '$22.50 / lb',
  'nutmeg':                            '$8.50 / 114g',
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
  'passion flower':                    '$9.00 / 114g',
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
  'plantain':                          '$17.00 / 114g',
  'plantain leaves':                   '$17.00 / 114g',
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
  'red clover tops':                   '$24.00 / lb',
  'red clover blossoms':               '$24.00 / lb',
  'red rose buds petals':              '$19.00 / lb',
  'red rose buds and petals':          '$19.00 / lb',
  'rehmannia root':                    '$22.00 / lb',
  'rest harrow root':                  '$16.00 / lb',
  'rhodiola':                          '$47.00 / lb',
  'ritha':                             '$12.00 / lb',
  'rosehips':                          '$16.00 / lb',
  'rosehips seedless':                 '$16.00 / lb',
  'rosemary leaves':                   '$17.00 / 114g',
  'rue goat':                          '$18.00 / lb',
  'rue herb':                          '$18.00 / lb',
  'rupturewort':                       '$20.50 / lb',
  'saffron spanish':                   '$11.00 / 114g',
  'saffron spanish 1g':                '$11.00 / 114g',
  'sage clary':                        '$55.50 / 114g',
  'sage leaves':                       '$55.50 / 114g',
  'sandalwood red':                    '$19.50 / lb',
  'sandalwood red chips':              '$19.50 / lb',
  'sarsaparilla root':                 '$21.00 / lb',
  'sassafras root':                    '$37.00 / lb',
  'savory leaves':                     '$10.50 / lb',
  'saw palmetto berry':                '$41.00 / lb',
  'schizandra berry':                  '$32.00 / lb',
  'sea salt':                          '$14.00 / lb',
  'senna leaves':                      '$14.00 / 114g',
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
  'wood sage':                         '$55.50 / 114g',
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

    return `
      <article class="product-card" aria-label="${escapeHTML(product.title)}">
        <span class="product-card__badge">${formLabel}</span>
        <div class="product-card__name-row">
          <h3 class="product-card__name">${escapeHTML(product.title)}</h3>
          ${priceHTML}
        </div>
        <hr class="product-card__divider">
        <a href="#contact" class="product-card__inquire">Inquire</a>
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
