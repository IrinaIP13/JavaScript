//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let bill = [100,250,50,168,120,345,188];
let accum = 0;
for (let i = 0; i < bill.length; i++) {
    accum += bill[i];
}
let averageBill = Math.round(accum/bill.length);
console.log(averageBill);