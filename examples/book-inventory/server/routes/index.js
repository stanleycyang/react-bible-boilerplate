import { Router } from 'express'

const router = Router()

// For our SPA
router.get('*', (req, res, next) => {
  res.render('index', {
    title: 'Book Inventory'
  })
})

export default router
