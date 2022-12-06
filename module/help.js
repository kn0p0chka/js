const help = {
    getValue:function (array,key){
        let res = [];
        for (let i = 0; i < array.length; i++){
             res.push(array[i][key])
          }
          return res
    },

    getValue1:function (array,key){
        let res = [];
        for (let i = 0; i < array.length; i++){
             res.push(array[i][key])
          }
          return res
    }
    
}

export const getValue = help.getValue
export const getValue1 = help.getValue1