import { NOTNULL } from "../../src/NOTNULL";

export class Utils {

    static downloadFile(downloadUrl: any, onSuccess: any, onError: any) {
        console.log("DownloadFile: " + downloadUrl);
        if (downloadUrl) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', downloadUrl);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    onSuccess(xhr.responseText);
                }
                else {
                    onError(xhr.status + " " + xhr.statusText);
                }
            };
            xhr.onerror = function (e) {
                console.log(e);
                onError(e);
            };
            xhr.send();
        }
    }

    static getQueryParams() {
        var a = window.location.search.substr(1);
        if (a === "") return {};
        var params = a.split('&');
        var b: any = {};
        for (var i = 0; i < params.length; ++i) {
            var p = NOTNULL(params[i]).split('=', 2);
            if (p.length === 1)
                b[NOTNULL(p[0])] = "";
            else
                b[NOTNULL(p[0])] = decodeURIComponent(NOTNULL(p[1]).replace(/\+/g, " "));
        }
        return b;
    }
}
