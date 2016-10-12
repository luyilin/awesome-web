"use strict";
var transObject = function(tableData, keys) {
    let hashTable = {}, res = [];
    for (let i = 0; i < tableData.length; i++) {
        let arr = res, cur = hashTable;
        for (let j = 0; j < keys.length; j++) {
            let key = keys[j], filed = tableData[i][key];
            if (!cur[filed]) {
                let pusher = {
                    value: filed
                }, tmp
                if (j !== (keys.length - 1)) {
                    tmp = []
                    pusher.children = tmp
                }
                cur[filed] = { $$pos: arr.push(pusher) - 1 }
                cur = cur[filed]
                arr = tmp
            } else {
                cur = cur[filed]
                arr = arr[cur.$$pos].children
            }
        }
    }
    return res
    // console.log(res[0].children[0]);
    // console.log(hashTable);
};

// var transObject = function(tableData, keys) {
//     let hashTable = {}, res = []
//     for( let i = 0; i < tableData.length; i++ ) {
//         if(!hashTable[tableData[i][keys[0]]]) {
//             let len = res.push({
//                 value: tableData[i][keys[0]],
//                 children: []
//             })
//             // 在这里要保存key对应的数组序号,不然还要涉及到查找
//             hashTable[tableData[i][keys[0]]] = { $$pos: len - 1 }
//         }
//         if(!hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]]) {
//             let len = res[hashTable[tableData[i][keys[0]]].$$pos].children.push({
//                 value: tableData[i][keys[1]],
//                 children: []
//             })
//             hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]] = { $$pos: len - 1 }
//         }
//         res[hashTable[tableData[i][keys[0]]].$$pos].children[hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]].$$pos].children.push({
//             value: tableData[i][keys[2]]
//         })
//     }
//     return res
// }

var data = [{
    "province": "浙江",
    "city": "杭州",
    "name": "西湖"
}, {
    "province": "四川",
    "city": "成都",
    "name": "锦里"
}, {
    "province": "四川",
    "city": "成都",
    "name": "方所"
}, {
    "province": "四川",
    "city": "阿坝",
    "name": "九寨沟"
}];

var keys = ['province', 'city', 'name'];

console.log(transObject(data, keys));
