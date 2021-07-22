import Product from "../models/Products";

const delivery = 30;

const PRODUCT_INFO = [
  new Product(
    "c1",
    "https://www.petcom.co.il/wp-content/uploads/2020/12/iphone-12-blue-select-2020.png",
    "Iphone 12 ",
    "The iPhone 12 and iPhone 12 Mini (stylized and marketed as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11.",
    "162 g",
    delivery,
    1000 + delivery,
    "The delivery arrived very fast and the product is excellent,"
  ),

  new Product(
    "c1",
    "https://www.kibotek.com/wp-content/uploads/2020/11/kiboTEK_poco_m3_007.png",
    "POCOM3",
    "The eight-core Qualcomm® SnapdragonTM 662 (11nm) high-frequency 2.0GHz processor AdrenoTM 610 graphics processor3rd generation AI processor",
    "162 g",
    delivery,
    300 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c1",
    "https://www.kibotek.com/wp-content/uploads/2021/03/kiboTEK_mi11_lite_008.png",
    "M11",
    "The eight-core Qualcomm® SnapdragonTM 662 (11nm) high-frequency 2.0GHz processor AdrenoTM 610 graphics processor3rd generation AI processor",
    "162 g",
    delivery,
    100 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c1",
    "https://i01.appmifile.com/webfile/globalimg/zhouyuxin/J20C-Blue-800.png",
    "pocoX3",
    "The eight-core Qualcomm® SnapdragonTM 662 (11nm) high-frequency 2.0GHz processor AdrenoTM 610 graphics processor3rd generation AI processor",
    "162 g",
    delivery,
    3333 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c2",
    "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/COH60_Z_P_7296073422594_1.png",
    "Dell Vostro",
    "14-inch laptop with an extra-thin screen frame on the sides and a battery from ExpressCharge technology and 11-core Intel Core processors",
    "162 g",
    delivery,
    1000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c2",
    "https://product-images.www8-hp.com/digmedialib/prodimg/lowres/c06239893.png",
    "HP",
    "14-inch laptop with an extra-thin screen frame on the sides and a battery from ExpressCharge technology and 11-core Intel Core processors",
    "162 g",
    delivery,
    1000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c2",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/MacBook_Air_%283rd_generation%2C_space_gray%29.png/440px-MacBook_Air_%283rd_generation%2C_space_gray%29.png",
    "MACBOOK",
    "14-inch laptop with an extra-thin screen frame on the sides and a battery from ExpressCharge technology and 11-core Intel Core processors",
    "162 g",
    delivery,
    3000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c2",
    "https://asset.msi.com/resize/image/global/product/product_2_20200309170058_5e6605ca0913a.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
    "MSI",
    "14-inch laptop with an extra-thin screen frame on the sides and a battery from ExpressCharge technology and 11-core Intel Core processors",
    "162 g",
    delivery,
    1000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c3",
    "https://truefitness.com/wp-content/uploads/2015/05/XC400-right-rear-3_4-1.png",
    "Elliptical",
    "Fitness device number one",
    "3000g",
    delivery,
    1000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c3",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/03/974006-10-Best-Affordable-Exercise-Bikes-in-2021-Schwinn-Fitness-130-Upright-Exercise-Bike-1.png?h=840",
    "Fitnessike",
    "Fitness device number one",
    "3000g",
    delivery,
    300 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c3",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/01/8911963-The-10-Best-Fitness-Trackers-for-Women-in-2021-Lintelek-Smart-Watch.png?h=840",
    "FitnessWatch",
    "Fitness device number one",
    "3000g",
    delivery,
    100 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c3",
    "https://sc04.alicdn.com/kf/H3322497e90d3417fab3066ff74581db7S.png",
    "Treadmill",
    "Fitness device number one",
    "3000g",
    delivery,
    33333 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c4",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PS4-Console-wDS4.png/1200px-PS4-Console-wDS4.png",
    "PlayStation 4",
    "Is Sony's fourth stationary gaming console. The console has been sold in the United States since November 15, 2013 and in Europe went on sale on November 29, 2013",
    "1000g",
    delivery,
    10000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c4",
    "https://konimboimages.s3.amazonaws.com/system/photos/6514389/original/62b01ab495bc7c7db8279f1d23ddbfb3.jpg",
    "PlayStation 5",
    "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio,* and an all-new generation of incredible PlayStation® games.",
    "1000g",
    delivery,
    2000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c4",
    "https://konimboimages.s3.amazonaws.com/system/photos/4501028/original/bc873a376f89e7661d5b8b4ac6c3a9a7.jpg",
    "Nintendo Switch",
    "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.[75] Although it is a hybrid console, Nintendo classifies it as a home console that you can take with you on the go.[76][77] Furthermore, the company has stated that the Switch and the Nintendo 3DS are meant to co-exist, considering the 3DS as an entry-level product for younger players.[76][78]",
    "1000g",
    delivery,
    100 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c4",
    "https://www.king-games.co.il/files/products/product1546_image3_2021-02-08_19-31-53.png",
    "Xbox One",
    "Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio,* and an all-new generation of incredible PlayStation® games.",
    "1000g",
    delivery,
    1560 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c5",
    "https://assets.products-live.ao.com/Images/1046714a-f339-4027-ab6d-68ae3bb830e3/1280x1280/ECAM25023SB_SIB_delonghi_coffeemachine_01.png",
    "Delonghi  ",
    "Produces the most delicious coffee",
    "5000g",
    delivery,
    1000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c5",
    "https://www.nespresso.com/ecom/medias/sys_master/public/10386902712350/M-0248-2000x2000.png",
    "Krups Inissia",

    "Produces the most delicious coffee",
    "5000g",
    delivery,
    300 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c5",
    "https://www.philips.com.sg/c-dam/b2c/master/experience/ho/coffee/lattego-series/philips-1200.png",
    "Philips 1200",
    "Produces the most delicious coffee",
    "5000g",
    delivery,
    100 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c5",
    "https://www.usa.philips.com/c-dam/b2c/master/experience/consistency-campaign/lattego-5400/master/philips-4300-lattego-masthead-hero-M.png",
    "Philips 4300",
    "Produces the most delicious coffee",
    "5000g",
    delivery,
    33333 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c6",
    "https://mrcro.ru/image/cache/catalog/sbs/6/780525748-holodilniki-sharp-sj-fs-97-vbk-vss-90024-260x390.png",
    "Sharp SJ-FS",
    "The most powerful product in home appliances",
    "5000g",
    delivery,
    300 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c6",
    "https://www.buy-buy.co.il/images/bo-105-1.png",
    "Ly Vent LV-S-24",
    "The most powerful product in home appliances",
    "5000g",
    delivery,
    100 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),

  new Product(
    "c6",
    "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/298874-01.png?fmt=png-alpha&scl=1&fmt=png-alpha",
    "Dyson V11 Torque Drive",
    "The most powerful product in home appliances",
    "5000g",
    delivery,
    33333 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),
  new Product(
    "c6",
    "https://www.alm.co.il/media/catalog/product/cache/50a370410f0df0591372d35f5080745f/3/4/343w.png",
    "LENCO LBI-M65VWH",
    "The most powerful product in home appliances",
    "5000g",
    delivery,
    1000 + delivery,
    "The delivery arrived very fast and the product is excellent"
  ),
];
export default PRODUCT_INFO;
