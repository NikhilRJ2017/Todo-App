
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

    deleteBtn.click(function (e) {



    });

    function showNotification(message) {
        alert(message)
    }
})();

