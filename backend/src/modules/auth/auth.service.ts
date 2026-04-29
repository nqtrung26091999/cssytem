// src/modules/auth/auth.service.ts

import bcrypt from "bcrypt";
import jwt, {
  SignOptions,
  JwtPayload
} from "jsonwebtoken";

import { prisma } from "../../config/prisma.js";

/* -------------------------------- */
/* Types                            */
/* -------------------------------- */

type PublicUser = {
  id: string;
  name: string;
  email: string;
};

type AccessPayload = {
  userId: string;
  email: string;
};

type RefreshPayload = {
  userId: string;
};

/* -------------------------------- */
/* Helpers                          */
/* -------------------------------- */

const getEnv = (key: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new Error(
      `Missing environment variable: ${key}`
    );
  }

  return value;
};

const JWT_SECRET = getEnv("JWT_SECRET");
const JWT_REFRESH_SECRET = getEnv(
  "JWT_REFRESH_SECRET"
);

const signToken = (
  payload: object,
  secret: string,
  expiresIn: SignOptions["expiresIn"]
): string => {
  const options: SignOptions = {
    expiresIn
  };

  return jwt.sign(
    payload,
    secret,
    options
  );
};

const mapUser = (
  user: {
    id: string;
    name: string;
    email: string;
  }
): PublicUser => ({
  id: user.id,
  name: user.name,
  email: user.email
});

/* -------------------------------- */
/* Token Functions                  */
/* -------------------------------- */

export const generateAccessToken = (
  payload: AccessPayload
): string => {
  return signToken(
    payload,
    JWT_SECRET,
    "15m"
  );
};

export const generateRefreshToken = (
  payload: RefreshPayload
): string => {
  return signToken(
    payload,
    JWT_REFRESH_SECRET,
    "7d"
  );
};

export const verifyAccessToken = (
  token: string
): AccessPayload => {
  const decoded = jwt.verify(
    token,
    JWT_SECRET
  ) as JwtPayload &
    AccessPayload;

  return {
    userId: decoded.userId,
    email: decoded.email
  };
};

export const verifyRefreshToken = (
  token: string
): RefreshPayload => {
  const decoded = jwt.verify(
    token,
    JWT_REFRESH_SECRET
  ) as JwtPayload &
    RefreshPayload;

  return {
    userId: decoded.userId
  };
};

/* -------------------------------- */
/* Services                         */
/* -------------------------------- */

export const registerService =
  async (
    name: string,
    email: string,
    password: string
  ): Promise<PublicUser> => {
    const existed =
      await prisma.user.findUnique({
        where: { email }
      });

    if (existed) {
      throw new Error(
        "Email already exists"
      );
    }

    const hashed =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashed
        }
      });

    return mapUser(user);
  };

export const loginService =
  async (
    email: string,
    password: string
  ): Promise<{
    accessToken: string;
    refreshToken: string;
    user: PublicUser;
  }> => {
    const user =
      await prisma.user.findUnique({
        where: { email }
      });

    if (!user) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const matched =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!matched) {
      throw new Error(
        "Invalid credentials"
      );
    }

    const accessToken =
      generateAccessToken({
        userId: user.id,
        email: user.email
      });

    const refreshToken =
      generateRefreshToken({
        userId: user.id
      });

    return {
      accessToken,
      refreshToken,
      user: mapUser(user)
    };
  };

export const refreshTokenService =
  async (
    refreshToken: string
  ): Promise<{
    accessToken: string;
  }> => {
    const decoded =
      verifyRefreshToken(
        refreshToken
      );

    const user =
      await prisma.user.findUnique({
        where: {
          id: decoded.userId
        }
      });

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    const accessToken =
      generateAccessToken({
        userId: user.id,
        email: user.email
      });

    return {
      accessToken
    };
  };

export const meService =
  async (
    userId: string
  ): Promise<PublicUser | null> => {
    const user =
      await prisma.user.findUnique({
        where: { id: userId }
      });

    if (!user) {
      return null;
    }

    return mapUser(user);
  };