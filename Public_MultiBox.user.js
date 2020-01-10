// ==UserScript==
// @name         MultiBox for every Extensions!! (v3) | XLX - 2019
// @namespace    XLX - 2019
// @version      3
// @description  Full MultiBox Tool  , Agar.io , Cigar2 MultiBox Tools!
// @author       Programed by XLX - 2019
// @include      /^http://(?:3rb)(?:\.be).+?/
// @require      http://www.3rblx.ga/Cyper_WriterPlus.js
// @grant        none
// ==/UserScript==


/**
 * @copyrights  (XLX - 2019)
 * @Discord (Cyper#9999)
 * @LAST_UPDATED 2020-1-1
 * @see <https://github.com/Cyper-New/MultiBox-v2-cigar2/blob/master/MultiBox.user.js>
 */

var SKIN_NAME = "t-rex", // multibox skin \ سكن ملتي بوكس!
    SPAM_MSG,      // SPAM_MSG = ("test"), \ سبام ملتي بوكس
    PLAYER_NAME = ("MultiBox !"); // multibox name \ اسم ملتي بوكس
var DEBUG = true; // notification about multibox status by using alert \ أشعارك بحالة ملتي بوكس!
var MultiBoxKeys = {
    "Spawn": ("TAB"), // Spawn Key \  زر رسبن
    "Split": ("Q"), // Spliting Key \  زر أنقسام
    "Feed": ("R") // feeding Key  \ اخراج كتلة زر!
};


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
    if(packets instanceof ArrayBuffer)InjectionSettings.buffer = (new Uint8Array(packets))
    else InjectionSettings.buffer = (new Uint8Array(packets.buffer))
    InjectionSettings.URL = (this.url["toString"]()["split"]("?")[0o0]); // with filter
    if(packets instanceof ArrayBuffer)viewbuffer = new DataView(packets)
    else viewbuffer = new DataView(packets.buffer)
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
                    if(DEBUG == true){
                    alert("[MultiBox] Connected to Server \n متصل في  خادم !")
                    }
                    console.info("%c[MultiBox] : Connected", "color:green;background:#000;font-family:fantasy;font-size:25px;");
                    }
                },
            onclose(reason) {
                if (reason) {
                    if(DEBUG == true){
                    alert(`[MutliBox] : أنقطاع الاتصال! \n السبب : ${reason.reason}`)
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

