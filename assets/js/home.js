
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
                console.log(response);
                if (response === 'err') {
                    showNotification("Please enter all the details");
                    return;
                }
                if (response) {
                    document.location.href = 'http://localhost:8000';
                }
            }
        });
    });
    // data-id="<%=tasks._id%>"
    deleteBtn.click(function (e) {

        let selectedIds = getSelectedIds();

        $.ajax({
            type: "DELETE",
            url: "http://localhost:8000/delete_task",
            data: { selectedIds: selectedIds },
            success: function (response) {
                if (response) {
                    document.location.href = 'http://localhost:8000';
                }
            }
        });

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

    function getCurrTotalTask(){
        
    }
})();

