import express from "express"
import { addWorktable, deleteWorktable, getWorktables, updateWorktable } from "../controllers/worktableController.js"

const router = express.Router()

router.get("/", getWorktables)
router.post("/AddWorktable", addWorktable)
router.delete("/:id", deleteWorktable)
router.put("/:id", updateWorktable)


export default router