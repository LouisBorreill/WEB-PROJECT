const form1Visibility = document.getElementById('Form1Visibility');
form1Visibility.addEventListener('click', () => {

  const form = document.getElementById('form1');

  if (form.style.display === 'none') {

    form.style.display = 'block';
    form1Visibility.textContent = "Close";
  } 
  
  else {

    form.style.display = 'none';
    form1Visibility.textContent = "Add a city";
  }
});

const form2Visibility = document.getElementById('Form2Visibility');
form2Visibility.addEventListener('click', () => {

  const form = document.getElementById('form2');

  if (form.style.display === 'none') {

    form.style.display = 'block';
    form2Visibility.textContent = "Close";
  } 
  
  else {

    form.style.display = 'none';
    form2Visibility.textContent = "Remove a city";
  }
});

const add = document.getElementById("Add");
add.addEventListener("click", addCity);

const remove = document.getElementById("Remove");
remove.addEventListener("click", removeCity);

var cityAdd = document.getElementById("NameAdd");
cityAdd.addEventListener("input", event => {

    cityAdd.textContent = event.data;
});

var cityRemove = document.getElementById("NameRemove");
cityRemove.addEventListener("input", event => {

  cityRemove.textContent = event.data;
});

var description = document.getElementById("Description");
description.addEventListener("input", event => {

    description.textContent = event.data;
    console.log(description.value);
});

function addCity() {

  var errorAdd = document.getElementById("ErrorAdd");

  if (document.getElementById(cityAdd.value)) {

    errorAdd.textContent = "Error: this city already exists";
  }

  else {

    errorAdd.textContent = "";

    var div = document.getElementById("list");
    var newCity = document.createElement("div");
    newCity.className += "pictures";
    newCity.id += cityAdd.value;
    div.appendChild(newCity);

    div = document.getElementById(cityAdd.value);

    var name = document.createElement("h4");
    name.contentEditable = "true";
    name.textContent = cityAdd.value;

    var pictureAdd = document.getElementById("Picture").files[0];
    const reader = new FileReader;
    var img = document.createElement("img");

    reader.addEventListener("load", function () {

      img.src = reader.result;
    }, false);

    img.src = reader.readAsDataURL(pictureAdd);
    img.width = "290";
    img.height = "145";

    var info = document.createElement("h4");
    info.contentEditable = "true";
    info.textContent = description.value;

    div.appendChild(name);
    div.appendChild(img);
    div.appendChild(info);

    this.form.reset();
  }
}

function removeCity() {

  var errorRemove = document.getElementById("ErrorRemove");

  if(document.getElementById(cityRemove.value)) {

    errorRemove.textContent = "";

    var div = document.getElementById(cityRemove.value);
    div.remove();

    cityRemove.value = "";
  }

  else {

      errorRemove.textContent = "Error: this city does not exists"
  }
}
