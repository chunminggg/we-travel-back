import AV from 'leancloud-storage';
var APP_ID = 'qDUQr0EmHHn3HOIqb3Re0IHa-gzGzoHsz';
var APP_KEY = 'w2TRHW0KHUkt5mVHtgp9wa2s';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
export default{
    uploadImage(file,successCallback){
        var name = file.name,
     dataFile = new AV.File(name,file);
     
    dataFile.save().then(function(file) {
        // 文件保存成功
        return successCallback(file)
      }, function(error) {
        // 异常处理
        console.error(error);
      });
    },
    uploadProdut(data,successCallback){
        debugger
        var Product = AV.Object.extend('product')
        var product = new Product()
        // startDate:_self.productStartDate,
        //             endDate:_self.productEndDate,
        //             name:_self.productName,
        //             describe:_self.productDes,
        //             type:_self.productTypeSelected,
        //             place:_self.productPlace,
        //             onleyId:_self.productNumber,
        //             price:_self.productPrice,
        //             imageArray:_self.imageArray
        product.set('startDate',data.startDate)
         product.set('endDate',data.endDate)
          product.set('name',data.name)
           product.set('describe',data.describe)
            product.set('type',data.type)
             product.set('place',data.place)
              product.set('onleyId',data.onleyId)
               product.set('price',data.price)
                product.set('imageArray',data.imageArray
                )
        
                product.save().then(function (todo) {
                   return successCallback()
                   
                }, function (error) {
                    
                });

    }

    }
