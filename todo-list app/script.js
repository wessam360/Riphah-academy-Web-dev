let input_tag = document.getElementById("input-btn");
let add_tag = document.getElementById("add-btn");
let del_tag = document.getElementById("del-btn");
let task_data = document.getElementById("task-data");
let data = "";
let counter = 0;
let data_arr =[];
add_tag.addEventListener("click",()=>{
    data_arr[counter] = input_tag.value;
     data += `<div class="task">${input_tag.value}
     <button  id=${counter} class="del-btn"><i class="ri-delete-bin-line"></i></button></div>`;
  task_data.innerHTML = data;
  counter++;
  // console.log(data_arr);
  delete_operation();
})
// del_tag.addEventListener("click",()=>{
//     task_data.innerHTML = ""
//  })

function delete_operation (){
  let task_deletion = document.querySelector(".del-btn");
  task_deletion.addEventListener("click",()=>{
    console.log(task_deletion);
  })
}
 