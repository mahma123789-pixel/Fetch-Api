
var alldata = [];


// ==================== MANGO ====================

async function getMango() {

    let req = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=mango"
    );

    let responseBody = await req.json();

    alldata = alldata.concat(responseBody.recipes);
}


// ==================== MELON ====================

async function getMelon() {

    let req = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=melon"
    );

    let responseBody = await req.json();

    alldata = alldata.concat(responseBody.recipes);
}


// ==================== NECTARINE ====================

async function getNectarine() {

    let req = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=nectarine"
    );

    let responseBody = await req.json();

    alldata = alldata.concat(responseBody.recipes);
}


// ==================== ORANGE ====================

async function getOrange() {

    let req = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=orange"
    );

    let responseBody = await req.json();

    alldata = alldata.concat(responseBody.recipes);
}


// ==================== PAPAYA ====================

async function getPapaya() {

    let req = await fetch(
        "https://forkify-api.herokuapp.com/api/search?q=papaya"
    );

    let responseBody = await req.json();

    alldata = alldata.concat(responseBody.recipes);
}


// ==================== GET ALL ====================
async function getAll() {
    alldata = [];

    
    await getMelon();
    await getMango();
    await getNectarine();
    await getOrange();
    await getPapaya();

    displayData(alldata);
}

async function getProduct(product) {
    let req = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${product}`
    );

    let responseBody = await req.json();

    displayData(responseBody.recipes);
}

// عرض All تلقائيًا عند فتح الصفحة
getAll();

// ==================== DISPLAY ====================

var rowData = document.getElementById("rowData");

function displayData(data) {

    var str = "";

    for (var i = 0; i < data.length; i++) {

        // أول كلمتين فقط
        var words = data[i].title.split(" ");
        var shortTitle = words.slice(0, 2).join(" ");

        str += `
        
        <div class="col-md-3 mb-4">

            <div class="recipe">

                <img 
                    src="${data[i].image_url}" 
                    class="w-100"
                >

                <h4 class="mt-3">
                    ${shortTitle}
                </h4>

                <p>
                    ${data[i].publisher}
                </p>

            </div>

        </div>

        `;
    }

    rowData.innerHTML = str;
}
async function getProduct(product) {

    let req = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${product}`
    );

    let responseBody = await req.json();

    displayData(responseBody.recipes);
}