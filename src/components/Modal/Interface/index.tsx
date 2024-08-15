
export interface ModalProps {
    index: number;
    onClose: () => void;
}

export interface User {
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

