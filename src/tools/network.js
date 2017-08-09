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

        dataFile.save().then(function (file) {
            // 文件保存成功

            return successCallback(file)
        }, function (error) {

            // 异常处理
            console.error(error);
        });
    },
    //首页滚动视图获取
    getMainScroll(successCallback){
        var query = new AV.Query('MainScroll')
        query.descending('createdAt')
        query.find().then((data) => {
            var dataArray = []
            for (var model of data) {
                dataArray.push(model.attributes)
            }

            successCallback(dataArray)
        }, (error) => {
            errorCallback(error)
        })
    },
    //首页滚动视图上传
    uploadMainScroll(data, successCallback) {
        var Product = AV.Object.extend('MainScroll')
        var product = new Product()

        if (data.imageArray.length) {
            product.set('imageArray', data.imageArray)
            product.save().then((todo) => {

                return successCallback(todo)
            }, (error) => {

            })
        }
    },
    uploadProdut(uid, data, successCallback) {
        var Product = AV.Object.extend('Product')
        var product = new Product()
        if (uid != undefined && uid != 'new') {

            product = AV.Object.createWithoutData('Product', uid)
        }

        product.set('startDate', data.startDate)
        // product.set('endDate', data.endDate)
        product.set('name', data.name)
        product.set('describe', data.describe)
        product.set('type', data.type)
        product.set('place', data.place)
        product.set('onleyId', data.onleyId)
        product.set('price', data.price)
        product.set('imageArray', data.imageArray)
        product.set('detailContent', data.detailContent)
        product.save().then(function (todo) {
            return successCallback()

        }, function (error) {
            debugger
        });

    },
    uploadTheme(dict, successCallback, errorCallback) {
        var Theme = AV.Object.extend('Theme')
        var theme = new Theme()
        theme.set('name', dict.name)
        theme.set('brief', dict.brief)
        theme.set('imageArray', dict.imageArray)
        theme.save().then((todo) => {
            successCallback()
        }, (error) => {
            errorCallback()
        })
    },
    //获取未完成订单
    getUnReserveList(successCallback,errorCallback){
        var query = new AV.Query('OrderItem')
        query.descending('createdAt')
        query.include('targetItem')
        query.include('targetItem.name')
        query.include('targetItem.onleyId')
        query.find().then((todos)=>{
             var dataArray = []
            if (todos.length) {
                todos.forEach(function(obj) {
                    let myObj = {}
                    myObj.name = obj.attributes.name
                    myObj.phoneNumber = obj.attributes.phoneNumber
                    myObj.peopleCount = obj.attributes.peopleCount
                    myObj.productName = obj.attributes.targetItem.attributes.name
                    myObj.productNumber = obj.attributes.targetItem.attributes.onleyId
                    dataArray.push(myObj)
                }, this);
            }
            return successCallback(dataArray)
        },(error)=>{
            return errorCallback(error)
        })
    },
    getTodoDetail(uid, className, successCallback, errorCallback) {
        if (uid == undefined || uid == 'new') {
            return
        }
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
        query.select(['place', 'name', 'startDate', 'type', 'endDate', 'onleyId', 'price', 'describe', 'imageArray'])
        query.find().then((data) => {
            
            var dataArray = []
            for (var model of data) {
                // model.attributes.endDate = model.attributes.endDate.toISOString().slice(0, 10)
                // model.attributes.startDate = model.attributes.startDate.toISOString().slice(0, 10)
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
    updateProductWithObjectId(uid, dict, successCallback, errorCallback) {
        var todo = AV.Object.createWithoutData('Product', uid)

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