export interface RegData {
    fname: string;
    lname: string;
    email: string;
    phone: string;
    gender: string,
    bd: string;
}
export interface LoginData {
    email: string;
    password: string;
}
export interface ApplicationFormData {
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: string;
    gender: string,
    rel_status: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcode: string;
    bd: string;
}
export interface User {
    emp_id: number;
    fname: string;
    lname: string;
    designation: string;
    email: string;
    phone: string;
    gender: string;
    rel_status: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipcodecode: string;
    bd: string;
}
export interface propState {
    id: string;
    user_id: string;
    actcode: string
}
export interface PassData {
    pass: string;
    repass: string;
}
export interface ValidateRegdata {
    fn: string;
    ln: string;
    mail: string;
    number: string;
    gen: string;
    dob: string;
}
export interface Validatepass {
    password: string;
    confirmpass: string
}
export interface Validatelogin {
    mail: string;
    pass: string;
}
export interface Value {
    id: string;
    code: string;
}
export interface arrival {
    book_img: string;
    prime_book_id: number;
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
    map(arg0: (data3: allbook) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    prime_book_id: number;
    author_name: string
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number
    genre_name: string;
    rating: number;
}
export interface watchlist {
    prime_book_id: number;
    rating: number;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    genre_name: string;
    reader_id: number;
}
export interface finalissuebook {
    prime_book_id: number;
    author_name: string;
    book_img: string;
    book_publication_year: number;
    book_title: string;
    genre_id: number;
    status: string;
    rating: number;
    borrow_date: Date | string;
    return_date: Date | string
}
export interface validateformdata {
    fn: string
    ln: string
    desig: string
    mail: string
    mobile: number | string
    gen: string
    rel: string
    add1: string
    add2: string
    city: string
    state: string
    zip: string;
    dob: string;
}