//index section

let fname = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let fnameError = document.getElementById("fnameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let indexNext = document.querySelectorAll(".index-next");

let purchase_list = {};

function fnameErrorFunction() {
  if (fname.value === "") {
    fnameError.classList.remove("hidden");
    fname.classList.remove("border-gray-300");
    fname.classList.add("border-[hsl(354,84%,57%)]");
    return false;
  } else if(!/\d/.test(fname.value)){
    fnameError.classList.remove("hidden");
    fnameError.innerHTML = "Enter atleast 1 digit";
    return false;
  }else {
    fname.classList.add("border-gray-300");
    fnameError.classList.add("hidden");
    return true;
  }
}
function emailErrorFunction() {
  if (email.value === "") {
    emailError.classList.remove("hidden");
    email.classList.remove("border-gray-300");
    email.classList.add("border-[hsl(354,84%,57%)]");
    return false;
  } else if (!email.value.includes("@")) {
    emailError.classList.remove("hidden");
    email.classList.remove("border-gray-300");
    email.classList.add("border-[hsl(354,84%,57%)]");
    emailError.innerHTML = "Given Incorrect Email";
    return false;
  } else {
    emailError.classList.add("hidden");
    email.classList.add("border-gray-300");

    return true;
  }
}
function phoneErrorFunction() {
  if (phone.value == "") {
    phoneError.classList.remove("hidden");
    phone.classList.remove("border-gray-300");
    phone.classList.add("border-[hsl(354,84%,57%)]");
    return false;
  } else if(phone.value.length !== 10) {
    phoneError.classList.remove("hidden");
    phoneError.innerHTML = "10 Digits are Needed";
    return false;
  } else {
    phoneError.classList.add("hidden");
    phone.classList.add("border-gray-300");
    return true;
  }
}
fname.addEventListener("focusout", function () {
  fnameErrorFunction();
});
email.addEventListener("focusout", function () {
  emailErrorFunction();
});
phone.addEventListener("focusout", function () {
  phoneErrorFunction();
});
indexNext.forEach((button) => {
  button.addEventListener("click", function () {
    let fnameValid = fnameErrorFunction();
    let emailValid = emailErrorFunction();
    let phoneValid = phoneErrorFunction();

    if ((fnameValid, emailValid, phoneValid)) {
      document.getElementById("indexPage").classList.add("hidden");
      document.getElementById("plansPage").classList.remove("hidden");
      document.getElementById("section1").style.backgroundColor = "transparent";
      document.getElementById("section2").style.backgroundColor = "#bee1f8";
      document.getElementById("section1").style.color = "white";
      document.getElementById("section2").style.color = "black";
    }
  });
});

//plans section
let plansNext = document.querySelectorAll(".plans-next");
let plansPrevious = document.querySelectorAll(".plans-previous");

let toggleSwitch = document.getElementById("toggleSwitch");
let toggleCircle = document.getElementById("toggleCircle");
let monthlyLabel = document.getElementById("monthlyLabel");
let yearlyLabel = document.getElementById("yearlyLabel");
let arcadeYearly = document.getElementById("Arcade-yearly");
let advancedYearly = document.getElementById("Advanced-yearly");
let proYearly = document.getElementById("Pro-yearly");
let arcadeCost = document.getElementById("arcade-cost");
let advancedCost = document.getElementById("advanced-cost");
let proCost = document.getElementById("pro-cost");
let arcadeName = document.getElementById("arcadeName");
let advancedName = document.getElementById("advancedName");
let proName = document.getElementById("proName");
let arcade = document.getElementById("arcade");
let advanced = document.getElementById("advanced");
let pro = document.getElementById("pro");

let isYearly = false;
let plans_selected = false;
let plan_name = "";
// background change and border change
arcade.addEventListener("click", function () {
  arcade.style.borderColor = "blue";
  advanced.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  pro.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  arcade.classList.add("bg-[hsl(229,24%,87%,0.3)]");
  advanced.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
  pro.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
  purchase_list["plan_name"] = arcadeName.textContent.trim();
  purchase_list["cost"] = parseInt(
    arcadeCost.textContent.replace(/[$/moyr]/, "")
  );
  plans_selected = true;
  console.log(purchase_list);
});
advanced.addEventListener("click", function () {
  arcade.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  advanced.style.borderColor = "blue";
  pro.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  arcade.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
  advanced.classList.add("bg-[hsl(229,24%,87%,0.3)]");
  pro.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
  purchase_list["plan_name"] = advancedName.textContent.trim();
  purchase_list["cost"] = parseInt(
    advancedCost.textContent.replace(/[$/moyr]/g, "")
  );
  plans_selected = true;
  console.log(purchase_list);
});
pro.addEventListener("click", function () {
  arcade.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  advanced.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  pro.style.borderColor = "blue";
  arcade.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
  advanced.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
  pro.classList.add("bg-[hsl(229,24%,87%,0.3)]");
  purchase_list["plan_name"] = proName.textContent.trim();
  purchase_list["cost"] = parseInt(
    proCost.textContent.replace(/[$/moyr]/g, "")
  );
  plans_selected = true;
  console.log(purchase_list);
});

//toggle switch
toggleSwitch.addEventListener("click", () => {
  isYearly = !isYearly;
  if (isYearly) {
    toggleCircle.style.transform = "translateX(100%)";
    yearlyLabel.classList.remove("text-gray-400");
    yearlyLabel.classList.add("text-[hsl(213,96%,18%)]");
    monthlyLabel.classList.add("text-gray-400");
    monthlyLabel.classList.remove("text-[hsl(213,96%,18%)]");
    arcadeYearly.classList.remove("hidden");
    advancedYearly.classList.remove("hidden");
    proYearly.classList.remove("hidden");
    arcadeCost.innerHTML = "+$90/yr";
    advancedCost.innerHTML = "+$120/yr";
    proCost.innerHTML = "+$150/yr";
    onlineServiceCost.innerHTML = "+$10/yr";
    largerStorageCost.innerHTML = "+$20/yr";
    customizableProfileCost.innerHTML = "+$20/yr";
  } else {
    toggleCircle.style.transform = "translateX(0)";
    monthlyLabel.classList.remove("text-gray-400");
    monthlyLabel.classList.add("text-[hsl(213,96%,18%)]");
    yearlyLabel.classList.add("text-gray-400");
    yearlyLabel.classList.remove("text-[hsl(213,96%,18%)]");
    arcadeYearly.classList.add("hidden");
    advancedYearly.classList.add("hidden");
    proYearly.classList.add("hidden");
    arcadeCost.innerHTML = "+$9/mo";
    advancedCost.innerHTML = "+$12/mo";
    proCost.innerHTML = "+$15/mo";
    onlineServiceCost.innerHTML = "+$1/mo";
    largerStorageCost.innerHTML = "+$2/mo";
    customizableProfileCost.innerHTML = "+$2/mo";
  }
});

// next and previous buttons
plansNext.forEach((button) => {
  button.addEventListener("click", function () {
    if(plans_selected){
      document.getElementById("plansPage").classList.add("hidden");
      document.getElementById("addonsPage").classList.remove("hidden");
      document.getElementById("section2").style.backgroundColor = "transparent";
      document.getElementById("section3").style.backgroundColor = "#bee1f8";
      document.getElementById("section3").style.color = "black"
      document.getElementById("section2").style.color = "white";
    } else{
      alert("Select at least one plan to proceed");
    }
    
  });
});

plansPrevious.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("plansPage").classList.add("hidden");
    document.getElementById("indexPage").classList.remove("hidden");
    document.getElementById("section2").style.backgroundColor = "transparent";
    document.getElementById("section1").style.backgroundColor = "#bee1f8";
    document.getElementById("section2").style.color = "white";
    document.getElementById("section1").style.color = "black";
  });
});

//addons section background and bprder color change

let addonsNext = document.querySelectorAll(".addons-next");
let addonsPrevious = document.querySelectorAll(".addons-previous");

let onlineService = document.getElementById("onlineService");
let largerStorage = document.getElementById("largerStorage");
let customizableProfile = document.getElementById("customizableProfile");
let onlineServiceName = document.getElementById("onlineServiceName");
let largerStorageName = document.getElementById("largerStorageName");
let customizableProfileName = document.getElementById(
  "customizableProfileName"
);
let onlineServiceCost = document.getElementById("onlineServiceCost");
let largerStorageCost = document.getElementById("largerStorageCost");
let customizableProfileCost = document.getElementById(
  "customizableProfileCost"
);

let onlineServiceSection = document.getElementById("onlineServiceSection");
let largerStorageSection = document.getElementById("largerStorageSection");
let customizableProfileSection = document.getElementById(
  "customizableProfileSection"
);

onlineService.addEventListener("click", function () {
  if (onlineService.checked) {
    onlineServiceSection.classList.add("bg-[hsl(229,24%,87%,0.3)]");
    onlineServiceSection.style.borderColor = "blue";
  } else {
    onlineServiceSection.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
    onlineServiceSection.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  }
});
largerStorage.addEventListener("click", function () {
  if (largerStorage.checked) {
    largerStorageSection.classList.add("bg-[hsl(229,24%,87%,0.3)]");
    largerStorageSection.style.borderColor = "blue";
  } else {
    largerStorageSection.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
    largerStorageSection.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  }
});
customizableProfile.addEventListener("click", function () {
  if (customizableProfile.checked) {
    customizableProfileSection.classList.add("bg-[hsl(229,24%,87%,0.3)]");
    customizableProfileSection.style.borderColor = "blue";
  } else {
    customizableProfileSection.classList.remove("bg-[hsl(229,24%,87%,0.3)]");
    customizableProfileSection.style.borderColor = "hsla(231, 11%, 63%, 0.4)";
  }
});

let addonSummary = document.getElementById("addonsSummary");
let summaryGameName = document.getElementById("summaryGameName");
let summaryGameCost = document.getElementById("summaryGameCost");
let totalCost = document.getElementById("totalCost");
let totalName = document.getElementById('totalName');

addonsNext.forEach((button) => {
  button.addEventListener("click", function () {
    let total = 0;
    if (!purchase_list["addons"]) {
      purchase_list["addons"] = {};
    }

    if (onlineService.checked) {
      purchase_list["addons"]["Online_service"] = parseInt(
        onlineServiceCost.textContent.trim().replace(/[$+/moyr]/g, "")
      );
    }
    if (largerStorage.checked) {
      purchase_list["addons"]["Larger_storage"] = parseInt(
        largerStorageCost.textContent.trim().replace(/[$+/moyr]/g, "")
      );
    }
    if (customizableProfile.checked) {
      purchase_list["addons"]["Custom_profile"] = parseInt(
        customizableProfileCost.textContent.trim().replace(/[$+/moyr]/g, "")
      );
    }
    console.log(purchase_list);
    console.log(purchase_list["plan_name"]);
    console.log(purchase_list["cost"]);
 
    summaryGameName.innerHTML =
      (purchase_list["plan_name"] || "None")+ (isYearly ? "(Yearly)" : "(Monthly)") ;
    summaryGameCost.innerHTML =
      "$" + (purchase_list["cost"] || 0) + "/" + (isYearly ? "yr" : "mo");
    total = total + purchase_list["cost"];

    Object.entries(purchase_list["addons"]).forEach(([key, value]) => {
      let childName = document.createElement("section");
      childName.classList = "text-gray-500 text-[0.8rem]"
      childName.textContent = key;

      let childCost = document.createElement("section");
      childCost.classList = "text-gray-500 text-[0.8rem]";
      childCost.textContent = "+$" + value + "/" + (isYearly ? "yr" : "mo");
      total = total + value;

      let parent = document.createElement("section");
      parent.classList.add("flex", "flex-row", "justify-between");
      parent.appendChild(childName);
      parent.appendChild(childCost);

      addonSummary.appendChild(parent);
    });

    console.log(purchase_list);
    console.log(total);

    totalName.innerHTML = "Total" +  (isYearly ? "(per year)" : "(per month)")
    totalCost.innerHTML = "+$" + (total || 0) + "/" + (isYearly ? "yr" : "mo");
    document.getElementById("addonsPage").classList.add("hidden");
    document.getElementById("finishingPage").classList.remove("hidden");
    document.getElementById("section3").style.backgroundColor = "transparent";
    document.getElementById("section4").style.backgroundColor = "#bee1f8";
    document.getElementById("section3").style.color = "white";
    document.getElementById("section4").style.color = "black";
  });
});

addonsPrevious.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("addonsPage").classList.add("hidden");
    document.getElementById("plansPage").classList.remove("hidden");
    document.getElementById("section3").style.backgroundColor = "transparent";
    document.getElementById("section2").style.backgroundColor = "#bee1f8";
    document.getElementById("section3").style.color = "white";
    document.getElementById("section2").style.color = "black";
  });
});

// finishing

let finishingNext = document.querySelectorAll(".finishing-next");
let finishingprevious = document.querySelectorAll(".finishing-previous");


finishingNext.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("finishingPage").classList.add("hidden");
    document.getElementById("thankYou").classList.remove("hidden");
    document.getElementById("section3").style.backgroundColor = "transparent";
    document.getElementById("section4").style.backgroundColor = "#bee1f8";
    document.getElementById("section3").style.color = "white";
    document.getElementById("section4").style.colr = "black";
  });
});

finishingprevious.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("addonsPage").classList.remove("hidden");
    document.getElementById("finishingPage").classList.add("hidden");
    document.getElementById("section4").style.backgroundColor = "transparent";
    document.getElementById("section3").style.backgroundColor = "#bee1f8";
    document.getElementById("section4").style.color = "white";
    document.getElementById("section3").style.color = "black";
    purchase_list['addons'] = {};
    let parent = document.getElementById("addonsSummary");

    while (parent.children.length > 2) {
      parent.removeChild(parent.lastChild);
    }
  });
});

let redirect = document.getElementById('redirect');

redirect.addEventListener('click',function(){
  document.getElementById("finishingPage").classList.add("hidden");
  document.getElementById('plansPage').classList.remove('hidden');
  purchase_list['addons'] = {};
  let parent = document.getElementById("addonsSummary");

  while (parent.children.length > 2) {
    parent.removeChild(parent.lastChild);
  }
})

