import { FilterQuery } from 'mongoose'
import { Request, Response } from 'express'
import slugify from 'slugify'
import Category from '@src/models/mongoose/category.model'
import Product from '@src/models/mongoose/product.model'
import Sub from '@src/models/mongoose/subCategory.model'
import { IProductDocument } from '@src/models/mongoose/product.model'

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body
    const category = await new Category({ name, slug: slugify(name) }).save()
    res.status(201).json(category)
  } catch (err) {
    // console.log(err);
    res.status(400).send('Create category failed')
  }
}

export const list = async (req: Request, res: Response): Promise<void> => {
  const categories = await Category.find({}).sort({ createdAt: -1 }).exec()
  res.json(categories)
}

export const read = async (req: Request, res: Response): Promise<Response> => {
  const category = await Category.findOne({ slug: req.params.slug }).exec()
  if (!category) {
    return res.status(404).json({ status: false })
  }

  const products = await Product.find({
    category,
  } as FilterQuery<IProductDocument>)
    .populate('category')
    .exec()
  // const products = await Product.find({ category }).populate('category').exec();

  return res.json({ category, products })
}

export const update = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    )
    res.json(updatedCategory)
  } catch (err) {
    res.status(400).send('Create update failed')
  }
}

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCategory = await Category.findOneAndDelete({
      slug: req.params.slug,
    })
    res.json(deletedCategory)
  } catch (err) {
    res.status(400).send('Create delete failed')
  }
}

export const getCategorySubs = (req: Request, res: Response): void => {
  return Sub.find({ parent: req.params._id }).exec((err, subs) => {
    if (err) {
      console.log(err)
      return res.status(400)
    }
    return res.json(subs)
  })
}
