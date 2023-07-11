import { z } from "zod";
import { sessionSchema } from "../schemas";

type SessionCreate = z.infer<typeof sessionSchema>;
type Sessionreturn = { token: string };

export { SessionCreate, Sessionreturn };
