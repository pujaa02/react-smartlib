import { useLocation } from "react-router-dom";
import "./bookshelf.css"
import { useEffect, useState } from "react";
import { propState } from "../interfacefile";
import axios from "axios";
import { watchlist, finalissuebook } from "../interfacefile";

const Bookshelf = () => {
    const token = document.cookie;
    const [id, setid] = useState("");
    const [list, setlist] = useState<watchlist[]>([]);
    const [issuedbook, setissuebook] = useState<finalissuebook[]>([]);
    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            const { user_id } = location.state as propState;
            setid(user_id);
        }
    }, [location.state]);

    useEffect(() => {
        if (id) {
            const fetchdata = async () => {
                const result = await axios.get(`http://localhost:3000/getdata/${id}`, { withCredentials: true });
                setlist(result.data.watchlist);
                setissuebook(result.data.issueuser);
            }
            fetchdata();
        }
    })
    const changecontent = (str: string) => {
        console.log(id);
       
    }
    if (token) {
        return (
            <div className="mainarea">
                <div className="book_product_wrap">
                    <div className="header_product">
                        <h2>Your <span> Shelf</span></h2>
                    </div>
                    <div className="book_product_list">
                        <div className="accordian_list">
                            <div className="accordian_header">
                                <p id="allbooks" onClick={() => changecontent("allbooks")}>All Books</p>
                            </div>
                            <div className="accordian_header">
                                <p id="watchlist" onClick={() => changecontent("watchlist")}>WatchList</p >
                            </div>
                            <div className="accordian_header">
                                <p id="borrowed" onClick={() => changecontent("borrowed")}>Borrowed Books</p>
                            </div>
                            <div className="accordian_header">
                                <p id="pending" onClick={() => changecontent("pending")}>Pending Books</p>
                            </div>
                        </div>
                        <div id="allbooksectionpage">
                            <div id="watchlistbook">
                                <p id="watchlistp">WatchList Books</p>
                                <div className="product_container_three">
                                    {list.map((data: watchlist) => (
                                        <div className="product-card-wrap-two">
                                            <div className="card-wrap">
                                                <img src={require(`.${data.book_img}`)} alt="none" />
                                                <div className="contentrem">
                                                    <p className="text-truncate titlerem">{data.book_title}</p>
                                                    <p className="authorrem">{`${data.author_name} ${data.book_publication_year}`}</p>
                                                    {data.rating > 0 ? <p className="raterem">{`${data.rating} / 5`}</p> : <p className="raterem">{`No Rating Exist!!`}</p>}
                                                </div>
                                                <div className="lastbtn">
                                                    <p className="remove" >Remove</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="borrowedbook">
                                <p id="borrowp">Borrowed Books</p>
                                <div className="product_container">
                                    {issuedbook.map((data: finalissuebook) => (
                                        <div className="product-card-wrap">
                                            <div className="card-wrap">
                                                <img src={require(`.${data.book_img}`)} alt="none" />
                                                <div className="content">
                                                    <p className="text-truncate title">{data.book_title}</p>
                                                    <p className="author">{`${data.author_name} ${data.book_publication_year}`}</p>
                                                    {data.rating > 0 ? <p className="raterem">{`${data.rating} / 5`}</p> : <p className="raterem">{`No Rating Exist!!`}</p>}
                                                </div>
                                                <div className="content2">
                                                    <p className="borrow">Borrowed on</p>
                                                    <p className="bordate">{new Date(data.borrow_date).toLocaleDateString()}</p>
                                                    <p className="submission">submission date</p>
                                                    <p className="subdate">{new Date(data.return_date).toLocaleDateString()}</p>
                                                    <div className="borbtn">
                                                        <p id="borp">Borrowed</p>
                                                    </div>

                                                    {(data.status === "pending") ? <div className="retbtn"><p id="retp">Return</p></div> : <div className="retbtngreen"><p id="retpgreen">Returned</p></div>}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="pendingbook">
                                <p id="remainderp">Pending Books</p>
                                <div className="product_container_two">
                                    {issuedbook.map((data: finalissuebook) =>
                                        data.status === "pending" &&
                                        <div className="product-card-wrap-two">
                                            <div className="card-wrap">
                                                <img src={require(`.${data.book_img}`)} alt="none" />
                                                <div className="contentrem">
                                                    <p className="text-truncate titlerem">{data.book_title}</p>
                                                    <p className="authorrem"></p>
                                                    <p className="raterem"></p>
                                                </div>
                                                <p className="borrodt">Borrowed Date : {new Date(data.borrow_date).toLocaleDateString()}</p>
                                                <p className="subdt">Submission Date : {new Date(data.return_date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* <!-- allbookssection --> */}
                        </div>
                        {/* <!-- book_product_list --> */}
                    </div>
                    {/* <!-- book_product_wrap --> */}
                </div>
                {/* <!-- main area end --> */}
            </div>
        )
    } else {
        return (
            <div className="denied">
                <h1 >Access Denied!!</h1>
            </div>
        )
    }
}
export default Bookshelf;