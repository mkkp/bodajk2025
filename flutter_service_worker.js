'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_34.part.js": "b8822f2835b61c385cef10e7d005f365",
"main.dart.js_228.part.js": "74c55e7f9cf89d06346240404b9d1fee",
"main.dart.js_30.part.js": "c34548ef101c4aee976d390dcf933989",
"main.dart.js_201.part.js": "4eb64e155a27dea6f8091861b161d4ec",
"main.dart.js_127.part.js": "e17625750c40be7fe54b91f323b3b5bd",
"main.dart.js_98.part.js": "c469abf98d277021f9e6aae80c502771",
"main.dart.js_17.part.js": "3b27759ab8fbecc369ab174b620c14be",
"main.dart.js_302.part.js": "8bd509396fe1e863edc70f42c431ff67",
"main.dart.js_309.part.js": "521a9340e2ae29371d94f170ff26a1dd",
"main.dart.js_74.part.js": "11b987084ba45d5f4cc7c901fa233921",
"main.dart.js_50.part.js": "0ec1abec7b0d41c1ced546479668f044",
"main.dart.js_51.part.js": "8cfed58a231bf92f93ccfb5832e28618",
"main.dart.js_108.part.js": "c5effed04eec7f1e511f407182a53ac1",
"main.dart.js_44.part.js": "90348f66e007b8303ceff4c0c2b51ae4",
"main.dart.js_281.part.js": "7a1a65803bfd16be7a456bef867b2adb",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"main.dart.js_47.part.js": "09babe35c034ec44c5aec6c8bc1f0c90",
"main.dart.js_45.part.js": "88e6b17f967cc23f9cdf4fbafb995249",
"favicon.ico": "17b33863654ecc54cddeece199c4ee97",
"main.dart.js_61.part.js": "eb56f0d98668a757f0ddc88fd14e830b",
"main.dart.js_33.part.js": "406d20dab4d3d01efa3d3dac997218cf",
"apple-app-site-association": "5d0cb8d98f5b14c8f8dc17faeadcfbe7",
"main.dart.js_125.part.js": "2fa7af383363279b7d189e426df308cc",
"main.dart.js_160.part.js": "960fcd71fbd582fbc67d19c8c6ec23c2",
"main.dart.js_143.part.js": "80c44c7c654c335ebe2168460f27f809",
"main.dart.js_164.part.js": "d19de3ab392784f871bbc6203f35a44b",
"main.dart.js_295.part.js": "79ac8fdefda356e7455ad4e4013c9fb5",
"main.dart.js_114.part.js": "011b21990360520afe95c98f7ef276e1",
"main.dart.js_64.part.js": "05c49da700983af48306bac563275e88",
"main.dart.js_138.part.js": "089e0bb94655f7ee2921467f73186d14",
"main.dart.js_192.part.js": "39a4f520967e9d0e4cbe140a89726b43",
"main.dart.js_305.part.js": "384ceef639bbc86ff393ddc769123f51",
"main.dart.js_168.part.js": "bf1c51535812e9d279b5565329edc3d8",
"main.dart.js_182.part.js": "971b0b79f05e6a276691220864d9f546",
"main.dart.js_132.part.js": "c1cb2fc2368d15bd09da9f443f8e7df3",
"main.dart.js_242.part.js": "ec57e162a819e91fe5147b419c9e9413",
"main.dart.js_82.part.js": "a922508f5c9301ce0e3636b329a15ba0",
"main.dart.js_144.part.js": "d4dce27c37d773716b84d90577b08ad9",
"main.dart.js_243.part.js": "aab28d09d3f12b09e63429252c4fbcf2",
"main.dart.js_175.part.js": "e1af2e2a563613ed56ae3abc8bac42d9",
"main.dart.js_287.part.js": "c0b37ed281695788e7e72951eda6e95a",
"main.dart.js_194.part.js": "2b025d8a2429639304a43272a14f2e55",
"main.dart.js_278.part.js": "075ea0a45a8f0120924c762c1750e0dd",
"site.webmanifest": "dfbc43c7d1af93706386a2b21957a031",
"main.dart.js_130.part.js": "38879d2e8944c1baab87fd822bed2382",
"main.dart.js_288.part.js": "4db282980be84635dcaf66c66181a139",
"main.dart.js_53.part.js": "a258bdb59adca26be1897140a3956572",
"main.dart.js_217.part.js": "381740f802f8d8634c6c98cbc44d26a1",
"main.dart.js_231.part.js": "4aceebe024eeab8ab3ee7061956ee4b4",
"main.dart.js_55.part.js": "74133b006e1e6601f01f685a1f81c280",
"main.dart.js_32.part.js": "5c18c130a8cbf2fd6c3f143ab100be5b",
"main.dart.js_163.part.js": "3404bf79132a4a1ae44ecce9721de97d",
"main.dart.js_49.part.js": "86c6007989e409811064ba138946005e",
"main.dart.js_129.part.js": "70db44b414f867d7401383a58d36c7d4",
"main.dart.js_298.part.js": "d276a3f07d4708368ff52cb1d6347898",
"main.dart.js_77.part.js": "7a24ecc474dd5f232528b80d484a3da0",
"main.dart.js_190.part.js": "63088a1e6ffbf7b6e4ad4293f8bda1bd",
"main.dart.js_259.part.js": "42dd2492fe77367c0d0f918f4497f294",
"main.dart.js_307.part.js": "ac5114dab82d83075eac27f5c2218eec",
"main.dart.js_262.part.js": "0987de91d238748e33c6b5bf1f6f7e27",
"main.dart.js_31.part.js": "700cfa0fad214e8708ea1d6154b91eb9",
"main.dart.js_209.part.js": "a6deefd9630aefcf8e3c3649d576ebcd",
"main.dart.js_141.part.js": "afc0008948e79700ebb04ded7708ce34",
"main.dart.js_187.part.js": "c248ee360fa828d4fad9c3677447081d",
"main.dart.js_100.part.js": "df1f49875fcdfca6555cb365a8964ef9",
"main.dart.js_252.part.js": "55890aef006949e6c57086599576bb93",
"main.dart.js_35.part.js": "5149a300ae6324d3c960b4a6be9cac92",
"main.dart.js_177.part.js": "e1cdf322a8dd6bc34a6b7d669701d951",
"main.dart.js_7.part.js": "f15fd39732dd25663cb714672ce9b4fb",
"main.dart.js_184.part.js": "459753c0f5a2c67de7ecddfd060f8b37",
"main.dart.js_223.part.js": "f256e32fb5b3346cc2d0c79c22f404de",
"main.dart.js_227.part.js": "d8a55ec32a1023db2586aafaca1c1a99",
"main.dart.js_87.part.js": "233e68b995c0dd290c18410c2e11a9ee",
"main.dart.js_178.part.js": "abbe7bd59e1c9687d27f54ddbac660c2",
"main.dart.js_70.part.js": "67b3f63fae2a5d6744291d6f76c5f0e8",
"main.dart.js_3.part.js": "30753d151fb4b5d6d863bf82f9d47868",
"main.dart.js_20.part.js": "4a7e3151fdcdaa6163f163a61d894ab3",
"main.dart.js_172.part.js": "bd6e56307f6d4ce52ec2d573adee8e5c",
"main.dart.js_13.part.js": "b3000126629d31ee07e04b66af89d5d9",
"main.dart.js_38.part.js": "48776ed9c427a5ae3c7df156b1f16dc1",
"main.dart.js_299.part.js": "e36b0f89a07a867f7e5d310cb77be443",
"main.dart.js_4.part.js": "3e7ebd41dda7fefb20bd55bfede3a21e",
"main.dart.js_92.part.js": "ef3b3f68f54a6b2f69cd3310eb3478b2",
"main.dart.js_106.part.js": "de4f6200ab07d9d0ec90a2c1adbf63d5",
"main.dart.js_279.part.js": "faab5a511f5124f4e85f68f8baa3512c",
"main.dart.js_16.part.js": "5ad7a8ad044297c8866aed2e88abb902",
"main.dart.js_199.part.js": "42a23b058ad919e90c526d0b044ca0da",
"main.dart.js_79.part.js": "1264083564ba1c9aba720e0326e4bcce",
"main.dart.js_183.part.js": "a14695d1cfd351ee2897f4cd46782720",
"apple-touch-icon.png": "8dc20d1fcd5cc3414afad6603d0a31ab",
"main.dart.js_121.part.js": "1481caa12ecf73728cf7407597db843e",
"main.dart.js_185.part.js": "a4e4328f74096314f246c4c7971ab936",
"main.dart.js_286.part.js": "a0aaf8788e5f5d366318277e3724cc79",
"main.dart.js_40.part.js": "e9be5fc8dd75535b3031b2a591c73ee2",
"main.dart.js_263.part.js": "45d677405f40b369e5d8c086dffb7b14",
"main.dart.js_241.part.js": "182d2d105f1cc6ac10931ef60c4e11ca",
"main.dart.js_56.part.js": "213ce41d1f03f9b7d5ef9c77a9647bb5",
"main.dart.js_15.part.js": "60d2a074a397965d6256627ae41bd370",
"main.dart.js_107.part.js": "5e9121332e6f4fcba0715f711a0f255f",
"main.dart.js_89.part.js": "539a1f166bca87eedb9d4dffb13d5f60",
"main.dart.js_202.part.js": "b2e3bed8c8829657513a9f638dd0a586",
"main.dart.js": "ee0801b179d55c2cd587aa0b56e8240b",
"main.dart.js_253.part.js": "061a31f28ec2dc7e13c8dfa13c70248d",
"main.dart.js_296.part.js": "e80db7c296860c20cff0f0fe7c8ae623",
"main.dart.js_258.part.js": "6f5ad5377404c275b0c07fc0d3633a90",
"android-chrome-512x512.png": "98869f9fd88a36faa2a41658fd5e6d91",
"main.dart.js_225.part.js": "851951663268cea912cfe999effe171a",
"main.dart.js_85.part.js": "fe87beb6b55489c743c38d771ec2642c",
"main.dart.js_271.part.js": "b8cfb8bb44a55d5c3f6492d361d09332",
"main.dart.js_10.part.js": "964529f049b140c7241cb57d8d8aff7a",
"main.dart.js_124.part.js": "d81c3e6adf2f12debbea4a42090d54ff",
"main.dart.js_11.part.js": "c3bc15a542be014c52a5c3c85629a1f7",
"android-chrome-192x192.png": "875e4c13e440df55ffdb8b67562353f7",
"main.dart.js_73.part.js": "b4690487e8e994a0a20565e147963ae2",
"main.dart.js_260.part.js": "c7c0d0254a34227a7056ec3599749565",
"main.dart.js_95.part.js": "cc68a16a340cb720faaa8ffb01c34ed5",
"main.dart.js_215.part.js": "645a602bf967cd159a79fb96dc2ef7c3",
"main.dart.js_198.part.js": "58d2ba2f798017794c3702dcd4d60e46",
".well-known/assetlinks.json": "dd19f93a45d846318572c0a65b7164e3",
"main.dart.js_101.part.js": "21cd6f8646bf96d0db3a9a0059564852",
"main.dart.js_96.part.js": "6456b5f6963328c8a95448e6ee417b43",
"main.dart.js_131.part.js": "63ac91e6d16e1d9c111a829772c78837",
"main.dart.js_118.part.js": "0a5f5db561943fb6067254ad58ea3c21",
"main.dart.js_94.part.js": "2f63cc61268d69ed15f2ee1216c83e28",
"main.dart.js_140.part.js": "7889cfd2cf2e95029842c19fe9f3e794",
"main.dart.js_105.part.js": "37a0c6ba835be4654a39948c6f27a6af",
"main.dart.js_216.part.js": "a328ff0ca625d56695940bf728bc08ee",
"main.dart.js_1.part.js": "7af067a1e9ac892e7793652a2c0306ef",
"main.dart.js_133.part.js": "f8cb056f15a8196e240eb656d386c4b5",
"main.dart.js_83.part.js": "b4cb46d58ec8f09a3e3c843a38a75d5f",
"favicon-32x32.png": "16007d7b6ccc973a3d8e5e303919c012",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"push/OneSignalSDKWorker.js": "31291a4c291b8d736cb6173c9112ab0f",
"main.dart.js_110.part.js": "a3bfa6bf6bf3b874d84d39a33261f984",
"main.dart.js_213.part.js": "e3e89718c9075d13e893aca96c4de09b",
"main.dart.js_238.part.js": "621b3589856930fa138ae908c0b4fee2",
"main.dart.js_78.part.js": "9b03b47c0a26e26360098b50bece793d",
"main.dart.js_308.part.js": "883658bd3d061f823e30cb39581dc461",
"main.dart.js_109.part.js": "9fb476814f5e82f613ff88f8729ebb39",
"main.dart.js_265.part.js": "84ef862478cc5d8d6302f8c294d346dd",
"main.dart.js_41.part.js": "cb0a1376fe72b1fa4dfee2d607f226a4",
"main.dart.js_12.part.js": "308025889fb3805b8e9c947e9f18fbb3",
"main.dart.js_303.part.js": "576773bd7da0382f73b5de93c9d34cdc",
"main.dart.js_76.part.js": "c6d8c4c5a4e1802b5fa8f7f5ee0fe7af",
"main.dart.js_239.part.js": "4b29bfdc702b6ccad75458ac9856f652",
"main.dart.js_251.part.js": "a56d7e1aea2d006989ba0d5b92fc38a1",
"main.dart.js_158.part.js": "4d1fb3f38e7f373bf47b7ec7332cdfb0",
"main.dart.js_72.part.js": "2f236b3d6d626aa65dd7fa7e4a28751f",
"main.dart.js_68.part.js": "7c8ebdfe24df129305bf1e402894bcad",
"main.dart.js_291.part.js": "3b8a619d8567fa973ec798662f84e687",
"main.dart.js_62.part.js": "725a1b81150623f325374623fb4373fc",
"main.dart.js_180.part.js": "a7a85915e8c30caba03c3ff06d6cb609",
"main.dart.js_240.part.js": "e084fe53d188210e1d2759567d4ab40e",
"index.html": "6c8be3a13bbe7da0c199d56f683b6529",
"/": "6c8be3a13bbe7da0c199d56f683b6529",
"main.dart.js_266.part.js": "702a62a43ea7f07a8d8f66fb39ef3d97",
"main.dart.js_134.part.js": "ec6f1133586fd75235edc17563aad9ac",
"main.dart.js_294.part.js": "c75e681c4dc126a3b1035605db8f902d",
"main.dart.js_181.part.js": "a38abed3a2f09cdd7feb5965f0017d43",
"main.dart.js_147.part.js": "78ae4deca18cc9863aa9c918e882fe10",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/scripts/quill_2.0.0_4_min.js": "3f4b931496920ee12125e575f1c15dfa",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/timezone/data/latest.tzf": "da4c0993be1cfa81ee0939c52c89305e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/AssetManifest.bin.json": "697908fb756eb9522bca6399bb35a6b7",
"assets/AssetManifest.bin": "5999615ba1e2f5c3c1a6acb234cdd04d",
"assets/NOTICES": "4bd2930db146c4653bc584bd9d65b728",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/icons/ALAP_Kutyi_nyakkendos_teljesalakos_01_cleanup.svg": "94644901858cfca109b730bbb5c18891",
"assets/assets/icons/fstapplogo.svg": "94644901858cfca109b730bbb5c18891",
"assets/assets/icons/fstappicon.png": "48335dfdea6f9ac6a936ff080a6b12b8",
"assets/assets/icons/fstapplogo.dark.svg": "94644901858cfca109b730bbb5c18891",
"assets/assets/translations/sk.json": "6e49ce1ef8235be911f9f40da0a08727",
"assets/assets/translations/cs.json": "37e094085c4ea12fe9a1073e87c82698",
"assets/assets/translations/uk.json": "5884d2780678525dee075f20b399db58",
"assets/assets/translations/hu.json": "7072907a499effadc3ea6d89a867443a",
"assets/assets/translations/pl.json": "3e0e710a0c6bd13c10eff65b563daae7",
"assets/assets/translations/de.json": "81359cb4616ac7d344aaffb379502c36",
"assets/assets/translations/en.json": "a65e8481f26170acfe4d17bf5db08721",
"assets/AssetManifest.json": "66d9ee9c12769fc62d4b9524c9c95bec",
"assets/fonts/MaterialIcons-Regular.otf": "4309e6a0c1831e51db6b4b75eefcf381",
"assets/fonts/Futura%2520PT%2520Medium.ttf": "13cae84a07833c30c206ee4d6f19dcf1",
"assets/fonts/Futura%2520PT%2520Book.ttf": "ed4fd6113a6e80c80f2034f6e4fe7798",
"assets/FontManifest.json": "16e2316252209bbc0399201024e6026c",
"main.dart.js_43.part.js": "cd75449cc0f83803104d82dedb834cea",
"main.dart.js_145.part.js": "30480de990d4ef303c3bdad3b2fcab65",
"main.dart.js_29.part.js": "2625b2a72fc72f5824c4534c484fa296",
"main.dart.js_267.part.js": "b7016ac8e5c5ee8d040177ac9c03dad2",
"main.dart.js_170.part.js": "91dd1b4bc55fd0367c67cf13bf79aaf8",
"main.dart.js_197.part.js": "aac8d0cfe9e5c5e52ed49df7106114bd",
"main.dart.js_280.part.js": "fbde1a51c4e645c7adb417c46f69093c",
"main.dart.js_97.part.js": "8ae40d000a40ad71235abee83b7d838d",
"main.dart.js_269.part.js": "78e0a91c5170d5d35f66f3f523a2f523",
"main.dart.js_111.part.js": "cd1ace8292588bdd5a6c9133d24ba7f8",
"main.dart.js_204.part.js": "4e062509d5d3547fca4e86ee2058decb",
"main.dart.js_211.part.js": "92df9e6bb2462287409c67bef4998ce1",
"main.dart.js_230.part.js": "2396935a904fb714dd99135c289f74da",
"favicon-16x16.png": "07d4a9035e87e12daeeaa07a7b0fc3b1",
"main.dart.js_283.part.js": "5eb14b8ea892635d9e97d8e2c27ecef4",
"main.dart.js_148.part.js": "239382274cd5a96939690f4e3a86e73a",
"main.dart.js_48.part.js": "0d4f543557a8cc886d96e2f48f6e03d1",
"main.dart.js_161.part.js": "c02304a22954fb6cf7a665b7ecc7d87f",
"main.dart.js_229.part.js": "93d8c961ba51849199cb6c15b96b2e30",
"main.dart.js_153.part.js": "be1e50542a11578cddd040cce6a3d952",
"main.dart.js_28.part.js": "467720043c4e82c8a4eaa6080f2f9fe2",
"main.dart.js_71.part.js": "edd123b02aca3a330bf17c2d6a3cfb98",
"main.dart.js_119.part.js": "bbcb5598f3cec3941c07c71169966fdc",
"main.dart.js_234.part.js": "cf01a80b343c927c03a9a6cea4c446a0",
"main.dart.js_42.part.js": "ecc50dc6891f40cc8e8f69116e46511a",
"main.dart.js_166.part.js": "60ba40207585de2367ca198bc4597292",
"main.dart.js_191.part.js": "0b86fddfe371d62e684039174a2151e2",
"main.dart.js_58.part.js": "a93f8fad71770a97139e2fb29bcb963a",
"main.dart.js_285.part.js": "0206aeb778019755cc82df6c0cc587b8",
"main.dart.js_246.part.js": "cbc443b4f632e70d384f70a186c5c2cb",
"main.dart.js_59.part.js": "41dfac761ac65e33fabf4550954acbb2",
"main.dart.js_277.part.js": "c482139b1f67eda6859311cc4e34394b",
"main.dart.js_284.part.js": "ae9752ec81aa50191a774763a20a7eca",
"main.dart.js_102.part.js": "7e084f067da919284667d3b3f13c23c8",
"main.dart.js_5.part.js": "148b5e257e7c2c3dcff76d2e2ed20ecb",
"main.dart.js_173.part.js": "731632149133e2c1e0ec6d95bb10a52c",
"main.dart.js_244.part.js": "48782db01082a8a0699cb58f066b957f",
"main.dart.js_293.part.js": "f86bce09beb6b18e6d5624e04e44d151",
"main.dart.js_300.part.js": "25c1b89ed086cf30f93430be037cb8f4",
"main.dart.js_261.part.js": "f0866cd833a6d5299b65293e1c284247",
"main.dart.js_236.part.js": "f7313e4ed1e5065b264b724defcc3fca",
"main.dart.js_274.part.js": "a303cf2e0378effb9ba6a4b34d385f67",
"main.dart.js_135.part.js": "caa83954d94fa04705bc90d65ec3b09c",
"main.dart.js_6.part.js": "0a050a488197b8e193c3450d12401192",
"main.dart.js_37.part.js": "1c710eac47cd77cbb08e581df92a83b6",
"main.dart.js_84.part.js": "c7d2f0143eeb589aafbdebb42372b3c9",
"main.dart.js_208.part.js": "9597ba8f749a7ac61ed8842c2d9549ac",
"main.dart.js_152.part.js": "3c627e8a0d39d6406bdaa8853a627f47",
"main.dart.js_86.part.js": "8e372a1774080273695109a8ce2a4352",
"main.dart.js_255.part.js": "45df86bb09ce4ee44dd18c38cdebf70d",
"main.dart.js_165.part.js": "901b1569b23f010d604827825b52438c",
"main.dart.js_171.part.js": "e1c342c6b7bc0a886d4312ff343e0cc2",
"flutter_bootstrap.js": "3d584318d6aae2f0c987614c36d2f094",
"main.dart.js_146.part.js": "798cdfef5874985b29fd450d1fca964a",
"main.dart.js_210.part.js": "21bbb9b2cbf29b63b205df3951eab0ce",
"main.dart.js_81.part.js": "73ec456296a0c83ba0878f42ff28d34e",
"main.dart.js_156.part.js": "edd39d663bb3e0a1ebe1e10531ea2fe9",
"main.dart.js_116.part.js": "5564b68f7f0fe9b45685da5d1f45d803",
"main.dart.js_207.part.js": "4c394e52c64f7896e70479f981f0d3a3",
"mstile-150x150.png": "a31808c097aa4e0809b887446490e6b1",
"main.dart.js_27.part.js": "79e7a18d506c23e09e0de4d9a7f40cde",
"main.dart.js_154.part.js": "7df4da453bb346f251b2e516cf2fc1ba",
"main.dart.js_268.part.js": "01d3666769111a463d17d1c7c2afdc4f",
"main.dart.js_112.part.js": "d712f964e67633d5876b329ac996b6ed",
"main.dart.js_212.part.js": "fefabdb9ee65771e841e2f832276120c",
"main.dart.js_186.part.js": "ba91f00564c177a369736ca86e503759",
"main.dart.js_26.part.js": "3779392c66b6334d0cb2620c2185af6d",
"main.dart.js_167.part.js": "9d3047f8e4d7091bf2b4b93aea4904cc",
"main.dart.js_123.part.js": "058470b201f97a8403474cc18f23156d",
"main.dart.js_36.part.js": "f91ff189dceb35264e152c7e0db67bb1",
"main.dart.js_224.part.js": "81ab3aa1f559f7dc65258fadc2cad615",
"main.dart.js_301.part.js": "38e721625345b7fa144140318ce5e6bd",
"main.dart.js_24.part.js": "505e50d329e78867f1fa41cdc17f6164",
"main.dart.js_272.part.js": "5b7902e04723e48c1a4739db22a50f1b",
"safari-pinned-tab.svg": "fa0fc966a391994b65b5503531424af7",
"main.dart.js_155.part.js": "d155678f042e8bd4b78f1b701127a9eb",
"main.dart.js_57.part.js": "ceafb7ed8f70b5abc5a9765fc8dc04d0",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"main.dart.js_18.part.js": "93d9ee6531b3441364011786fcad9a21",
"main.dart.js_292.part.js": "5dd9b64f7b6aec86788982afdef2e981",
"version.json": "fe7b08b46190ae445997db0bc2711e3e",
"main.dart.js_8.part.js": "4f01091e183cf4d4d73e5cdb0c9f4f61",
"main.dart.js_247.part.js": "e68f85128b025e47dcc276ecf3266f1e",
"main.dart.js_9.part.js": "537875fe8c55ae380b5b6b56dcff9d64",
"main.dart.js_69.part.js": "6ce59c47214b5b9ff1dacd2e0e1a9526",
"main.dart.js_304.part.js": "fb204489a0263d6cc7bddd109c68ee0f",
"main.dart.js_139.part.js": "0e5db7f5c462c67629059b7966e05210",
"main.dart.js_275.part.js": "c83af80a7a66104ae68a76feca327f61",
"main.dart.js_256.part.js": "793d359d4357593ac3cc2dfb1440ce72",
"main.dart.js_237.part.js": "003565229abad7997b774ff901be1e99",
"main.dart.js_257.part.js": "451f5271c122f71010cb6603d6e2a9f0",
"main.dart.js_93.part.js": "0c848a452188389dd1dd3675147dd2c8",
"main.dart.js_179.part.js": "dc5d7b879928a2c8dd97f423bf44b560",
"main.dart.js_14.part.js": "4a8f84455a280a1028357ec73ed5a80c",
"main.dart.js_206.part.js": "97a7d94b3a799b6f201dac6292526c6f",
"main.dart.js_113.part.js": "65da8c4e23f7b978a58ebba434fd5941",
"main.dart.js_273.part.js": "5aa108ef0ed05db7f868548434748f3e",
"main.dart.js_39.part.js": "54286a0b38810ec19eb2b6124f2a9897",
"main.dart.js_306.part.js": "a689732dc0e0439d590d480929cd9e0f",
"main.dart.js_250.part.js": "82c8403d01a3ed486d55d1b50cd543f2",
"main.dart.js_290.part.js": "2a4c4bf092fe4ef2f7b55038e7357502"};
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
