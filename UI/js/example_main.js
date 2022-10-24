// tkb = [ { "MaMH": "841022", "TenMH": " Hệ điều hành", "NMH": "01", "Thu": "Ba", "TietBD": "6", "ST": "2", "Phong": "C.A111", "CBGD": "11364", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841022", "TenMH": " Hệ điều hành", "NMH": "01", "Thu": "Hai", "TietBD": "9", "ST": "2", "Phong": "C.C107", "CBGD": "11364", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841044", "TenMH": " Lập trình hướng đối tượng", "NMH": "04", "Thu": "Năm", "TietBD": "6", "ST": "2", "Phong": "C.A101", "CBGD": "11271", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841044", "TenMH": " Lập trình hướng đối tượng", "NMH": "04", "Thu": "Năm", "TietBD": "8", "ST": "3", "Phong": "C.A303", "CBGD": "11271", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841109", "TenMH": " Cơ sở dữ liệu", "NMH": "11", "Thu": "Bảy", "TietBD": "4", "ST": "2", "Phong": "C.A102", "CBGD": "20766", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841109", "TenMH": " Cơ sở dữ liệu", "NMH": "11", "Thu": "Bảy", "TietBD": "1", "ST": "3", "Phong": "C.A503", "CBGD": "20766", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841310", "TenMH": " Lý thuyết đồ thị", "NMH": "01", "Thu": "Hai", "TietBD": "6", "ST": "3", "Phong": "C.E603", "CBGD": "10943", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841419", "TenMH": " Lập trình web và ứng dụng", "NMH": "07", "Thu": "Ba", "TietBD": "1", "ST": "2", "Phong": "C.HB403", "CBGD": "10991", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "841419", "TenMH": " Lập trình web và ứng dụng", "NMH": "07", "Thu": "Ba", "TietBD": "3", "ST": "3", "Phong": "C.E305", "CBGD": "10991", "Tuan": "123456789012345", "th": 0 }, { "MaMH": "862101", "TenMH": " Giáo dục thể chất (I)", "NMH": "33", "Thu": "Hai", "TietBD": "1", "ST": "2", "Phong": "C.S_B02", "CBGD": "10035", "Tuan": "123456789012345", "th": 0 } ]
function ren(tkb){
    var tuan = []
    tkb = tkb.map((ele)=>{
    switch (ele["Thu"]){
        case "Hai" :
            ele["Thu"] = 2
            break
        case "Ba" :
            ele["Thu"] = 3
            break
        case "Bốn" :
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
        
    }
    return ele
})
tkb.sort((a,b)=>{return a["Thu"] - b["Thu"]})
console.log(tkb);

var tbl = document.createElement('table')
var tbdy = document.createElement('tbody')
tbl.appendChild(tbdy)


for (let i = 0; i < 12; i++){
    let tr = document.createElement('tr')
    tr.id = "row" + i;
    tbl.appendChild(tr)
    for (let j = 0; j < 7; j++){
        let td = document.createElement('td')
        td.id = "block" + i + ',' + j
        td.className = "col_basic"
        tbl.appendChild(td)
    }    
}

let body = document.createElement('body')
body = document.getElementsByTagName('body')[0]
body.appendChild(tbl)

tkb.forEach((ele) => {
    let block = "block" + ele['TietBD'] + ',' + (ele['ST']-2)
    let block_ele = document.getElementById(block)
    block_ele.setAttribute('rowspan', parseInt(ele["ST"]))
    block_ele.textContent = ele["TenMH"]
    for (let i = 1; i < ele['ST']; i++){
        let blockR = "block" + (parseInt(ele['TietBD']) + i) + ',' + (ele['ST']-2)
        console.log(blockR);
        let cell = document.getElementById(blockR)
        // cell.remove()
    }
});
}

