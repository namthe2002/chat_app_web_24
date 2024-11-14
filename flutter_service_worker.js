'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "05ef38410e43c37ec97e156bf5920c89",
"version.json": "dde495debe3cc0a1b15e49383182a457",
"index.html": "34cfb6b5b4f6def17f1f979c91fee2a9",
"/": "34cfb6b5b4f6def17f1f979c91fee2a9",
"firebase-messaging-sw.js": "e07b5edd7ae886a3be5e2c0c78714cc9",
"main.dart.js": "a6e9da03e7f16b33c3d1db9903c90116",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "e1657088afacd7f2a0d77702b3209dce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a08b1dceb3a191fa49b29172df0012c2",
"assets/asset/stickers/7/15.webp": "4507e0bd79287773c65b7242ab727cc9",
"assets/asset/stickers/7/5.webp": "2ed2101f34308b396672fcbaa8abdd85",
"assets/asset/stickers/7/19.webp": "f73ed07fecb426e834323cb593ac5dd1",
"assets/asset/stickers/7/9.webp": "98935a25390cea677e933dd2697ab378",
"assets/asset/stickers/7/8.webp": "c5dfa05afc99ee124673dda41a5707e2",
"assets/asset/stickers/7/18.webp": "1b874947a5104328d879873d1b130061",
"assets/asset/stickers/7/4.webp": "84f07e3bfd68d84d1fc5ed3d258f792f",
"assets/asset/stickers/7/14.webp": "21a8e2beca0efb6f1f9836a48992de53",
"assets/asset/stickers/7/13.webp": "ff30504e41ab8c76bc714c5ae8416663",
"assets/asset/stickers/7/3.webp": "1d9a088b7c963205d95deb0c5e854d47",
"assets/asset/stickers/7/2.webp": "1232a505ff8f2ba66d378a1929f61885",
"assets/asset/stickers/7/12.webp": "d381342f967f5944d372aa0fe92c2dfa",
"assets/asset/stickers/7/1.webp": "e3c3846dab22cda562bbdaaab390cb4a",
"assets/asset/stickers/7/11.webp": "3956b4b355c2732e37b8d213750cd136",
"assets/asset/stickers/7/10.webp": "8165b47ab1261540f74132111100b31f",
"assets/asset/stickers/7/7.webp": "21f1edeba95daa436094ca9c3d53d3af",
"assets/asset/stickers/7/17.webp": "2b2f36af0680463604041631ada673ae",
"assets/asset/stickers/7/20.webp": "f578988a69fbde377bcd75f742cb405e",
"assets/asset/stickers/7/1.png": "1dbdc94391643db376fa09898e39137c",
"assets/asset/stickers/7/16.webp": "4180bb88badf268dc7fe4f234e6509bc",
"assets/asset/stickers/7/6.webp": "a80318be55357644d795d27b5af61445",
"assets/asset/stickers/6/15.webp": "d8624be4fdb57918df4698bf48bab8ac",
"assets/asset/stickers/6/5.webp": "dc95f52408b84db7761c0c66e52a3bd9",
"assets/asset/stickers/6/19.webp": "c4a2ca07112ac1e61eefdf7e45050da9",
"assets/asset/stickers/6/9.webp": "3c51909fc0368eba6e0542595221fe1c",
"assets/asset/stickers/6/23.webp": "774f786279d6dd591fdb5693e5f9413c",
"assets/asset/stickers/6/22.webp": "f7b0c45911fb2f56d46901cdf4b8ec26",
"assets/asset/stickers/6/8.webp": "6ff91556735e959c395a65b149afa262",
"assets/asset/stickers/6/18.webp": "d96e1c1b2f1280bb2523cdfe1a27ec5e",
"assets/asset/stickers/6/4.webp": "2384ccbb50f3de7a888e3ffcffa697c8",
"assets/asset/stickers/6/14.webp": "738c20db76671a8a1b62774022ce9f51",
"assets/asset/stickers/6/25.webp": "a9d8da6a4116e46206f0c6843cab857d",
"assets/asset/stickers/6/13.webp": "d211fc277e2e853c75bd057aaa75b722",
"assets/asset/stickers/6/3.webp": "d7fc33a3dc822d4a78a12f4ccfd88ce9",
"assets/asset/stickers/6/29.webp": "c49d8edf7c451be463e5cf91e6cedd1f",
"assets/asset/stickers/6/28.webp": "c966847388c6448d89c7df98086e913c",
"assets/asset/stickers/6/2.webp": "03ce2b3251327e58b6890392f82189b6",
"assets/asset/stickers/6/12.webp": "be4c880cc2d9e24bed788e44f9550038",
"assets/asset/stickers/6/24.webp": "b1d33e130ccf61c2a1c4159186610ba4",
"assets/asset/stickers/6/27.webp": "43b64891f64d41705ff819dba7c3e798",
"assets/asset/stickers/6/1.webp": "7ca629ee16c0ef47c73bd3c6a3bfe0c0",
"assets/asset/stickers/6/11.webp": "f2f0048e7e012d8a7263a66081f9b8c2",
"assets/asset/stickers/6/10.webp": "3be3f902cf8fff001e20f4f48a5f876b",
"assets/asset/stickers/6/30.webp": "43be97be3fa1e86afa8c043fe3423d96",
"assets/asset/stickers/6/26.webp": "296c16d5f4a80f09868a4fc2e5604052",
"assets/asset/stickers/6/7.webp": "f30e5c99b8c365a0bbe31557535429e8",
"assets/asset/stickers/6/17.webp": "5d380975718d6800f1dc3709c3bba62b",
"assets/asset/stickers/6/21.webp": "214c40f0928df69f80b3b165eed701d8",
"assets/asset/stickers/6/20.webp": "fec1994dd2d2427cab44caae66f1b115",
"assets/asset/stickers/6/1.png": "37a23e55d8ef6c8adcefa299eb53a0aa",
"assets/asset/stickers/6/16.webp": "1f521cf964392bf10b0010a57436c451",
"assets/asset/stickers/6/6.webp": "4d64f4ed880958322220ebca90e59112",
"assets/asset/stickers/1/15.webp": "85bd9502002adcf52dfdabbb5f2dc14b",
"assets/asset/stickers/1/5.webp": "1dcb89d75c3cccc22a5c8c4c2636651e",
"assets/asset/stickers/1/19.webp": "29647e0c0caff6cfcdd06ec0596cfeec",
"assets/asset/stickers/1/9.webp": "5f8704baed4c12861c8a2d935bb393fc",
"assets/asset/stickers/1/23.webp": "ef15813384ceac2b7dea4e2cde866580",
"assets/asset/stickers/1/22.webp": "2b417189b97ee350a0b4eb676c297f83",
"assets/asset/stickers/1/8.webp": "2e7a02b5f2e4e635ac535d76fd001bce",
"assets/asset/stickers/1/18.webp": "131e5918201effc4c5aed1c45cede6f1",
"assets/asset/stickers/1/4.webp": "44651e177436afb913837b4ca67d1e1d",
"assets/asset/stickers/1/14.webp": "a2db3f41260f77df8459a57b44478871",
"assets/asset/stickers/1/13.webp": "1492af2bb59631bf6392ba17ad294db8",
"assets/asset/stickers/1/3.webp": "af17ad2cbb8ee9b50dd9794d610409ae",
"assets/asset/stickers/1/2.webp": "a3e9a142201eb92585e6552e3d49982c",
"assets/asset/stickers/1/12.webp": "31c42045023bd3855b06546b80dc4bcb",
"assets/asset/stickers/1/24.webp": "7b49c64ff5ac5bf3c96486065f56b6f4",
"assets/asset/stickers/1/1.webp": "86f2d15890dfdca77f16c3c14e8e4a3a",
"assets/asset/stickers/1/11.webp": "144910c997a089f1e816d2fde3b9f47d",
"assets/asset/stickers/1/10.webp": "1d776349ca65aa193735d51e438898ac",
"assets/asset/stickers/1/7.webp": "d771f91c00c9228ede2de052007e9b6d",
"assets/asset/stickers/1/17.webp": "059bc50fb8d286086f3637ae33a90edf",
"assets/asset/stickers/1/21.webp": "cfa48e4918b3c93bc6853fec4d1defbb",
"assets/asset/stickers/1/20.webp": "5da12c6d341e0a2492844595bea6298a",
"assets/asset/stickers/1/1.png": "6b0297678ceab8080ea7f0ec816b7e8f",
"assets/asset/stickers/1/16.webp": "1f11eb13e82499f7e2292da595f26070",
"assets/asset/stickers/1/6.webp": "90c2f9d4ae674245f66ed9d7a5f50c70",
"assets/asset/stickers/4/15.webp": "aa49538b109972d3f0aa6493e012f7e6",
"assets/asset/stickers/4/5.webp": "ac636cc3c05cb16da45d2fd21bfe9219",
"assets/asset/stickers/4/19.webp": "205618c25f1ed1c0723ec9b2954ae543",
"assets/asset/stickers/4/9.webp": "e54ca5dfdcbe80611ab6e47a81991427",
"assets/asset/stickers/4/23.webp": "2874dbbe4fd26dacf0a439c914f66085",
"assets/asset/stickers/4/22.webp": "6df920127c639637827cf6ba0e30c5ea",
"assets/asset/stickers/4/8.webp": "ba49c3326b62fc6147a3a0f0cb2979f7",
"assets/asset/stickers/4/18.webp": "3a9df72a185a87c765de5e5e33fe9c5f",
"assets/asset/stickers/4/4.webp": "4ee23304e6c2994fb048fba2a6242620",
"assets/asset/stickers/4/14.webp": "33c1df96a643b563455514e4d59d7026",
"assets/asset/stickers/4/25.webp": "7483b5ec8514a25dd4a30295d85fed3f",
"assets/asset/stickers/4/13.webp": "b87a3504e6a7bcb20b2b734cc95209ad",
"assets/asset/stickers/4/3.webp": "5226ebadb9aa441a1e17d8fe23dc1c88",
"assets/asset/stickers/4/29.webp": "fd02ec29405e8a66de7179dfc8fc7943",
"assets/asset/stickers/4/28.webp": "ef21380c314098dbca2ba6f8377c756b",
"assets/asset/stickers/4/2.webp": "d5361e2fc54a788141e4e7d396adfdd4",
"assets/asset/stickers/4/12.webp": "b0d2734273b6c93f6130ec3412a32056",
"assets/asset/stickers/4/24.webp": "094eaa30d462af53c281aa0dd5e5ade9",
"assets/asset/stickers/4/27.webp": "470aaac4e71602e498a0ba2f2e3f8bbd",
"assets/asset/stickers/4/1.webp": "5cb76b4b4cc89702cb63864f937ba843",
"assets/asset/stickers/4/11.webp": "e3c3a1f3468efbc25ac273f8fd4e3297",
"assets/asset/stickers/4/10.webp": "a644f81137d14e66407052b071deb4fc",
"assets/asset/stickers/4/30.webp": "54372058502c8e744baabec2922b8835",
"assets/asset/stickers/4/26.webp": "9ea6377400a70427addcb931da6b4313",
"assets/asset/stickers/4/7.webp": "3d06307201e11b88a5d49893ef596516",
"assets/asset/stickers/4/17.webp": "245de6d64abdded1845c84a93521c146",
"assets/asset/stickers/4/21.webp": "b70ead78f22cf511be28f3763db8a0ad",
"assets/asset/stickers/4/20.webp": "b2e9997aa1822055302022e7d1ae97a8",
"assets/asset/stickers/4/1.png": "7d2d498155289984644839e004a2c9b2",
"assets/asset/stickers/4/16.webp": "07fc8974beba6feb5383a57672d2348a",
"assets/asset/stickers/4/6.webp": "96074e53d7c9046815d9629ae5322ff1",
"assets/asset/stickers/3/15.webp": "9a642ea96b5730da8d353c81a7ad1cf8",
"assets/asset/stickers/3/5.webp": "52554d66dcf082666a1cd1e984e769f6",
"assets/asset/stickers/3/19.webp": "ec26ddcbe5c3a71061efac72f72dd308",
"assets/asset/stickers/3/9.webp": "8cfa99f91e44aa057b658e3caae5eaff",
"assets/asset/stickers/3/23.webp": "81a3e1acaf3f4221658cb72a4731bef9",
"assets/asset/stickers/3/22.webp": "372492ba6c48954ced0ad090b55c5990",
"assets/asset/stickers/3/8.webp": "17e9635722bf00a2d43a8601cd330261",
"assets/asset/stickers/3/18.webp": "5d9d6763cd3aeb2e7e2c6b056866e5b5",
"assets/asset/stickers/3/4.webp": "201de122dd5b26032df07fd5316185d7",
"assets/asset/stickers/3/14.webp": "f77cbfd1dad172c3bfad0e6ad37b5830",
"assets/asset/stickers/3/25.webp": "f3ac35d2c6257150bdb471c10cc31d85",
"assets/asset/stickers/3/13.webp": "2cbec055bd91365e5648c6e24e537ddc",
"assets/asset/stickers/3/3.webp": "8089c0e60a37230e56f5d62e74485a44",
"assets/asset/stickers/3/29.webp": "e4ebb39fc24048bab428551e9822b71e",
"assets/asset/stickers/3/28.webp": "5b2865cbfa05838582ff9fdce4774eaa",
"assets/asset/stickers/3/2.webp": "cbf6c51f3bd6cbc419331f9bcf3637b3",
"assets/asset/stickers/3/12.webp": "b97104ecf114fd615a339a3e600556dc",
"assets/asset/stickers/3/24.webp": "33278ecdfbb7d9e4d20fa671d2384ad9",
"assets/asset/stickers/3/27.webp": "4bd57e043db521c50c428804f98f110c",
"assets/asset/stickers/3/1.webp": "09bf700d5bca1f1d81832b18540c4c6b",
"assets/asset/stickers/3/11.webp": "50d541b84f825cf99511eb8f498ea745",
"assets/asset/stickers/3/10.webp": "ec28caddc0ce1ca8b37fd3e65da5349b",
"assets/asset/stickers/3/30.webp": "281ee1da705923ae9a0f2a25e5c9a247",
"assets/asset/stickers/3/26.webp": "a57ff9a07b6178e1ed5724ee4cd07bc4",
"assets/asset/stickers/3/7.webp": "495da2e334bbb0962404ed1406b1bec0",
"assets/asset/stickers/3/17.webp": "8c734e7ccabb45fb52df8c13e947f764",
"assets/asset/stickers/3/21.webp": "eafef563767b0a18f119ae45ee8aa8f9",
"assets/asset/stickers/3/20.webp": "815b9cb44d1f6e9d8ee0262772d33956",
"assets/asset/stickers/3/1.png": "5c96c02318e721a7c103e4de5b67bd44",
"assets/asset/stickers/3/16.webp": "4d7c6b36564d0c6273e76e29b21f1c0a",
"assets/asset/stickers/3/6.webp": "0bd72539feb86b6d07cc07c3c202b1cb",
"assets/asset/stickers/2/15.webp": "e10d11f55fd9f72db822d74f164c4c1e",
"assets/asset/stickers/2/5.webp": "b62e8496064ef27df36f00204245cbd5",
"assets/asset/stickers/2/19.webp": "b925ae3aaa8ec4dd8f97ebdcbbd87b55",
"assets/asset/stickers/2/9.webp": "6426ee378b471ef02e69d871ef7f7efb",
"assets/asset/stickers/2/23.webp": "05d8f9d412d6f06179721be41668c1ed",
"assets/asset/stickers/2/22.webp": "f633b611d62cb3869388d1eef72e2a0c",
"assets/asset/stickers/2/8.webp": "80a50fd68e7c86ccd4a57079cccb92c9",
"assets/asset/stickers/2/18.webp": "c6197ee2207628a10aed4a67462ab8af",
"assets/asset/stickers/2/4.webp": "ea8564355312d0718dff6882e99f982b",
"assets/asset/stickers/2/14.webp": "bfde4cafac9877811cdcf6a6b7a990c0",
"assets/asset/stickers/2/25.webp": "13d241ff145573878d581966475085ce",
"assets/asset/stickers/2/13.webp": "799be63eed26243525313e0587ff9430",
"assets/asset/stickers/2/3.webp": "b00e276c0c3ce63e2780b31050e70363",
"assets/asset/stickers/2/2.webp": "a1a950bfd141e6c1623dcc01c9b6372c",
"assets/asset/stickers/2/12.webp": "eecbd51efd26d93a542d07b9fa7f6366",
"assets/asset/stickers/2/24.webp": "b4c82b53e7de9581242fa237179e4274",
"assets/asset/stickers/2/1.webp": "091b1bb913bf8da86fd4522920dbb91c",
"assets/asset/stickers/2/11.webp": "e327f59a6bebf4bef3665360b2ace8ab",
"assets/asset/stickers/2/10.webp": "a007a2541bdc8806758b5a9bc4bdba1d",
"assets/asset/stickers/2/26.webp": "037e6a2f4c02f2efbc7e36d6d4a6ccdc",
"assets/asset/stickers/2/7.webp": "39a4bcc2a83d514a20fb984f04cf77b1",
"assets/asset/stickers/2/17.webp": "81be34a5a900223e039cc53287b6826a",
"assets/asset/stickers/2/21.webp": "de87c9bec8529018f058c2b53db34ee6",
"assets/asset/stickers/2/20.webp": "705789736c2403013967b0b91bdbe4d7",
"assets/asset/stickers/2/1.png": "6236b600d89fe26257ce8355eb372b76",
"assets/asset/stickers/2/16.webp": "ccc124ff6cf502ca418f06128a7cc30c",
"assets/asset/stickers/2/6.webp": "1b3ea8924c8f81c4b2bb5ad65d40db11",
"assets/asset/stickers/5/15.webp": "a671c158a2a46bc861869f6b06b64aa1",
"assets/asset/stickers/5/5.webp": "4dd714f6885446b25c2ce7108c30e2dd",
"assets/asset/stickers/5/19.webp": "17ba8fc69bd0cb1d198e3f3db3abc649",
"assets/asset/stickers/5/9.webp": "11ec4e7abc050a12560bec9203ea6901",
"assets/asset/stickers/5/23.webp": "4e1def38f0a458bad39072a325dd8a95",
"assets/asset/stickers/5/22.webp": "04a80f9b697ce80c228cb21eba24f3d9",
"assets/asset/stickers/5/8.webp": "30297c4df07c54cb1ab9601c7e91e9b4",
"assets/asset/stickers/5/18.webp": "aeb1648c066bcdd3274109b7a522e631",
"assets/asset/stickers/5/4.webp": "b35ca5ae9f2326b289907669594a71f8",
"assets/asset/stickers/5/14.webp": "590808f0a54fc83f455c66d3d2b3257d",
"assets/asset/stickers/5/25.webp": "13e95ce76e55a3be4d30c1cbb7e5bc9c",
"assets/asset/stickers/5/13.webp": "2051e192a0c9317c7a358b2e1ce76c71",
"assets/asset/stickers/5/3.webp": "df7df790b77179344946417e86533bc8",
"assets/asset/stickers/5/29.webp": "becf711228b989aef5d5c49556d3f783",
"assets/asset/stickers/5/28.webp": "15deccb0811af692f17f73ca79c1a6b8",
"assets/asset/stickers/5/2.webp": "20eae218f532c5352662ac3d41ed74f9",
"assets/asset/stickers/5/12.webp": "44d35abb9ac929fbdbb6862f76777de5",
"assets/asset/stickers/5/24.webp": "0737d69a29f1503f71ab0f2a2568fa89",
"assets/asset/stickers/5/27.webp": "b4e7514c99d790213ce1db38dcf8260a",
"assets/asset/stickers/5/1.webp": "804c3be642567080b1e0863099842426",
"assets/asset/stickers/5/11.webp": "2a39ebd16b4200758ad4bb0107e16981",
"assets/asset/stickers/5/10.webp": "fe43fe777f5673bf27765c17976829db",
"assets/asset/stickers/5/30.webp": "358129e7cfeb23690334b28f3c6e13aa",
"assets/asset/stickers/5/26.webp": "188a1351e2d812b1a789688245c59aba",
"assets/asset/stickers/5/7.webp": "4a0ad58eda8e747d48c1cf15119197c4",
"assets/asset/stickers/5/17.webp": "1db2bd5c4470c05378a1beeb01332d52",
"assets/asset/stickers/5/21.webp": "0cdc620c444ae2700df884ae3e2ea9e6",
"assets/asset/stickers/5/20.webp": "d7ae4fe043a06044c174bd69c3527dd1",
"assets/asset/stickers/5/1.png": "d05878605b625b2e405efe512ee1eaf9",
"assets/asset/stickers/5/16.webp": "9d18597b261f84f9d9c88b0e1c0f1354",
"assets/asset/stickers/5/6.webp": "b49e6f1d12fc195d23c44b541b18863e",
"assets/asset/images/light_mode.svg": "833d222dbd2c54bb06c58d3b6f5a517a",
"assets/asset/images/empty_chat_detail.svg": "608c22046b116e33e504508cc976322d",
"assets/asset/images/ic_home_chat.png": "d67ddb6b442584ed03cac17a6b2af66e",
"assets/asset/images/screen_call.png": "905b2b982ef18ea814710549b7429add",
"assets/asset/images/img_theme_login.png": "244605561834d439a43338b119944179",
"assets/asset/images/gg_service_account.json": "853f29281a49341b3058a22f9742105f",
"assets/asset/images/ic_notification.png": "018f917ffabe984225fae3dcd602268e",
"assets/asset/images/bg_light.png": "6fee2b96453bb7392296c55f3d2838d0",
"assets/asset/images/ic_language.png": "8b26b8c99eb7311518938bd87db55733",
"assets/asset/images/img_defaut_avatar.png": "dd88c3ccbd9f296fb0ac92af35b20821",
"assets/asset/images/ic_ud_profile.png": "8a34f739a635c13a53d7f56686b2301e",
"assets/asset/images/dark_mode.svg": "adca0c4f70e50e951590c9a3c646e6cf",
"assets/asset/images/empty_chat_darkmode.png": "52db3c5b6327ed4930f2ca4c0f61665c",
"assets/asset/images/ic_log_out.png": "be2de24acdfe7d737a57b297f1a74e7f",
"assets/asset/images/no_member_locked.png": "839ddace482fa5987ebe045d0815107e",
"assets/asset/images/bg_dark.png": "fdf88df24870ab14f5a417c949a70fd1",
"assets/asset/images/listchat_empty.png": "9f0e8a6c003590238f70c008dccb6a56",
"assets/asset/images/default.svg": "ebd1e8761e23b9b157b80705670a00bf",
"assets/asset/images/empty_chat_lightmode.png": "9daad1ac8b1daca7cb98d65cffdfa9c8",
"assets/asset/images/Logo.png": "97b08b7f7c808588c827825dafb25625",
"assets/asset/images/ic_contact.png": "581c98352fdd248c25f5aeb0fac4af0f",
"assets/asset/images/img_empty_message.png": "8d2c8306d8103ca738030a3e86c2ca29",
"assets/asset/images/img_embedded_qr.png": "5ed8f04085944d45d1894317e2e00d43",
"assets/asset/images/ic_friend_request.png": "7f38fbb6f54da873473255d1940509f5",
"assets/asset/images/ic_night_mode.png": "46991da2f5791e49941529ba655ec7ac",
"assets/asset/images/auto_mode.svg": "fc18c0cb33ecc000c570c5763320767d",
"assets/asset/images/pattern_light.svg": "a0ba2b03dd8f68c689b73dcf276471e3",
"assets/asset/images/ic_active_session.png": "5a9c1977e2d871095f53d601d2ebec2a",
"assets/asset/images/logo.svg": "ee9a3610861203e9f91c321613e90f93",
"assets/asset/images/ic_account_avatar.png": "ba53e492e346383fbe007c2c1145ed36",
"assets/asset/images/ic_chat_setting.png": "72faef7f6d7819738bc46a04536c10bd",
"assets/asset/images/no_result.png": "ee0450739df63ed653ac3f0a00b6b2c8",
"assets/asset/json/importing.json": "bfdd8b7df7e7b9ed5912b3b0035a5506",
"assets/asset/icons/Smiling%2520face%2520with%2520sunglasses.png": "7b4fc55176eb20954189e36a3ec98d24",
"assets/asset/icons/search.svg": "b14ef7567dfa63aee15dbdb496697c6b",
"assets/asset/icons/like.svg": "7d0ceaa2e5ab4c7fcab60feb66c518f9",
"assets/asset/icons/draw_7.svg": "9639e7f53d79cd5050bcdf5768b731ca",
"assets/asset/icons/smiling_face_with_sunglasses.svg": "51a6530ee635b7baec772356015f343a",
"assets/asset/icons/out_going_call.svg": "4268fa1840ba53bbd60c21e3637e0c42",
"assets/asset/icons/draw_6.svg": "c64078f795cf09fbf617bbbbd1fc2671",
"assets/asset/icons/txt.svg": "a50b07ab5406e7707fa18f4c06ca38ac",
"assets/asset/icons/flag_vietnam.svg": "e9cb27bac552ba71633e702e29c0c81e",
"assets/asset/icons/Camera_fill.svg": "9a965d4d4a130724f0cba79db99abb96",
"assets/asset/icons/checked.svg": "808e24570936ffce3a116d15364965c8",
"assets/asset/icons/flag_china.svg": "8867eebdbdd3799b4e98ab33df4c42fb",
"assets/asset/icons/reply.svg": "555b7d82a21d6f171d89caa8930c387a",
"assets/asset/icons/draw_4.svg": "4fd5d895f6924c40760249626de2e651",
"assets/asset/icons/no_peding.svg": "e24f91b96ed0355de2098d3e743a36c8",
"assets/asset/icons/translate.svg": "455da7068b7551dbcba16a3cee8ed212",
"assets/asset/icons/docx.svg": "faab72943bd0950a04858f0414a463a2",
"assets/asset/icons/flag_english.svg": "a1884ec2dabef417617183656db167b9",
"assets/asset/icons/draw_5.svg": "7a993457f86e8cccf69dcbb5420f80ef",
"assets/asset/icons/copy_dialog.svg": "2a38839d5b9e24a0d95b7265ad65e38f",
"assets/asset/icons/ic_notification.png": "e59bb383d238806555352e09a8585bff",
"assets/asset/icons/draw_1.svg": "378602d31531d5405606a9aeee561f0c",
"assets/asset/icons/ic_new_message.svg": "17163c9700615641066cb00981c82114",
"assets/asset/icons/hidden.svg": "734b82bb7569b90261475b16d52661af",
"assets/asset/icons/vector.svg": "b11eaeacb35339362502f52e613418ea",
"assets/asset/icons/pdfx.svg": "fcd8f19ffa1aa9f0ecfb1f4db203d1bd",
"assets/asset/icons/lucide_link.svg": "6a5b9251f71aa6aa2fece2325ca2d2fc",
"assets/asset/icons/draw_2.svg": "e111b9e4506b49e998237a3c8ed3fe9a",
"assets/asset/icons/file.svg": "01a2ec23a145f280e347a6f8519461c5",
"assets/asset/icons/Fire.png": "f6511141bc2157edc37479b04bd6d4e9",
"assets/asset/icons/clear.svg": "927d9afdf73a68831d444f1339152684",
"assets/asset/icons/select_image.svg": "f3c60220963625da61caf33dd5f9485b",
"assets/asset/icons/draw_3.svg": "e3bb0cfae9a77afe6ac05372e4b35eeb",
"assets/asset/icons/three_dot_vertical.svg": "edec7238863948db7169ba8e7d08eb4a",
"assets/asset/icons/leave_group.svg": "6b2421144dbf284174d71c821692d248",
"assets/asset/icons/fire.svg": "3a157ee1f9c21990a9c4a2ed825f0866",
"assets/asset/icons/un_pin.svg": "99946cc9e2ad0121de7c7bbe46204128",
"assets/asset/icons/pin_note.svg": "54b33481f25b353f6de2733639de568a",
"assets/asset/icons/no_accout.svg": "7df66c062cfc29eec1b0247b63ff9c75",
"assets/asset/icons/group_add.svg": "99529e4282f91717055f167a66e6b94a",
"assets/asset/icons/return.svg": "1f7ce1536e54899ea875c11eba6f5ea6",
"assets/asset/icons/download.svg": "ccf8675b6d24d09cc4a9c679585ad56a",
"assets/asset/icons/pin.svg": "bc46f006f6a155340df1ede5c06941a9",
"assets/asset/icons/thumbs_up.png": "f9cfb9c00e00c3b9be8c012fd941b6ce",
"assets/asset/icons/unmute.svg": "7468a0e69c0de01fb04e8c955759f2f5",
"assets/asset/icons/Thumbs%2520up.png": "f42c513e49ed292ca45e2eb190013b33",
"assets/asset/icons/smiling_face_with_sunglasses.png": "72b73effc6c38adffaa2c34e2c56759c",
"assets/asset/icons/Smiling%2520face%2520with%2520heart-eyes.png": "06b5bd92741ec6ab5ea7801ecae3845b",
"assets/asset/icons/close.svg": "0b0918e33071c8aa7231c7059da904c7",
"assets/asset/icons/lock_message.svg": "b65927ff4b8da4711226b6e565c08de8",
"assets/asset/icons/Heart.png": "ae6a1eb9ea8cf1d2a623dbc8d32d7428",
"assets/asset/icons/mic.svg": "74844990925a09738951d19b90852e03",
"assets/asset/icons/copy.svg": "6abeb2bde9ef238394bc3cab50f5c9fe",
"assets/asset/icons/image.svg": "8b4b395875f3c0fe5a5f15742f0c2c22",
"assets/asset/icons/xlsm.svg": "8063ec7a21501dde44f206325dc7aabe",
"assets/asset/icons/Loudly%2520crying%2520face.png": "1903d12f265f347932b3f4576d36cbf2",
"assets/asset/icons/doneall.svg": "2571b13b223e2f1c07a55712e663a917",
"assets/asset/icons/back.svg": "5525c99e48b4d9d65b7c53ed623915c8",
"assets/asset/icons/smiling_face_with_heart_eyes.png": "f7c879f844fd614b944e5677a96dbf74",
"assets/asset/icons/no_friend.svg": "075945ec93b6259a15147866d7bf3d83",
"assets/asset/icons/forward_chat.svg": "e08dcfe0ab6dd7b575ecfc79fb02454c",
"assets/asset/icons/Face%2520with%2520tears%2520of%2520joy.png": "c5c9d3e201094d7ae50e4ea146c02e83",
"assets/asset/icons/speaker.svg": "9a8fb40739942f703e57893ea8a6bf52",
"assets/asset/icons/camera.svg": "27ee6316315c0a4673c4f4022ae3c235",
"assets/asset/icons/mute.svg": "0423c5e1d7a7a23c5c61eb07f5a9df6d",
"assets/asset/icons/trash.svg": "0afc26ea4650db3c0f4289790aa8ddce",
"assets/asset/icons/face_with_tears_of_joy.png": "b1545db45bb5ac4c64518a1b43850e4a",
"assets/asset/icons/misscall.svg": "852370bb2364d54f179531e8c495798f",
"assets/asset/icons/edit.svg": "0062fdc278dc758fe7360f1bb913863a",
"assets/asset/icons/checkbox.svg": "7d5eb0d7233063bab4e13f5e31c5063a",
"assets/asset/icons/eye_login.svg": "e895a051743e4ee7f825065d30c11a64",
"assets/asset/icons/errorUserName.svg": "4199f6fd5cb1db706b95c254f627bbf8",
"assets/asset/icons/loudly_crying_face.png": "d393cd2b0bb571741e1bafa5c9f742cf",
"assets/asset/icons/video_pick.svg": "a385929763918535ba48bf69a261ba4e",
"assets/asset/icons/auto_delete.svg": "05fee35a078521b1a284bbcc25e0acc7",
"assets/asset/icons/no_results.svg": "8d17855563894b0864006ebdee975754",
"assets/asset/icons/call_again.svg": "4da419dddfc5a01081fc70dbf7ac784b",
"assets/asset/icons/delete.svg": "0e61b4491a71274558549650f72fe997",
"assets/asset/icons/loudly_crying_face.svg": "326df10372d62efbf7fa271fb0f1c519",
"assets/asset/icons/multiple_select.svg": "dcd39f92353f00d5860b569b79f0395d",
"assets/asset/icons/ic_new_group.svg": "2acdea1dd45517f77539f5212c79a152",
"assets/asset/icons/call.svg": "be3b89dce9d01eaee2baf6aad9c62600",
"assets/asset/icons/pin2.svg": "3ccfe9beb9dc497e903694c4b7dd8274",
"assets/asset/icons/ic_warning.png": "240f88e962f080ee4496d3d831142e38",
"assets/asset/icons/file_picker.svg": "2ab9f048c214280147b84394f7b0e1f8",
"assets/asset/icons/face_with_tears_of_joy.svg": "5bcaa5b641c8aaab84ee9a36d2ede58e",
"assets/asset/icons/arrow-left.svg": "35ae8d45642e56b928373d397518740b",
"assets/asset/icons/add_chat.svg": "83a1997e4b7d58d89dfc0abfec43962f",
"assets/asset/icons/three_dot_horizontal.svg": "9be3a66daef2174b5c1f47bcb44a0673",
"assets/asset/icons/add_member.svg": "cc4fa3d4077fe1c5b38a2605c62cd9d1",
"assets/asset/icons/end_phone.svg": "3c55f3b80be042aa049e0dce72bdaf42",
"assets/asset/icons/draw_8.svg": "8ffa2faad7ad88f9a88f676d0e3373c1",
"assets/asset/icons/forward.svg": "a9f3d7585b643209acd2ab9eea08fee7",
"assets/asset/icons/smiling_face_with_heart_eyes.svg": "10210b4e9ee524b6b41e916176627a04",
"assets/asset/icons/ic_tick_circle.png": "e8860e91e67678fc29dd10cf372c0925",
"assets/asset/icons/clear_history.svg": "5678dc96c20407ddef1a77a65f4c0615",
"assets/asset/icons/heart.svg": "5985bd1868f287348d90b5c0b0392177",
"assets/asset/fonts/NotoColorEmoji.ttf": "aca215e01cbbe3a587de8555269b9233",
"assets/AssetManifest.json": "0b5ad0e4544acf6d825ac422345e4829",
"assets/NOTICES": "065beea21c7f947d71de67ae799d0b33",
"assets/FontManifest.json": "c61e6d2432eb11f7fe27ccd598f0dc7b",
"assets/AssetManifest.bin.json": "01737b8d41749a3b9a98df2fa532fdef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "81f6241f3a471e73da6a5d5d5aedbd19",
"assets/fonts/MaterialIcons-Regular.otf": "6eb759115a2353d4827374a309d572a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
