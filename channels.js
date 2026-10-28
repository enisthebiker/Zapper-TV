


 // Kanal bilgileri: Yeni kanal eklemek için bu dosyayı düzenle.
const channels = {
    trt1: { name: "TRT 1", url: "https://tv-trt1.medya.trt.com.tr/master.m3u8" },
tv8: {
    name: "TV8",
    url: "https://www.tv8.com.tr/canli-yayin",
    type: "iframe",
    iframeSettings: {
        width: "1200px",
        height: "900px",
        offsetX: "-90px",
        offsetY: "-150px",
        scale: 0.75
    }

},
atv: { name: "A TV", url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/atv/atv_1080p.m3u8" },

kanald: {
    name: "Kanal D",
    url: "https://www.kanald.com.tr/canli-yayin",
    type: "iframe",
    iframeSettings: {
        width: "1180px",
        height: "1300px",
        offsetX: "-200px",
        offsetY: "-415px",
        scale: 0.95
    }
},
startv: {
    name: "Star TV",
    url: "https://www.startv.com.tr/canli-yayin",
    type: "iframe",
    iframeSettings: {
        width: "1185px",
        height: "1300px",
        offsetX: "-155px",
        offsetY: "-435px",
        scale: 0.87
    }
},
    trthaber: { name: "TRT Haber", url: "https://tv-trthaber.medya.trt.com.tr/master.m3u8" },
    trtspor: { name: "TRT Spor", url: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8" },
    trtbelgesel: { name: "TRT Belgesel", url: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8" },
    trtcocuk: { name: "TRT Çocuk", url: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8" },
    showtv: { name: "Show TV", url: "https://rmtftbjlne.turknet.ercdn.net/bpeytmnqyp/showtv/showtv_720p.m3u8" },
    
    beyaztv: { name: "Beyaz TV", url: "https://beyaztv-live.daioncdn.net/beyaztv/beyaztv.m3u8" },
    
    trt2: { name: "TRT 2", url: "https://tv-trt2.medya.trt.com.tr/master.m3u8" },
    haberturk: { name: "Habertürk", url: "https://tv.ensonhaber.com/haberturk/haberturk.m3u8" },
    numberone: { name: "Number One", url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e17cd59e8b.smil/playlist.m3u8" },
    trtmuzik: { name: "TRT Müzik", url: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8" },
    "360tv": { name: "360 TV", url: "https://turkmedya-live.ercdn.net/tv360/tv360.m3u8" },
    tv100: { name: "TV 100", url: "https://yayin2.canlitv.fun/live/tv100.stream/chunklist_w993184541.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    nowtv: { name: "Now TV", url: "https://uycyyuuzyh.turknet.ercdn.net/nphindgytw/nowtv/nowtv.m3u8" },
    halktv: { name: "Halk TV", url: "https://halktv-live.daioncdn.net/halktv/halktv.m3u8" },
    youtube: { name: "YouTube" },
    haberglobal: { name: "Haber Global", url: "https://tv.ensonhaber.com/haberglobal/haberglobal.m3u8" },
    tgrthaber: { name: "TGRT Haber", url: "https://tgrthaber-live.daioncdn.net/tgrthaber/tgrthaber.m3u8" },
    ahaber: { name: "A Haber", url: "https://yayin2.canlitv.fun/live/ahaber.stream/chunklist_w329357521.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    aspor: { name: "A Spor", url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/aspor/aspor.m3u8" },
    trtsporstar: { name: "TRT Spor Yıldız", url: "https://tv-trtspor2.medya.trt.com.tr/master_720.m3u8" },
    fbtv: { name: "FB TV", url: "https://fbtv.fenerbahce.org/fenerbahcetv.stream/chunklist.m3u8" },
    tjktv: { name: "TJK TV", url: "https://tjktv-live.tjk.org/tjktv.m3u8" },
    taytv: { name: "TAY TV", url: "https://duhnet.hipodrom.com/S2/HLS_LIVE/mislitaynp/playlist.m3u8" },
    dmax: { name: "DMax", url: "https://yayin2.canlitv.fun/live/dmax.stream/chunklist_w1266001012.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    tlc: { name: "TLC", url: "https://yayin2.canlitv.fun/live/tlc.stream/chunklist_w1092059360.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    yabantv: { name: "Yaban TV", url: "https://yayin1.canlitv.fun/canlitv/yabantv.stream/chunklist_w1403802808.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    koytv: { name: "Köy TV", url: "https://yayin1.canlitv.fun/canlitv/koytv.stream/chunklist_w2105237048.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    ciftcitv: { name: "Çiftçi TV", url: "https://live.artidijitalmedya.com/artidijital_ciftcitv/ciftcitv/chunks.m3u8?hash=f056f39983f05906912d00f355565b97" },
    topraktv: { name: "Toprak TV", url: "https://yayin1.canlitv.fun/canlitv/topraktv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    ctgndocumentary: { name: "ctgn Documentary", url: "https://english-livebkali.cgtn.com/live/doccgtn_1.m3u8" },
    patitv: { name: "Pati TV", url: "https://patitv.radyotelekomtv.com:3958/live/patitvlive.m3u8" },
    cartoonnetwork: { name: "Cartoon Network", url: "https://yayin2.canlitv.fun/live/cartoon-network.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    arbtv: { name: "ARB Güneş TV", url: "https://yayin2.canlitv.fun/live/arbgunes.stream/chunklist_w1599088576.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6" },
    minikacocuk: { name: "Minika Çocuk", url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/minikago_cocuk/minikago_cocuk.m3u8" },
    minikago: { name: "Minika Go", url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/minikago/minikago.m3u8" },
    trtdiyanetcocuk: { name: "TRT DiyanetÇocuk", url: "https://tv-trtdiyanetcocuk.medya.trt.com.tr/master_720.m3u8" },
    tv85: {
    name: "TV 8,5",
    url: "https://rkhubpaomb.turknet.ercdn.net/fwjkgpasof/tv8bucuk/tv8bucuk.m3u8"
},

ntv: {
    name: "N TV",
    url: "https://www.ntv.com.tr/canli-yayin/ntv",
    type: "iframe",
    iframeSettings: {
        width: "1200px",
        height: "1300px",
        offsetX: "-95px",
        offsetY: "-415px",
        scale: 0.74
    }
},
sabantv: {
    name: "Şaban TV",
    url: "https://stream41.radyotelekom.com.tr/stream/m3u8/a94fc44623d98b825183db41afd87634/a94fc44623d98b825183db41afd87634.m3u8"
},
a2tv: {
    name: "A2 TV",
    url: "https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/a2tv/a2tv.m3u8"
},

tv4: {
    name: "TV4",
    url: "https://turkmedya-live.ercdn.net/tv4/tv4.m3u8"
},
cine1: {
    name: "Cine1",
    url: "https://canliyayin.cine1.com.tr/memfs/cbaef080-a742-4644-9e9e-2b9f6a5103c3.m3u8"
},
tivi6: {
    name: "Tivi 6",
    url: "https://live.artidijitalmedya.com/artidijital_tivi6/tivi6/playlist.m3u8"
},
showmax: {
    name: "Show Max",
    url: "https://rmtftbjlne.turknet.ercdn.net/bpeytmnqyp/showmax/showmax.m3u8"
},
tytturk: {
    name: "TYT Türk",
    url: "https://tytturk-live.ercdn.net/tytturk/tytturk_1080p.m3u8"
},
bikanal: {
    name: "Bi Kanal",
    url: "https://bikanal-live.ercdn.net/bikanal/bikanal_1080p.m3u8"
},
trtgenc: {
    name: "TRT Genç",
    url: "https://tv-trtgenc.medya.trt.com.tr/master.m3u8"
},
cnbce: {
    name: "CNBC-e",
    url: "https://hnpsechtsc.turknet.ercdn.net/xpnvudnlsv/cnbc-e/cnbc-e.m3u8"
},
mavikaradeniz: {
    name: "Mavi Karadeniz TV",
    url: "https://live.artidijitalmedya.com/artidijital_mavikaradeniz/mavikaradeniz/chunks.m3u8"
},
cantempotv: {
    name: "Can Tempo TV",
    url: "https://live.artidijitalmedya.com/artidijital_tempotv/tempotv/chunks.m3u8"
},
sonmeztv: {
    name: "Sönmez TV",
    url: "https://yayin1.canlitv.fun/canlitv/sonmeztv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
luystv: {
    name: "Luys TV",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtpayqrfkgirxelive/broadcast_5e91c5ac96898.smil/mt_2.m3u8"
},
kanalavrupa: {
    name: "Kanal Avrupa",
    url: "https://cdn-kanalavrupa.yayin.com.tr/kanalavrupa/tracks-v2a1/mono.m3u8"
},
fortunatv: {
    name: "Fortuna TV",
    url: "https://edge2.taksimbilisim.com/ftvturk/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
afroturktv: {
    name: "Afroturk TV",
    url: "https://edge2.taksimbilisim.com/naturaltv/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tmbtv: {
    name: "TMB TV",
    url: "https://str.yodacdn.net/tmb_tr_app/tracks-v1a1/mono.ts.m3u8?token=tmb_app_token_13579"
},
sercemtv: {
    name: "Serçem TV",
    url: "https://canli.sercemtv.com.tr/hls/0/stream.m3u8"
},
tv24: {
    name: "24 TV",
    url: "https://turkmedya-live.ercdn.net/tv24/tv24_1080p.m3u8"
},
gzttv: {
    name: "GZT TV",
    url: "https://gzttv-live.lg.mncdn.com/gzttv-live/gzttv/chunklist_w1523715673.m3u8"
},
meltemtv: {
    name: "Meltem TV",
    url: "https://vhxyrsly.rocketcdn.com/meltemtv/chunklist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tbmmtv: {
    name: "TBMM TV",
    url: "https://meclistv-live.ercdn.net/meclistv/meclistv_720p.m3u8?e=&st="
},
tvnet: {
    name: "TVNET",
    url: "https://tvnet-live.lg.mncdn.com/tvnet-live/tvnet/chunklist_w1984664966.m3u8"
},
kanalb: {
    name: "Kanal B",
    url: "https://tv.kanalb.tr/hls/kanalb/1_2/index.m3u8?tkn=3579606417"
},
yoltv: {
    name: "Yol TV",
    url: "https://www.yoltv.com/live.php?u=aHR0cHM6Ly9saXZlLnlvbHR2LmNvbS9obHMvMC9zdHJlYW0ubTN1OA"
},
thturkhaber: {
    name: "TH Türk Haber",
    url: "https://edge2.taksimbilisim.com/turkhaber/bant1/chunks.m3u8"
},
trtworld: {
    name: "TRT World",
    url: "https://tv-trtworld.medya.trt.com.tr/master_720.m3u8"
},
dha: {
    name: "DHA",
    url: "https://603c568fccdf5.streamlock.net/live/dhaweb1_C5efC/playlist.m3u8"
},
finansturk: {
    name: "Finans Türk",
    url: "https://yayin3.haber100.com/live/finansturk/playlist.m3u8"
},
powerturktv: {
    name: "PowerTürk TV",
    url: "https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/playlist.m3u8"
},
powerturkslow: {
    name: "PowerTürk Slow",
    url: "https://listen.powerapp.com.tr/pturkslow/slow.smil/chunks.m3u8"
},
powerlove: {
    name: "Power Love",
    url: "https://livetv.powerapp.com.tr/plove/love.smil/playlist.m3u8"
},
knmusictv: {
    name: "KN Music TV",
    url: "https://cdn4.yayin.com.tr/kntv/tracks-v1a1/mono.m3u8"
},
powertv: {
    name: "Power TV",
    url: "https://livetv.powerapp.com.tr/powerTV/powerhd.smil/playlist.m3u8"
},
dosttv: {
    name: "Dost TV",
    url: "https://dost.stream.emsal.im/tv/live.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
semerkandtv: {
    name: "Semerkand TV",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtisvwurbfcyslive/broadcast_58d915bd40efc.smil/mt_1.m3u8"
},
kanal12: {
    name: "Kanal 12",
    url: "https://live.artidijitalmedya.com/artidijital_kanal12/kanal12/chunks.m3u8"
},
on4tv: {
    name: "ON4 TV",
    url: "https://live.artidijitalmedya.com/artidijital_on4tv/on4tv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
sat7turk: {
    name: "SAT-7 Türk",
    url: "https://live.artidijitalmedya.com/artidijital_sat7turk/sat7turk/chunks.m3u8"
},
kanal19: {
    name: "Kanal 19",
    url: "https://live.euromediacenter.com/kanal19/tracks-v1a1/mono.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
etvmanisa: {
    name: "ETV Manisa",
    url: "https://edge1.taksimbilisim.com/manisaetv/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tokatsupertv: {
    name: "Tokat Süper TV",
    url: "https://yayin1.canlitv.fun/canlitv/tokatsupertv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanalv: {
    name: "Kanal V",
    url: "https://live.artidijitalmedya.com/artidijital_kanalv/kanalv/chunks.m3u8"
},
tv41: {
    name: "TV 41",
    url: "https://live.artidijitalmedya.com/artidijital_tv41/tv41/chunks.m3u8?hash=efc0e594565be29e6df9f7325c43ec3f"
},
kanal26: {
    name: "Kanal 26",
    url: "https://live.artidijitalmedya.com/artidijital_kanal26/kanal26/chunks.m3u8?hash=9653ebb9cf33548cd17086c038c8a6c3"
},
kanal58: {
    name: "Kanal 58",
    url: "https://live.artidijitalmedya.com/artidijital_kanal58/kanal58/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
birtv: {
    name: "Bir TV",
    url: "https://edge2.taksimbilisim.com/birtv/bant1/chunks.m3u8"
},
tv1: {
    name: "TV 1",
    url: "https://edge1.taksimbilisim.com/tv1/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanal15: {
    name: "Kanal 15",
    url: "https://live.artidijitalmedya.com/artidijital_kanal15/kanal15/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
estv: {
    name: "ES TV",
    url: "https://live.artidijitalmedya.com/artidijital_estv/estv/chunks.m3u8?hash=e5dcebf8a5bdacf1b0b39505cbc51e29"
},
grt: {
    name: "GRT",
    url: "https://live.artidijitalmedya.com/artidijital_grt/grt/chunks.m3u8"
},
kontv: {
    name: "KON TV",
    url: "https://canli.kontv.com.tr/live/kontv.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanalurfa: {
    name: "Kanal Urfa",
    url: "https://edge2.taksimbilisim.com/kanalurfa/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
iceltv: {
    name: "İçel TV",
    url: "https://edge1.taksimbilisim.com/iceltv/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanal33: {
    name: "Kanal 33",
    url: "https://edge2.taksimbilisim.com/kanal33/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
anadoluDostTV: {
    name: "Anadolu Dost TV",
    url: "https://yayin1.canlitv.fun/canlitv/dosttv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanal38: {
    name: "Kanal 38",
    url: "https://yayin1.canlitv.fun/canlitv/kanal38.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
cayTV: {
    name: "Çay TV",
    url: "https://edge2.taksimbilisim.com/caytv/bant1/chunks.m3u8?nimblesessionid=548925902"
},
asTV: {
    name: "AS TV",
    url: "https://live.artidijitalmedya.com/artidijital_astv/astv/chunks.m3u8"
},
denizPostasi: {
    name: "Deniz Postası",
    url: "https://live.artidijitalmedya.com/artidijital_denizpostasi/denizpostasi/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tvKayseri: {
    name: "TV Kayseri",
    url: "https://yayin1.canlitv.fun/canlitv/tvkayseri.stream/chunklist_w1074253096.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tv42: {
    name: "TV 42",
    url: "https://canliyayin.tv42.com.tr/memfs/0c8c4bc7-550a-4239-8e3d-6f4d768391bb_output_0.m3u8?session=TEEVYonwaHkhGGWmDNFkxC"
},
konyaOlayTV: {
    name: "Konya Olay TV",
    url: "https://live.artidijitalmedya.com/artidijital_konyaolaytv/konyaolaytv/chunks.m3u8?nimblesessionid=4363075365"
},
tonTV: {
    name: "TON TV",
    url: "https://live.artidijitalmedya.com/artidijital_tontv/tontv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
erTV: {
    name: "ER TV",
    url: "https://live.artidijitalmedya.com/artidijital_ertv_new/ertv/chunks.m3u8"
},
kocaeliTV: {
    name: "Kocaeli TV",
    url: "https://edge2.taksimbilisim.com/kocaelitv/bant1/chunks.m3u8"
},
kanalPlus: {
    name: "Kanal Plus",
    url: "https://live.artidijitalmedya.com/artidijital_kanalplus/kanalplus/mpeg/chunks.m3u8"
},
worldTurkTV: {
    name: "World Türk TV",
    url: "https://yayin1.canlitv.fun/canlitv/worldturk.stream/chunklist_w1072226647.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanal3: {
    name: "Kanal 3",
    url: "https://live.artidijitalmedya.com/artidijital_kanal3/kanal3/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanal23: {
    name: "Kanal 23",
    url: "https://live.artidijitalmedya.com/artidijital_kanal23/kanal23/chunks.m3u8?"
},
kardelenTV: {
    name: "Kardelen TV",
    url: "https://edge2.taksimbilisim.com/kardelentv/bant1/chunks.m3u8"
},
cankiriTV: {
    name: "Çankırı TV",
    url: "https://yayin1.canlitv.fun/canlitv/cankiritv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
duzceTV: {
    name: "Düzce TV",
    url: "https://yayin1.canlitv.fun/canlitv/duzcetv.stream/chunklist_w1172927972.m3u8?hash=2f8d8d45e0e6cded0002bb92dca0"
},
kanal34: {
    name: "Kanal 34",
    url: "https://live.euromediacenter.com/kanal34/tracks-v1a1/mono.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tv264: {
    name: "TV 264",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtdxkkitgbrckilive/broadcast_5ee244263fd6d.smil/mt_1.m3u8"
},
lifeTV: {
    name: "Life TV",
    url: "https://live.artidijitalmedya.com/artidijital_lifetv/lifetv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
mercanTV: {
    name: "Mercan TV",
    url: "https://live.artidijitalmedya.com/artidijital_mercantv/mercantv/chunks.m3u8"
},
izmirTurkTV: {
    name: "İzmir Türk TV",
    url: "https://yayin1.canlitv.fun/canlitv/izmirturktv.stream/chunklist_w538091056.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tv52: {
    name: "TV 52",
    url: "https://edge2.taksimbilisim.com/tv52/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
sunTV: {
    name: "Sun TV",
    url: "https://live.artidijitalmedya.com/artidijital_sunrtv/sunrtv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanalFirat: {
    name: "Kanal Fırat",
    url: "https://live.artidijitalmedya.com/artidijital_kanalfirat/kanalfirat/chunks.m3u8"
},
brTV: {
    name: "BR TV",
    url: "https://live.artidijitalmedya.com/artidijital_brtv/brtv/chunks.m3u8"
},
kanal32: {
    name: "Kanal 32",
    url: "https://edge2.taksimbilisim.com/kanal32/bant1/chunks.m3u8"
},
marmaraTV: {
    name: "Marmara TV",
    url: "https://yayin1.canlitv.fun/canlitv/marmaratv.stream/chunklist_w2047025268.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
aksuTV: {
    name: "Aksu TV",
    url: "https://live.artidijitalmedya.com/artidijital_aksutv/aksutv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
lineTV: {
    name: "Line TV",
    url: "https://edge2.taksimbilisim.com/linetv/bant1/chunks.m3u8"
},
olayTurk: {
    name: "Olay Türk",
    url: "https://live.artidijitalmedya.com/artidijital_olayturk/olayturk/chunks.m3u8"
},
alanyaTV: {
    name: "Alanya TV",
    url: "https://cdn-alanyatv.yayin.com.tr/alanyatv/alanyatv/chunklist_w722880914.m3u8"
},
edirneTV: {
    name: "Edirne TV",
    url: "https://yayin.edirnetv.com:8088/hls/etvcanliyayin.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
malatyaVuslatTV: {
    name: "Malatya Vuslat TV",
    url: "https://live.artidijitalmedya.com/artidijital_vuslattv/vuslattv/chunks.m3u8"
},
hunatTV: {
    name: "Hunat TV",
    url: "https://live.artidijitalmedya.com/artidijital_hunattv/hunattv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
frtTV: {
    name: "FRT TV",
    url: "https://edge1.taksimbilisim.com/frttv/bant1/chunks.m3u8"
},
sonSozTV: {
    name: "Sonsöz TV",
    url: "https://yayin1.canlitv.fun/canlitv/gokkusagi.stream/chunklist_w1927406296.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kayTV: {
    name: "KAY TV",
    url: "https://live.artidijitalmedya.com/artidijital_kaytv/kaytv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tv38: {
    name: "TV 38",
    url: "https://yayin1.canlitv.fun/canlitv/tv38.stream/chunklist_w2091559379.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
altasTV: {
    name: "Altaş TV",
    url: "https://edge1.taksimbilisim.com/altastv/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
erciyesTV: {
    name: "Erciyes TV",
    url: "https://live.artidijitalmedya.com/artidijital_erciyestv/erciyestv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
tvDen: {
    name: "TV DEN",
    url: "https://canli.tvden.com.tr/hls/live.m3u8"
},
alanyaPostasiTV: {
    name: "Alanya Postası TV",
    url: "https://api-tv3.yayin.com.tr/postatv/postatv/chunklist_w1397845910.m3u8"
},
anadoluNetTV: {
    name: "Anadolu Net TV",
    url: "https://live.artidijitalmedya.com/artidijital_anadolunet/anadolunet/chunks.m3u8"
},
kentTurkTV: {
    name: "Kent Türk TV",
    url: "https://live.artidijitalmedya.com/artidijital_kentturktv/kentturktv/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
ahiTV: {
    name: "Ahi TV",
    url: "https://yayin1.canlitv.fun/canlitv/ahitv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
urfanatikTV: {
    name: "Urfanatik TV",
    url: "https://live.artidijitalmedya.com/artidijital_urfanatiktv/urfanatiktv/chunks.m3u8"
},
etvKayseri: {
    name: "ETV Kayseri",
    url: "https://live.artidijitalmedya.com/artidijital_etv/etv/chunks.m3u8"
},
ruhaTV: {
    name: "Ruha TV",
    url: "https://ruhatv.radyotelekom.com.tr:3515/live/ruhatvlive.m3u8"
},
van65TV: {
    name: "Van 65 TV",
    url: "https://live.artidijitalmedya.com/artidijital_van65/van65/chunks.m3u8?nimblesessionid=4363363877"
},
edessaTV: {
    name: "Edessa TV",
    url: "https://canli.edessatv.com/hls/0/stream.m3u8"
},
erzurumWebTV: {
    name: "Erzurum Web TV",
    url: "https://win29.yayin.com.tr/erzurumwebtv/erzurumwebtv/chunklist_w1497100987.m3u8"
},
cizgi48TV: {
    name: "Çizgi 48 TV",
    url: "https://ip44.radyotelekomtv.com:3810/live/cizgitvlive.m3u8"
},
brt1: {
    name: "BRT 1",
    url: "https://edge.kuzeykibrissmart.tv/brt1hd/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
brt2: {
    name: "BRT 2",
    url: "https://edge.kuzeykibrissmart.tv/brt2hd/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
torbaTV: {
    name: "Torba TV",
    url: "https://yayin1.canlitv.fun/canlitv/torbatv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanalT: {
    name: "Kanal T",
    url: "https://edge.kuzeykibrissmart.tv/kanalt/bant1/chunks.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kibrisTV: {
    name: "Kıbrıs TV",
    url: "https://play.kibristv.com/stream/hls/stream.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kibrisAdaTV: {
    name: "Kıbrıs Ada TV",
    url: "https://yayin1.canlitv.fun/canlitv/kibrisadatv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kibrisGencTV: {
    name: "Kıbrıs Genç TV",
    url: "https://yayin1.canlitv.fun/canlitv/genctv.stream/chunklist_w671685822.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
okkuTV: {
    name: "Okku TV",
    url: "https://yayin1.canlitv.fun/canlitv/okkutv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
xeserTV: {
    name: "Xeser TV",
    url: "https://yayin2.canlitv.fun/live/xezertv.stream/chunklist_w1354979620.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
spaceTV: {
    name: "Space TV",
    url: "https://yayin2.canlitv.fun/live/spacetv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
arbTV: {
    name: "ARB TV",
    url: "https://yayin2.canlitv.fun/live/arb.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
atvAzadTV: {
    name: "ATV Azad TV",
    url: "https://lives.atv.az:5443/ATV_TV_STREAM/streams/atvcanli.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
azTV: {
    name: "Az TV",
    url: "https://yayin2.canlitv.fun/live/aztv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
arb24TV: {
    name: "ARB24 TV",
    url: "https://yayin2.canlitv.fun/live/arb24.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
medeniyetTV: {
    name: "Medeniyet TV",
    url: "https://yayin2.canlitv.fun/live/medeniyettv.stream/chunklist_w1293214261.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kanalSAz: {
    name: "Kanal S AZ",
    url: "https://yayin2.canlitv.fun/live/kanals.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
dunyaTV: {
    name: "Dünya TV",
    url: "https://yayin2.canlitv.fun/live/dunyatv.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
cbcTV: {
    name: "CBC TV",
    url: "https://yayin2.canlitv.fun/live/cbc.stream/playlist.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
bakuTV: {
    name: "Bakü TV",
    url: "https://rtmp.baku.tv/hls/bakutv.m3u8"
},
azStarTV: {
    name: "Az Star TV",
    url: "https://live.livestreamtv.ca/azstar/amlst:azstar/tracks-v1a1/mono.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
turkmeneliTV: {
    name: "Türkmeneli TV",
    url: "https://stream-135962.castr.net/5ff366a512987e2c0a3dabfe/live_14378e1002eb11ef9cb025207067897a/tracks-v1/index.fmp4.m3u8"
},
liveTV: {
    name: "Live TV",
    url: "https://tv.mobyservice.ru/livetv-web/tracks-v1a1/mono.m3u8"
},
pressTV: {
    name: "Press TV",
    url: "https://live.presstv.co.uk/hls/presstv_5_482/index.m3u8"
},
imediTV: {
    name: "Imedi TV",
    url: "https://tv.cdn.xsg.ge/imedihd/tracks-v1a1/mono.m3u8"
},
rtRussia: {
    name: "RT Russia",
    url: "https://1a-1791.com/live/hr6yv36f/slot-4/mxtm-wdfe_1080p/chunklist_DVR.m3u8"
},
deutscheWelleEnglish: {
    name: "DW English",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream01/streamPlaylist.m3u8"
},
noa4Hamburg: {
    name: "NOA4 Hamburg",
    url: "https://hls1.wtnet.de/noa4/apple/wifi4000.m3u8"
},
rfh: {
    name: "RFH",
    url: "https://h056.video-stream-hosting.de/medienasa-live/_definst_/mp4:RFH_high/chunklist_w667817151.m3u8"
},
frankenTV: {
    name: "Franken TV",
    url: "https://stream01.welocal.stream/stream/fhd-tvmainfranken_255661/ngrp:stream_all/chunklist_w1073867686_b446000.m3u8"
},
offenerKanalBerlin: {
    name: "Offener Berlin",
    url: "https://alex-stream.rosebud-media.de/bounce/alexlivetv50.smil/chunklist_b2128000_slGER.m3u8"
},
niederbayernTV: {
    name: "Niederbayern TV",
    url: "https://stream03.welocal.stream/stream/fhd-nbydeggendorf_99148/ngrp:stream_all/chunklist_b946000.m3u8"
},
oberpfalzTV: {
    name: "Oberpfalz TV",
    url: "https://stream04.welocal.stream/stream/fhd-otv_496277/ngrp:stream_all/chunklist_b3628000.m3u8"
},
ktvKazakistan: {
    name: "KTV Kazakistan",
    url: "https://wz-kt.ktk.kz/ktklive/smil:ktk-live.smil/chunklist_w10227581_b928000_slrus.m3u8?hash=2f8d8d45e0e6cded0002bb92dca073c6"
},
kontraTV: {
    name: "Kontra TV",
    url: "https://kontralive.siliconweb.com/live/kontratv/kontralive/kontratv/chunks.m3u8"
},
indiaToday: {
    name: "India Today",
    url: "https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/live_234p/chunks.m3u8"
},

kanal7: {
    name: "Kanal 7",
    url: "https://kanal7-live.daioncdn.net/kanal7/kanal7.m3u8?hash=c844a8b9e123a6534abc61aa68065b5d"
},
cnnTurk: {
    name: "CNN Türk",
    url: "https://yayin2.canlitv.fun/live/cnnturk.stream/playlist.m3u8?hash=c844a8b9e123a6534abc61aa68065b5d"
},
   sozcutv: {
    name: "Sözcü TV",
    url: "https://www.szctv.com.tr/canli-yayin-izle",
    type: "iframe",
iframeSettings: {
        width: "1200px",
        height: "1400px",
        offsetX: "-60px",
        offsetY: "-335px",
        scale: 0.70
    }
},

trtTurk: {
    name: "TRT Türk",
    url: "https://tv-trtturk.medya.trt.com.tr/master_720.m3u8"
},
cemtv: {
    name: "Cem TV",
    url: "https://panel.5gtvhosting.com:2020/hls/cemtv/cemtv.m3u8"
},
showturktv: {
    name: "Show Türk TV",
    url: "https://www.showturk.com.tr/canli-yayin",
    type: "iframe",
iframeSettings: {
        width: "1200px",
        height: "900px",
        offsetX: "-43px",
        offsetY: "-143px",
        scale: 0.67
    }
},
eurostar: {
    name: "Euro Star TV",
    url: "https://dogusdyg-eurostar.lg.mncdn.com/dogusdyg_eurostar/live_1080p3000000kbps/index.m3u8?st=8sLM6V-MDLFIZGO5J21W6g&e=1793106644"
},
atvavrupa: {
    name: "Atv Avrupa",
    url: "https://trkvz-live.ercdn.net/atvavrupa/atvavrupa_576p.m3u8?st=3LZjZ01topO356t0qJcz9Q&e=1793065738"
},
bloomberght: {
    name: "Bloomberg HT",
    type: "youtube",
    url: "j7B_zsL11Pw"
},
akittv: {
    name: "Akit TV",
    type: "youtube",
    url: "bqQ86zWjZ2M"
},
ulketv: {
    name: "Ülke TV",
    type: "youtube",
    url: "RWHjsjauioY"
},
krttv: {
    name: "KRT TV",
    type: "youtube",
    url: "sT3BrvBWJvo"
},
ulusalkanal: {
    name: "Ulusal Kanal",
    type: "youtube",
    url: "wD9lrYZrThU"
},
ilketv: {
    name: "İlke TV",
    type: "youtube",
    url: "8dfvB1MYSBo"
},
benguturktv: {
    name: "Bengü Türk TV",
    type: "youtube",
    url: "oM8knhi5hzQ"
},
liderhaber: {
    name: "Lider Haber",
    type: "youtube",
    url: "eKW2H4oHQvc"
},
ekoturktv: {
    name: "Ekotürk TV",
    type: "youtube",
    url: "n5kkt5THivg"
},
apara: {
    name: "A para TV",
    type: "youtube",
    url: "joHdBJd_jQA"
},
kozatv: {
    name: "Koza TV",
    type: "youtube",
    url: "a52uKTO1WYI"
},
telenews: {
    name: "Telenews",
    url: "https://cdn4.yayin.com.tr/telenews/tracks-v1a1/mono.m3u8"
},
anews: {
    name: "A news",
    type: "youtube",
    url: "7PPN_D4E6QU"
},
egemaxtv: {
    name: "Egemax TV",
    type: "youtube",
    url: "_NcO_Qm4qhg"
},
htspor: {
    name: "HT Spor",
    type: "youtube",
    url: "gcWaPe_LBMc"
},
beinsportshaber: {
    name: "beIN Sports Haber",
    type: "youtube",
    url: "i7UpPgxfZZ8"
},
tgrtbelgesel: {
    name: "TGRT Belgesel",
    type: "youtube",
    url: "32y7IEtD5OU"
},
tarimtv: {
    name: "Tarım TV",
    url: "https://content.tvkur.com/l/c7e1da7mm25p552d9u9g/index-480p.m3u8"
},
nasatv: {
    name: "NASA TV",
    type: "youtube",
    url: "ROboUHfPUrU"
},
kralsakir: {
    name: "Kral Şakir TV",
    type: "youtube",
    url: "vUNydkil1i8"
},
tomandjerry: {
    name: "Tom and Jerry TV",
    type: "youtube",
    url: "GEw3m4xvct4"
},
bluey: {
    name: "Bluey TV",
    type: "youtube",
    url: "RHUauMcYlX0"
},
yardimciarabalar: {
    name: "Yardımcı Arabalar",
    type: "youtube",
    url: "bGyK5QAqF8c"
},
booba: {
    name: "Booba TV",
    type: "youtube",
    url: "S3PgnmpBL_E"
},
konusantom: {
    name: "Tom ve Arkadaşları",
    type: "youtube",
    url: "p2lzszpliL4"
},
maxtv: {
    name: "Max Music TV",
    url: "https://cdn4.yayin.com.tr/maxtv/tracks-v1a1/mono.m3u8"
},
damarturktv: {
    name: "Damar Türk TV",
    url: "https://stream.yayintescil.com:3183/stream/play.m3u8"
},
numberoneask: {
    name: "Numberone Aşk",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e18f9cea15_1/chunklist.m3u8"
},
numberonedans: {
    name: "Numberone Dance",
    url: "https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/u_stream_5c9e2aa8acf44_1/chunklist.m3u8"
},
powerakustik: {
    name: "Power Türk Akustik",
    url: "https://livetv.powerapp.com.tr/pturkakustik/akustik.smil/chunks.m3u8?nimblesessionid=1113859402"
},
powerdance: {
    name: "Power Dance",
    url: "https://livetv.powerapp.com.tr/dance/dance.smil/playlist.m3u8"
},
powertaptaze: {
    name: "Power Taptaze",
    url: "https://livetv.powerapp.com.tr/pturktaptaze/taptaze.smil/playlist.m3u8"
},
bodrumkenttv: {
    name: "Bodrum Kent TV",
    url: "https://edge2.taksimbilisim.com/bodrumkenttv/bant1/chunks.m3u8"
},
onaltitv: {
    name: "On6 TV",
    type: "youtube",
    url: "iK9mJfjtCl0"
},


};

// İlk açılışta kullanılacak kanal sırası
const defaultChannelOrder = [
    "trt1", "youtube", "showtv", "startv", "atv", "kanald", "tv8", "nowtv", 
    "dmax", "tlc", "trtbelgesel", "a2tv", 
    "trtmuzik", "trt2",
    "showmax", "gzttv", "cine1", "PowerTV", "numberone", "ntv",
    "haberturk", "360tv", "tv100", "beyaztv",
    "halktv", "haberglobal", "tgrthaber", "ahaber","cnnTurk",
    "yabantv", "koytv", "ciftcitv", "topraktv",
    "ctgndocumentary", "patitv", "cartoonnetwork", "arbtv",
    "minikacocuk", "minikago", "trtdiyanetcocuk", 
    "aspor", "trtsporstar", "fbtv", "tjktv", "taytv", "kanal7"

];

// Kanal listesini otomatik oluştur
const channelListForCreation = document.getElementById("channel-list-items");

if (channelListForCreation) {
    // Önce belirlenen ilk açılış sırasını kullan
    const orderedChannels = defaultChannelOrder.filter(
        channelId => channels[channelId]
    );

    // Sıralamada olmayan yeni kanalları otomatik olarak sona ekle
    Object.keys(channels).forEach(channelId => {
        if (!orderedChannels.includes(channelId)) {
            orderedChannels.push(channelId);
        }
    });

    // Listeyi oluştur
    orderedChannels.forEach(channelId => {
        const channel = channels[channelId];

        const item = document.createElement("li");
        item.dataset.channel = channelId;
        item.draggable = true;
        item.textContent = channel.name;
        item.addEventListener("click", () => changeChannel(channelId));

        channelListForCreation.appendChild(item);
    });
}
