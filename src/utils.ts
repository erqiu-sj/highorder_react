/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 00:01:37
 * @LastEditTime: 2021-07-10 11:36:31
 * @FilePath: /reactts/src/utils.ts
 * @Description: 描述
 */
import { Min, Length } from "class-validator";

export class User {
  @Min(12, {
    groups: ["registration"],
  })
  age: number | undefined;

  @Length(2, 20, {
    groups: ["registration", "admin"],
  })
  name: string | undefined;
}

// let user = new User();
// user.age = 10;
// user.name = "Alex";

// validate(user, {
//   groups: ["registration"],
// }); // this will not pass validation
