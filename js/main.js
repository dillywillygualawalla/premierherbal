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
  const countEl     = document.getElementById('productCount');
  const searchInput = document.getElementById('catalogueSearch');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreWrap = document.getElementById('loadMoreWrap');
  const filterBtns  = document.querySelectorAll('.filter-btn');

  const PAGE_SIZE = 48;
  let currentFilter   = 'all';
  let currentSearch   = '';
  let visibleCount    = PAGE_SIZE;
  let filteredProducts = [];

  // Maps filter tab keys → a predicate function on a product
  const FILTER_MAP = {
    all:      () => true,
    culinary: p => p.uses.some(u => ['Culinary', 'Spice', 'Herb'].includes(u)),
    medicinal:p => p.uses.some(u => ['Medicinal', 'Supplement'].includes(u)),
    tea:      p => p.uses.some(u => ['Tea', 'Adaptogen'].includes(u)),
    ayurvedic:p => p.uses.includes('Ayurvedic'),
    skincare: p => p.uses.some(u => ['Skincare', 'Topical'].includes(u)),
    detox:    p => p.uses.some(u => ['Detox', 'Digestive'].includes(u)),
    sleep:    p => p.uses.some(u => ['Sleep', 'Calming'].includes(u)),
  };

  /* Apply active filter + search query, then re-render */
  function applyFilters() {
    const filterFn = FILTER_MAP[currentFilter] || FILTER_MAP.all;
    const query    = currentSearch.toLowerCase().trim();

    filteredProducts = ALL_PRODUCTS.filter(p => {
      const matchesFilter = filterFn(p);
      const matchesSearch = !query
        || p.title.toLowerCase().includes(query)
        || p.uses.some(u => u.toLowerCase().includes(query))
        || p.form.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
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

    // Update counter label
    countEl.textContent =
      `Showing ${slice.length} of ${total} product${total !== 1 ? 's' : ''}`;

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

  /* Generate HTML string for a single product card */
  function createCardHTML(product, index) {
    const tags = product.uses.slice(0, 2)
      .map(u => `<span class="product-tag">${escapeHTML(u)}</span>`)
      .join('');

    return `
      <article class="product-card" aria-label="${escapeHTML(product.title)}">
        <span class="product-card__badge">${escapeHTML(product.form)}</span>
        <h3 class="product-card__name">${escapeHTML(product.title)}</h3>
        <div class="product-card__tags">${tags}</div>
        <a href="#contact" class="product-card__inquire">Inquire</a>
      </article>
    `;
  }

  /* Filter tab clicks */
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('filter-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('filter-btn--active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

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
