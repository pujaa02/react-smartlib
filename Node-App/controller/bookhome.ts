import { Request, Response } from "express";
import con from "../models/database";
import { arrival, recent, genre, allbook, rate, recommend, maprecentdata, finalresultdata, issueuser, list, data, finallist, userissue, finalissuebook } from "../interfacefile";



const getdata = async (req: Request, res: Response) => {

    const id: string = req.params.user_id;
    const newarrivalbooks: arrival[] = await con.getall(`select prime_book_id,book_img,created_at from books_detail 
        where created_at between DATE_SUB(DATE_SUB(NOW(), INTERVAL 3 HOUR), INTERVAL 70 DAY) AND DATE_SUB(NOW(), INTERVAL 3 HOUR);`);
    const findrecentreadingquery: recent[] = await con.getall(`SELECT inventory.prime_book_id,inventory.book_id,books_log.borrow_date FROM books_log
        join inventory on books_log.book_id=inventory.book_id
         where borrow_date between DATE_SUB(DATE_SUB(NOW(),INTERVAL 3 HOUR), INTERVAL 70 DAY)  AND DATE_SUB(NOW(), INTERVAL 3 HOUR);`);
    const genre: genre[] = await con.getall(`SELECT * FROM genres`);
    const allbook: allbook[] = await con.getall(`select books_detail.prime_book_id,books_detail.book_title,books_detail.genre_id,authors.author_name,
     genres.genre_name, books_detail.book_publication_year,books_detail.book_img from books_detail
       join genres on genres.genre_id=books_detail.genre_id
      join books_author on books_author.prime_book_id=books_detail.prime_book_id
      join authors on authors.author_id=books_author.author_id;`);
    const rating: rate[] = await con.getall(`select inventory.prime_book_id, floor(Avg(rating.rating)) AS rating from rating
      join inventory on inventory.book_id=rating.book_id group by inventory.prime_book_id ;`);

    let issueuser: issueuser[] = await con.getall(`select books_log.reader_id,books_log.book_id,books_log.borrow_date,books_log.return_date,books_log.status,inventory.prime_book_id from books_log
      join inventory on inventory.book_id=books_log.book_id where reader_id=${id};`);

    let watchlist: list[] = await con.getall(`select watch_lists.reader_id, watch_lists.prime_book_id from watch_lists where watch_lists.reader_id=${id} and isDeleted=0;`);

    //recommeddata mapping
    const recommendeddata: recommend[] = rating.map((t1: rate) => ({
        ...t1,
        ...allbook.find((t2: allbook) => t2.prime_book_id === t1.prime_book_id),
    }));

    //recentdata mapping
    const filterdataofrecent: recent[] = findrecentreadingquery.filter(
        (value: recent, index: number, self: recent[]) => {
            return (
                self.findIndex((v: recent) => v.prime_book_id === value.prime_book_id) ===
                index
            );
        }
    );
    // mapping of two query result
    const maprecentdata: maprecentdata[] = filterdataofrecent.map((t1: recent) => ({
        ...t1,
        ...allbook.find((t2: allbook) => t2.prime_book_id === t1.prime_book_id),
    }));

    const recentdata: recent[] = maprecentdata.map((t1: maprecentdata) => ({
        ...t1,
        ...rating.find((t2: rate) => t2.prime_book_id === t1.prime_book_id),
    }));

    //allbook
    let ratingfilter: rate[] = rating.filter((value: rate, index: number, self: rate[]) => {
        return (
            self.findIndex((v) => v.prime_book_id === value.prime_book_id) === index
        );
    });

    const finalresultdata: finalresultdata[] = allbook.map((t1: allbook) => ({
        ...t1,
        ...ratingfilter.find((t2: rate) => t2.prime_book_id === t1.prime_book_id),
    }));

    const data: data[] = watchlist.map((t1: list) => ({
        ...t1,
        ...allbook.find((t2: allbook) => t2.prime_book_id === t1.prime_book_id),
    }));
    const finallist: finallist[] = data.map((t1: data) => ({
        ...t1,
        ...rating.find((t2: rate) => t2.prime_book_id === t1.prime_book_id),
    }));


    const userissue: userissue[] = issueuser.map((t1: issueuser) => ({
        ...t1,
        ...ratingfilter.find((t2: rate) => t2.prime_book_id === t1.prime_book_id),
    }));

    const finalissuebook: finalissuebook[] = userissue.map((t1: userissue) => ({
        ...t1,
        ...allbook.find((t2: allbook) => t2.prime_book_id === t1.prime_book_id),
    }));

    res.json({ newarrivalbooks: newarrivalbooks, recommended: recommendeddata, recent: recentdata, genre: genre, allbook: finalresultdata, rating: rating, issueuser: finalissuebook, watchlist: finallist });

}

export default { getdata }