import express from 'express';
import {Book} from "../models/bookModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { title, author, publishYear } = req.body;
        console.log(req.body);
        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        }

        const newBook = new Book({
            title,
            author,
            publishYear,
        });

        await newBook.save();
        return res.status(201).send(newBook); // Send the created book back in response
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

router.get("/",async(request, response)=>{

    try{
        const books=await Book.find({});
   return response.status(200).json({

    count:books.length, 
    data:books
   });
}
    catch(error)
    {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);

        if (!book) {
            return response.status(404).json({ message: "Book not found" });
        }

        return response.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put("/:id", async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;

        if (!title || !author || !publishYear) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            });
        } 
        const {id} = request.params;
        const result=await Book.findByIdAndUpdate(id, request.body);
        if(!result)
        {
            return response.status(404).json({message:'book bot found'});
        }
        return response.status(200).send({message:'Book Updated Successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async(request, response)=>{
try{

    const {id} =request.params;
    const result=await Book.findByIdAndDelete(id);
    if(!result)
    {
        return response.status(404).json({message:'book bot found'});
    }
    return response.status(200).send({message:"Book deleted Successfully"});
}
catch(error)
{
    console.log(error.message);
    response.status(500).send({message:error.message});
}
});

export default router;