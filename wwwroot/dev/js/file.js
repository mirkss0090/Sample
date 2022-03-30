var AJAX = /** @class */ (function () {
    function AJAX(type, path) {
        var _this = this;
        this.Get = function () {
            var xhr = new XMLHttpRequest();
            xhr.open(_this.type, _this.path, true);
            xhr.send();
            return xhr;
        };
        this.Send = function () {
        };
        this.type = type;
        this.path = path;
    }
    return AJAX;
}());
function side() {
    document.getElementById("side_other").classList.toggle("active");
    document.getElementById("side_list").classList.toggle("active");
}
function device_pc() {
    document.getElementById("device").classList.toggle("pc");
    document.getElementById("device").classList.remove("mo");
}
function device_mo() {
    document.getElementById("device").classList.toggle("mo");
    document.getElementById("device").classList.remove("pc");
}
var Product = /** @class */ (function () {
    function Product() {
        var _this = this;
        this.Check = function (param) {
            if (param == null) {
                return "?";
            }
            else if (param) {
                return "O";
            }
            else {
                return "X";
            }
        };
        this.Load = function () {
            var ajax = new AJAX("GET", "/sample-data/product.json");
            var load = ajax.Get();
            load.onload = function () {
                if (load.status == 200) {
                    var data = JSON.parse(load.response);
                    data.forEach(function (param) {
                        console.log(param);
                        document.getElementById("kind").innerHTML += "<div>".concat(param.plan, "</div>");
                        document.getElementById("info_bg").innerHTML += "\n                    <div>\n                        <div>".concat(_this.Check(param.background.image), "</div>\n                        <div>").concat(_this.Check(param.background.simple), "</div>\n                        <div>").concat(_this.Check(param.background.advanced), "</div>\n                    </div>\n                    ");
                        document.getElementById("info_process").innerHTML += "\n                    <div>\n                        <div>".concat(_this.Check(param.process.nukki), "</div>\n                        <div>").concat(_this.Check(param.process.text_effect), "</div>\n                    </div>\n                    ");
                        document.getElementById("info_revision").innerHTML += "\n                    <div>\n                        <div>".concat(_this.Check(param.revision.color), "</div>\n                        <div>").concat(_this.Check(param.revision.face), "</div>\n                    </div>\n                    ");
                        document.getElementById("info_resolution").innerHTML += "\n                    <div>\n                        <div>".concat(_this.Check(param.resolution), "</div>\n                    </div>\n                    ");
                        document.getElementById("info_source").innerHTML += "\n                    <div>\n                        <div>".concat(_this.Check(param.source), "</div>\n                    </div>\n                    ");
                        document.getElementById("info_consulting").innerHTML += "\n                    <div>\n                        <div>".concat(_this.Check(param.consulting), "</div>\n                    </div>\n                    ");
                        document.getElementById("info_free_edit").innerHTML += "\n                    <div>\n                        <div>".concat(_this.Check(param.free_edit.text), "</div>\n                        <div>").concat(_this.Check(param.free_edit.model), "</div>\n                        <div>").concat(_this.Check(param.free_edit.layout), "</div>\n                        <div>").concat(_this.Check(param.free_edit.background), "</div>\n                    </div>\n                    ");
                    });
                }
                else {
                    console.log("fail");
                }
            };
        };
    }
    return Product;
}());
function load() {
    var product = new Product();
    product.Load();
    //let ajax = new AJAX("/sample-data/weather.json");
    //let load = ajax.Load();
    //load.onload = () => {
    //    if (load.status == 200) {
    //        var data: DI_i[] = JSON.parse(load.response);
    //        data.forEach((param: DI_i) => {
    //            console.log(`상태 : ${param.state},
    //                        업무명 : ${param.title},
    //                        업체명 : ${param.oder},
    //                        담당자 : ${param.worker},
    //                        시작일 : ${param.start},
    //                        마감일 : ${param.end},
    //                        진적도 : ${param.process},
    //                        등록자 : ${param.worker},
    //                        등록일 : ${param.add}
    //            `);
    //        });
    //    } else {
    //        console.log("Data Load 실패");
    //    }
    //}
    //let canvas = <HTMLCanvasElement>document.getElementById('cvs');
    //let ctx = canvas.getContext('2d');
    //let canPlayState = false;
    //ctx.textAlign = 'center';
    //ctx.fillText('비디오 로딩 중..', 300, 200);
    //let videoElem = <HTMLVideoElement>document.getElementById("video");
    //videoElem.addEventListener('canplaythrough', render);
    //function render() {
    //    ctx.drawImage(videoElem, 0, 0, 600, 400);
    //    // 첫 번째 인자로 비디오를 넣어준다.
    //    requestAnimationFrame(render);
    //}
    //let cvs = <HTMLCanvasElement>document.getElementById("cvs");
    //let ctx = cvs.getContext("2d");
    //ctx.textAlign = "center";
    //ctx.fillText("비디로 로딩 중..", 300, 300);
    //let video = document.createElement("video");
    //video.src = "/video/test.mp4";
    //video.autoplay = true;
    //video.muted = true;
    //video.loop = true;
    //let video2 = <HTMLVideoElement>document.getElementById("video");
    //video2.addEventListener('canplaythrough', render);
    //function render() {
    //    ctx.drawImage(video2, 0, 0, 600, 400);
    //    // 첫 번째 인자로 비디오를 넣어준다.
    //    requestAnimationFrame(render);
    //}
}
//# sourceMappingURL=file.js.map