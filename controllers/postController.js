const fs = require('fs');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const {
  SubCategories,
  Post,
  PostImage,
  Package,
  sequelize,
  FreelanceInfo,
  Categories,
  User,
  Address,
  Bank,
  Review,
} = require('../models');
const validator = require('validator');
const { Op } = require('sequelize');

// TODO: Function upload image to cloudinary
const uploadPromise = util.promisify(cloudinary.uploader.upload);

// TODO: Function validate name
const isValidName = (item) => {
  return (
    (typeof item === 'string' && validator.isAlphanumeric(item)) ||
    /^[ก-๙]+$/gi.test(item)
  );
};

// TODO: Function validate special character
const isValidNameSpecial = (item) => {
  return typeof item === 'string' && /^[^<>%$]*$/.test(item);
};

// TODO: Function validate date
const isValidDate = (date) => {
  return typeof date === 'string' && validator.isDate(date);
};

// TODO: Get all post
exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      where: { status: 'APPROVE', isActive: 1 },
      include: [
        {
          model: User,
          attributes: [
            'id',
            'firstName',
            'lastName',
            'telephoneNo',
            'dateOfBirth',
            'profileImage',
          ],
          include: {
            model: FreelanceInfo,
            attributes: {
              exclude: [
                'citizenCardNo',
                'imageWithCard',
                'cardImage',
                'bankAccountNo',
                'bankAccountImage',
              ],
            },
            include: [
              {
                as: 'citizenAddress',
                model: Address,
              },
              {
                as: 'currentAddress',
                model: Address,
              },
              {
                model: Bank,
              },
            ],
          },
        },
        {
          model: PostImage,
        },
        {
          model: Package,
        },
      ],
    });

    // TODO: Convent instruction
    if (posts) posts[0].instruction = JSON.parse(posts[0].instruction);

    res.status(200).json({ posts });
  } catch (err) {
    next(err);
  }
};

// TODO: Get post by id
exports.getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // ? Validate post id
    if (typeof id !== 'string' || id.trim() === '') {
      return res.status(400).json({ message: 'post id is require' });
    }
    const post = await Post.findOne({
      where: { id, status: 'APPROVE', isActive: '1' },
      include: [
        {
          model: SubCategories,
          include: {
            model: Categories,
          },
        },
        {
          model: User,
          attributes: [
            'id',
            'firstName',
            'lastName',
            'telephoneNo',
            'dateOfBirth',
            'profileImage',
          ],
          include: {
            model: FreelanceInfo,
            attributes: {
              exclude: [
                'citizenCardNo',
                'imageWithCard',
                'cardImage',
                'bankAccountNo',
                'bankAccountImage',
              ],
            },
            include: [
              {
                as: 'citizenAddress',
                model: Address,
              },
              {
                as: 'currentAddress',
                model: Address,
              },
              {
                model: Bank,
              },
            ],
          },
        },
        {
          model: PostImage,
        },
        {
          model: Package,
        },
        {
          model: Review,
        },
      ],
    });

    // ? Validate post
    if (!post) {
      return res.status(400).json({ message: 'post not found' });
    }

    // TODO: Convent instruction
    if (post) post.instruction = JSON.parse(post.instruction);

    res.status(200).json({ post });
  } catch (err) {
    next(err);
  }
};

// TODO: Get post by categories id
exports.getPostByCategories = async (req, res, next) => {
  try {
    const { categoriesId } = req.params;

    // ? Validate categories id
    if (typeof categoriesId !== 'string' || categoriesId.trim() === '') {
      return res.status(400).json({ message: 'Categories id is require' });
    }

    // ? Find Categories id
    const categories = await Categories.findOne({
      where: { id: categoriesId },
    });
    if (!categories) {
      return res.status(400).json({ message: 'categories id not found' });
    }

    // ? Find sub categories
    const subCategories = await SubCategories.findAll({
      where: { categoryId: categories.id },
    });

    // ? Find post by sub categories
    const subCategoryId = subCategories.map((item) => item.id);
    let result = [];
    for (const id of subCategoryId) {
      const post = await Post.findAll({
        where: { subCategoryId: id },
        include: [
          {
            model: User,
            attributes: [
              'id',
              'firstName',
              'lastName',
              'telephoneNo',
              'dateOfBirth',
              'profileImage',
            ],
            include: {
              model: FreelanceInfo,
              attributes: {
                exclude: [
                  'citizenCardNo',
                  'imageWithCard',
                  'cardImage',
                  'bankAccountNo',
                  'bankAccountImage',
                ],
              },
              include: [
                {
                  as: 'citizenAddress',
                  model: Address,
                },
                {
                  as: 'currentAddress',
                  model: Address,
                },
                {
                  model: Bank,
                },
              ],
            },
          },
          {
            model: PostImage,
          },
          {
            model: Package,
          },
        ],
      });
      // TODO: Convent instruction
      if (post[0]) post[0].instruction = JSON.parse(post[0].instruction);
      result.push(post[0]);
    }

    res.status(200).json({ posts: result });
  } catch (err) {
    next(err);
  }
};

// TODO: Get post by sub categories id
exports.getPostBySubCategories = async (req, res, next) => {
  try {
    const { subCategoriesId } = req.params;

    // ? Validate sub categories id
    if (typeof subCategoriesId !== 'string' || subCategoriesId.trim() === '') {
      return res.status(400).json({ message: 'Sub categories id is require' });
    }

    // ? Find Sub category
    const subCategory = await SubCategories.findOne({
      where: { id: subCategoriesId },
    });

    // ? Validate sub category
    if (!subCategory) {
      return res.status(400).json({ message: 'Sub categories id not found' });
    }

    const post = await Post.findAll({
      where: { subCategoryId: subCategoriesId, status: 'APPROVE', isActive: 1 },
      include: [
        {
          model: User,
          attributes: [
            'id',
            'firstName',
            'lastName',
            'telephoneNo',
            'dateOfBirth',
            'profileImage',
          ],
          include: {
            model: FreelanceInfo,
            attributes: {
              exclude: [
                'citizenCardNo',
                'imageWithCard',
                'cardImage',
                'bankAccountNo',
                'bankAccountImage',
              ],
            },
            include: [
              {
                as: 'citizenAddress',
                model: Address,
              },
              {
                as: 'currentAddress',
                model: Address,
              },
              {
                model: Bank,
              },
            ],
          },
        },
        {
          model: PostImage,
        },
        {
          model: Package,
        },
        {
          model: SubCategories,
        },
      ],
    });

    // TODO: Convent instruction
    if (post[0]) post[0].instruction = JSON.parse(post[0].instruction);

    res.status(200).json({ post });
  } catch (err) {
    next(err);
  }
};

// TODO: Get post by filter
exports.getPostByFilter = async (req, res, next) => {
  try {
    const { max, min, duration } = req.query;
    const { id } = req.params;

    if (typeof id !== 'string' || id.trim() === '') {
      return res.status(400).json({ message: 'sub category id is require' });
    }

    // ? If filter by price && duration
    if (max && min && duration) {
      const package = await Package.findAll({
        where: {
          [Op.and]: [
            { price: { [Op.between]: [min, max] } },
            { duration: { [Op.lte]: duration } },
          ],
        },
      });
      const postId = package.map((item) => item.postId);
      const post = await Post.findAll({
        where: { id: postId, subCategoryId: id },
        include: [
          {
            model: User,
            attributes: [
              'id',
              'firstName',
              'lastName',
              'telephoneNo',
              'dateOfBirth',
              'profileImage',
            ],
            include: {
              model: FreelanceInfo,
              attributes: {
                exclude: [
                  'citizenCardNo',
                  'imageWithCard',
                  'cardImage',
                  'bankAccountNo',
                  'bankAccountImage',
                ],
              },
              include: [
                {
                  as: 'citizenAddress',
                  model: Address,
                },
                {
                  as: 'currentAddress',
                  model: Address,
                },
                {
                  model: Bank,
                },
              ],
            },
          },
          {
            model: PostImage,
          },
          {
            model: Package,
          },
          {
            model: SubCategories,
          },
        ],
      });
      if (post[0]) post[0].instruction = JSON.parse(post[0].instruction);

      return res.status(200).json({ post });
    }

    // ? If filter by price
    if (max && min) {
      const package = await Package.findAll({
        where: { price: { [Op.between]: [min, max] } },
      });
      const postId = package.map((item) => item.postId);
      const post = await Post.findAll({
        where: { id: postId, subCategoryId: id },
        include: [
          {
            model: User,
            attributes: [
              'id',
              'firstName',
              'lastName',
              'telephoneNo',
              'dateOfBirth',
              'profileImage',
            ],
            include: {
              model: FreelanceInfo,
              attributes: {
                exclude: [
                  'citizenCardNo',
                  'imageWithCard',
                  'cardImage',
                  'bankAccountNo',
                  'bankAccountImage',
                ],
              },
              include: [
                {
                  as: 'citizenAddress',
                  model: Address,
                },
                {
                  as: 'currentAddress',
                  model: Address,
                },
                {
                  model: Bank,
                },
              ],
            },
          },
          {
            model: PostImage,
          },
          {
            model: Package,
          },
          {
            model: SubCategories,
          },
        ],
      });
      if (post[0]) post[0].instruction = JSON.parse(post[0].instruction);

      return res.status(200).json({ post });
    }

    // ? If filter by duration
    if (duration) {
      const package = await Package.findAll({
        where: { duration: { [Op.lte]: duration } },
      });
      const postId = package.map((item) => item.postId);
      const post = await Post.findAll({
        where: { id: postId, subCategoryId: id },
        include: [
          {
            model: User,
            attributes: [
              'id',
              'firstName',
              'lastName',
              'telephoneNo',
              'dateOfBirth',
              'profileImage',
            ],
            include: {
              model: FreelanceInfo,
              attributes: {
                exclude: [
                  'citizenCardNo',
                  'imageWithCard',
                  'cardImage',
                  'bankAccountNo',
                  'bankAccountImage',
                ],
              },
              include: [
                {
                  as: 'citizenAddress',
                  model: Address,
                },
                {
                  as: 'currentAddress',
                  model: Address,
                },
                {
                  model: Bank,
                },
              ],
            },
          },
          {
            model: PostImage,
          },
          {
            model: Package,
          },
          {
            model: SubCategories,
          },
        ],
      });
      if (post[0]) post[0].instruction = JSON.parse(post[0].instruction);

      return res.status(200).json({ post });
    }
  } catch (err) {
    next(err);
  }
};

// TODO: Select category and sub category (Step 1)
exports.selectCategory = async (req, res, next) => {
  try {
    const { postId, subCategoryId } = req.body;

    // ? check Sub categories
    const subCategory = await SubCategories.findOne({
      where: { id: subCategoryId },
    });
    if (!subCategory) {
      return res.status(400).json({ message: 'sub category id not found' });
    }

    let post;
    // ? Find post
    if (postId) {
      // ! ควรแยก nedpoint?
      post = await Post.findOne({ where: { id: postId } });
      // * Update post
      post.update({ subCategoryId });
      res.status(201).json({ message: 'post update with status DRAFT', post });
    }

    if (!postId) {
      // ! ควรแยก nedpoint?
      // * Create post
      post = await Post.create({ userId: req.user.id, subCategoryId });
      res.status(201).json({ message: 'post create with status DRAFT', post });
    }
  } catch (err) {
    next(err);
  }
};

// TODO: Add name and description to post (Step 2)
exports.addNameAndDescription = async (req, res, next) => {
  try {
    const { postId, name, description } = req.body;

    // ? Validate post id
    if (typeof postId !== 'number') {
      return res.status(400).json({ message: 'post id is require' });
    }

    // ? Select post for add name and description
    const post = await Post.findOne({ where: { id: postId } });
    if (!post) {
      return res.status(400).json({ message: 'post id not found' });
    }

    // ? Validate name
    if (name.length < 10) {
      return res.status(400).json({
        message: 'name must be at least 10 characters',
      });
    }

    // ? Validate description
    if (description.length < 10) {
      return res.status(400).json({
        message: 'description must be at least 10 characters',
      });
    }

    // * Update Post
    post.update({ name, description });
    res.status(200).json({ message: 'Add name and description', post });
  } catch (err) {
    next(err);
  }
};

// TODO: Add image to post (Step 3)
exports.addImage = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { postId } = req.body;

    // ? Validate post id
    if (typeof postId !== 'string' || postId.trim() === '') {
      return res.status(400).json({ message: 'post id is require' });
    }

    // ? Select post for add image
    const post = await Post.findOne({ where: { id: postId } }, { transaction });
    if (!post) {
      return res.status(400).json({ message: 'post id not found' });
    }

    let result = {};
    let tmp = [];
    let idx = 0;
    const addOrder = () => {
      return (idx += 1);
    };
    // * Upload image to cloudinary
    if (req.files) {
      for (const file of req.files) {
        const { path } = file;

        result = await uploadPromise(path);
        fs.unlinkSync(path);
        const postImage = await PostImage.create(
          {
            postId,
            url: result.secure_url,
            order: addOrder(),
          },
          { transaction }
        );
        tmp.push(postImage);
      }
    }

    await transaction.commit();
    res.status(200).json({ message: 'Add image', tmp });
  } catch (err) {
    await transaction.rollback();
    next(err);
  }
};

// TODO: Add instruction (Step 4)
exports.addInstruction = async (req, res, next) => {
  try {
    const { postId, instructions } = req.body;

    // ? Validate post id
    if (typeof postId !== 'number') {
      return res.status(400).json({ message: 'post id is require' });
    }

    // ? Select post for add instruction
    const post = await Post.findOne({ where: { id: postId } });
    if (!post) {
      return res.status(400).json({ message: 'post id not found' });
    }

    // ? Validate instructions
    if (instructions.length > 10) {
      return res.status(400).json({
        message: 'maximum steps of instructions equal 10',
      });
    }

    const instruction = instructions.filter(
      (item) => typeof item === 'string' && item.length > 1
    );

    const convert = JSON.stringify(instruction);
    // * Update post
    post.update({ instruction: convert });
    res.status(200).json({ message: 'Add instruction', post });
  } catch (err) {
    next(err);
  }
};

// TODO: Add package (Step 5)
exports.addPackage = async (req, res, next) => {
  try {
    const { postId, packages } = req.body;
    console.log(packages);
    // ? Validate post id
    if (typeof postId !== 'number') {
      return res.status(400).json({ message: 'post id is require' });
    }

    // ? Select post for add package
    const post = await Post.findOne({ where: { id: postId } });
    if (!post) {
      return res.status(400).json({ message: 'post id not found' });
    }

    // ? Validate if packages > 3
    let result = [];
    if (packages.length > 3) {
      return res.status(400).json({ message: 'maximum packages equal 3' });
    }

    if (packages) {
      for (const package of packages) {
        const { name, description, price, duration, revise } = package;

        // ? Validate description
        if (description.length < 10) {
          return res.status(400).json({
            message: 'description must be at least 10 characters',
          });
        }
        console.log(typeof price);
        // ? Validate price
        if (typeof price !== 'string' || price.trim() === '') {
          return res.status(400).json({ message: 'invalid price' });
        }

        //? Validate duration
        if (typeof duration !== 'string' || duration.trim() === '') {
          return res.status(400).json({ message: 'invalid duration' });
        }

        const createPackage = await Package.create({
          postId,
          name: name ?? null,
          description,
          price,
          duration,
          revise,
          status: 'APPROVE', // ! status should be SUBMIT
        });
        result.push(createPackage);
        post.status = 'APPROVE';
        post.isActive = true;
        await post.save();
      }
    }
    res.status(201).json({ message: 'create package success', result });
  } catch (err) {
    next(err);
  }
};

// TODO: Change status post to APPROVE OR REJECT
exports.toggleIsActivePost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    // ? Validate post id
    if (typeof postId !== 'string' || postId.trim() === '') {
      return res.status(400).json({ message: 'post id is require' });
    }

    // ? Find post
    const post = await Post.findOne({
      where: { id: postId, status: 'APPROVE' },
    });
    if (!post) {
      return res.status(400).json({ message: 'post not found' });
    }

    if (req.user.id !== post.userId) {
      return res.status(400).json({ message: 'You do not have permission' });
    }

    if (post.isActive === false) {
      await post.update({ isActive: true });
      return res.status(200).json({ post });
    }

    if (post.isActive === true) {
      await post.update({ isActive: false });
      return res.status(200).json({ post });
    }

    res.status(400).json({ message: 'something wrong' });
  } catch (err) {
    next(err);
  }
};
