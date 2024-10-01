$(document).ready(function () {
    // Function to perform the operation
    function performOperation(operation) {
        const a = parseFloat($("#num1").val());
        const b = parseFloat($("#num2").val());

        $.get(`http://localhost:8080/calculator/${operation}`, { a: a, b: b })
            .done(function (data) {
                $("#result").text(`Result: ${data}`);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown);
            });
    }

    // Event listeners for buttons
    $("#addButton").click(function () {
        performOperation("add");
    });

    $("#subtractButton").click(function () {
        performOperation("subtract");
    });

    $("#multiplyButton").click(function () {
        performOperation("multiply");
    });

    $("#divideButton").click(function () {
        performOperation("divide");
    });
});
