// src/modules/auth/auth.controller.ts

import { Request, Response, NextFunction } from "express";
import {
  registerService,
  loginService,
  refreshTokenService,
  meService
} from "./auth.service.js";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerService(
      name,
      email,
      password
    );

    return res.status(201).json({
      success: true,
      message: "Register success",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const data = await loginService(
      email,
      password
    );

    return res.status(200).json({
      success: true,
      message: "Login success",
      data
    });
  } catch (error) {
    next(error);
  }
};

export const refresh = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { refreshToken } = req.body;

    const data =
      await refreshTokenService(
        refreshToken
      );

    return res.status(200).json({
      success: true,
      message:
        "Refresh token success",
      data
    });
  } catch (error) {
    next(error);
  }
};

export const me = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await meService(
      req.user.userId
    );

    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Logout success"
    });
  } catch (error) {
    next(error);
  }
};