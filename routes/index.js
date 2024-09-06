var express = require("express");
var router = express.Router();

const util = require("util");
const childProcess = require("child_process");
const exec = util.promisify(childProcess.exec);

/* GET home page. */
router.get("/", async function (req, res, next) {
  var os = require("os");
  var hostname = os.hostname();
  const data = await exec("cat /etc/resolv.conf");
  const data2 = await exec("cat /etc/hosts");

  res.render("index", {
    title: "Express",
    hostname: hostname,
    data: data.stdout,
    data2: data2.stdout,
  });
});

module.exports = router;
