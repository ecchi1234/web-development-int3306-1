document.getElementById("name").focus();

document.getElementById("name").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "address");
});
document.getElementById("name").addEventListener("blur", function (e) {
  this.value = normalizeName(this.value);
});
document.getElementById("address").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "sex1");
});
document.getElementById("sex1").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "sex2");
});

document.getElementById("sex2").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "dob");
});
document.getElementById("dob").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "email");
});
document.getElementById("email").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "phone");
});

document.getElementById("email").addEventListener("blur", function (e) {
  isEmail(this.value);
});

document.getElementById("dob").addEventListener("change", function () {
  if (isDateOfBirth(this.value)) {
    document.getElementsByClassName("dob-error")[0].innerHTML = "";
  } else {
    document.getElementsByClassName("dob-error")[0].innerHTML =
      "Bạn phải nhập đúng định dạng ngày sinh!";
  }
});

document.getElementById("dob").addEventListener("keyup", function () {
  addSlash();
});

document.getElementById("phone").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "course-1");
});
document.getElementById("course-1").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "course-2");
});
document.getElementById("course-2").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "course-3");
});
document.getElementById("course-3").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "username");
});
document.getElementById("username").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "password");
});
document.getElementById("password").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "re-pass");
});
document.getElementById("re-pass").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "note");
});
document.getElementById("note").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "upImage");
});
document.getElementById("upImage").addEventListener("keyup", function (e) {
  onKeyUp(e, this, "submit-button");
});

document.getElementById("re-pass").addEventListener("change", function () {
  if (!checkEquivalentPass()) {
    document.getElementsByClassName("re-pass-error")[0].innerHTML =
      "Mật khẩu gõ lại không đúng";
  } else {
    document.getElementsByClassName("re-pass-error")[0].innerHTML = "";
  }
});

document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    onSubmit();
  });
function onKeyUp(e, thisElement, nextElementId) {
  if (window.event) e = window.event;
  if (e.keyCode == 13) document.getElementById(nextElementId).focus();
}

function normalizeName(name) {
  let newName = name.trim();
  let result = "";
  for (let i = 0; i < newName.length; i++) {
    if ((newName[i - 1] === " " && newName[i] !== " ") || i === 0) {
      result += newName[i].toUpperCase();
    } else if (newName[i - 1] !== " " && newName[i] !== " ") {
      result += newName[i].toLowerCase();
    } else {
      result += newName[i];
    }
  }
  return result;
}

function isEmail(email) {
  var patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email !== "" && email.match(patt)) {
    var error = (document.getElementsByClassName("email-error")[0].innerHTML =
      "");
    return true;
  } else if (email !== "") {
    var error = document.getElementsByClassName("email-error");
    error[0].innerHTML = "Bạn phải nhập đúng định dạng email!";
  }
}

function isDateOfBirth(dob) {
  var check = dob.split("/");

  if (check.length != 3) return false;
  if (isNaN(check[0]) || isNaN(check[1]) || isNaN(check[2])) return false;

  var date = parseInt(check[0]);
  var month = parseInt(check[1]);
  var year = parseInt(check[2]);

  if (month > 12 || month < 1) {
    return false;
  }
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    if (date > 31) {
      return false;
    }
  } else if (month == 2) {
    if (year % 4 == 0 && year % 100 != 0) {
      if (date > 29) {
        return false;
      }
    } else if (date > 28) {
      return false;
    }
  } else if (date > 30) {
    return false;
  }

  if (date < 1) {
    return false;
  }

  var testDate = new Date();

  if (year > testDate.getFullYear() || year.toString().split("").length < 4) {
    return false;
  }

  return true;
}

function addSlash() {
  var dob = document.getElementById("dob");
  if (dob.value.split("").length === 2 || dob.value.split("").length === 5) {
    dob.value += "/";
  }
}

function checkEquivalentPass() {
  var pass = document.getElementById("password").value;
  var rePass = document.getElementById("re-pass").value;

  if (pass === rePass) {
    return true;
  } else {
    return false;
  }
}

function onSubmit() {
  var requiredTextElements = document.getElementsByClassName("required");
  for (let e of requiredTextElements) {
    if (e.value === "") {
      e.nextElementSibling.innerHTML = "Bạn phải nhập trường dữ liệu này";
    } else {
      e.nextElementSibling.innerHTML = "";
    }
  }

  // check empty for gender and course
  // first: gender
  var male = document.getElementById("sex1");
  var female = document.getElementById("sex2");
  if (male.checked && female.checked) {
    document.getElementsByClassName("sex-error")[0].innerHTML =
      "Bạn chỉ được điền một trong hai ô!";
  } else if (!male.checked && !female.checked) {
    document.getElementsByClassName("sex-error")[0].innerHTML =
      "Bạn phải tích vào một ô!";
  } else {
    document.getElementsByClassName("sex-error")[0].innerHTML = "";
  }
  // second: course
  var english = document.getElementById("course-1");
  var manage = document.getElementById("course-2");
  var it = document.getElementById("course-3");

  if (!english.checked && !manage.checked && !it.checked) {
    document.getElementsByClassName("course-error")[0].innerHTML =
      "Bạn phải chọn ít nhất một khóa học!";
  } else {
    document.getElementsByClassName("course-error")[0].innerHTML = "";
  }
}
