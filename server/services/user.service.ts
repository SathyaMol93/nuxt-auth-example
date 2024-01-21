import { H3Event } from "h3";
import HttpStatus from "~/utils/api/enums/Http-Status.enum";
import { User } from "~/utils/api/models/user.model";
import httpResponse, { ResponseEntity } from "~/utils/api/response-entity";
import { getUsers } from "~/utils/api/user";

export async function getActiveUsers(
  event: H3Event
): Promise<ResponseEntity> {
  try {
    const users: User[] = await getUsers();
    const userDTOs = users.map(user => {
      return  {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          status: user.status,
          created_date: user.created_date,
          updated_date: user.updated_date,
          role: user.role,
        };
    });
    return httpResponse(HttpStatus.OK, {}, userDTOs);
  } catch (error) {
    console.error(error);
    return httpResponse(
      HttpStatus.INTERNAL_SERVER_ERROR,
      {},
      "Internal Server Error"
    );
  }
}
