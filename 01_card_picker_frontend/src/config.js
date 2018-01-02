// put all the constants here
let currentUser
let currentMerchant
let allOtherCards

function showImage(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  img.className = "card-image"
  return img
}
