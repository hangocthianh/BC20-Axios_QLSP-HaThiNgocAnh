function getEle(id){
    return document.getElementById(id);
}
var servicePro = new ProductService();
function getProductList(){
    servicePro
    .getProductListAPI()
    .then(function(result){
        renderProductList(result.data);
    })
    .catch(function(error){
        alert(error);
    });
}
getProductList();

function renderProductList(data) {
    var html = "";
    data.forEach(function(item){
        html += `
        <tr>
            <td>${item.id}</td>
            <td>${item.tenSP}</td>
            <td>${item.gia}</td>
            <td class="w-25 text-center"><img src="../../assets/img/${item.hinhAnh}" alt="" class="w-25 d-inline" ></td>
            <td>${item.moTa}</td>
        </tr>
    
    `;
    });
    getEle("tblDanhSachSP").innerHTML = html;
}
