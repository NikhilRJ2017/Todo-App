
//IIFE module design
(() => {

    //collecting add task button
    const addBtn = $('.add-btn');

    //collecting delete task button
    const deleteBtn = $('.delete-btn');

    //collecting total task span
    const totalTask = $('#total-tasks');

    //initiating some of the routines
    initialization();

    function initialization() {
        //setting the minimum date to current date so that user can't create TODO's using past dates
        function setMinDateToToday() {
            let now = new Date();
            minDate = now.toISOString().substring(0, 10);
            $('#date').attr('min', minDate);
        }

        setMinDateToToday();

        //get the total task in database
        function getCurrTotalTask() {
            let taskCount;
            // AJAX call to get_count api
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

    }

    //add task event listener
    addBtn.click(function (e) {

        //collecting the task description
        const task = $('#task');
        let taskVal = task.val();

        //collecting the task category
        const category = $('#category-select');
        let categoryVal = category.val();

        //collecting the due date for task
        const date = $('#date');
        let dateVal = date.val();

        //showing alert if even one of the values are not provided
        if (taskVal === '' || dateVal === '' || categoryVal === '') {
            showNotification("Please fill all the details");
            return;
        }

        //creating json format to send it over to server
        let jsonData = {
            task: taskVal,
            category: categoryVal,
            date: dateVal
        };

        //AJAX POST call to create_task api
        $.ajax({
            type: "POST",
            url: "http://localhost:8000/create_task",
            data: jsonData,
            success: function (response) {
                //if positive response the refreshing the page
                if (response) {
                    document.location.href = 'http://localhost:8000';
                    return;
                }
            }
        });
    });


    //delete task event listener 
    deleteBtn.click(function (e) {

        //getting all the selected ids
        let selectedIds = getSelectedIds();

        // if selected, AJAX delete call to delete task api
        if (selectedIds.length !== 0) {
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
        } else {
            // if none selected user can't delete and there for alerting user
            showNotification("Please select the task/s to delete");
        }


    });

    //show varoius alert messages
    function showNotification(message) {
        alert(message)
    }

    //get selected ids for deletion
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

})();

