let rows = document.getElementsByTagName("input");
let countChecked = 0;
let lists = document.getElementsByTagName("tr");
for (let i = 1; i < rows.length; i++) {
    rows[i].addEventListener("change", function() {
        if (this.checked) {
            checkTheBox(this.parentNode.parentNode);
            countChecked ++;
        }
        else {
            countChecked --;
            if (document.getElementById("check-all").childNodes[1].checked === true) {
                document.getElementById("check-all").childNodes[1].checked = false;
            }
            unCheckBox(this.parentNode.parentNode);
        }
        if (countChecked === rows.length - 1) {
            document.getElementById("check-all").childNodes[1].checked = true;
        }
        else {
            document.getElementById("check-all").childNodes[1].checked = false;
        }
        console.log(countChecked);
    })
    rows[i].parentNode.parentNode.addEventListener("mouseover", function() {
        this.classList.add("hover-cell");
    })
    rows[i].parentNode.parentNode.addEventListener("mouseout", function() {
        if (this.classList.contains("hover-cell")) {
            this.classList.remove("hover-cell");
        }
    })
}



document.getElementById("check-all").childNodes[1].addEventListener("change", function() {
    if (this.checked) {
        countChecked = 0;
        countChecked += lists.length - 1;
        checkAllRows();
    }
    else {
        countChecked -= lists.length - 1;
        unCheckAllRow();
    }
    console.log(countChecked);
});

function checkTheBox(myself) {
    myself.classList.add("checked-cell");
}

function unCheckBox(myself) {
    myself.classList.remove("checked-cell");
}

function checkAllRows() {
    let checkAll = document.getElementById("check-all");
    if(checkAll.childNodes[1].checked === true) {
        for (let i = 1; i < lists.length; i++) {
            lists[i].childNodes[1].childNodes[1].checked = true;
            checkTheBox(lists[i]);
        }
    }
}

function unCheckAllRow() {
    let checkAll = document.getElementById("check-all");
    if(checkAll.childNodes[1].checked === false) {
        for (let i = 1; i < lists.length; i++) {
            lists[i].childNodes[1].childNodes[1].checked = false;
            unCheckBox(lists[i]);
        }
    }
}

