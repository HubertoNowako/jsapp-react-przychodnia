import express from "express"
import { addWorktable, deleteWorktable, getWorktable, getWorktables, updateWorktable } from "../controllers/worktableController"

const router = express.Router()

router.get("/", getWorktables)
router.get("/:id", getWorktable)
router.post("/", addWorktable)
router.delete("/:id", deleteWorktable)
router.update("/:id", updateWorktable)


export default router