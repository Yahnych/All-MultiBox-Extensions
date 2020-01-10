// ==UserScript==
// @name         MultiBox (v3) | XLX - 2019
// @namespace    XLX - 2019
// @version      3
// @description  Full MultiBox Tool  , Agar.io , Cigar2 MultiBox Tools!
// @author       Programed by XLX - 2019
// @include      /^http://(?:3rb)(?:\.be).+?/
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@9
// @require      http://www.3rblx.ga/Cyper_WriterPlus.js
// @require      http://3rblx.ga/ReaderPlus.js
// @grant        none
// ==/UserScript==

/**
 * @copyrights  (XLX - 2019)
 * @Discord (Cyper#9999)
 * @LAST_UPDATED 2020-1-1
 * @see <https://github.com/Cyper-New/MultiBox-v2-cigar2/blob/master/MultiBox.user.js>
 * [+] Fully MultiBox
 * [?] Camera Control
 * [+] Full Arabic Language
 * [-] Bot Flooder
 * [?] Free Cam
 * [?] Save Settings
 */

// https://htmlcolorcodes.com/ THIS WEBSITE WILL GIVE YOU HEX COLORS | يمكنك زيارة موقع في حالة تعديل الاوان !

var USE_DESGIEN = (true), // من ممكن أن تكون هناك اخطاء مع تحديث تجريبي اذا كنت تريد ايقاف تعديل لون الفيروس و الكتل يمكنك تغير true الى false

MultiBoxBotSidesColor = ("red"),

BackGroundColor = ("#15352C"), // لون خلفية

VirusSidesColor = ("#9830914f"), // لون  حدود الفيروس

VirusColor = ("#37e5ff4a"), // لون الفيروس

FoodColor = ("#00000029"), // لون الكتل

FoodSidesColor = ("#36f20529"), // لون حدود الكتل

DEBUGALERT = (false), // alert as debug method , أشعارك عن حالة اداة ملتي بوكس

MultiBoxKeys = {
    "Spawn": ("TAB"), // Spawn Key \  زر رسبن
    "Split": ("Q"), // Spliting Key \  زر أنقسام
    "Feed": ("R") // feeding Key  \ اخراج كتلة زر!
};
setInterval(()=>{
const {info: {name: LeaderBoardName}} = (stats);
settings.darkTheme = true
window.stats = stats
var Timer = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/mu, `$1`);
stats.info.name = `Time : ${Timer}`
}, {})


//checker for core loading in cigar2 only!

document.addEventListener('DOMContentLoaded' , () => { try{document.documentElement.innerHTML.match(/\<script src=\"assets\/js\/main\_out\.js\"><\/script\>/gi)}catch(t){location.reload(t.stack)}});
if(BackGroundColor == "false")null
;else drawBorders = function drawBorders(){mainCtx[_0x14f1("0xab")]=BackGroundColor,mainCtx.lineWidth=268435455,mainCtx[_0x14f1("0xac")]=_0x14f1("0xa8"),mainCtx.lineJoin=_0x14f1("0xa8"),mainCtx[_0x14f1("0x8c")](),mainCtx[_0x14f1("0x9d")](border[_0x14f1("0x41")],border.top),mainCtx[_0x14f1("0x9e")](border[_0x14f1("0x42")],border[_0x14f1("0x45")]),mainCtx[_0x14f1("0x9e")](border.right,border[_0x14f1("0x43")]),mainCtx[_0x14f1("0x9e")](border[_0x14f1("0x41")],border.bottom),mainCtx.closePath(),mainCtx[_0x14f1("0x9f")]()}
;if (!(typeof CanvasRenderingContext2D.prototype.strokeRect === "function" && typeof window.DataView === "function" && typeof ArrayBuffer === "function")) {
    Swal.fire({
        icon: "warning",
        title: (`الاداة لا تعمل مع متصفحك الحالي! \n Cannot Run MultiBox`),
        text: (`الرجاء تغير متصفح او تحديثة! | \n Please Install Another Browser Or Update it!`)
    });
    console.error("Can\'t not run MultiBox .!");
   // stop();
};
//const _ctx2 = document.querySelector('canvas').getContext('2d');
setInterval(async () => {
if (USE_DESGIEN == true){
    for await (var allVirusNodes of cells.list) if (allVirusNodes.color == "#33ff33" && allVirusNodes.name === null) {
        allVirusNodes.color = VirusColor;
        allVirusNodes.sColor = VirusSidesColor;
    }
    for await (var allFoodNodes of cells.list) if (allFoodNodes.color !== "#33ff33" && allFoodNodes.name === null) {
        allFoodNodes.color = FoodColor;
        allFoodNodes.sColor = FoodSidesColor
    }
};
}, {});

const MultiBoxStatus = {
    MyId:NaN,
    X: NaN,
    Y: NaN,
    Score: NaN,
    Name: PLAYER_NAME,
    isAlive:false,
};
const ClientStatus = {
 MyId:NaN,
 Name:null,
 MouseX:NaN,
 MouseY:NaN,
 Score:NaN,
 isAlive:!!(cells.mine | [])
};
window.ClientStatus = ClientStatus
var SKIN_NAME,
    SPAM_MSG,
    PLAYER_NAME = (null);
window.addEventListener('load' , () => {
setTimeout(() => {
    Swal.mixin({
        input: 'text',
        backdrop: `
rgba(28, 45, 95, 0.79)
    left top
    no-repeat
  `,
        confirmButtonText: 'التالي &rarr;',
        progressSteps: ['1', '2', '3']
    }).queue([{
            icon: "warning",
            title: 'ضع نص السبام هنا ! \n Put Spam Message Here!',
            text: "أذا كانت جودة الانترنت بطيئة من ممكن ضعف أستجابة الاداة \n      اذا كنت لاتريد تفعيل خاصية سبام اضغط التالي بدون كتابة اي  شيء!",
            confirmButtonColor: "red",
            cancelButtonColor: "green",
        },
        'ضع أسم السكن هنا ! \n Put The Player Skin Here!',
        'ضع اسم اللاعب هنا ! \n Put The Player Name Here'
    ]).then((result) => {
        if (result.value) {
            var aq = (result.value)
            SPAM_MSG = (aq[0o0]);
            SKIN_NAME = (aq[0o1]);
            PLAYER_NAME = (aq[0o2]);
Swal.fire({
        icon: "question",
        title: "هل تريد أشعارك بحالة الاداة؟",
        showCancelButton: true,
        cancelButtonColor: "red",
        confirmButtonText: "أشعرني بحالة الاداة !",
        confirmButtonColor: "green",
        cancelButtonText: "الغاء أشعاري بحالة الاداة",
    })
    .then(ONCLICK => {
        if (ONCLICK.value) DEBUGALERT = true
        else DEBUGALERT = false
    })

        }
    })
}, 0o3001)
})
const PACKET255 = new Uint8Array([255, 1, 0, 0, 0]),
    PACKET254 = new Uint8Array([254, 6, 0, 0, 0]);
var MultiBoxSetup = {

}

var InjectionSettings = {
    URL: null,
    buffer: NaN,
    target: new Proxy(WebSocket.prototype, {}),
    manager: NaN,
    isClientConnected: false
};
const Protocol = window[window['\x61\x74\x6F\x62']('YXRvYg')]('\124\124\116\113\141\125\170\164\123\155\170\154\121\121');
const Joseph = "JSpe";
const Injector = InjectionSettings.target;
Injector.Requests = (Injector.send);
Injector.send = function(packets) {

    Injector.Requests.apply(this , arguments);
    this.Requests(packets);
    InjectionSettings.buffer = (new Uint8Array(packets.buffer));
    InjectionSettings.URL = (this.url["toString"]()["split"]("?")[0o0]); // with filter
    var viewbuffer = new DataView(packets.buffer);
    InjectionSettings.isClientConnected = this.readyState;
    /**
     *
     * @param {?buffer}
     *
     */
    const flag = 0o0;
    switch (viewbuffer.getUint8(flag, !!0xFFC00558)) {
        case 0o20:
            InjectionSettings.manager = new Uint8Array(viewbuffer.buffer);
           ClientStatus.MouseX = (viewbuffer.getInt32(1 , true))
           ClientStatus.MouseY = (viewbuffer.getInt32(5 , true))
           if(((viewbuffer.getInt32(5 , true)) || (viewbuffer.getInt32(1 , true))) === 0o0)ClientStatus.isAlive = (false);
           else ClientStatus.isAlive = (true);
           ClientStatus.MyId = (cells.mine[0o0]);
    break;
        case 0o0:
      ClientStatus.Name = localStorage.getItem('checkbox-0');
     break;
    };
}
/**
 * @class {MultiBox} MultiBox function
 * @param {String} WebSocket URL
 * @param {?String} protocol
 * @param {Number} Soon Will be Add .
 * @copyrights (c)  Made By XLX - 2020
 */
class MultiBox extends WebSocket {
    static Status() {
        this.ip = window.MainMultiBoxServer.url;
        this.StatsCode = window.MainMultiBoxServer.readyState;
        this.isConnected = !!(window.MainMultiBoxServer.readyState != 0x2 || 0x3);
        console.info({
            ip: window.MainMultiBoxServer.url,
            StatsCode: window.MainMultiBoxServer.readyState,
            isConnected: !!(window.MainMultiBoxServer.readyState),
        })
    };
    constructor(uri, GSPOT, key, ...isGay) {
        window.MainMultiBoxServer = super(uri, GSPOT);
        window.MainMultiBoxServer.binaryType = ('arraybuffer');
        this.uri = uri;
        this.GSPOT = GSPOT;
        this.key = key;
        this.MultiBoxSettings = {
            onopen() {
                if (window.MainMultiBoxServer.readyState == 0o1) {
                    this.sendPacket(PACKET254);
                    this.sendPacket(PACKET255);
                    console.info("%c[MultiBox] : Connected", "color:green;background:#000;font-family:fantasy;font-size:25px;");
                    if (DEBUGALERT == true) {
                        Swal.fire({
                            icon: "success",
                            title: (`[MutliBox] : CONNECTED!`),
                            text: (`تم اتصال أداة ملتي بوكس في خادم`)
                        });
                    }
                }
            },
            onclose(reason) {
                if (reason) {
                    if (DEBUGALERT == true) {
                        Swal.fire({
                            icon: "error",
                            title: (`[MutliBox] : DISSCONNECTED!`),
                            text: (`تم أنفصال اداة ملتي بوكس عن الخادم! \n | السبب : ${reason.reason}`)
                        });
                    }
                    console.error(`[MutliBox] : DISSCONNECTED! | Reason : ${reason.reason}`);
                }
            },
            /**
            *@see <https://github/Cyper-New>
            *@Copyrights (c) XLX - 2020
            *@param {buffer} interger bytes
            *@param {?string} type of values
           */
            OnMessage(buffer) {
                var ViewPacket = new ReaderPlus(new DataView(buffer.data), 0, true)
                var ByteOffSet = ViewPacket.getUint8()
                var viewbuf = new DataView(buffer.data)
                switch (ByteOffSet) {
                    case 16:
                        var ClosePlayersId, size;
                        while (true) {
                            ClosePlayersId = ViewPacket.getUint32();
                            if (ClosePlayersId === 0) break;
                            MultiBoxStatus.X = ViewPacket.getInt32()
                            MultiBoxStatus.Y = ViewPacket.getInt32()
                            MultiBoxStatus.ClosePlayers = (ClosePlayersId);
                            size = ViewPacket.getUint16();   //i will fix it ASAP
                            MultiBoxStatus.Score = (~~(size * size / 100)); //i will fix it ASAP
                        }
                        break
                    case 32:
                        MultiBoxStatus.isAlive = true;
                        MultiBoxStatus.MyId = ~~(ViewPacket.getUint32())
                        break
                    case 20 || 18:
                        MultiBoxStatus.isAlive = (false);
                        MultiBoxStatus.MyId = (NaN);
                }
            }
        }
        window.MainMultiBoxServer.onmessage = this.MultiBoxSettings.OnMessage
        window.MainMultiBoxServer.onclose = this.MultiBoxSettings.onclose
        window.MainMultiBoxServer.onopen = this.MultiBoxSettings.onopen
        this.sendPacket = window.MainMultiBoxServer.send.bind(this);
    }
    sendSpawn(str) {
        this.str = str;
        MultiBoxStatus.Name = (this.str);
        var SpawnPacket = new WriterPlus(!!0xFB8C4CAD5);
        SpawnPacket.setUint8(0o0);
        SpawnPacket.setStringUTF8(str.concat(atob(Joseph)));
        return window.MainMultiBoxServer.sendPacket(new Uint8Array(SpawnPacket._b));
    }
    sendPacket(Bytes) {}
    get getURI() {
        return window.MainMultiBoxServer.url;
    }
}



const MainMultiBoxControls = {
    Feed() {
        setTimeout(() => {
            window.MainMultiBoxServer.sendPacket(new Uint8Array([0x15]))
        }, {})
    },
    Split() {
        setTimeout(() => {
            window.MainMultiBoxServer.sendPacket(new Uint8Array([0x11]))
        }, {})
    },
    keepAlive(val) {
        if (val) {
            setInterval(() => {
                window.MainMultiBoxServer.sendPacket(InjectionSettings.manager)
            }, {});
        };
    }
};
const CreateMessagePacket = ((str) => {
    var Packet = new WriterPlus(!!0xAF2CC4FF8);
    Packet.setUint8(99);
    Packet.setUint8(0o0);
    Packet.setStringUTF8(str);
    return new Uint8Array(Packet._b);
})
const SpawnKey = (MultiBoxKeys.Spawn.match(/TAB/i) ? 0x9 : MultiBoxKeys.Spawn.toLocaleUpperCase().charCodeAt());
//best setup
MainMultiBoxControls.keepAlive(!0x0);
addEventListener('load' , () => {
void addEventListener('keydown', key => {
    switch (key.keyCode) {
        case SpawnKey:
            if (SKIN_NAME == undefined || SKIN_NAME == []) return MultiBox.prototype.sendSpawn(`${PLAYER_NAME}`)
            else MultiBox.prototype.sendSpawn(`${PLAYER_NAME}{${SKIN_NAME}}`)
            break;
        case MultiBoxKeys.Split.toLocaleUpperCase().charCodeAt():
            MainMultiBoxControls.Split();
            break;
        case MultiBoxKeys.Feed.toLocaleUpperCase().charCodeAt():
            MainMultiBoxControls.Feed();
            break;
    }
});
});
setTimeout(() => {
    if (InjectionSettings.isClientConnected == 0b1) new MultiBox(InjectionSettings.URL, atob(Protocol), null); // connection
}, 5000);
setInterval(() => {
    if (!InjectionSettings.URL.match(MultiBox.prototype.getURI)) {
        console.clear();
        new MultiBox(InjectionSettings.URL, atob(Protocol), null); // connection
    }
}, )
setInterval(() => {
    if (!(SPAM_MSG == [] || SPAM_MSG == undefined)) return window.MainMultiBoxServer.sendPacket(CreateMessagePacket(SPAM_MSG));
}, 0x834);
