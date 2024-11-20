document.addEventListener("DOMContentLoaded", function () {
    const filterSelect = document.getElementById("filterOptions");

    // Load saved filter
    filterSelect.value = localStorage.getItem("selectedFilter") || "all";

    filterSelect.addEventListener("change", function () {
        localStorage.setItem("selectedFilter", filterSelect.value);
    });
});
