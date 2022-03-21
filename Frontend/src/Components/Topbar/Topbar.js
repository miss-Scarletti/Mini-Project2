function loadNavBar() {
    $.get("/src/Components/Topbar/Topbar.html", function (data) {
        $("#nav-placeholder").replaceWith(data);
      });
}