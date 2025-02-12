import { Router } from "express";

const userRouter = Router()

userRouter.get('/', (req, res) => res.send({ title: 'GETS all users' }))
userRouter.get('/:id', (req, res) => res.send({ title: 'GETS user details' }))
userRouter.post('/', (req, res) => res.send({ title: 'CREATE new users' }))
userRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE user' }))
userRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE user' }))

export default userRouter;