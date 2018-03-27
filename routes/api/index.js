const router = require('koa-router')();
const { getAuthorInfo } = require('../../controllers');

router.prefix('/api');

router.get('/authorInfo', async (ctx) => {
  let info;
  try {
    info = await getAuthorInfo();
  } catch (error) {
    ctx.body = { code: -1, msg: 'Server Error' };
    return;
  }

  ctx.body = {
    code: 0,
    data: info,
  };
});

module.exports = router;
