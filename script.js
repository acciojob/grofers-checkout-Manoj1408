const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector('table');

const getSum = () => {
  let arr = document.querySelectorAll('.price');
  let sum =0;
  for(let i =0;i<arr.length;i++){
    sum += Number(arr[i].innerText);
  }
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
	totalCell.setAttribute("id", "ans");
  totalCell.textContent = "Total Price: " + sum;
  totalRow.appendChild(totalCell);
  
  if (!table.tFoot) {
    const tFoot = document.createElement("tfoot");
    table.appendChild(tFoot);
  }
  table.tFoot.appendChild(totalRow);
	
};

getSumBtn.addEventListener("click", getSum);
