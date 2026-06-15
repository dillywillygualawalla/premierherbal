/* =============================================================
   Premier Herbal Inc. — Main JavaScript
   Handles: nav, catalogue, form validation, scroll animations
   ============================================================= */

'use strict';


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
   Product Local Image Map
   Key: "product title lowercase|form lowercase"
   Falls back to title-only via PRODUCT_IMAGES_BY_TITLE
───────────────────────────────────────── */
const PRODUCT_LOCAL_IMAGES = {
  'acacia catechu|powder': 'images/product-images/acacia-catechu.png',
  'acai berry|powder': 'images/product-images/acai-berry-powder.png',
  'acerola berry- 25%|powder': 'images/product-images/acerola-berry-25.png',
  'activated charcoal|powder': 'images/product-images/activated-charcoal-powder.png',
  'african chili bird pepper|powder': 'images/product-images/african-chili-bird-pepper-powder.png',
  'agrimony herb|whole': 'images/product-images/agrimony-herb-leaves.png',
  'ajawan seed|whole': 'images/product-images/ajawan-seed-whole.png',
  'alfaalfa seed|whole': 'images/product-images/alfaalfa-seed-whole.png',
  'allspice|whole': 'images/product-images/allspice-whole.png',
  'aloe vera|powder': 'images/product-images/aloe-vera-powder.png',
  'amla|whole': 'images/product-images/amla-cut-and-sifted.png',
  'angelica root|cut & sifted': 'images/product-images/angelica-root-cut-and-sifted.png',
  'anise seed|whole': 'images/product-images/anise-seed-whole.png',
  'anise star|whole': 'images/product-images/anise-star-whole.png',
  'apple cider vinegar|powder': 'images/product-images/apple-cider-vinegar-powder.png',
  'arjuna terminalia|cut & sifted': 'images/product-images/arjuna-terminalia-cut-and-sifted.png',
  'arnica flower|whole': 'images/product-images/arnica-flower-whole.png',
  'artichoke leaves|whole': 'images/product-images/artichoke-leaves-cut-and-sifted.png',
  'asafoetida pieces|whole': 'images/product-images/asafoetida-pieces-whole.png',
  'ascorbic acid (vitamin c)|powder': 'images/product-images/ascorbic-acid-powder.png',
  'ashwagandha|cut & sifted': 'images/product-images/ashwagandha-cut-and-sifted.png',
  'astragulus root|cut & sifted': 'images/product-images/astragulus-root-cut-and-sifted.png',
  'balm lemon herb|whole': 'images/product-images/balm-lemon-herb-cut-and-sifted.png',
  'barley grass|powder': 'images/product-images/barley-grass-powder.png',
  'basil leaves|whole': 'images/product-images/basil-leaves-cut-and-sifted.png',
  'bay leaves|whole': 'images/product-images/bay-leaves-whole.png',
  'bayberry bark|cut & sifted': 'images/product-images/bayberry-bark-cut-and-sifted.png',
  'bearberry leaf|whole': 'images/product-images/bearberry-leaf-cut-and-sifted.png',
  'beet root|powder': 'images/product-images/beet-root-powder.png',
  'bilberry|whole': 'images/product-images/bilberry-cut-and-sifted.png',
  'birch leaf|whole': 'images/product-images/birch-leaf-cut-and-sifted.png',
  'bitter melon|whole': 'images/product-images/bitter-melon-cut-and-sifted.png',
  'black cohosh root|cut & sifted': 'images/product-images/black-cohosh-root-cut-and-sifted.png',
  'black pepper|whole': 'images/product-images/black-pepper-whole.png',
  'black walnut hull|cut & sifted': 'images/product-images/black-walnut-hull-cut-and-sifted.png',
  'blackberry leaf|whole': 'images/product-images/blackberry-leaf-cut-and-sifted.png',
  'blue cohosh root|cut & sifted': 'images/product-images/blue-cohosh-root-cut-and-sifted.png',
  'blue vervain|whole': 'images/product-images/blue-vervain-cut-and-sifted.png',
  'boldo leaf|whole': 'images/product-images/boldo-leaf-cut-and-sifted.png',
  'boneset herb|whole': 'images/product-images/boneset-herb-cut-and-sifted.png',
  'borage herb|whole': 'images/product-images/borage-herb-cut-and-sifted.png',
  'boswellia|cut & sifted': 'images/product-images/boswellia-cut-and-sifted.png',
  'buchu leaf|whole': 'images/product-images/buchu-leaf-cut-and-sifted.png',
  'burdock root|cut & sifted': 'images/product-images/burdock-root-cut-and-sifted.png',
  'calendula flower|whole': 'images/product-images/calendula-flower-whole.png',
  'camellia sinensis leaf|whole': 'images/product-images/camellia-sinensis-leaf-cut-and-sifted.png',
  'capsicum|powder': 'images/product-images/capsicum-powder.png',
  'caraway seed|whole': 'images/product-images/caraway-seed-whole.png',
  'cardamom|whole': 'images/product-images/cardamom-whole.png',
  'cardamom|powder': 'images/product-images/cardamom-powder.png',
  'cascara sagrada|cut & sifted': 'images/product-images/cascara-sagrada-cut-and-sifted.png',
  'catnip herb|whole': 'images/product-images/catnip-herb-cut-and-sifted.png',
  'cats claw bark|cut & sifted': 'images/product-images/cats-claw-bark-cut-and-sifted.png',
  'cayenne 40k|powder': 'images/product-images/cayenne-40k.png',
  'celery seed|whole': 'images/product-images/celery-seed-whole.png',
  'chamomile flower|whole': 'images/product-images/chamomile-flower-whole.png',
  'chaste berry|whole': 'images/product-images/chaste-berry-whole.png',
  'chickweed herb|whole': 'images/product-images/chickweed-herb-cut-and-sifted.png',
  'chicory root|cut & sifted': 'images/product-images/chicory-root-cut-and-sifted.png',
  'cilantro leaf|whole': 'images/product-images/cilantro-leaf-cut-and-sifted.png',
  'cleavers herb|whole': 'images/product-images/cleavers-herb-cut-and-sifted.png',
  'clove|whole': 'images/product-images/clove-whole.png',
  'cola nut|powder': 'images/product-images/cola-nut-powder.png',
  'coltsfoot herb|whole': 'images/product-images/coltsfoot-herb-cut-and-sifted.png',
  'comfrey herb|whole': 'images/product-images/comfrey-herb-cut-and-sifted.png',
  'coriander|whole': 'images/product-images/coriander-whole.png',
  'corn silk|whole': 'images/product-images/corn-silk-cut-and-sifted.png',
  'cramp bark|cut & sifted': 'images/product-images/cramp-bark-cut-and-sifted.png',
  'cubeb berries|whole': 'images/product-images/cubeb-berries-whole.png',
  'cumin|whole': 'images/product-images/cumin-whole.png',
  'damiana herb|whole': 'images/product-images/damiana-herb-cut-and-sifted.png',
  'dandelion leaf|whole': 'images/product-images/dandelion-leaf-cut-and-sifted.png',
  'dandelion root|cut & sifted': 'images/product-images/dandelion-root-cut-and-sifted.png',
  'devils claw root|cut & sifted': 'images/product-images/devils-claw-root-cut-and-sifted.png',
  'dill seed|whole': 'images/product-images/dill-seed-whole.png',
  'echinacea angustifolia root|cut & sifted': 'images/product-images/echinacea-angustifolia-root-cut-and-sifted.png',
  'echinacea purpurea herb|whole': 'images/product-images/echinacea-purpurea-herb-cut-and-sifted.png',
  'elderberry|whole': 'images/product-images/elderberry-whole.png',
  'elderflower|whole': 'images/product-images/elderflower-whole.png',
  'elecampane root|cut & sifted': 'images/product-images/elecampane-root-cut-and-sifted.png',
  'eleuthero root|cut & sifted': 'images/product-images/eleuthero-root-cut-and-sifted.png',
  'eucalyptus leaf|whole': 'images/product-images/eucalyptus-leaf-cut-and-sifted.png',
  'eyebright herb|whole': 'images/product-images/eyebright-herb-cut-and-sifted.png',
  'fennel seed|whole': 'images/product-images/fennel-seed-whole.png',
  'fenugreek seed|whole': 'images/product-images/fenugreek-seed-whole.png',
  'feverfew herb|whole': 'images/product-images/feverfew-herb-cut-and-sifted.png',
  'fo-ti root|cut & sifted': 'images/product-images/fo-ti-root-cut-and-sifted.png',
  'galangal root|cut & sifted': 'images/product-images/galangal-root-cut-and-sifted.png',
  'garlic|powder': 'images/product-images/garlic-powder.png',
  'gentian root|cut & sifted': 'images/product-images/gentian-root-cut-and-sifted.png',
  'ginger root|cut & sifted': 'images/product-images/ginger-root-cut-and-sifted.png',
  'ginkgo biloba leaf|whole': 'images/product-images/ginkgo-biloba-leaf-cut-and-sifted.png',
  'ginseng root|cut & sifted': 'images/product-images/ginseng-root-cut-and-sifted.png',
  'globe artichoke|whole': 'images/product-images/globe-artichoke-cut-and-sifted.png',
  'goats rue herb|whole': 'images/product-images/goats-rue-herb-cut-and-sifted.png',
  'goldenseal root|powder': 'images/product-images/goldenseal-root-powder.png',
  'gotu kola herb|whole': 'images/product-images/gotu-kola-herb-cut-and-sifted.png',
  'gravel root|cut & sifted': 'images/product-images/gravel-root-cut-and-sifted.png',
  'green tea leaf|whole': 'images/product-images/green-tea-leaf-cut-and-sifted.png',
  'gymnema sylvestre|whole': 'images/product-images/gymnema-sylvestre-cut-and-sifted.png',
  'hawthorn berry|whole': 'images/product-images/hawthorn-berry-whole.png',
  'hawthorn leaf & flower|whole': 'images/product-images/hawthorn-leaf-and-flower.png',
  'hibiscus flower|whole': 'images/product-images/hibiscus-flower-whole.png',
  'holy basil leaf|whole': 'images/product-images/holy-basil-leaf-cut-and-sifted.png',
  'hops flower|whole': 'images/product-images/hops-flower-cut-and-sifted.png',
  'horehound herb|whole': 'images/product-images/horehound-herb-cut-and-sifted.png',
  'horsetail herb|whole': 'images/product-images/horsetail-herb-cut-and-sifted.png',
  'hyssop herb|whole': 'images/product-images/hyssop-herb-cut-and-sifted.png',
  'irish moss|whole': 'images/product-images/irish-moss-cut-and-sifted.png',
  'jamaican dogwood bark|cut & sifted': 'images/product-images/jamaican-dogwood-bark-cut-and-sifted.png',
  'juniper berry|whole': 'images/product-images/juniper-berry-whole.png',
  'kelp|powder': 'images/product-images/kelp-powder.png',
  'kudzu root|cut & sifted': 'images/product-images/kudzu-root-powder.png',
  'kudzu root|whole': 'images/product-images/kudzu-root-whole.png',
  'lavender flower|whole': 'images/product-images/lavender-flower-whole.png',
  'lemon grass|whole': 'images/product-images/lemon-grass-cut-and-sifted.png',
  'licorice root|cut & sifted': 'images/product-images/licorice-root-cut-and-sifted.png',
  'linden flower|whole': 'images/product-images/linden-flower-cut-and-sifted.png',
  'linden leaf & flower|whole': 'images/product-images/linden-leaf-and-flower-whole.png',
  'lions mane mushroom|powder': 'images/product-images/lions-mane-mushroom-powder.png',
  'lobelia herb|whole': 'images/product-images/lobelia-herb-cut-and-sifted.png',
  'maca root|powder': 'images/product-images/maca-root-powder.png',
  'maitake mushroom|whole': 'images/product-images/maitake-mushroom-whole.png',
  'maitake mushroom|powder': 'images/product-images/maitake-mushroom-powder.png',
  'manjistha root|powder': 'images/product-images/manjistha-root-powder.png',
  'marjoram leaf|whole': 'images/product-images/marjoram-leaf-cut-and-sifted.png',
  'marshmallow root|cut & sifted': 'images/product-images/marshmallow-root-cut-and-sifted.png',
  'meadowsweet herb|whole': 'images/product-images/meadowsweet-herb-cut-and-sifted.png',
  'milk thistle seed|whole': 'images/product-images/milk-thistle-seed-whole.png',
  'mistletoe herb|whole': 'images/product-images/mistletoe-herb-cut-and-sifted.png',
  'motherwort herb|whole': 'images/product-images/motherwort-herb-cut-and-sifted.png',
  'mugwort herb|whole': 'images/product-images/mugwort-herb-cut-and-sifted.png',
  'mullein leaf|whole': 'images/product-images/mullein-leaf-cut-and-sifted.png',
  'mustard seed black|whole': 'images/product-images/mustard-seed-black-whole.png',
  'mustard seed yellow|whole': 'images/product-images/mustard-seed-yellow-whole.png',
  'myrrh gum|cut & sifted': 'images/product-images/myrrh-gum-cut-and-sifted.png',
  'neem leaf|whole': 'images/product-images/neem-leaf-cut-and-sifted.png',
  'nettle leaf|whole': 'images/product-images/nettle-leaf-cut-and-sifted.png',
  'nutmeg|powder': 'images/product-images/nutmeg-powder.png',
  'olive leaf|whole': 'images/product-images/olive-leaf-whole.png',
  'onion flakes|cut & sifted': 'images/product-images/onion-flakes-cut-and-sifted.png',
  'oregano leaf|whole': 'images/product-images/oregano-leaf-cut-and-sifted.png',
  'oregon grape root|cut & sifted': 'images/product-images/oregon-grape-root-cut-and-sifted.png',
  'papaya leaf|whole': 'images/product-images/papaya-leaf-cut-and-sifted.png',
  'paprika|powder': 'images/product-images/paprika-powder.png',
  'parsley leaf|whole': 'images/product-images/parsley-leaf-cut-and-sifted.png',
  'passion flower herb|whole': 'images/product-images/passion-flower-herb-cut-and-sifted.png',
  'pau d arco bark|cut & sifted': 'images/product-images/pau-d-arco-bark-cut-and-sifted.png',
  'peppercorn black|whole': 'images/product-images/peppercorn-black-whole.png',
  'peppermint leaf|whole': 'images/product-images/peppermint-leaf-cut-and-sifted.png',
  'plantain herb|whole': 'images/product-images/plantain-herb-cut-and-sifted.png',
  'poppy seed|whole': 'images/product-images/poppy-seed-whole.png',
  'psyllium husk|whole': 'images/product-images/psyllium-husk-whole.png',
  'red clover herb|whole': 'images/product-images/red-clover-herb-cut-and-sifted.png',
  'red raspberry leaf|whole': 'images/product-images/red-raspberry-leaf-cut-and-sifted.png',
  'reishi mushroom|cut & sifted': 'images/product-images/reishi-mushroom-powder.png',
  'rose hip seedless|cut & sifted': 'images/product-images/rose-hip-seedless-cut-and-sifted.png',
  'rose petals|whole': 'images/product-images/rose-petals-whole.png',
  'rosemary leaf|whole': 'images/product-images/rosemary-leaf-cut-and-sifted.png',
  'sage leaf|whole': 'images/product-images/sage-leaf-cut-and-sifted.png',
  'sarsaparilla root|cut & sifted': 'images/product-images/sarsaparilla-root-cut-and-sifted.png',
  'saw palmetto berry|powder': 'images/product-images/saw-palmetto-berry-powder.png',
  'schisandra berry|whole': 'images/product-images/schisandra-berry-whole.png',
  'senna leaf|whole': 'images/product-images/senna-leaf-whole.png',
  'sheep sorrel|whole': 'images/product-images/sheep-sorrel-cut-and-sifted.png',
  'shiitake mushroom|whole': 'images/product-images/shiitake-mushroom-whole.png',
  'skullcap herb|whole': 'images/product-images/skullcap-herb-cut-and-sifted.png',
  'slippery elm bark|powder': 'images/product-images/slippery-elm-bark-powder.png',
  'spearmint leaf|whole': 'images/product-images/spearmint-leaf-cut-and-sifted.png',
  'spirulina|powder': 'images/product-images/spirulina-powder.png',
  'st. johns wort|whole': 'images/product-images/st-johns-wort-cut-and-sifted.png',
  'stevia leaf|whole': 'images/product-images/stevia-leaf-cut-and-sifted.png',
  'suma root|cut & sifted': 'images/product-images/suma-root-cut-and-sifted.png',
  'sumac berry|powder': 'images/product-images/sumac-berry-powder.png',
  'tarragon|whole': 'images/product-images/tarragon-cut-and-sifted.png',
  'thyme leaves|whole': 'images/product-images/thyme-leaves-cut-and-sifted.png',
  'triphla pwd.|powder': 'images/product-images/triphla-pwd.png',
  'tulsi leaves (holy basil)|whole': 'images/product-images/tulsi-leaves-holy-basil.png',
  'turmeric|whole': 'images/product-images/turmeric-whole.png',
  'turmeric|powder': 'images/product-images/turmeric-powder.png',
  'uva ursi leaves|whole': 'images/product-images/uva-ursi-leaves-cut-and-sifted.png',
  'valarian root|cut & sifted': 'images/product-images/valarian-root-cut-and-sifted.png',
  'vervain blue|whole': 'images/product-images/vervain-blue-cut-and-sifted.png',
  'violet herb|whole': 'images/product-images/violet-herb-cut-and-sifted.png',
  'wheat grass|powder': 'images/product-images/wheat-grass-powder.png',
  'white sage leaves|whole': 'images/product-images/white-sage-leaves-whole.png',
  'white willow bark|cut & sifted': 'images/product-images/white-willow-bark-cut-and-sifted.png',
  'wild cherry bark|cut & sifted': 'images/product-images/wild-cherry-bark-cut-and-sifted.png',
  'wild yam root|cut & sifted': 'images/product-images/wild-yam-root-cut-and-sifted.png',
  'winter green leaves|whole': 'images/product-images/winter-green-leaves-cut-and-sifted.png',
  'wormwood|whole': 'images/product-images/wormwood-cut-and-sifted.png',
  'yarrow flower|whole': 'images/product-images/yarrow-flower-cut-and-sifted.png',
  'yellow dock root|cut & sifted': 'images/product-images/yellow-dock-root-cut-and-sifted.png',
  'yerba mate green|whole': 'images/product-images/yerba-mate-green-cut-and-sifted.png',
  'yucca root|powder': 'images/product-images/yucca-root-powder.png',
};

// Title-only fallback (first image per title, used for cart drawer thumbnails)
const PRODUCT_IMAGES_BY_TITLE = (() => {
  const m = {};
  for (const [k, v] of Object.entries(PRODUCT_LOCAL_IMAGES)) {
    const t = k.split('|')[0];
    if (!m[t]) m[t] = v;
  }
  return m;
})();

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

  const FORM_LABELS = { 'Cut & Sifted': 'Cut & Sifted', 'Whole': 'Whole', 'Powder': 'Powder' };

  /* Generate HTML string for a single product card */
  function createCardHTML(product, index) {
    const formLabel = FORM_LABELS[product.form] || escapeHTML(product.form);
    const imgKey    = `${product.title.toLowerCase().trim()}|${product.form.toLowerCase().trim()}`;
    const imgUrl    = PRODUCT_LOCAL_IMAGES[imgKey];
    const initial   = escapeHTML(product.title.charAt(0).toUpperCase());
    const imgHTML = imgUrl
      ? `<img class="product-card__img" src="${escapeHTML(imgUrl)}" alt="${escapeHTML(product.title)}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="product-card__placeholder" style="display:none" aria-hidden="true">${initial}</div>`
      : `<div class="product-card__placeholder" aria-hidden="true">${initial}</div>`;

    const _ = index; // suppress unused warning

    return `
      <article class="product-card" aria-label="${escapeHTML(product.title)}">
        <div class="product-card__img-wrap">
          ${imgHTML}
          <span class="product-card__badge">${formLabel}</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__name-row">
            <h3 class="product-card__name">${escapeHTML(product.title)}</h3>
            <span class="product-card__price product-card__price--muted">Price on Request</span>
          </div>
          <hr class="product-card__divider">
          <button class="product-card__add-btn"
                  data-name="${escapeHTML(product.title)}"
                  data-price="">
            Add to Order
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
          <p class="cart-empty__msg">Your order request is empty — browse our catalogue to add products.</p>
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
      const imgUrl = PRODUCT_IMAGES_BY_TITLE[item.id];
      const initial = item.name.charAt(0).toUpperCase();
      const thumbHTML = imgUrl
        ? `<img class="cart-item__thumb" src="${escapeHTML(imgUrl)}" alt=""
                onerror="this.outerHTML='<div class=\\'cart-item__thumb-ph\\'>${initial}</div>'">`
        : `<div class="cart-item__thumb-ph" aria-hidden="true">${initial}</div>`;

      return `
        <div class="cart-item" data-id="${escapeHTML(item.id)}">
          ${thumbHTML}
          <div class="cart-item__info">
            <p class="cart-item__name">${escapeHTML(item.name)}</p>
            <p class="cart-item__unit-price">Price on Request · sold by the lb</p>
            <div class="cart-item__qty-row">
              <button class="cart-qty-btn cart-qty-minus" aria-label="Decrease quantity">−</button>
              <input class="cart-qty-input" type="number" min="1" value="${item.quantity}"
                     aria-label="Quantity in pounds">
              <span class="cart-qty-unit">lb</span>
              <button class="cart-qty-btn cart-qty-plus" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div class="cart-item__right">
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
    cartFooter.innerHTML = `
      <div class="cart-notice">
        Wholesale orders only · All items sold by the pound · Pricing provided on request.
        Our team will contact you within 1 business day with pricing and availability.
      </div>
      <button class="btn btn--primary cart-checkout-btn" id="cartCheckoutBtn">
        Submit Order Request
      </button>`;

    document.getElementById('cartCheckoutBtn').addEventListener('click', () => {
      closeDrawer();
      openModal();
    });
  }

  /* ── Render checkout form ──────────── */
  function renderCheckoutForm() {
    const tableRows = cart.map(item => {
      return `<tr>
        <td>${escapeHTML(item.name)}</td>
        <td>${item.quantity} lb</td>
        <td>Price on Request</td>
      </tr>`;
    }).join('');

    checkoutContent.innerHTML = `
      <div class="checkout-header">
        <h2 id="checkoutModalTitle">Wholesale Order Request</h2>
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
          You are submitting a wholesale order request. Our team will contact you within
          1 business day with pricing and availability. All items are sold by the pound.
        </div>

        <div class="checkout-summary">
          <p class="checkout-summary__heading">Your Order</p>
          <table class="checkout-table">
            <thead>
              <tr>
                <th>Product</th><th>Qty (lbs)</th><th>Price</th>
              </tr>
            </thead>
            <tbody>${tableRows}</tbody>
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
                Phone Number <span class="required" aria-hidden="true">*</span>
              </label>
              <input class="form-input" id="co-phone" name="phone" type="tel"
                     required autocomplete="tel" placeholder="+1 (416) 555-0123">
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
            Send Order Request
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

    // Build email body
    const itemLines = cart.map(item => {
      return `  • ${item.name}: ${item.quantity} lb — Price on Request`;
    }).join('\n');

    const emailBody =
`NEW WHOLESALE ORDER REQUEST
Premier Herbal Inc.
===========================

ORDER ITEMS (all sold by the pound)
------------------------------------
${itemLines}

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
          <h2>Thank you — your order request has been received.</h2>
          <p>
            We'll contact you within 1 business day with pricing and availability.
          </p>
          <p>
            Questions? Email us directly at
            <a href="mailto:Premierherbal99@gmail.com">Premierherbal99@gmail.com</a>.
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

  /* ── Add to Order — event delegation on grid ── */
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
        btn.textContent = 'Add to Order';
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
