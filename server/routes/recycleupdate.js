import express from "express";
import { addItem, deleteItem, getItem, updateItem } from "../controller/items.js";

const router = express.Router()

router.get("/", getItem)

router.post("/", addItem)

router.put("/:id", updateItem)

router.delete("/:id", deleteItem)

export default router