function DOM() {
    return {
        Get_Option: (el_name: string) => {
            return document.createElement(el_name);
        },

        Set_Option: (id: string, el: HTMLElement) => {
            return document.getElementById(id).append(el);
        },

        Clear_Class: (id: string) => {
            let param = document.getElementById(id);

            for (let i = 0; i < param.children.length; i++) {
                param.children[i].classList.remove("active");
            }
        },

        Del_El: (id: string) => {
            let param = document.getElementById(id);
            while (param.hasChildNodes()) {
                param.removeChild(param.firstChild);
            }
        }
    }
}

let data_1 = [
    "내원상담 후 결정",
    "신경",
    "허리",
    "눈"
];

let data_2 = [
    "내원상담 후 결정",
    "진료 프로그램 1",
    "진료 프로그램 2",
    "진료 프로그램 3"
];

//! 지역지점 클릭시 
function on_reservation_subject_print() {
    //! 경로 base64 로 인코딩
    let ajax_core = btoa("/_mir/reservation/reservation.ajax.core.php");
    //! 인코딩 결과
    console.log(ajax_core);
    //! 디코딩 결과
    console.log(atob(ajax_core));

    //! "지역 지점" active
    let er1 = document.getElementById("reservation_local_sub_title");
    (!er1.classList.contains("active")) ? er1.classList.add("active") : null;
    let er2 = document.getElementById("reservation_local_li");
    (!er2.classList.contains("active")) ? er2.classList.add("active") : null;

    //! 기존 "진료 과목, 진료 프로그램" element 모두 삭제
    DOM().Del_El("reservation_subject_ul");
    DOM().Del_El("reservation_program_ul");

    //! "진료 과목" 데이터 추가
    on_reservation_program_print();
}

function on_reservation_program_print() {

    //! "진료 과목" 데이터 추가
    for (let i = 0; i < data_1.length; i++) {
        let subject = DOM().Get_Option("li");
        subject.id = "reservation_subject_no_select";
        subject.className = "bdbox gray_color reservation_subject_li no_select";
        subject.onclick = () => {
            //! 기존 "진료 과목" active 모두 삭제
            DOM().Clear_Class("reservation_subject_ul");

            //! "진료 프로그램" element 삭제
            DOM().Del_El("reservation_program_ul");

            //! "진료 과목" 클릭한 부분 active
            (!subject.classList.contains("active")) ? subject.classList.add("active") : null;

            //! "진료 프로그램" 데이터 추가
            for (let i = 0; i < data_2.length; i++) {
                let program = DOM().Get_Option("li");
                program.id = "reservation_program_li_no_select";
                program.className = "cf bdbox gray_color no_select reservation_program_li";
                program.onclick = () => {
                    //! 기존 "진료 프로그램" active 모두 삭제
                    DOM().Clear_Class("reservation_program_ul");

                    //! "진료 프로그램" 클릭한 부분 active
                    (!program.classList.contains("active")) ? program.classList.add("active") : null;
                }

                let program_child_1 = DOM().Get_Option("p");
                program_child_1.className = "reservation_list_text";
                program_child_1.textContent = data_2[i];

                program.append(program_child_1);

                DOM().Set_Option("reservation_program_ul", program);
            }
        }

        //! "진료 과목" 이름
        let subject_child_1 = DOM().Get_Option("p");
        subject_child_1.className = "reservation_list_text";
        subject_child_1.textContent = data_1[i];

        //! "진료 과목" 아이콘
        let subject_child_2 = DOM().Get_Option("span");
        subject_child_2.className = "material-icons";
        subject_child_2.textContent = "check_circle";

        //! "진료 과목" subject 에 append
        subject.append(subject_child_1, subject_child_2);

        //! 데이터 append
        DOM().Set_Option("reservation_subject_ul", subject);
    }
}