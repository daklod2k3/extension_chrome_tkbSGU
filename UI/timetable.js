// tkb = [ { "MaMH": "841022", "TenMH": " Hệ điều hành", "NMH": "01", "Thu": "Ba", "TietBD": "6", "ST": "2", "Phong": "C.A111", "CBGD": "11364", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841022", "TenMH": " Hệ điều hành", "NMH": "01", "Thu": "Hai", "TietBD": "9", "ST": "2", "Phong": "C.C107", "CBGD": "11364", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841044", "TenMH": " Lập trình hướng đối tượng", "NMH": "04", "Thu": "Năm", "TietBD": "6", "ST": "2", "Phong": "C.A101", "CBGD": "11271", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841044", "TenMH": " Lập trình hướng đối tượng", "NMH": "04", "Thu": "Năm", "TietBD": "8", "ST": "3", "Phong": "C.A303", "CBGD": "11271", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841109", "TenMH": " Cơ sở dữ liệu", "NMH": "11", "Thu": "Bảy", "TietBD": "4", "ST": "2", "Phong": "C.A102", "CBGD": "20766", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841109", "TenMH": " Cơ sở dữ liệu", "NMH": "11", "Thu": "Bảy", "TietBD": "1", "ST": "3", "Phong": "C.A503", "CBGD": "20766", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841310", "TenMH": " Lý thuyết đồ thị", "NMH": "01", "Thu": "Hai", "TietBD": "6", "ST": "3", "Phong": "C.E603", "CBGD": "10943", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841419", "TenMH": " Lập trình web và ứng dụng", "NMH": "07", "Thu": "Ba", "TietBD": "1", "ST": "2", "Phong": "C.HB403", "CBGD": "10991", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841419", "TenMH": " Lập trình web và ứng dụng", "NMH": "07", "Thu": "Ba", "TietBD": "3", "ST": "3", "Phong": "C.E305", "CBGD": "10991", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "862101", "TenMH": " Giáo dục thể chất (I)", "NMH": "33", "Thu": "Hai", "TietBD": "1", "ST": "2", "Phong": "C.S_B02", "CBGD": "10035", "Tuan": "123456789012345", "th": 0 } ]

// ren(tkb)
function ren(tkb, div){
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
            '<td class="stt bg-white"></td>' +
            '<td class="thead_td">Thứ Hai</td>' +
            '<td class="thead_td">Thứ Ba</td>' +
            '<td class="thead_td">Thứ Tư</td>' +
            '<td class="thead_td">Thứ Năm</td>' +
            '<td class="thead_td">Thứ Sáu</td>' +
            '<td class="thead_td">Thứ Bảy</td>' +
            '<td class="stt bg-white"></td>';
    
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
            if (j == 1 || j == 8) {
                col.className = "stt";
                col.innerHTML = "<div>" + "Tiết " + i + "</div>";
            } else {
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
            const start = item["TietBD"];
            const day = item["Thu"];
            const total = item["ST"];
            const cell = $(`#d${day}_s${start}`);
            if (cell) {
                // cell.classList == 'course' : bị bỏ qua vì className không chỉ có mỗi course
                // API v2 đã fix lỗi này
                const classList = cell.attr("class") + "";
                // console.log(classList);
                if (classList == "col_basic") {
                    cell.attr("rowspan", total);
                    let th
                    if (item["th"] != 0) th = 
                    "<i class='text-mutted'> (Thực hành) </i>"
                    else th ="";
                    // console.log(item['th']);
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
    
                    const courseType = item["Thu"] - 2 ; // Chỉnh màu
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
            '<td class="stt bg-white"></td>' +
            '<td class="thead_td">Thứ Hai</td>' +
            '<td class="thead_td">Thứ Ba</td>' +
            '<td class="thead_td">Thứ Tư</td>' +
            '<td class="thead_td">Thứ Năm</td>' +
            '<td class="thead_td">Thứ Sáu</td>' +
            '<td class="thead_td">Thứ Bảy</td>' +
            '<td class="stt bg-white"></td>';
        table_body.append(lastRow);
    };
    
    drawSchedule(tkb)
}
