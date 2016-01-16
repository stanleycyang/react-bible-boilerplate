import { Router } from 'express'

const router = Router()

// For our SPA
router.get('*', (req, res, next) => {
  res.render('index', {
    title: 'React Bible Boilerplate'
  })
})

export default router
