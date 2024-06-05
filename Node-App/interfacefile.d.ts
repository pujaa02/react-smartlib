
export interface Emp {
    emp_id: number;
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: string | number;
    gender: string;
    rel_status: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    bd: string | Date;
}

export interface FormData {
    fname: string;
    lname: string;
    designation: string;
    bd: string | Date;
    email: string;
    phone: string | number;
    zipcode: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    gender: string;
    rel_status: string;
}
export interface UserAttributes {
    id: string;
    user_id: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
    password: string
    access_key: string;
    isdeleted: string;
}
export interface PasswordData {
    pass: string;
    repass: string;
}
export interface PayloadData {
    id: string;
    email: string
}
export interface RegisterData {
    user_id: number
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string;
    bd: string;
}
export interface arrival {
    book_img: string;
    prime_book_id: number;
    created_at: Date | string
}
export interface recommendeddata {
    prime_book_id: number;
    rating: number;
    book_title: string;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    genre_id: number;
    genre_name: string;
}

export interface recent {
    prime_book_id: number
    book_id: number;
    borrow_date: Date | string;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    genre_name: string;
    rating: number;
}
export interface genre {
    genre_id: number;
    genre_name: string
    Fiction: string
}
export interface allbook {
    prime_book_id: number;
    author_name: string
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number
    genre_name: string;
    rating: number;
}
export interface rate {
    prime_book_id: number;
    rating: number;
}
export interface recommend {
    prime_book_id: number;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    genre_name?: string | undefined;
    rating: number;
}
export interface maprecentdata {
    prime_book_id: number;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    genre_name: string;
    rating: number;
    book_id: number;
    borrow_date: string | Date;
}
export interface finalresultdata {
    prime_book_id: number;
    rating: number;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    genre_name: string;
}
export interface issueuser {
    reader_id: number
    book_id: number
    borrow_date: Date | string
    status: string
    prime_book_id: number
}
export interface list {
    reader_id: number;
    prime_book_id: number;
}
export interface data {
    prime_book_id: number;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    genre_name?: string | undefined;
    rating?: number | undefined;
    reader_id: number;
}
export interface finallist {
    prime_book_id: number;
    rating?: number | undefined;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    genre_name?: string | undefined;
    reader_id: number;
}

export interface userissue {
    prime_book_id: number;
    rating?: number | undefined;
    reader_id: number;
    book_id: number;
    borrow_date: string | Date;
    status: string;
}
export interface finalissuebook {
    prime_book_id: number;
    author_name?: string | undefined;
    book_img?: string | undefined;
    book_publication_year?: number | undefined;
    book_title?: string | undefined;
    genre_id?: number | undefined;
    status: string;
}