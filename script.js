window.onload = (event) => {
    //declaration
      const textInput=document.querySelector('#text-input');
      const formInput=document.querySelector('#input-form');
      const taskCountDisplay=document.querySelector('#task-count');
      const noTaskDisplay=document.querySelector('.no-task-display');
      const taskList=document.querySelector('.task-list-wrapper');
      let taskCount=0;
      taskCountDisplay.innerHTML=taskCount;
    //Event binding
    formInput.addEventListener('submit',(e)=>{
      e.preventDefault();
      //fetch data
      const taskData=textInput.value;
      //clear input Text element
      textInput.value='';
      //clear display 
      noTaskDisplay.style.display='none';
      //create element
      const taskContainer=document.createElement('div');
      taskContainer.classList.add('single-task-item')
      //create inner element-container
      const checkBoxContainer=document.createElement('div');
      checkBoxContainer.classList.add('task-checkbox-wrapper');
      const taskDataContainer=document.createElement('div');
      taskDataContainer.classList.add('task-data-wrapper');
      const btnContainer=document.createElement('div');
      btnContainer.classList.add('task-btn-wrapper');
      //create inner element-container control
      const checkBox=document.createElement('input');
      checkBox.setAttribute('type','checkbox');
      const taskItem=document.createElement('input');
      taskItem.setAttribute('type','text');
      taskItem.setAttribute('readonly','false');
      taskItem.setAttribute('value',taskData);
      const editButton=document.createElement('button');
      editButton.innerHTML='EDIT';
      const deleteButton=document.createElement('button');
      deleteButton.innerHTML='DELETE';
      //appending the element to inner element-container control
      checkBoxContainer.append(checkBox);
      taskDataContainer.append(taskItem);
      btnContainer.append(editButton);
      btnContainer.append(deleteButton);
      //appending the inner element-container to task container
      taskContainer.append(checkBoxContainer);
      taskContainer.append(taskDataContainer);
      taskContainer.append(btnContainer);
      taskCount++;
      taskCountDisplay.innerHTML=taskCount;
      taskList.prepend(taskContainer);
      //event binding
        checkBox.addEventListener('click',function(e){
            taskContainer.classList.toggle('task-completed-style');
        });
      editButton.addEventListener('click',function(e){
           if(e.target.innerHTML=='EDIT'){
             taskItem.removeAttribute('readonly');
             taskItem.focus();
             e.target.innerHTML='SAVE';
             e.target.style.backgroundColor='green';
           }else{
             taskItem.setAttribute('readonly','false');
             e.target.innerHTML='EDIT';
             e.target.style.backgroundColor='orange';
           }
      });
      deleteButton.addEventListener('click',function(e){
          const task_item=e.target.parentElement.parentElement;
          task_item.classList.add('animate-remove');
          setTimeout(function(){
            task_item.remove();
            taskCount--;
            taskCountDisplay.innerHTML=taskCount;
            if(taskCount==0){
                noTaskDisplay.style.display='block';
            }
          },2000);
        
      });
      
    });
    };