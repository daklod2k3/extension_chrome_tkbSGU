

function initTKB(){
    // Init blank table
    const table_TKB = document.createElement('table')
    const tbody_TKB = document.createElement('tr')
    const thead_TKB = document.createElement('tr')
    
    table_TKB.setAttribute('class', 'custom_TKB')

    // Days in week row
    thead_TKB.innerHTML = 
        '<td class="stt"></td>' +
        '<td class="thead_td">Thứ Hai</td>' +
        '<td class="thead_td">Thứ Ba</td>' +
        '<td class="thead_td">Thứ Tư</td>' +
        '<td class="thead_td">Thứ Năm</td>' +
        '<td class="thead_td">Thứ Sáu</td>' +
        '<td class="thead_td">Thứ Bảy</td>';
    
    table_TKB.append(thead_TKB)
    table_TKB.append(tbody_TKB)
    
    for (let i = 1; i <= 12; i++) {
        const row = document.createElement("tr");
        for (let j = 1; j < 8; j++) {
            const className = "col_TKB";
            const col = document.createElement("td");
            if (j == 1) {
                col.className = "stt";
                col.innerHTML = "<div>" + "Tiết " + i + "</div>";
            } else {
                col.id = `r${j}_c${i}`;
                col.className = className;
            }
            row.append(col);
        }
        tbody_TKB.append(row);
    }

    return table_TKB;

}
