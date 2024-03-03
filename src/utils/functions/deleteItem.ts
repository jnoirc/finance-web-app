export default function deleteItem(
  index: number,
  setMoneyRevenue: React.Dispatch<React.SetStateAction<number>>,
  setMoneyExpense: React.Dispatch<React.SetStateAction<number>>,
  setMoneyBalance: React.Dispatch<React.SetStateAction<number>>,
  moneyRevenue: number,
  moneyExpense: number,
  moneyBalance: number
) {
  const storedItems = localStorage.getItem('items');
  if (storedItems) {
    const items = JSON.parse(storedItems);
    const deletedItem = items[index];
    const updatedItems = items.filter((_:any, i:any) => i !== index); 
    
    localStorage.setItem('items', JSON.stringify(updatedItems));
    const deletedValue = parseFloat(deletedItem.value);

    if (deletedItem.type === 'revenue') {
      setMoneyRevenue(moneyRevenue - deletedValue);
      setMoneyBalance(moneyBalance - deletedValue);
    } else if (deletedItem.type === 'expense') {
      setMoneyExpense(moneyExpense - deletedValue);
      setMoneyBalance(moneyBalance + deletedValue);
    }
  }
};
