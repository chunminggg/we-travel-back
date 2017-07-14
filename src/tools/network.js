import AV from 'leancloud-storage';
var APP_ID = 'qDUQr0EmHHn3HOIqb3Re0IHa-gzGzoHsz';
var APP_KEY = 'w2TRHW0KHUkt5mVHtgp9wa2s';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
export default {
    uploadImage(file, successCallback) {
        var name = file.name,
            dataFile = new AV.File(name, file);

        dataFile.save().then(function(file) {
            // 文件保存成功
            return successCallback(file)
        }, function(error) {
            // 异常处理
            console.error(error);
        });
    },
    uploadProdut(data, successCallback) {

        var Product = AV.Object.extend('Product')
        var product = new Product()
        product.set('startDate', data.startDate)
        product.set('endDate', data.endDate)
        product.set('name', data.name)
        product.set('describe', data.describe)
        product.set('type', data.type)
        product.set('place', data.place)
        product.set('onleyId', data.onleyId)
        product.set('price', data.price)
        product.set('imageArray', data.imageArray)

        product.save().then(function(todo) {
            return successCallback()

        }, function(error) {

        });

    },
     uploadTheme(dict, successCallback, errorCallback) {
      var Theme = AV.Object.extend('Theme')  
      var theme = new Theme()
      theme.set('name',dict.name)
      theme.set('brief',dict.brief)
      theme.set('imageArray',dict.imageArray)
      theme.save().then((todo)=>{
           successCallback()
      },(error)=>{
           errorCallback()
      })
    },
    getTodoDetail(uid,className,successCallback,errorCallback){
         var query = new AV.Query(className);
  query.get(uid).then(function (todo) {
      todo.id = todo.attributes.productId 
      successCallback(todo.attributes)
  }, function (error) {
      errorCallback(error)
  });
    },
    getProductList(successCallback, errorCallback) {
        var query = new AV.Query('Product')
        query.find().then((data) => {
            var dataArray = []
            for (var model of data) {
                model.attributes.endDate = model.attributes.endDate.toISOString().slice(0, 10)
                model.attributes.startDate = model.attributes.startDate.toISOString().slice(0, 10)
                model.attributes.uid = model.id
                dataArray.push(model.attributes)
            }

            successCallback(dataArray)
        }, (error) => {
            errorCallback(error)
        })
    },
    deleteProductWithId(uid, successCallback, errorCallback) {
        var todo = AV.Object.createWithoutData('Product', uid);
        todo.destroy().then((success) => {
            successCallback()
        }, (error) => {
            errorCallback()
        });
    },
    getUsers(successCallback, errorCallback) {
        var query = new AV.Query('_User')
        query.find().then((data) => {
            var dataArray = []
            for (var model of data) {
                model.attributes.uid = model.id
                model.attributes.createdAt = model.createdAt.toISOString().slice(0, 10)
                model.attributes.updatedAt = model.updatedAt.toISOString().slice(0, 10)
                dataArray.push(model.attributes)
            }
            successCallback(dataArray)
        }, (error) => {

            errorCallback(error)
        })
    },

   
}