let input_tag = document.getElementById("input-btn");
let add_tag = document.getElementById("add-btn");
let del_tag = document.getElementById("del-btn");
let task_data = document.getElementById("task-data");
let data = "";
let counter = 0;
let data_arr =[];
add_tag.addEventListener("click",()=>{
    data_arr[counter] = input_tag.value;
     data += `<div class="task">${input_tag.value}</div>`;
  task_data.innerHTML = data;
  counter++;
  console.log(data_arr)
})
del_tag.addEventListener("click",()=>{
    task_data.innerHTML = ""
 })