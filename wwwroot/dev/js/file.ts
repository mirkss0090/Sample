interface DI_i { // Data Interface
    state: number;
    title: string;
    team: string;
    oder: string;
    process: number;
    worker: string;
    other: string;
    add: string;
    start: string;
    end: string;
}

class AJAX { // AJAX 통신
    path: string;
    type: string;

    constructor(type: string, path: string) {
        this.type = type;
        this.path = path;
    }

    Get = (): XMLHttpRequest => {
        let xhr = new XMLHttpRequest();
        xhr.open(this.type, this.path, true);
        xhr.send()

        return xhr;
    }

    Send = () => {

    }
}

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

interface Product_i {
    plan: string;

    price: number;

    background: {
        image: boolean,
        simple: boolean,
        advanced: boolean
    };

    process: {
        nukki: boolean,
        text_effect: boolean
    };

    revision: {
        color: boolean,
        face: boolean
    };

    resolution: boolean;

    source: boolean;

    consulting: boolean;

    free_edit: {
        text: boolean,
        model: boolean,
        layout: boolean,
        background: boolean
    };

    banner: {
        image: boolean,
        alide: boolean
    };

    popup: boolean;

    page: {
        promotion: boolean,
        landing: boolean,
        print: boolean,
        resizing: boolean
    };

    detail: {
        process: boolean,
        check: boolean
    }
}

class Product {
    constructor() {

    }

    Check = (param): string => {
        if (param == null) {
            return "?";
        }
        else if (param) {
            return "O";
        }
        else {
            return "X";
        }
    }

    Load = () => {
        let ajax = new AJAX("GET", "/sample-data/product.json");
        let load = ajax.Get();
        load.onload = () => {
            if (load.status == 200) {
                let data: Product_i[] = JSON.parse(load.response);

                data.forEach((param: Product_i) => {
                    console.log(param);

                    document.getElementById("kind").innerHTML += `<div>${param.plan}</div>`;

                    document.getElementById("info_bg").innerHTML += `
                    <div>
                        <div>${this.Check(param.background.image)}</div>
                        <div>${this.Check(param.background.simple)}</div>
                        <div>${this.Check(param.background.advanced)}</div>
                    </div>
                    `;

                    document.getElementById("info_process").innerHTML += `
                    <div>
                        <div>${this.Check(param.process.nukki)}</div>
                        <div>${this.Check(param.process.text_effect)}</div>
                    </div>
                    `;

                    document.getElementById("info_revision").innerHTML += `
                    <div>
                        <div>${this.Check(param.revision.color)}</div>
                        <div>${this.Check(param.revision.face)}</div>
                    </div>
                    `;

                    document.getElementById("info_resolution").innerHTML += `
                    <div>
                        <div>${this.Check(param.resolution)}</div>
                    </div>
                    `;

                    document.getElementById("info_source").innerHTML += `
                    <div>
                        <div>${this.Check(param.source)}</div>
                    </div>
                    `;

                    document.getElementById("info_consulting").innerHTML += `
                    <div>
                        <div>${this.Check(param.consulting)}</div>
                    </div>
                    `;

                    document.getElementById("info_free_edit").innerHTML += `
                    <div>
                        <div>${this.Check(param.free_edit.text)}</div>
                        <div>${this.Check(param.free_edit.model)}</div>
                        <div>${this.Check(param.free_edit.layout)}</div>
                        <div>${this.Check(param.free_edit.background)}</div>
                    </div>
                    `;

                });
            }
            else {
                console.log("fail");
            }
        }
    }
}

function load() {
    let product = new Product();
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