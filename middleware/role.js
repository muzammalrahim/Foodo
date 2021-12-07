const AccessControl = require("accesscontrol");
const ac = new AccessControl();

const roles = () => {
    ac.grant("basic").readOwn("user").updateOwn("user");

    ac.grant("supervisor").extend("basic").readAny("user");

    ac.grant("admin")
      .extend("basic")
      .extend("supervisor")
      .updateAny("user")
      .deleteAny("user");
      return ac;
}

module.exports = {
  roles,
};
