import { db } from "../db.js"

export const getWorktables = (req, res)=>{
    const q = "SELECT worktables.idDyżuru, CONCAT(DAY(worktables.data),'.',MONTH(worktables.data),'.',YEAR(worktables.data)) as data2, worktables.typZmiany, workers.imię as pracownik FROM worktables INNER JOIN workers ON worktables.idPracownika = workers.idPracownika ORDER BY 2 asc"
    db.query(q, (err,data) => {
        if(err) console.log(err);
        
        return res.status(200).json(data);
        });
}

export const addWorktable = (req, res)=>{
    const q = "INSERT INTO worktables (`data`,`typZmiany`,`idPracownika`) VALUES (?)"
    const values = [
        req.body.data,
        req.body.typZmiany,
        req.body.idPracownika
    ]

    db.query(q, [values], (err,data)=>{
        if (err) return res.json(err);
        return res.status(200).json("Dyżur został dodany.");
    });

}

export const deleteWorktable = (req, res)=>{
    res.json("from controller")
}

export const updateWorktable = (req, res)=>{
    res.json("from controller")
}