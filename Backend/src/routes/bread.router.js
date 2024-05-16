import { Router } from "express";
import { BreadModel } from "../models/bread.model.js";
import handler from 'express-async-handler';


const router = Router();

router.get('/', handler(async (req, res) => {
    const breads = await BreadModel.find({});
    res.send(breads);
}));


router.get('/tags',handler(async (req, res) => {
    const tags = await BreadModel.aggregate ([
        {
            $unwind: '$tags'
        },
        {
            $group: {
                _id: '$tags',
                count: {$sum: 1}
            }
        },
        {
          $project: {
              _id: 0,
            name: '$_id',
            count: '$count'
          }
        }
    ]).sort({ count: -1 });
    const all ={
        name: 'All',
        count: await BreadModel.countDocuments()
    };
    tags.unshift(all);
    res.send(tags);
    })
);


router.get('/search/:searchTerm', handler(async (req, res) => {
    const { searchTerm } = req.params;
    const searchRegex = new RegExp(searchTerm, 'i');

    const breads = await BreadModel.find({
      name: {
            $regex: searchRegex
      }
    });
    res.send(breads);
}
));


router.get('/tag/:tag', handler(async (req, res) => {

    const { tag } = req.params;
    const breads = await BreadModel.find({
        tags: tag
    });
    res.send(breads);
}
));

router.get('/:breadId', handler(async (req, res) => {
    const { breadId } = req.params;
    const bread = await BreadModel.findById(breadId);
    if (!bread) {
        return res.status(404).send({ message: 'Pan no encontrado' });
    }
    res.send(bread);

}
));
export default router;