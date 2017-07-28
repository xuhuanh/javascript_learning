/**
 * Created by xuhuanhuan on 2017/7/20.
 */


// 根据包名，在指定空间中创建对象
// 输入描述:
//
//     namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
//
//
//
// 输出描述:
//
// {a: {test: 1, b: {c: {d: {}}}}}

function namespace(oNamespace,sPackage) {
    var arr = sPackage.split('.');    //arr[0]=a,arr[1]=b,arr[2]=c,arr[3]=d

    var res = oNamespace;          //保留对原始对象的引用

    for(var i=0;i<arr.length;i++){
        if(arr[i] in oNamespace){
            if (typeof oNamespace[arr[i]]!=="object"){
                oNamespace[arr[i]] ={};
            }

        }else {
            oNamespace[arr[i]] ={};
        }

        oNamespace=oNamespace[arr[i]];
    }
    return res;
}