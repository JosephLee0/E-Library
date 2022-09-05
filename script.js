let allBooksA = [
  // {
  //   name: "The King of Drugs",
  //   author: "NORA BARRETT",
  //   noOfPages: 40,
  //   categories: "health",
  //   ratings: 4.5,
  //   price: 30,
  //   lendingPrice: 5,
  //   published: 2020,
  //   img: 1,
  //   type: "Ebook",
  // },
  // {
  //   name: "Creative Business Startup",
  //   author: "JEN BRAZEL",
  //   noOfPages: 40,
  //   categories: "business",
  //   ratings: 4.5,
  //   price: 30,
  //   lendingPrice: 5,
  //   published: 2022,
  //   img: 2,
  //   type: "Ebook",
  // },
  // {
  //   name: "Made to Impress",
  //   author: "ANDREW CRIS",
  //   noOfPages: 56,
  //   categories: "art",
  //   ratings: 4.65,
  //   price: 34,
  //   lendingPrice: 8,
  //   published: 2021,
  //   img: 3,
  //   type: "Audio",
  // },
  // {
  //   name: "Lost Stars",
  //   author: "RITA SKEETER",
  //   noOfPages: 29,
  //   categories: "geography",
  //   ratings: 5.0,
  //   price: 50,
  //   lendingPrice: 15,
  //   published: 2022,
  //   img: 4,
  //   type: "Ebook",
  // },
  // {
  //   name: "Make Everyday Valentines Days",
  //   author: "MEGAN CREWS",
  //   noOfPages: 56,
  //   categories: "romance",
  //   ratings: 4.2,
  //   price: 28,
  //   lendingPrice: 4,
  //   published: 2022,
  //   img: 5,
  //   type: "Ebook",
  // },
  // {
  //   name: "Peace and War",
  //   author: "KEN ADAMS",
  //   noOfPages: 47,
  //   categories: "history",
  //   ratings: 4.9,
  //   price: 42,
  //   lendingPrice: 7,
  //   published: 2019,
  //   img: 6,
  //   type: "Audio",
  // },
  // {
  //   name: "Planting the Seed of Hope",
  //   author: "REAGAN BARKER",
  //   noOfPages: 33,
  //   categories: "investment",
  //   ratings: 4.5,
  //   price: 30,
  //   lendingPrice: 5,
  //   published: 2021,
  //   img: 7,
  //   type: "Ebook",
  // },
  // {
  //   name: "The Way of The Nameless",
  //   author: "GRAHAM DOUGLASS",
  //   noOfPages: 47,
  //   categories: "motivation",
  //   ratings: 3.7,
  //   price: 30,
  //   lendingPrice: 9,
  //   published: 2019,
  //   img: 8,
  //   type: "magazine",
  // },
  // {
  //   name: "Away",
  //   author: "SYLVIA WALKER",
  //   noOfPages: 41,
  //   categories: "art",
  //   ratings: 4.0,
  //   price: 42,
  //   lendingPrice: 6,
  //   published: 2020,
  //   img: 9,
  //   type: "Ebook",
  // },
  // {
  //   name: "The Dawn of Light",
  //   author: "FELICIA LAGERFELT",
  //   noOfPages: 40,
  //   categories: "art",
  //   ratings: 4.9,
  //   price: 40,
  //   lendingPrice: 10,
  //   published: 2019,
  //   img: 10,
  //   type: "Ebook",
  // },
];
let userArray = [
  // {
  //   name: "josh",
  //   username: "josephlee",
  //   email: "tat@gmail.com",
  //   password: "jos111",
  //   mybooks: [
  //     { name: "Creative Business Startup", status: "borrow" },
  //     { name: "The King of Drugs", status: "bought" },
  //     { name: "Made to Impress", status: "bought" },
  //     { name: "Lost Stars", status: "borrow" },
  //   ],
  //   wishlist: [],
  //   securtyQuestion1: "My first pet",
  //   securityAnswer1: "Tiger",
  //   securtyQuestion2: "My first pet",
  //   securityAnswer2: "Tiger",
  //   status: false,
  //   priviledge: "admin",
  // },
  // {
  //   name: "Eni",
  //   username: "Enilee",
  //   email: "enlee@gmail.com",
  //   password: "bessoo",
  //   mybooks: [
  //     { name: "Made to Impress", status: "bought" },
  //     { name: "Lost Stars", status: "borrow" },
  //   ],
  //   wishlist: [],
  //   securtyQuestion1: "My first cow",
  //   securityAnswer1: "malu",
  //   securtyQuestion2: "My first rat",
  //   securityAnswer2: "white",
  //   status: false,
  //   priviledge: "user",
  // },
];
let bestSellingA = [];
let recentA = [];
let myBookA = [];
let searchA = [];
let updatedBookName = [];
let pract = [
  {
    name: "white",
  },
  {
    name: "blue",
  },
];
let currentUser, activeUser;
let empty, usernaameExist, emailExist;

// -------------------
// GENERAL***
// -------------------
let pageLife = document.getElementById("main-container");
let admin1 = document.getElementById("admin1");
let login1 = document.getElementById("login1");
let signup1 = document.getElementById("signup1");
let sprofile = document.getElementById("sprofile");
let profList = document.getElementById("adminlist");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");

// -------------------
// REGISTER***
// -------------------
let registerLife = document.getElementById("register");
let regPage = document.getElementById("reg-page");
let flow = document.getElementById("flow");
let regName = document.getElementById("regname");
let regUsername = document.getElementById("regusername");
let regEmail = document.getElementById("regemail");
let regPassword = document.getElementById("regpassword");
let regCP = document.getElementById("confirmpassword");
let regSq1 = document.getElementById("SQ1");
let regSa1 = document.getElementById("SA1");
let regSq2 = document.getElementById("SQ2");
let regSa2 = document.getElementById("SA2");

// -------------------
// LOGIN***
// -------------------
let loginLife = document.getElementById("login");
let loginPassword = document.getElementById("loginpassword");
let loginUsername = document.getElementById("loginusername");

// -------------------
// FORGET PASSWORD***
// -------------------
let fPLife = document.getElementById("forgetpassword");
let fpUserDisplay = document.getElementById("fpuser");
let fpUsername = document.getElementById("fpui");
let fpAsw1 = document.getElementById("fpasw1");
let fpAsw2 = document.getElementById("fpasw2");

// -------------------
// ADDBOOK***
// -------------------
let bookLife = document.getElementById("generaldisplay");
let generalDisplay = document.getElementById("generalID");

// -------------------
// ALL BOOKS***
// -------------------
let allbooks = document.getElementById("allbooks");
let myBooks = document.getElementById("mybook");
let searchBooks = document.getElementById("searchbook");
let bestSellings = document.getElementById("bestsellings");
let recents = document.getElementById("recents");
let searchWord = document.getElementById("searhword");
let showSearch = document.getElementById("show-search");
let navBook = document.getElementById("navbook");

// -------------------
// SMOOTH SCROLLING***
// -------------------
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// -------------------
// STICKY NAVIGATION***
// -------------------
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-110px",
  }
);
obs.observe(sectionHeroEl);

// -------------------
// LOADING/STORAGE***
// -------------------
function loadStorageData() {
  let items = localStorage.getItem("allBooks");
  let items2 = localStorage.getItem("userArr");
  let items3 = localStorage.getItem("activeUser");
  if (items) {
    allBooksA = JSON.parse(items);
  }
  if (items2) {
    userArray = JSON.parse(items2);
  }
  if (items3 != "undefined") {
    activeUser = JSON.parse(items3);
  }
}
loadStorageData();

function storeData() {
  localStorage.setItem("allBooks", JSON.stringify(allBooksA));
  localStorage.setItem("userArr", JSON.stringify(userArray));
  localStorage.setItem("activeUser", JSON.stringify(currentUser));
}
// storeData();

// -------------------
// LOGIN/REGISTER***
// -------------------
function stayLogin() {
  if (activeUser) {
    let now = userArray.find((ele) => {
      return ele.username == activeUser.username;
    });
    if (now) {
      current(now);
    }
  }
}
stayLogin();

function updateList() {
  updateBooKList();
  updateMyBookList();
  updateWishList();
  storeData();
}

function updateBooKList() {
  updatedBookName = [];
  allBooksA.forEach((ele) => {
    updatedBookName.push(ele.name);
  });
}

function updateMyBookList() {
  if (currentUser) {
    let newBook = [];
    for (let i = 0; i < currentUser.mybooks.length; i++) {
      if (updatedBookName.includes(currentUser.mybooks[i].name)) {
        newBook.push(currentUser.mybooks[i]);
      }
    }
    currentUser.mybooks = [];
    currentUser.mybooks = newBook;
  }
}

function updateWishList() {
  if (currentUser) {
    let newBook = [];
    for (let i = 0; i < currentUser.wishlist.length; i++) {
      if (updatedBookName.includes(currentUser.wishlist[i])) {
        newBook.push(currentUser.wishlist[i]);
      }
    }
    currentUser.wishlist = [];
    currentUser.wishlist = newBook;
  }
}

function upgradeUserProperty(arr, property, status) {
  arr.forEach((ele) => {
    ele[property] = status;
  });
  storeData();
}
// upgradeUserProperty(userArray, "restriction", false);
// console.log(allBooksA);

function signOut() {
  currentUser = "";
  storeData();
  location.reload();
}

function current(user) {
  currentUser = user;
  storeData();
  updateList();
  mybookArr();
  swap(signup1, login1, sprofile, admin1);
  close1();
  displayall();
}

function login() {
  let user = loginUsername.value;
  let userPass = loginPassword.value;
  if (!user || !userPass) {
    alert("please fill both felds");
    return;
  }
  let testUser = userArray.find((ele) => {
    return ele.username.toLowerCase() == user.toLowerCase();
  });
  if (!testUser || testUser.password != userPass) {
    alert("Invald username or Password");
    return;
  }
  console.log(testUser);
  current(testUser);
}

function loginPage() {
  close1();
  loginLife.classList.remove("hidden");
}

function registerPage() {
  close1();
  registerLife.classList.remove("hidden");
}

function close1() {
  registerLife.classList.add("hidden");
  bookLife.classList.add("hidden");
  loginLife.classList.add("hidden");
  fPLife.classList.add("hidden");
  if (currentUser) {
    mybookArr2();
  }
  displayall();
}

function closeG() {
  registerLife.classList.add("hidden");
  bookLife.classList.add("hidden");
  loginLife.classList.add("hidden");
  fPLife.classList.add("hidden");
  mybookArr();
  displayall();
}

function swap(a, b, c, d) {
  a.classList.add("hidden");
  b.classList.add("hidden");
  c.classList.remove("hidden");
  let pShow = Array.from(currentUser.name)[0];
  c.innerHTML = "";
  c.innerHTML = pShow.toUpperCase();
  if (currentUser.priviledge == "admin") {
    d.classList.remove("hidden");
  }
}

function register() {
  let allInput = flow.querySelectorAll("input");
  empty = false;
  usernaameExist = [];
  emailExist = [];
  allInput.forEach((ele) => {
    if (ele.value == "") {
      empty = true;
    }
  });
  if (empty == true) {
    alert("please fill all field");
    return;
  }
  let name, username, email, password, confirmpassword, sq1, sq2, ans1, ans2;
  name = regName.value;
  username = regUsername.value;
  email = regEmail.value;
  password = regPassword.value;
  confirmpassword = regCP.value;
  sq1 = regSq1.value;
  sq2 = regSq2.value;
  ans1 = regSa1.value;
  ans2 = regSa2.value;
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let test1 = pattern.test(email);
  console.log(test1);
  if (!test1) {
    alert("invalid email");
    return;
  }
  if (password != confirmpassword) {
    alert("password not match");
    return;
  }
  usernaameExist = userArray.filter((ele) => {
    return ele.username.toLowerCase() == username.toLowerCase();
  });
  emailExist = userArray.filter((ele) => {
    return ele.email.toLowerCase() == email.toLowerCase();
  });
  console.log(usernaameExist);
  console.log(emailExist);
  if (usernaameExist.length > 0) {
    alert("username already exist");
    return;
  }
  if (emailExist.length > 0) {
    alert("Email already exist");
    return;
  }
  let newUser = {
    name: name,
    username: username,
    email: email,
    password: password,
    mybooks: [],
    wishlist: [],
    securtyQuestion1: sq1,
    securityAnswer1: ans1,
    securtyQuestion2: sq2,
    securityAnswer2: ans2,
    status: false,
    priviledge: "user",
  };
  userArray.push(newUser);
  storeData();
  current(newUser);
}

// -------------------
// FORGET PASSWORD***
// -------------------
function fpdisplay(html) {
  fpUserDisplay.innerHTML = "";
  fpUserDisplay.innerHTML = html;
}

function forgetPasswordPage() {
  let html = `<input type="text" placeholder="Enter Username" id="fpui">
  <button onclick="fp1()">CONTINUE</button>`;
  fpdisplay(html);
  close1();
  fPLife.classList.remove("hidden");
}

let resValue;
function fp1() {
  resValue = "";
  let mark = document.getElementById("fpui").value;
  console.log(mark);
  if (mark) {
    resValue = userArray.find((ele) => {
      return ele.username.toLowerCase() == mark.toLowerCase();
    });
  }

  if (!resValue) {
    alert("invalid User Register instead");
    return;
  }
  close1();
  fPLife.classList.remove("hidden");
  let html = `<span>${resValue.securtyQuestion1}</span>
  <input type="text" placeholder="Answer 1" id="fpasw1">
  <span>${resValue.securtyQuestion2}</span>
  <input type="text" placeholder="Answer 2" id="fpasw2">
  <button onclick="fp2()">CONTINUE</button>`;
  fpdisplay(html);
}

function fp2() {
  let newfpasw1 = document.getElementById("fpasw1").value;
  let newfpasw2 = document.getElementById("fpasw2").value;
  if (
    newfpasw1.toLowerCase() == resValue.securityAnswer1.toLowerCase() &&
    newfpasw2.toLowerCase() == resValue.securityAnswer2.toLowerCase()
  ) {
    close1();
    fPLife.classList.remove("hidden");
    let html = `<div class="">YOUR PASSWORD IS </div>
    <div class="forgetpass">${resValue.password}</div>
    <button onclick="loginPage()">LOGIN</button>`;
    fpdisplay(html);
  } else {
    alert("invalid answers");
  }
}

// -------------------
// SHOW PASSWORD***
// -------------------
function showPassword(marker) {
  if (marker.type == "password") {
    marker.type = "text";
  } else {
    marker.type = "password";
  }
}

// -------------------
// CREATE ARRAY***
// -------------------
function spinner(html, modal1) {
  let html1 = `<div style="display:flex; align-item:center; justify-contents:center;"> 
  <i class="fa fa-spin fa-spinner" ></i></div>`;
  modal1.innerHTML = html1;
  setTimeout(() => {
    modal1.innerHTML = "";
    modal1.innerHTML = html;
  }, 1000);
}

function createArray() {
  bestSellingA = [];
  recentA = [];
  bestSellingA = allBooksA.filter((ele) => {
    return ele.ratings > 4.0;
  });
  recentA = allBooksA.filter((ele) => {
    return ele.published >= 2020;
  });
}

function mybookArr() {
  if (currentUser) {
    updateList();
    myBookA = [];
    let bookname = currentUser.mybooks;
    bookname.forEach((ele) => {
      let k = ele.name;
      let f = allBooksA.find((ele) => {
        return ele.name === `${k}`;
      });
      if (f) {
        f.status = ele.status;
        myBookA.push(f);
      }
    });
  }
}
function mybookArr2() {
  if (currentUser) {
    myBookA = [];
    let bookname = currentUser.mybooks;
    bookname.forEach((ele) => {
      let k = ele.name;
      let f = allBooksA.find((ele) => {
        return ele.name === `${k}`;
      });
      if (f) {
        f.status = ele.status;
        myBookA.push(f);
      }
    });
  }
}

// -------------------
// SEARCH***
// -------------------
function search() {
  let value = searchWord.value;
  let sort;
  let html;

  if (value == "") {
    sort = searchA = [];
    showSearch.classList.add("hidden");
  } else {
    showSearch.classList.remove("hidden");
    showSearch.innerHTML = "";
    value = value.toLowerCase();
    let pattern = new RegExp(`${value}`, "g");
    sort = allBooksA.filter((element) => {
      let use = element.name.toLowerCase();
      return use.search(pattern) >= 0;
    });

    if (sort.length == 0) {
      html = `please search by book name... <br>
    <br> if you are searching by book name<br>
    then we dont have the book you're searching for...`;
      spinner(html, showSearch);
    } else {
      html = "";
      sort.forEach((element) => {
        html += `${element.name} <br>`;
      });
    }
  }

  setTimeout(() => {
    showSearch.classList.add("hidden");
  }, 7000);

  searchA = [...sort];
  spinner(html, showSearch);
  display(searchA, searchBooks);
}

// -------------------
// DISPLAY***
// -------------------

function display(arr, htmlEl) {
  let tag, addEl;
  htmlEl.innerHTML = "";
  let newId = htmlEl.parentNode.id;
  let parentEl = document.getElementById(`${newId}`);

  if (arr.length == 0) {
    parentEl.classList.add("hidden");
    return;
  } else {
    parentEl.classList.remove("hidden");
  }

  arr.forEach((ele, ind) => {
    if (arr == myBookA) {
      tag = `<div class="tag">${ele.status}</div>`;
      navBook.classList.remove("hidden");
      addEl = "";
    } else {
      tag = "";
      addEl = `<i class="fa fa-plus-square opt"aria-hidden="true" id="win" onclick="addCart('${ele.name}')" ></i>`;
    }
    if (currentUser) {
      if (currentUser.wishlist.includes(ele.name)) {
        addEl = "";
      }
    }

    htmlEl.innerHTML += `<div class="card">
    <div class="card-top">
      <img src="./images/real images/${ele.img}.jpg" alt="" />
    </div>
    <div class="card-bottom">
      <div class="card-content">
        <div>${tag}</div>
        <div></div>
        <p >${ele.type}</p>
        <p >${ele.categories}</p>
        <p ><i class="fas fa-money-check-alt"></i> $${ele.price}</p>
        <p ><i class="fas fa-money-check-alt"></i> $${ele.lendingPrice}</p>
        <p ><i class="fa fa-columns" aria-hidden="true"></i> ${ele.noOfPages} pages</p>
        <p ><i class="fas fa-layer-group"></i> ${ele.published}</p>
        <p ><i class="fa fa-star" aria-hidden="true"></i> ${ele.ratings}/5</p>
        ${addEl}
      </div>
    </div>
  </div>`;
  });
}

function displayall() {
  createArray();
  display(allBooksA, allbooks);
  display(bestSellingA, bestSellings);
  display(recentA, recents);
  display(myBookA, myBooks);
  display(searchA, searchBooks);
}
displayall();

// -------------------
// WISHLIST***
// -------------------

// -------------------
// NEXT/PREV BUTTON***
// -------------------
function nextPrev(a, b) {
  if (a == 1) {
    b.scrollLeft += 500;
  } else {
    b.scrollLeft += -500;
  }
}

// -------------------
// OPEN ADMIN/PROFILE***
// -------------------
function openAdmin(memo) {
  let html;
  if (currentUser && memo == 1) {
    html = ` <h4>Hi ${currentUser.name}!</h4>
    <p onclick=" myWishListDisplay()">Wish list</p>
    <p onclick="profileDisplay()">Profile</p>
    <p onclick="myBooksDisplay()">my books</p>
    <p onclick="">balance</p>
    <p onclick="signOut()">Sign out</p>`;
  }
  if (currentUser && memo == 0) {
    html = `<h4>Hi ${currentUser.name}!</h4>
    <p onclick="userList()">All Users</p>
    <p onclick="allBookDisplay()">All books</p>
    <p onclick="saveBookPage()">Upload books</p>`;
  }
  profList.innerHTML = "";
  profList.classList.toggle("hidden");
  profList.innerHTML = html;
}

// -------------------
// OPEN ADMIN/PROFILE***
// -------------------
function hidepro() {
  if (currentUser) {
    profList.classList.add("hidden");
  }
}

function basicModel(html) {
  generalDisplay.innerHTML = "";
  generalDisplay.innerHTML = html;
  close1();
  bookLife.classList.remove("hidden");
}

function profileDisplay() {
  profList.classList.add("hidden");
  let html = `<div class="save1">WELCOME ${currentUser.username.toUpperCase()}</div>
  <div class="general-content addpadding">
    <div class="disprof">
      <span>Name : ${currentUser.name}</span>
    </div>
    <div class="disprof">
      <span>Email : ${currentUser.email}</span>
    </div>
    <div class="disprof">
      <span>Username : ${currentUser.username}</span>
    </div>
    <div class="disprof">
      <span>Password : xxxxxxxx</span>
    </div>
    <div class="disprof">
      <span>SQ 1 : ${currentUser.securtyQuestion1}</span>
    </div>
    <div class="disprof">
      <span>SA 1 : ${currentUser.securityAnswer1}</span>
    </div>
    <div class="disprof">
      <span>SQ 2 : ${currentUser.securtyQuestion2}</span>
    </div>
    <div class="disprof">
      <span>SA 2 : ${currentUser.securityAnswer2}</span>
    </div>
  </div>
  <div class="save-checking">
    <button onclick="close1()" class="pointer">GO BACK</button>
    <button onclick="profileEditpage()" class="pointer">EDIT</button>
    
  </div>`;
  basicModel(html);
}

function userList() {
  profList.classList.add("hidden");
  let html = `<div class="save1">
  <span>ALL USERS</span>
  <input type="text" placeholder="search Username">
</div>
<div class="general-content">
  <table>
    <thead>
      <th>serial no</th>
      <th>Username</th>
      <th>actions</th>
    </thead>
    <tbody id="tbody">
     
    </tbody>
  </table>
</div>
<div class="save-checking">
  <button onclick="closeG()" class="pointer">GO BACK</button>
</div>`;
  basicModel(html);
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  userArray.forEach((ele, i) => {
    let resStatus = ele.restriction == true ? "unrestrict" : "restrict";
    let adminStatus = ele.priviledge == "admin" ? "remove Admin" : "Make Admin";
    tbody.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${ele.username}</td>
    <td class="tdc">
      <button onclick="deleteProfileList('user','${i}')">del</button>
      <button onclick="restrict('user','${i}', ${
      ele.restriction
    })">${resStatus}</button>
      <button onclick="makeAdmin('${i}', '${
      ele.priviledge
    }')">${adminStatus}</button>
    </td>
    </tr>`;
  });
}

function allBookDisplay() {
  profList.classList.add("hidden");
  let html = `<div class="save1">
  <span>ALL BOOKS</span>
  <input type="text" placeholder="search Books">
</div>
<div class="general-content">
  <table>
    <thead>
      <th>serial no</th>
      <th>Book Name</th>
      <th>actions</th>
    </thead>
    <tbody id="tbody">
      
    </tbody>
  </table>
</div>
<div class="save-checking">
  <button onclick="closeG()" class="pointer">GO BACK</button>
</div>`;
  basicModel(html);
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  allBooksA.forEach((ele, i) => {
    let resStatus = ele.restriction == true ? "unrestrict" : "restrict";
    tbody.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${ele.name}</td>
    <td class="tdc">
      <button onclick="deleteProfileList('allbooks','${i}')">del</button>
      <button onclick="restrict('allbooks',${i}, ${
      ele.restriction
    })">${resStatus}</button>
      <button onclick="editPage(${i})">edit</button>
    </td>
    </tr>`;
  });
}

function saveBookPage() {
  profList.classList.add("hidden");
  let html = `<div class="save1">ENTER BOOK DETAILS</div>
  <div class="book-content">
    <span>Name</span> <input type="text" id="bookname">
    <span>Author</span> <input type="text" id="bookauthor">
    <span>No of Pages</span> <input type="email" id="bookpage">
    <span>Category</span> <input type="text" id="bookcategory">
    <span>Ratings</span> <input type="text" id="bookrating">
    <span>Price</span> <input type="text" id="bookprice">
    <span>Lending Price</span><input type="text" id="lendingprice">
    <span>Date Published</span> <input type="text" id="publishdate">
    <span>Picture Name</span> <input type="text" id="imagepath">
  </div>
  <div class="save-checking">
    <button onclick="saveBook()">UPLOAD</button>
    <button onclick="close1()">CANCEL</button>
  </div>`;
  basicModel(html);
}

function saveBook() {
  let allInput = generalDisplay.querySelectorAll("input");
  let bookname = document.getElementById("bookname");
  let author = document.getElementById("bookauthor");
  let numOfPages = document.getElementById("bookpage");
  let category = document.getElementById("bookcategory");
  let ratings = document.getElementById("bookrating");
  let price = document.getElementById("bookprice");
  let lendingPrice = document.getElementById("lendingprice");
  let datePublished = document.getElementById("publishdate");
  let pictureName = document.getElementById("imagepath");
  let empty1 = false;
  allInput.forEach((ele) => {
    if (ele.value == "") {
      empty1 = true;
    }
  });
  if (empty1 == true) {
    alert("please fill all field");
    return;
  }
  let newName = bookname.value;
  let newAuthor = author.value;
  let bookExist = allBooksA.find((ele) => {
    return (
      ele.name.toLowerCase() == newName.toLowerCase() &&
      ele.author.toLowerCase() == newAuthor.toLowerCase()
    );
  });
  console.log(bookExist);
  if (bookExist) {
    alert("this book already exist");
    return;
  }
  let a = {
    name: bookname.value,
    author: author.value,
    noOfPages: numOfPages.value,
    categories: category.value,
    ratings: ratings.value,
    price: price.value,
    lendingPrice: lendingPrice.value,
    published: datePublished.value,
    img: pictureName.value,
    type: "ebook",
  };
  allBooksA.push(a);
  storeData();
  close1();
  displayall();
}

function addCart(name) {
  profList.classList.add("hidden");
  if (currentUser) {
    let k = myBookA.map((ele) => {
      return ele.name;
    });
    if (k.includes(name)) {
      alert("This Book already exist in your book collection");
      return;
    }
    currentUser.wishlist.push(name);
    storeData();
    displayall();
    return;
  }
  alert("you must sign in to add wishlist");
}

function myBooksDisplay() {
  profList.classList.add("hidden");
  let html = `<div class="save1">
  <span>MY BOOKLIST</span>
  <input type="text" placeholder="search Books">
</div>
<div class="general-content">
  <table>
    <thead>
      <th>serial no</th>
      <th>Book Name</th>
      <th>status</th>
      <th>actions</th>
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>
</div>
<div class="save-checking">
  <button onclick="close1()" class="pointer">GO BACK</button>
</div>`;
  basicModel(html);
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  currentUser.mybooks.forEach((ele, i) => {
    if (updatedBookName.includes(ele.name)) {
      let borrDel =
        ele.status == "borrow"
          ? `<button onclick="deleteProfileList('mybooks','${i}')">return</button>`
          : `<button onclick="deleteProfileList('mybooks','${i}')">delete</button>`;
      tbody.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${ele.name}</td>
    <td>${ele.status}</td>
    <td class="tdc">
      ${borrDel}
    </td>
    </tr>`;
    }
  });
}

function myWishListDisplay() {
  profList.classList.add("hidden");
  let html = `<div class="save1">
<span>MY WISHLIST</span>
<input type="text" placeholder="search Bookname">
</div>
<div class="table-content">
<table>
  <thead>
    <th>serial no</th>
    <th>Book Name</th>
    <th>actions</th>
  </thead>
  <tbody id="tbody">
    
  </tbody>
</table>
</div>
<div class="save-checking">
<button onclick="close1()" class="pointer">GO BACK</button>
</div>`;
  basicModel(html);
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  currentUser.wishlist.forEach((ele, i) => {
    tbody.innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${ele}</td>
    <td class="tdc">
      <button onclick="deleteProfileList('wish','${i}')">del</button>
      <button onclick="buyBorrow(${i}, 'borrow')">borrow</button>
      <button onclick="buyBorrow(${i}, 'bought')">buy</button>
    </td>
    </tr>`;
  });
  console.log(currentUser.wishlist);
  // updateList();
}
let Uobj;
let Uobj2;
if (currentUser) {
  Uobj = {
    user: userArray,
    wish: currentUser.wishlist,
    allbooks: allBooksA,
    mybooks: currentUser.mybooks,
  };
  Uobj2 = {
    user: userList,
    wish: myWishListDisplay,
    allbooks: allBookDisplay,
    mybooks: myBooksDisplay,
  };
}

function deleteProfileList(a, b) {
  if (Uobj && Uobj2) {
    Uobj[a].splice(b, 1);
    storeData();
  }
  Uobj2[a]();
}

function makeAdmin(a, b) {
  console.log(b);
  userArray[a].priviledge = b == "admin" ? "" : "admin";
  userList();
}

function restrict(a, b, c) {
  if (Uobj && Uobj2) {
    let targetObj = Uobj[a];
    targetObj[b].restriction = c ? false : true;
    storeData();
    Uobj2[a]();
  }
}

function buyBorrow(a, b) {
  if (currentUser) {
    let k = [];
    let m = currentUser.mybooks.map((ele) => ele.name);
    if (m.includes(currentUser.wishlist[a])) {
      alert("This Book already exist in your book collection");
      return;
    }
    if (b == "borrow") {
      currentUser.mybooks.forEach((ele) => {
        if (ele.status == "borrow") {
          k.push(ele.name);
        }
      });
      if (k.length >= 2) {
        alert("You have reach your maximum borrow limit");
        return;
      }
    }
    let c = currentUser.wishlist[a];
    let d = {
      name: c,
      status: b,
    };
    currentUser.mybooks.push(d);
    storeData();
    console.log(currentUser);
  }
}
let getInd;
function editPage(a) {
  getInd = a;
  console.log(getInd);
  profList.classList.add("hidden");
  let html = `<div class="save1">ENTER BOOK DETAILS</div>
  <div class="book-content">
    <span>Name</span> <input type="text" id="bookname">
    <span>Author</span> <input type="text" id="bookauthor">
    <span>No of Pages</span> <input type="email" id="bookpage">
    <span>Category</span> <input type="text" id="bookcategory">
    <span>Ratings</span> <input type="text" id="bookrating">
    <span>Price</span> <input type="text" id="bookprice">
    <span>Lending Price</span><input type="text" id="lendingprice">
    <span>Date Published</span> <input type="text" id="publishdate">
    <span>Picture Name</span> <input type="text" id="imagepath">
  </div>
  <div class="save-checking">
    <button onclick="saveBook1()">save</button>
    <button onclick="closeEdit()">Back</button>
  </div>`;
  basicModel(html);
  let thisBook = allBooksA[a];
  if (thisBook) {
    document.getElementById("bookname").value = thisBook.name;
    document.getElementById("bookauthor").value = thisBook.author;
    document.getElementById("bookpage").value = thisBook.noOfPages;
    document.getElementById("bookcategory").value = thisBook.categories;
    document.getElementById("bookrating").value = thisBook.ratings;
    document.getElementById("bookprice").value = thisBook.price;
    document.getElementById("lendingprice").value = thisBook.lendingPrice;
    document.getElementById("publishdate").value = thisBook.published;
    document.getElementById("imagepath").value = thisBook.img;
  }
}
function saveBook1() {
  let allInput = generalDisplay.querySelectorAll("input");
  let bookname = document.getElementById("bookname");
  let author = document.getElementById("bookauthor");
  let numOfPages = document.getElementById("bookpage");
  let category = document.getElementById("bookcategory");
  let ratings = document.getElementById("bookrating");
  let price = document.getElementById("bookprice");
  let lendingPrice = document.getElementById("lendingprice");
  let datePublished = document.getElementById("publishdate");
  let pictureName = document.getElementById("imagepath");
  let empty2 = false;
  allInput.forEach((ele) => {
    if (ele.value == "") {
      empty2 = true;
    }
  });
  if (empty2 == true) {
    alert("please fill all field");
    return;
  }
  let newName = bookname.value;
  let newAuthor = author.value;
  let bookExist = allBooksA.find((ele) => {
    return (
      ele.name.toLowerCase() == newName.toLowerCase() &&
      ele.author.toLowerCase() == newAuthor.toLowerCase()
    );
  });
  let thisBook1 = allBooksA[getInd];
  if (bookExist && bookExist != thisBook1) {
    alert("this book already exist");
    return;
  }

  thisBook1.name = bookname.value;
  thisBook1.author = author.value;
  thisBook1.noOfPages = numOfPages.value;
  thisBook1.categories = category.value;
  thisBook1.ratings = ratings.value;
  thisBook1.price = price.value;
  thisBook1.lendingPrice = lendingPrice.valu;
  thisBook1.published = datePublished.value;
  thisBook1.img = pictureName.value;
  thisBook1.type = "ebook";
  storeData();
  close1();
  allBookDisplay();
}
function closeEdit() {
  allBookDisplay();
}

function profileEditpage() {
  let html = `<div></div><div class="general-content addpadding" id="profedit1"> <span>Name</span> <input type="text" id="regname1">
  <span>Password</span>
  <div>
    <input type="text" id="regpassword1">
  </div>
  <span>security question 1</span> <input type="text" id="SQ11">
  <span>Answer 1</span> <input type="text" id="SA11">
  <span>security question 2</span><input type="text" id="SQ21">
  <span>Answer 2</span> <input type="text" id="SA21"></div>
  <div class="save-checking">
    <button onclick="profileDisplay()" class="pointer">GO BACK</button>
    <button onclick="saveEditProfile()" class="pointer">Save</button>
  </div>`;
  basicModel(html);
  document.getElementById("regname1").value = currentUser.name;
  document.getElementById("regpassword1").value = currentUser.password;
  document.getElementById("SQ11").value = currentUser.securtyQuestion1;
  document.getElementById("SA11").value = currentUser.securityAnswer1;
  document.getElementById("SQ21").value = currentUser.securtyQuestion2;
  document.getElementById("SA21").value = currentUser.securityAnswer2;
}
function saveEditProfile() {
  let allInput = flow.querySelectorAll("profedit1");
  let empty = false;
  usernaameExist = [];
  emailExist = [];
  allInput.forEach((ele) => {
    if (ele.value == "") {
      empty = true;
    }
  });
  if (empty == true) {
    alert("please fill all field");
    return;
  }
  let regName1 = document.getElementById("regname1");
  let regPassword1 = document.getElementById("regpassword1");
  let regSq11 = document.getElementById("SQ11");
  let regSa11 = document.getElementById("SA11");
  let regSq21 = document.getElementById("SQ21");
  let regSa21 = document.getElementById("SA21");
  currentUser.name = regName1.value;
  currentUser.password = regPassword1.value;
  currentUser.securtyQuestion1 = regSq11.value;
  currentUser.securityAnswer1 = regSa11.value;
  currentUser.securtyQuestion2 = regSq21.value;
  currentUser.securityAnswer2 = regSa21.value;
  storeData();
  profileDisplay();
}

// function balanceCheck() {}
console.log(userArray);
console.log(allBooksA);
// console.log(myBookA);
// console.log(currentUser.mybooks);
// console.log(currentUser.wishlist);
