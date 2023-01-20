import {db} from "../db.js"
import bcrypt from "bcryptjs"

export const register = (req, res)=>{
    // SPRAWDZENIE, CZY USER ISTNIEJE
    const q = "SELECT * FROM pracownicy WHERE Login = ?"

    db.query(q, [req.body.login], (err,data)=>{
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("Użytkownik już istnieje!")

        // Hashowanie hasła
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO pracownicy(`imię`,`nazwisko`,`login`,`hasło`) VALUES (?)"
        const values = [
            req.body.imie,
            req.body.nazwisko,
            req.body.login,
            hash,
        ]

        db.query(q, [values], (err,data)=>{
            if (err) return res.json(err);
            return res.status(200).json("Użytkownik utworzony pomyślnie.");
        });
    });
}

export const login = (req,res)=>{
    // SPRAWDZANIE CZY USER ISTNIEJE

    const q = "SELECT * FROM pracownicy WHERE login =?"

    db.query(q, [req.body.login], (err,data)=>{
        if (err) return res.json(err);
        if (data.length == 0) return res.status(404).json("Nie znaleziono takiego użytkownika!")

        // Sprawdzanie hasła

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Niepoprawna nazwa użytkownika lub hasło!");
    
        const token = jwt.sign({id:data[0].id}, "jwtkey");
        const { password, ...other } = data[0];

        //res.cookie("access_token", token, {
        //    httpOnly: true
        //}).status(200).json(other);
    
    })


}

export const logout = (req,res)=>{

}