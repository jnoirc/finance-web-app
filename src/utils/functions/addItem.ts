
export default function addedItem(
    newItem: any,
    moneyRevenue: number,
    setMoneyRevenue: (value: number) => void,
    moneyExpense: number,
    setMoneyExpense: (value: number) => void,
    moneyBalance: number,
    setMoneyBalance: (value: number) => void
  ) {
    if (newItem.description && newItem.value) {
      const parsedValue = parseFloat(newItem.value) 

      if (newItem.type === 'revenue') {
        setMoneyRevenue(moneyRevenue + parsedValue);
        setMoneyBalance(moneyBalance + parsedValue);
      } else if (newItem.type === 'expense') {
        setMoneyExpense(moneyExpense + parsedValue);
        setMoneyBalance(moneyBalance - parsedValue);
      }
  
      const storedItems = localStorage.getItem('items');
      const items = storedItems ? JSON.parse(storedItems) : [];
      items.push(newItem);
      localStorage.setItem('items', JSON.stringify(items));
    }else{
      alert('Preencha os campos');
    }
  }
  