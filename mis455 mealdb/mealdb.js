function connect() {

    var mealTitle = document.getElementById("mealBox").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealTitle}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data));

}

function display(data) {

    console.log(data);

    var oldContent = document.getElementById("showArea");
    oldContent.textContent = "";

    if (data.meals !== null) {

        for (var i = 1; i <= data.meals.length && i <= 5; i++) {

            var newDiv = document.createElement("div");

            newDiv.innerHTML = `
                Meal Title: <b>${data.meals[i - 1].strMeal}</b><br>
                <img src="${data.meals[i - 1].strMealThumb}">
            `;

            newDiv.classList.add("innerStyle");

            oldContent.appendChild(newDiv);

        }

    }

}