export type InputType = {
    type: string;
    label: string;
    isIcon?: boolean;
    onInputChange: (e: any) => void;
    error?: true | false;
    inputDashboard?: boolean;
    labelDashboard?: boolean;
    labelAuth?: boolean;
};

export type ButtonType = {
    title: string;
    onClick: any;
};

export type ListType = {
    title: string;
    icon: JSX.Element;
    onClick?: () => void; 
};

export type HeaderType = {
    onClick: () => void;
};

export type ConfirmModalType = {
    onConfirm: () =>  void;
    onCancel: () => void;
    onCancelX: () => void;
    title: string;
    message: string;
};

export type CardType = {
    title: string;
    money: string;
    icon: JSX.Element;
    colorMoney: 'green' | 'red';
};

export type ItemType = {
    description: string;
    value: number;
    type: string;
  }
  
export type DeleteItem = {
    setMoneyRevenue: React.Dispatch<React.SetStateAction<number>>;
    setMoneyExpense: React.Dispatch<React.SetStateAction<number>>;
    setMoneyBalance: React.Dispatch<React.SetStateAction<number>>
    moneyRevenue: number; 
    moneyExpense: number; 
    moneyBalance: number;
}
  