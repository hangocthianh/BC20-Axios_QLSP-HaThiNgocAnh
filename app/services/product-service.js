function ProductService(){
    this.getProductListAPI = function(){
        return axios({
            url: "https://6183cae791d76c00172d1b5d.mockapi.io/api/ProductList",
            method: "GET",
        });
    }
}