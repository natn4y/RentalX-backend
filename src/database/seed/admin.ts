import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "..";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, username, email, password, "isAdmin", created_at, driver_license)
      values('${id}', 'admin', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'xxxx')`
  );

  await connection.close;
}

create().then(() => {
  console.log("User admin created");
});
