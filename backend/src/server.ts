// src/server.ts

import app from "./app.js";
import { prisma } from "./config/prisma.js";

const PORT: number = Number(
  process.env.PORT || 5000
);

const bootstrap = async (): Promise<void> => {
  try {
    /* -------------------------------- */
    /* Check Database Connection        */
    /* -------------------------------- */

    await prisma.$connect();

    console.log(
      "Database connected successfully"
    );

    /* -------------------------------- */
    /* Start Server                     */
    /* -------------------------------- */

    app.listen(PORT, () => {
      console.log(
        `Server running at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error(
      "Failed to start server:",
      error
    );

    process.exit(1);
  }
};

bootstrap();

/* -------------------------------- */
/* Graceful Shutdown                */
/* -------------------------------- */

process.on(
  "SIGINT",
  async () => {
    await prisma.$disconnect();

    console.log(
      "Server stopped (SIGINT)"
    );

    process.exit(0);
  }
);

process.on(
  "SIGTERM",
  async () => {
    await prisma.$disconnect();

    console.log(
      "Server stopped (SIGTERM)"
    );

    process.exit(0);
  }
);