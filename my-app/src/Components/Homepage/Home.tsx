import React, { useEffect, useState } from "react";
import "./home.css"
import axios from "axios";
import { arrival, recommendeddata, recent, genre, allbook } from "../interfacefile";


const Home = () => {
    const token = document.cookie;
    const [translate, setTranslate] = useState<number>(0);
    const [newarrbook, setnewarrival] = useState<arrival[]>([]);
    const [recommeded, setrecoomeded] = useState<recommendeddata[]>([]);
    const [recent, setrecent] = useState<recent[]>([]);
    const [genre, setgenre] = useState<genre[]>([]);
    const [book, setbook] = useState<allbook[]>([]);

    const fetchdata = async () => {
        const result = await axios.get(`http://localhost:3000/getdata/${null}`, { withCredentials: true });
        console.log(result.data.newarrivalbooks);
        setrecoomeded(result.data.recommended)
        setnewarrival(result.data.newarrivalbooks);
        setrecent(result.data.recent);
        setgenre(result.data.genre);
        setbook(result.data.allbook)
    }
    useEffect(() => {
        fetchdata();
    }, [])

    if (token) {
        const handleClickBtn = (direction: string) => {
            if (direction === "right") {
                setTranslate(() => translate - 100);
            } else {
                setTranslate(() => translate + 100);
            }
        };
        return (
            <div className="home">
                <div className="quotesection">
                    <div className="banner-carousel">
                        <button
                            className="carousel-button btn-left"
                            onClick={(_) => handleClickBtn("left")}
                        >
                            Left
                        </button>

                        <div className="carousel-container">
                            <div
                                className="slide"
                                style={{ transform: `translateX(${translate}vw)` }}
                            >
                                <div className="quoteframe">
                                    <p className="todayquote">Today Quote</p>
                                    <p className="contentofquote">“There is more treasure in books than in all the pirate's loot on Treasure Island.”</p>
                                    <p className="contentby">-Walt Disney</p>
                                </div>
                            </div>

                            <div
                                className="slide"
                                style={{ transform: `translateX(${translate}vw)` }}
                            >
                                <div className="quoteframe">
                                    <p className="todayquote">Today Quote</p>
                                    <p className="contentofquote">“To learn to read is to light a fire; every syllable that is spelled out is a
                                        spark.”</p>
                                    <p className="contentby">- Victor Hugo</p>
                                </div>
                            </div>

                            <div
                                className="slide"
                                style={{ transform: `translateX(${translate}vw)` }}
                            >
                                <div className="quoteframe">
                                    <p className="todayquote">Today Quote</p>
                                    <p className="contentofquote">“I can survive well enough on my own – if given the proper reading material.”
                                    </p>
                                    <p className="contentby">- Sarah J. Maas</p>
                                </div>
                            </div>
                            <div
                                className="slide"
                                style={{ transform: `translateX(${translate}vw)` }}
                            >
                                <div className="quoteframe">
                                    <p className="todayquote">Today Quote</p>
                                    <p className="contentofquote">“Some books are so familiar that reading them is like being home again.”</p>
                                    <p className="contentby">-Louisa May Alcott</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="carousel-button btn-right"
                            onClick={(_) => handleClickBtn("right")}
                        >
                            Right
                        </button>
                    </div>
                </div>
                <div className="newarrivals">
                    <div className="sidenewarrival">
                        <p className="pnewarrivals">New Arrivals</p>
                    </div>
                    <div id="rightsidenewarrival">
                        {newarrbook.map((data: arrival) => (
                            <div className="rightsideframe">
                                <img src={require(`.${data.book_img}`)} alt="none" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* recoomedded */}
                <div className="recommended">
                    <p>Recommended for You</p>
                </div>
                <div id="recommendedbooks">
                    {recommeded.map((data: recommendeddata) => (
                        <div className="frame">
                            <img src={require(`.${data.book_img}`)} alt="none" />
                            <div className="framecontent">
                                <p className="text-truncate framecontentp1">{data.book_title}</p>
                                <p className="framecontentp2">{`${data.author_name} ${data.book_publication_year}`}</p>
                                {data.rating > 0 ? <p className="framecontentp3">{`${data.rating} / 5`}</p> : <p className="framecontentp3">{`No Rating Exist!!`}</p>}
                            </div>
                        </div>
                    ))}
                </div>

                {/* recent reading */}
                <div className="recentreading">
                    <p>Recent Reading</p>
                </div>
                <div id="recentbooks">
                    {recent.map((data: recent) => (
                        <div className="frameofrecent">
                            <img src={require(`.${data.book_img}`)} alt="none" />
                            <div className="framecontent">
                                <p className="text-truncate framecontentp1">{data.book_title}</p>
                                <p className="framecontentp2">{`${data.author_name} ${data.book_publication_year}`}</p>
                                {data.rating > 0 ? <p className="framecontentp3">{`${data.rating} / 5`}</p> : <p className="framecontentp3">{`No Rating Exist!!`}</p>}
                            </div>
                        </div>
                    ))}
                </div>


                {/*  ===================== all cateroeis ==================== */}

                <div id="container">
                    {genre.map((data: genre) => (
                        <div className="categoryname">
                            <p className="genrename">{data.genre_name}</p>
                            <div className="categoryrow">
                                {book.map((data2) =>
                                    data2.genre_name === data.genre_name &&
                                    <div className="categorycol">
                                        <img src={require(`.${data2.book_img}`)} alt="none" />
                                        <div className="framecontent">
                                            <p className="text-truncate framecontentp1">{data2.book_title}</p>
                                            <p className="framecontentp2">{`${data2.author_name} ${data2.book_publication_year}`}</p>
                                            {data2.rating > 0 ? <p className="framecontentp3">{`${data2.rating} / 5`}</p> : <p className="framecontentp3">{`No Rating Exist!!`}</p>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="denied">
                <h1 >Access Denied!!</h1>
            </div>
        )
    }

}

export default Home;

