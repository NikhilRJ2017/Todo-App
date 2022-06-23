
(() => {
    const addBtn = $('.add-btn');
    const deleteBtn = $('.delete-btn');
    const totalTask = $('#total-tasks');

    addBtn.click(function (e) {

        const task = $('#task');
        let taskVal = task.val();

        const category = $('#category-select');
        let categoryVal = category.val();

        const date = $('#date');
        let dateVal = date.val();

        if(taskVal === '' || dateVal === '' || categoryVal === ''){
            showNotification("Please fill all the details");
        }

        let jsonData = {
            task: taskVal,
            category: categoryVal,
            date: dateVal
        };

        $.ajax({
            type: "POST",
            url: "http://localhost:8000/create_task",
            data: jsonData,
            success: function (response) {
                if (response) {
                    document.location.href = 'http://localhost:8000';
                    return;
                }
            }
        });
    });


    deleteBtn.click(function (e) {

        let selectedIds = getSelectedIds();

        if(selectedIds.length !== 0){
            $.ajax({
                type: "DELETE",
                url: "http://localhost:8000/delete_task",
                data: { selectedIds: selectedIds },
                success: function (response) {
                    if (response) {
                        document.location.href = 'http://localhost:8000';
                        return;
                    }
                }
            });
        }else{
            showNotification("Please select the task/s to delete");
        }
        

    });

    function showNotification(message) {
        alert(message)
    }

    function getSelectedIds() {
        let selectedIds = [];
        $('input:checkbox').each(function () {

            let curr = $(this);
            if (curr.is(":checked")) {
                selectedIds.push(curr.data('id'));
            }
        });

        return selectedIds;

    }

    function getCurrTotalTask() {
        let taskCount;
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/get_count",
            success: function (response) {
                taskCount = response;
                totalTask.text(taskCount);

                if (taskCount === '0') {
                    deleteBtn.css({
                        'opacity': '0.5',
                        'pointer-events': 'none'
                    })
                }
            }
        });

        return taskCount;
    }

    getCurrTotalTask();


})();

