//import js whatsauth yang terbaru
import {qrController,deleteCookie} from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.3.3/whatsauth.js";
import { wauthparam } from "https://cdn.jsdelivr.net/gh/whatsauth/js@0.3.3/config.js";

//definisikan url wss dan keyword menggunakan base64
wauthparam.auth_ws="d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
wauthparam.keyword="aHR0cHM6Ly93YS5tZS82Mjg5OTk3MTAwNDA/dGV4dD13aDR0NWF1dGgw";
wauthparam.redirect="#";

//delete cookies session and call whatsauth qrController
//deleteCookie(wauthparam.tokencookiename);

export function wAuth() { 
    qrController(wauthparam);
}
