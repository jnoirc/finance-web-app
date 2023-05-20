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

