import { db } from "../recycle_db";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM item";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addItem = (req, res) => {
    const q =
        "INSERT INTO item( `city`, `item`, `date`) VALUES(?)";

    const values = [
        
        req.body.city,
        req.body.item,
        req.body.date,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("item added successfully");
    });
};

export const updateItem = (req, res) => {
    const q =
        "UPDATE item SET  `city` = ?, `item` = ?, `date` = ? WHERE `cityid` = ?";

    const values = [
        
        req.body.city,
        req.body.item,
        req.body.date,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("item updated successfully");
    });
};

export const deleteItem = (req, res) => {
    const q = "DELETE FROM item WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("item deleted from database successfully");
    });
};