export type InputType = {
    type: string;
    label: string;
    isIcon: boolean;
    onInputChange: (e: any) => void;
    error: true | false;
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
    colorMoney: 'green' |'red';
};

export type InputTwoo = {
    title: string;
    type: string;
}
