const createLastRow = function () {
    const lastRow = document.createElement("tr");
    lastRow.innerHTML =
        '<td class="stt bg-white"></td>' +
        '<td class="thead_td">Thứ Hai</td>' +
        '<td class="thead_td">Thứ Ba</td>' +
        '<td class="thead_td">Thứ Tư</td>' +
        '<td class="thead_td">Thứ Năm</td>' +
        '<td class="thead_td">Thứ Sáu</td>' +
        '<td class="thead_td">Thứ Bảy</td>' +
        '<td class="stt bg-white"></td>';
    return lastRow;
};

const initDayAndTeacher = function (tkb) {
    tkb.map((ele) => {
        switch (ele["Thu"]) {
            case ("Hai", "Mon"):
                ele["Thu"] = 2;
                break;
            case ("Ba", "Tue"):
                ele["Thu"] = 3;
                break;
            case ("Tư", "Wed"):
                ele["Thu"] = 4;
                break;
            case ("Năm", "Thu"):
                ele["Thu"] = 5;
                break;
            case ("Sáu", "Fri"):
                ele["Thu"] = 6;
                break;
            case ("Bảy", "Sat"):
                ele["Thu"] = 7;
                break;
        }
        const dataFind = dsgv.find((item) => {
            return ele["CBGD"] == item.id;
        });
        if (dataFind) ele["CBGD"] = dataFind.name;
        return ele;
    });
};
const createLessons = function (table_body) {
    // vẽ 12 hàng ngang
    for (let i = 1; i <= 12; i++) {
        const row = document.createElement("tr");
        for (let j = 1; j <= 8; j++) {
            const className = "col_basic";
            const col = document.createElement("td");
            if (j == 1 || j == 8) {
                col.className = "stt";
                col.innerHTML = "<div>" + "Tiết " + i + "</div>";
            } else {
                col.id = `d${j}_s${i}`;
                col.className = className;
            }
            row.append(col);
        }
        table_body.append(row);
    }
};

const drawSchedule = (data) => {
    data.map((item, index) => {
        const start = item["TietBD"];
        const day = item["Thu"];
        const total = item["ST"];
        const cell = $(`#d${day}_s${start}`);
        if (cell) {
            // cell.classList == 'course' : bị bỏ qua vì className không chỉ có mỗi course
            // API v2 đã fix lỗi này
            const classList = cell.attr("class") + "";
            if (classList == "col_basic") {
                cell.attr("rowspan", total);
                let th;
                if (item["th"] != 0)
                    th = "<i class='text-mutted'> (Thực hành) </i>";
                else th = "";
                console.log(item["th"]);
                cell.html(
                    "<span class='text-color'>" +
                        item["TenMH"] +
                        "</span>" +
                        th +
                        "<br />" +
                        "<i class='text-mutted'>Phòng: </i>" +
                        "<span class='text-color'>" +
                        item["Phong"] +
                        "</span>" +
                        "<br />" +
                        "<i class='text-mutted'>Giảng viên: </i>" +
                        "<span class='text-color'>" +
                        item["CBGD"] +
                        "</span>"
                );

                const courseType = item["Thu"] - 2; //
                cell.addClass("course");
                cell.addClass(`course-${courseType}`);

                let affected = item["TietBD"];
                for (let j = 0; j < item["ST"] - 1; j++) {
                    affected++;
                    const row = $(`#d${day}_s${affected}`);
                    if (row != null) {
                        row.remove();
                    }
                }
            }
        }
    });
    // thêm hàng thứ vào cuối
    table_body.append(createLastRow());
};
