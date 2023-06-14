

function createCard(){
    const cardMainDiv = document.createElement('div');
    cardMainDiv.setAttribute('id', 'card_main');
    return cardMainDiv
}
function printBtnDina(){
  const btn = document.createElement('button')
  btn.id = 'print_btn'
  btn.textContent = "Print"

    const contentDiv = document.getElementById('card_main');



    btn.addEventListener('click', () => {
      printDiv(contentDiv);
  });

  function printDiv(div) {
      const printContents = div.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
  }

  return btn

}

function front_card(data) {  
    const {img_src,name,roll,fatherName,motherName,blood,department,semester} = data
    const paddingDiv = document.createElement('div');
    paddingDiv.setAttribute('class', 'padding');
  
    const frontDiv = document.createElement('div');
    frontDiv.setAttribute('class', 'font');
  
    const topDiv = document.createElement('div');
    topDiv.setAttribute('class', 'top');
  
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', img_src);
  
    topDiv.appendChild(imgElement);
  
    const bottomDiv = document.createElement('div');
    bottomDiv.setAttribute('class', 'bottom');
  
    const nameParagraph = document.createElement('p');
    nameParagraph.innerHTML = `Name: <strong>${name}</strong>`;
  
    const rollParagraph = document.createElement('p');
    rollParagraph.innerHTML = `Roll: <strong>${roll}</strong>`;
  
    const fatherNameParagraph = document.createElement('p');
    fatherNameParagraph.innerHTML = `Father Name: <strong>${fatherName}</strong>`;
  
    const motherNameParagraph = document.createElement('p');
    motherNameParagraph.innerHTML = `Mother Name: <strong>${motherName}</strong>`;
  
    const bloodGroupParagraph = document.createElement('p');
    bloodGroupParagraph.innerHTML = `Blood Group: <strong>${blood}</strong>`;
  
    const departmentParagraph = document.createElement('p');
    departmentParagraph.innerHTML = `Department: <strong>${department}</strong>`;
  
    const semesterParagraph = document.createElement('p');
    semesterParagraph.innerHTML = `Semester: <strong>${semester}</strong>`;
  
    const lineBreak = document.createElement('br');
  
    bottomDiv.appendChild(nameParagraph);
    bottomDiv.appendChild(rollParagraph);
    bottomDiv.appendChild(fatherNameParagraph);
    bottomDiv.appendChild(motherNameParagraph);
    bottomDiv.appendChild(bloodGroupParagraph);
    bottomDiv.appendChild(departmentParagraph);
    bottomDiv.appendChild(semesterParagraph);
    bottomDiv.appendChild(lineBreak);
  
    frontDiv.appendChild(topDiv);
    frontDiv.appendChild(bottomDiv);
  
    paddingDiv.appendChild(frontDiv);
  
    
  
    return paddingDiv;
  }
  
  function backCard(data){
    const{shift,address,upzilla,zilla,qr_src} = data
    const backDiv = document.createElement('div');
    backDiv.setAttribute('class', 'back');
  
    const detailsHeading = document.createElement('h1');
    detailsHeading.setAttribute('class', 'Details');
    detailsHeading.innerHTML = 'information';
  
    const hrElement = document.createElement('hr');
    hrElement.setAttribute('class', 'hr');
  
    const detailsInfoDiv = document.createElement('div');
    detailsInfoDiv.setAttribute('class', 'details-info');
  
    const shiftParagraph = document.createElement('p');
    shiftParagraph.innerHTML = `Shift: <strong>${shift}</strong>`;
  
    // const bloodGroupParagraphBack = document.createElement('p');
    // bloodGroupParagraphBack.innerHTML = 'Blood Group: <strong>B-</strong>';
  
    const addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = `Address: <strong>${address}</strong>`;
  
    const upZillaParagraph = document.createElement('p');
    upZillaParagraph.innerHTML = `Up Zilla: <strong>${upzilla}</strong>`;
  
    const zillaParagraph = document.createElement('p');
    zillaParagraph.innerHTML = `Zilla: <strong>${zilla}</strong>`;
  
    const barcodeDiv = document.createElement('div');
    barcodeDiv.setAttribute('class', 'barcode');
  
    const barcodeImgElement = document.createElement('img');
    barcodeImgElement.setAttribute('src', qr_src);
  
    detailsInfoDiv.appendChild(shiftParagraph);
    // detailsInfoDiv.appendChild(bloodGroupParagraphBack);
    detailsInfoDiv.appendChild(addressParagraph);
    detailsInfoDiv.appendChild(upZillaParagraph);
    detailsInfoDiv.appendChild(zillaParagraph);
    detailsInfoDiv.appendChild(barcodeDiv);
  
    barcodeDiv.appendChild(barcodeImgElement);
  
    backDiv.appendChild(detailsHeading);
    backDiv.appendChild(hrElement);
    backDiv.appendChild(detailsInfoDiv);
    return backDiv
  }

  const data = [
    {
      img_src:'rafe.png',
      name:"Rafe Uddaraj",
      roll:672641,
      fatherName:"Golam Farooq",
      motherName:"Rogi Begum",
      blood:"B-",
      department:"CST",
      semester:"3RD",
      shift:"2ND",
      address:"Battajur",
      upzilla:"Bakashigonj",
      zilla:"Jamalpur",
      qr_src:'../../rafe.png'
    },
    {
      img_src:'rafe.png',
      name:"Maharaf",
      roll:658843,
      fatherName:"XXX",
      motherName:"XX",
      blood:"B-",
      department:"CST",
      semester:"3RD",
      shift:"2ND",
      address:"Battajur",
      upzilla:"Bakashigonj",
      zilla:"Jamalpur",
      qr_src:'../../rafe.png'
    },
    {
      img_src:'rafe.png',
      name:"Protab saha",
      roll:657831,
      fatherName:"XX",
      motherName:"XX XX",
      blood:"B-",
      department:"CST",
      semester:"3RD",
      shift:"2ND",
      address:"Battajur",
      upzilla:"Bakashigonj",
      zilla:"Jamalpur",
      qr_src:'../../rafe.png'
    },
    {
      img_src:'rafe.png',
      name:"Rafe Uddaraj",
      roll:672641,
      fatherName:"Golam Farooq",
      motherName:"Rogi Begum",
      blood:"B-",
      department:"CST",
      semester:"3RD",
      shift:"2ND",
      address:"Battajur",
      upzilla:"Bakashigonj",
      zilla:"Jamalpur",
      qr_src:'../../rafe.png'
    },
    {
      img_src:'rafe.png',
      name:"Rafe Uddaraj",
      roll:672641,
      fatherName:"Golam Farooq",
      motherName:"Rogi Begum",
      blood:"B-",
      department:"CST",
      semester:"3RD",
      shift:"2ND",
      address:"Battajur",
      upzilla:"Bakashigonj",
      zilla:"Jamalpur",
      qr_src:'../../rafe.png'
    },
  ]
const main = document.getElementById('main')
data.forEach(el=>{
  const card = createCard()
  card.appendChild(front_card(el))
  card.appendChild(backCard(el))
  main.appendChild(card)
  main.appendChild(printBtnDina())
})