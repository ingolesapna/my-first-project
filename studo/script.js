 let tasks = [];

    function renderTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");

        if (task.editing) {
          const input = document.createElement("input");
          input.value = task.text;
          input.onblur = () => updateTask(index, input.value);
          input.onkeypress = e => {
            if (e.key === "Enter") updateTask(index, input.value);
          };
          li.appendChild(input);
          input.focus();
        } else {
          span.innerText = task.text;
          li.appendChild(span);
        }

 const actionDiv = document.createElement("div");
        actionDiv.classList.add("actions");

        const editBtn = document.createElement("button");
        editBtn.innerText = task.editing ? "Save" : "Edit";
        editBtn.classList.add("editing");
        editBtn.onclick = () => toggleEdit(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = () => deleteTask(index);

        actionDiv.appendChild(editBtn);
        actionDiv.appendChild(deleteBtn);

        li.appendChild(actionDiv);
        taskList.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      if (input.value.trim() === "") return;

      tasks.push({ text: input.value.trim(), editing: false });
      input.value = "";
      renderTasks();
    }
   function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    function toggleEdit(index) {
      tasks = tasks.map((task, i) =>
        i === index ? { ...task, editing: !task.editing } : { ...task, editing: false }
      );
      renderTasks();
    }

    function updateTask(index, newText) {
      tasks[index].text = newText;
      tasks[index].editing = false;
      renderTasks();
    }

    // Initial render
    renderTasks();
