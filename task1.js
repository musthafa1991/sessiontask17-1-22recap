var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]

let output=[];
var object=function result(input1)
{
     input1.forEach(element => {
          let obj={}
          obj.id=element.id;
          obj.title=element.title;
          obj.childrens=[];
          output.push(obj)
          if(element.childrens.length>0){
               object(element.childrens);
          }
          
     });
    
}
object(input);

console.log(output);


// var output = [
//     {
//          "id": 1,
//          "title": "Title 1",
//          "childrens": []
//     },
//     {
//          "id": 2,
//          "title": "Title 2",
//          "childrens": []
//     },
//     {
//          "id": 3,
//          "title": "Title 3",
//          "childrens": []
//     },
//     {
//          "id": 4,
//          "title": "Title 4",
//          "childrens": []
//     },
//     {
//          "id": 5,
//          "title": "Title 5",
//          "childrens": []
//     }
// ]

