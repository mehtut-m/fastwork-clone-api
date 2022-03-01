("use strict");

const { faker } = require("@faker-js/faker");

const postImages = [
  {
    post_id: 1,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036642/post1_4_idtcql.jpg",
    order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 1,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036642/post1_1_ir4ndv.webp",
    order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 1,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036642/post1_5_naqwgl.jpg",
    order: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 1,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036642/post1_6_alvmii.jpg",
    order: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 1,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036642/post1_3_jrmwt5.jpg",
    order: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 1,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036650/post1_2_fos4vw.jpg",
    order: 6,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 2,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036978/post2_3_pcchaa.jpg",
    order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 2,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036978/post2_2_wqaxul.jpg",
    order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 2,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646036978/post2_4_mw4oko.jpg",
    order: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 3,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037294/post3_1_ay3sa6.jpg",
    order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 3,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037295/post3_2_uaml94.jpg",
    order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 3,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037290/post3_3_fylhj0.jpg",
    order: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 3,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037290/post3_4_cyercm.jpg",
    order: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 3,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037290/post3_5_wby8gh.jpg",
    order: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 3,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037290/post3_6_d4mn8j.jpg",
    order: 6,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037643/post4_1_hq3hd7.jpg",
    order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037641/post4_7_mggxrv.jpg",
    order: 7,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037640/post4_3_bx7lzv.jpg",
    order: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037641/post4_4_orlftu.jpg",
    order: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037641/post4_6_l56th1.jpg",
    order: 6,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037641/post4_5_sfuipo.jpg",
    order: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037641/post4_2_jdwxo6.jpg",
    order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 4,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646037641/post4_8_m51fpt.jpg",
    order: 8,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038139/post5_1_v2dlbt.jpg",
    order: 1,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038135/post5_2_cfgbxv.jpg",
    order: 2,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038135/post5_3_i66zzu.jpg",
    order: 3,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038135/post5_4_ym0pka.jpg",
    order: 4,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038135/post5_5_lh5dgn.jpg",
    order: 5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038135/post5_6_mpntby.jpg",
    order: 6,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038136/post5_7_vmpzxz.jpg",
    order: 7,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038136/post5_8_cngrxu.jpg",
    order: 8,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038136/post5_9_z8j8ba.jpg",
    order: 9,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    post_id: 5,
    url: "https://res.cloudinary.com/dzur8dc5e/image/upload/v1646038136/post5_10_e6if09.jpg",
    order: 10,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const maxPostId = 20;
const minPostId = 5;
const maxLoop = 10;

for (let i = 0; i < maxLoop; i++) {
  for (let j = 1; j < 7; j++) {
    const postImage = {
      post_id: (Math.random() * (maxPostId - minPostId) + minPostId).toFixed(0),
      url: faker.image.business(),
      order: j,
      created_at: new Date(),
      updated_at: new Date(),
    };
    postImages.push(postImage);
  }
}

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return await queryInterface.bulkInsert("post_images", postImages);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("post_images", null, {});
  },
};
