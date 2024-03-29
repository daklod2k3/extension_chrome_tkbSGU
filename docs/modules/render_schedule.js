// tkb = [ { "MaMH": "841022", "TenMH": " Hệ điều hành", "NMH": "01", "Thu": "Ba", "TietBD": "6", "ST": "2", "Phong": "C.A111", "CBGD": "11364", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841022", "TenMH": " Hệ điều hành", "NMH": "01", "Thu": "Hai", "TietBD": "9", "ST": "2", "Phong": "C.C107", "CBGD": "11364", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841044", "TenMH": " Lập trình hướng đối tượng", "NMH": "04", "Thu": "Năm", "TietBD": "6", "ST": "2", "Phong": "C.A101", "CBGD": "11271", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841044", "TenMH": " Lập trình hướng đối tượng", "NMH": "04", "Thu": "Năm", "TietBD": "8", "ST": "3", "Phong": "C.A303", "CBGD": "11271", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841109", "TenMH": " Cơ sở dữ liệu", "NMH": "11", "Thu": "Bảy", "TietBD": "4", "ST": "2", "Phong": "C.A102", "CBGD": "20766", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841109", "TenMH": " Cơ sở dữ liệu", "NMH": "11", "Thu": "Bảy", "TietBD": "1", "ST": "3", "Phong": "C.A503", "CBGD": "20766", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841310", "TenMH": " Lý thuyết đồ thị", "NMH": "01", "Thu": "Hai", "TietBD": "6", "ST": "3", "Phong": "C.E603", "CBGD": "10943", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841419", "TenMH": " Lập trình web và ứng dụng", "NMH": "07", "Thu": "Ba", "TietBD": "1", "ST": "2", "Phong": "C.HB403", "CBGD": "10991", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841419", "TenMH": " Lập trình web và ứng dụng", "NMH": "07", "Thu": "Ba", "TietBD": "3", "ST": "3", "Phong": "C.E305", "CBGD": "10991", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "862101", "TenMH": " Giáo dục thể chất (I)", "NMH": "33", "Thu": "Hai", "TietBD": "1", "ST": "2", "Phong": "C.S_B02", "CBGD": "10035", "Tuan": "123456789012345", "th": 0 } ]

// ren(tkb)
function render_schedule(tkb, div, week = 1){
    // console.log(week);

    const time = (n) =>{
        switch (n) {
            case 1:
                return "7h00 - 7h45";
            case 2:
                return "7h50 - 8h40";
            case 3:
                return "9h00 - 9h50";
            case 4:
                return "9h50 - 10h40";
            case 5:
                return "10h40 - 11h30"
            case 6:
                return "13h00 - 13h50";
            case 7:
                return "13h50 - 14h40";
            case 8:
                return "15h00 - 15h50";
            case 9:
                return "15h50 - 16h40";
            case 10:
                return "16h40 - 17h30";
            case 11:
                return ""
            case 12:
                return ""
        }   
    }

    div.innerHTML = ""
    const table = document.createElement('table')
    table.setAttribute('class', 'custom_table')
    div.appendChild(table)
    tkb = tkb.map((ele)=>{
        switch (ele["Thu"]){
            case "Hai" :
                ele["Thu"] = 2
                break
            case "Ba" :
                ele["Thu"] = 3
                break
            case "Tư" :
                ele["Thu"] = 4
                break
            case "Năm" :
                ele["Thu"] = 5
                break
            case "Sáu" :
                ele["Thu"] = 6
                break
            case "Bảy" :
                ele["Thu"] = 7
                break
            case "Mon" :
                ele["Thu"] = 2
                break
            case "Tue" :
                ele["Thu"] = 3
                break
            case "Wed" :
                ele["Thu"] = 4
                break
            case "Thu" :
                ele["Thu"] = 5
                break
            case "Fri" :
                ele["Thu"] = 6
                break
            case "Sat" :
                ele["Thu"] = 7
                break
            
        }
        const dataFind = dsgv.find(item =>{return ele["CBGD"] == item.id})
        if (dataFind) ele["CBGD"] = dataFind.name
        return ele
    })
    
    const lastRow = document.createElement("tr");
        lastRow.innerHTML =
            '<td class="thead_td bg-white fixed-col"></td>' +
            '<td class="thead_td">Thứ Hai</td>' +
            '<td class="thead_td">Thứ Ba</td>' +
            '<td class="thead_td">Thứ Tư</td>' +
            '<td class="thead_td">Thứ Năm</td>' +
            '<td class="thead_td">Thứ Sáu</td>' +
            '<td class="thead_td">Thứ Bảy</td>' +
            '<td class="thead_td bg-white"></td>';
    
    // Vẽ bảng rỗng
    
    const table_body = document.createElement('tbody')
    table.appendChild(table_body)
    table_body.append(lastRow)
    // vẽ 12 hàng ngang
    for (let i = 1; i <= 12; i++) {
        const row = document.createElement("tr");
        for (let j = 1; j <= 8; j++) {
            const className = "col_basic";
            const col = document.createElement("td");
            if (j == 1) {
                col.className = "stt fixed-col";
                col.innerHTML = "<div>" + "Tiết " + i + "</div>" + `<div style="{min-height: 0px !important}">${time(i)} </div>`;
            }else
            if (j == 8)
            {
                col.className = "stt"
                col.innerHTML = "<div>" + "Tiết " + i + "</div>" + `<div style="{min-height: 0px !important}">${time(i)} </div>`;
            } 
            else {
                col.id = `d${j}_s${i}`;
                col.className = className;
            }
            row.appendChild(col);
        }
        table_body.appendChild(row);
    }
    
    // fetch(`/api/getTimeTableByStudentId/${id}`)
    //     .then((jsonText) => jsonText.json())
    //     .then((json) => {
    //         if (json.isSuccess) {
    //             $("#loading").hide();
    //             $("#studentId").text(json.additionalData.id);
    //             $("#studentName").text(json.additionalData.name);
    //             $("#studentFaculty").text(json.additionalData.faculty);
    //             drawSchedule(json.data);
    //         } else {
    //             alert(json.message);
    //             history.back();
    //         }
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     });
    
    const drawSchedule = (data) => {
        data.map((item, index) => {
            if (week >= 10){
                if (item["Tuan"][week - 1] != week % 10) return
            }
            else
                if (item["Tuan"][week - 1] != week) return
            const start = item["TietBD"];
            const day = item["Thu"];
            const total = item["ST"];
            $(`#d${day}_s${start}`).append("<div class='card'></div>");
            // $(`#d${day}_s${start} > `).append("<div class='card'></div>")
            const cell =  $(`#d${day}_s${start} >`)
            // console.log(cell);
            if (cell) {
                // cell.classList == 'course' : bị bỏ qua vì className không chỉ có mỗi course
                // API v2 đã fix lỗi này
                const classList = $(`#d${day}_s${start}`).attr("class") + "";
                // console.log(classList);
                if (classList == "col_basic") {
                    $(`#d${day}_s${start}`).attr("rowspan", total);
                    let th
                    if (item["th"] === "01") th = 
                    "<i class='text-mutted'> (Thực hành) </i>"
                    else th ="";
                    // console.log(item['th']);
                    $(`#d${day}_s${start} > `).html(
                        // "<div class = \"card\">" +
                            "<span class='text-color' style=\"{font-weight:bold !important}\">" +
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
                        // "</div>"    
                            );
    
                    const courseType = item["Thu"] - 1; // Chỉnh màu
                    cell.addClass("course");
                    cell.addClass(`course-${courseType}`);
                    // console.log(cell);
    
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
        const lastRow = document.createElement("tr");
        lastRow.innerHTML =
            '<td ></td>' +
            '<td class="header-fill"></td>' +
            '<td class="header-fill"></td>' +
            '<td class="header-fill"></td>' +
            '<td class="header-fill"></td>' +
            '<td class="header-fill"></td>' +
            '<td class="header-fill"></td>' +
            '<td ></td>';
        // table_body.append(lastRow);
    };
    
    drawSchedule(tkb)
}
