function babo(help) {
    console.log("test");
    help();
}

babo(function() {
    console.log("test2");
})